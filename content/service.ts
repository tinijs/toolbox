// @ts-ignore
import Index from 'flexsearch/dist/module/index';
import {IndexSearchResult} from 'flexsearch';

import {transliterate} from '../common/helpers/transliterate';
import {slugify} from './helpers/slugify';
import {parseDenorm} from './helpers/parse-denorm';
import {ContentInstance} from './helpers/create-content-instance';

export class ContentService<Type> {
  slugify = slugify;
  parseDenorm = parseDenorm;

  private items?: Type[];
  private recordItems?: Record<string, Type>;
  private fullItems = new Map<string, Type>();

  private liteSearchItems?: Record<string, string>;
  private liteSearchIndex?: Index;
  private searchItems?: Record<string, string>;
  private searchIndex?: Index;

  constructor(readonly content: ContentInstance<Type>) {}

  private async getListAndRecord() {
    this.items ||= (await this.content.fetchList()) || [];
    if (!this.recordItems) {
      this.recordItems = Object.fromEntries(
        this.items.map(item => [(item as any).slug, item])
      );
    }
    return {items: this.items, recordItems: this.recordItems};
  }

  private async getSearchItems(results: IndexSearchResult) {
    const {recordItems} = await this.getListAndRecord();
    const itemsBySlug = new Map<string, Type>();
    results.forEach(slug => {
      const item = recordItems![slug];
      if (item) itemsBySlug.set(slug as string, item);
    });
    return !itemsBySlug.size
      ? []
      : JSON.parse(JSON.stringify(Array.from(itemsBySlug.values())));
  }

  async liteSearch(keyword: string) {
    keyword = transliterate(keyword);
    // get index
    let index: undefined | Index;
    if (this.liteSearchIndex) {
      index = this.liteSearchIndex;
    } else {
      index = this.liteSearchIndex ||= new Index();
      const {items} = await this.getListAndRecord();
      // build search items
      const liteSearchItems = (this.liteSearchItems ||= {});
      items.forEach(item => {
        const {slug, tags, keywords, title, name, description, excerpt} =
          item || ({} as any);
        let text = '';
        if (tags) text += ' ' + tags.join(' ');
        if (keywords) text += ' ' + keywords.join(' ');
        if (title) text += ' ' + title;
        if (name) text += ' ' + name;
        if (description) text += ' ' + description;
        if (excerpt) text += ' ' + excerpt;
        liteSearchItems[slug] = transliterate(text);
      });
      // add to index
      Object.entries(liteSearchItems).forEach(([slug, text]) =>
        (index as Index).add(slug, text)
      );
    }
    // search
    const results = index.search(keyword);
    return !results ? [] : await this.getSearchItems(results);
  }

  async search(keyword: string) {
    keyword = transliterate(keyword);
    // get index
    let index: undefined | Index;
    if (this.searchIndex) {
      index = this.searchIndex;
    } else {
      index = this.searchIndex ||= new Index();
      // build full text search items
      const searchItems = (this.searchItems ||=
        await this.content.fetchSearch());
      // add to index
      Object.entries(searchItems).forEach(([slug, text]) =>
        (index as Index).add(slug, transliterate(text))
      );
    }
    // search
    const results = index.search(keyword);
    return !results ? [] : await this.getSearchItems(results);
  }

  async list(
    filter?: (item: Type) => boolean,
    sort?: (a: Type, b: Type) => number,
    limit?: number,
    offset = 0
  ) {
    let {items} = await this.getListAndRecord();
    if (filter) items = items.filter(filter);
    if (sort) items = items.sort(sort);
    if (limit) items = items.slice(offset, offset + limit);
    return !items.length ? [] : JSON.parse(JSON.stringify(items));
  }

  async getBySlug(slug: string) {
    const item =
      this.fullItems.get(slug) ||
      this.fullItems
        .set(slug, await this.content.fetchItemBySlug(slug))
        .get(slug);
    return !item ? null : JSON.parse(JSON.stringify(item));
  }

  async getById(id: string) {
    const item =
      this.fullItems.get(id) ||
      this.fullItems.set(id, await this.content.fetchItemById(id)).get(id);
    return !item ? null : JSON.parse(JSON.stringify(item));
  }
}

export default ContentService;

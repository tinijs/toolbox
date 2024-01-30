import {Index} from 'flexsearch';

import {ContentInstance} from './helpers/create-content-instance';

export class ContentService<Type> {
  private list?: Record<string, Type>;
  private search?: Record<string, string>;
  private items = new Map<string, Type>();

  constructor(readonly content: ContentInstance<Type>) {}

  async getBySlug(slug: string) {
    return (
      this.items.get(slug) ||
      this.items
        .set(slug, await this.content.fetchItemBySlug(slug))
        .get(slug) ||
      null
    );
  }

  async getById(id: string) {
    return (
      this.items.get(id) ||
      this.items.set(id, await this.content.fetchItemById(id)).get(id) ||
      null
    );
  }
}

export default ContentService;

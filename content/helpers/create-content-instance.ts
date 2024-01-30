import {get} from '../../fetch/helpers/get';

export type CreateContentInstance = typeof createContentInstance;

export type RootIndex = Record<string, string>;

export type IndexBuilder = () => void;
export interface ContentOptions {
  indexing?: Record<string, IndexBuilder>;
}

export class ContentInstance<Type> {
  static readonly indexRegistry = new Map<string, RootIndex>();

  constructor(
    readonly collectionName: string,
    readonly baseUrl: string,
    readonly rootIndex: RootIndex,
    readonly options: ContentOptions = {}
  ) {}

  getUrl(id: string) {
    return `${this.baseUrl}/${id}.json`;
  }

  getListUrl() {
    const id = this.rootIndex[this.collectionName];
    if (!id) throw new Error(`No listing found for ${this.collectionName}`);
    return this.getUrl(id);
  }

  getSearchUrl() {
    const id = this.rootIndex[`${this.collectionName}-search`];
    if (!id) throw new Error(`No search found for ${this.collectionName}`);
    return this.getUrl(id);
  }

  getItemUrl(slug: string) {
    const id = this.rootIndex[`${this.collectionName}/${slug}`];
    if (!id) throw new Error(`No item for ${this.collectionName}/${slug}`);
    return this.getUrl(id);
  }

  async fetchList() {
    return get<Type[]>(this.getListUrl());
  }

  async fetchSearch() {
    return get<Record<string, string>>(this.getSearchUrl());
  }

  async fetchItemBySlug(slug: string) {
    return get<Type>(this.getItemUrl(slug));
  }

  async fetchItemById(id: string) {
    return get<Type>(this.getUrl(id));
  }
}

async function createContentInstance<Type>(
  collectionName: string,
  baseUrl?: string,
  rootIndex?: RootIndex,
  options?: ContentOptions
) {
  // base url
  baseUrl ||= `${window.location.origin}/tini-content`;
  // root index
  rootIndex ||=
    ContentInstance.indexRegistry.get(baseUrl) ||
    ContentInstance.indexRegistry
      .set(baseUrl, await get<RootIndex>(`${baseUrl}/index.json`))
      .get(baseUrl);
  // create instance
  if (!rootIndex) throw new Error(`Error loading root index for ${baseUrl}`);
  return new ContentInstance<Type>(collectionName, baseUrl, rootIndex, options);
}

export default createContentInstance;

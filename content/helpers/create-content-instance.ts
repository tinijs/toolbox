import {get} from '../../fetch/helpers/get';

export type CreateContentInstance = typeof createContentInstance;

export type RootIndex = Record<string, string>;

// export type IndexBuilder = () => void;
export interface ContentOptions {
  // indexing?: Record<string, IndexBuilder>;
  baseUrl?: string;
  manualRootIndex?: RootIndex;
}

export class ContentInstance<Type> {
  static readonly indexRegistry = new Map<string, RootIndex>();

  constructor(
    readonly collectionName: string,
    readonly baseUrl: string,
    readonly options: Omit<ContentOptions, 'baseUrl'> = {}
  ) {}

  async getRootIndex() {
    const rootIndex =
      this.options.manualRootIndex ||
      ContentInstance.indexRegistry.get(this.baseUrl) ||
      ContentInstance.indexRegistry
        .set(this.baseUrl, await get<RootIndex>(`${this.baseUrl}/index.json`))
        .get(this.baseUrl);
    if (!rootIndex)
      throw new Error(`Error loading root index for ${this.baseUrl}`);
    return rootIndex;
  }

  async getUrl(id: string) {
    return `${this.baseUrl}/${id}.json`;
  }

  async getListUrl() {
    const rootIndex = await this.getRootIndex();
    const id = rootIndex[this.collectionName];
    if (!id) throw new Error(`No listing found for ${this.collectionName}`);
    return this.getUrl(id);
  }

  async getSearchUrl() {
    const rootIndex = await this.getRootIndex();
    const id = rootIndex[`${this.collectionName}-search`];
    if (!id) throw new Error(`No search found for ${this.collectionName}`);
    return this.getUrl(id);
  }

  async getItemUrl(slug: string) {
    const rootIndex = await this.getRootIndex();
    const id = rootIndex[`${this.collectionName}/${slug}`];
    if (!id) throw new Error(`No item for ${this.collectionName}/${slug}`);
    return this.getUrl(id);
  }

  async has(slug?: string) {
    const rootIndex = await this.getRootIndex();
    return !slug
      ? !!rootIndex[this.collectionName]
      : !!rootIndex[`${this.collectionName}/${slug}`];
  }

  async fetchList() {
    return get<Type[]>(await this.getListUrl());
  }

  async fetchSearch() {
    return get<Record<string, string>>(await this.getSearchUrl());
  }

  async fetchItemBySlug(slug: string) {
    return get<Type>(await this.getItemUrl(slug));
  }

  async fetchItemById(id: string) {
    return get<Type>(await this.getUrl(id));
  }
}

export function createContentInstance<Type>(
  collectionName: string,
  options: ContentOptions = {}
) {
  const baseUrl = options.baseUrl || `${window.location.origin}/tini-content`;
  delete options.baseUrl;
  return new ContentInstance<Type>(collectionName, baseUrl, options);
}

export default createContentInstance;

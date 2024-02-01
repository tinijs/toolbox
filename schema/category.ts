import {
  Id,
  Slug,
  Status,
  Title,
  Desc,
  Created,
  Thumbnail,
  Content,
  Metadata,
  I18n,
} from './common';

export interface Category
  extends Id,
    Slug,
    Status,
    Title,
    Desc,
    Created,
    Thumbnail,
    Content,
    Partial<Metadata>,
    Partial<I18n> {}

export type CategoryLite = Omit<Category, 'content' | 'metadata'>;

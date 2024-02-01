import {
  Id,
  Slug,
  Status,
  Title,
  Desc,
  Created,
  Updated,
  Thumbnail,
  Image,
  Content,
  Metadata,
  I18n,
} from './common';

export interface Page
  extends Id,
    Slug,
    Status,
    Title,
    Desc,
    Created,
    Updated,
    Thumbnail,
    Image,
    Content,
    Partial<Metadata>,
    Partial<I18n> {}

export type PageLite = Omit<Page, 'content' | 'metadata'>;

import {
  Id,
  Slug,
  Status,
  Name,
  Desc,
  Created,
  Url,
  Content,
  Metadata,
  I18n,
} from './common';

export interface Author
  extends Id,
    Slug,
    Status,
    Name,
    Desc,
    Created,
    Partial<Url>,
    Content,
    Partial<Metadata>,
    Partial<I18n> {
  photoUrl: string;
  email?: string;
}

export type AuthorLite = Omit<Author, 'content' | 'metadata'>;

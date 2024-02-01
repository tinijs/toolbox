import {
  Id,
  Slug,
  Status,
  Title,
  Excerpt,
  Created,
  Updated,
  Thumbnail,
  Image,
  Content,
} from './common';

export type PostLite = Omit<Post, 'content'>;

export interface Post
  extends Id,
    Slug,
    Status,
    Title,
    Excerpt,
    Created,
    Updated,
    Thumbnail,
    Image,
    Content {}

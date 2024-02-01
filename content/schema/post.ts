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
} from './common';

export interface Post
  extends Id,
    Slug,
    Status,
    Title,
    Desc,
    Created,
    Updated,
    Thumbnail,
    Image,
    Content {}

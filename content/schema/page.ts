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
    Image {}

import {Id, Slug, Status, Title, Desc, Created, Thumbnail} from './common';

export interface Category
  extends Id,
    Slug,
    Status,
    Title,
    Desc,
    Created,
    Thumbnail {}

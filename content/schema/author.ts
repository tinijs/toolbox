import {Id, Slug, Status, Name, Desc, Created, Url, Content} from './common';

export interface Author
  extends Id,
    Slug,
    Status,
    Name,
    Desc,
    Created,
    Partial<Url>,
    Content {
  photoUrl: string;
  email?: string;
}

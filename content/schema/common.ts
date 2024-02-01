export enum Statuses {
  Draft = 'draft',
  Publish = 'publish',
  Archive = 'archive',
  Trash = 'trash',
}

/*
 * Composables
 */

export interface Id {
  id: string;
}

export interface Slug {
  slug: string;
}

export interface Status {
  status: Statuses;
}

export interface Title {
  title: string;
}

export interface Name {
  name: string;
}

export interface Desc {
  desc: string;
}

export interface Excerpt {
  excerpt: string;
}

export interface Tldr {
  tldr: string;
}

export interface Content {
  content: string;
}

export interface Html {
  html: string;
}

export interface Created {
  created: string;
}

export interface Updated {
  updated: string;
}

export interface Thumbnail {
  thumbnail: string;
}

export interface Thumbnails {
  thumbnails: Record<string, string | ResourceAlike>;
}

export interface Image {
  image: string;
}

export interface Images {
  images: Record<string, string | ResourceAlike>;
}

export interface Tags {
  tags: string[];
}

export interface Keywords {
  keywords: string[];
}

export interface Url {
  url: string;
}

export interface Count {
  count: number;
}

export interface I18n {
  locale: string;
  origin: string;
}

export interface Metadata<Type = Record<string, any>> {
  metadata: Type;
}

/*
 * Other types
 */

export interface ResourceAlike {
  name: string;
  src: string;
}

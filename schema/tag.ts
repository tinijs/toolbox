import {Slug, Title} from './common';

export type TagLite = Tag;

export interface Tag extends Slug, Title {}

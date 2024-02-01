import {Slug, Name} from './common';

export interface Tag extends Slug, Name {}

export type TagLite = Tag;

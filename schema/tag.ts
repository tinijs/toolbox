import {Slug, Name} from './common';

export type TagLite = Tag;

export interface Tag extends Slug, Name {}

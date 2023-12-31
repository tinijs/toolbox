import {LocalForage} from './create-local-forage';

export type Get = typeof get;

export function get<Data>(localForage: LocalForage, key: string) {
  return localForage.getItem<Data>(key);
}

export default get;

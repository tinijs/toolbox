import {LocalForage} from './create-local-forage';

export type Set = typeof set;

export function set<Data>(localForage: LocalForage, key: string, data: Data) {
  return localForage.setItem(key, data);
}

export default set;

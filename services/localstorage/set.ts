import {LocalForage} from './local-forage';

function set<Data>(localForage: LocalForage, key: string, data: Data) {
  return localForage.setItem(key, data);
}

export default set;
export type Set = typeof set;

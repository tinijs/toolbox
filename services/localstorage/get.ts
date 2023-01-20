import {LocalForage} from './local-forage';

function get<Data>(localForage: LocalForage, key: string) {
  return localForage.getItem<Data>(key);
}

export default get;
export type Get = typeof get;

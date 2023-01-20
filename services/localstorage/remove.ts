import {LocalForage} from './local-forage';

function remove(localForage: LocalForage, key: string) {
  return localForage.removeItem(key);
}

export default remove;
export type Remove = typeof remove;

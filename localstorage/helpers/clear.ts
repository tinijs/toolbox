import {LocalForage} from './create-local-forage';

export type Clear = typeof clear;

export function clear(localForage: LocalForage) {
  return localForage.clear();
}

export default clear;

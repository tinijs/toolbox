import {LocalForage} from './local-forage';

function clear(localForage: LocalForage) {
  return localForage.clear();
}

export default clear;
export type Clear = typeof clear;

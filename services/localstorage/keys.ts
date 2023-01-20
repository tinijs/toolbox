import {LocalForage} from './local-forage';

function keys(localForage: LocalForage) {
  return localForage.keys();
}

export default keys;
export type Keys = typeof keys;

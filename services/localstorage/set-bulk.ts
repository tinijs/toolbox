import {LocalForage} from './local-forage';
import set from './set';

function setBulk(localForage: LocalForage, input: Record<string, unknown>) {
  return Promise.all(
    Object.keys(input).map(key => set(localForage, key, input[key]))
  );
}

export default setBulk;
export type SetBulk = typeof setBulk;

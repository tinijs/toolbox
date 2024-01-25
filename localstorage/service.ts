import {createLocalForage} from './helpers/create-local-forage';
import {keys} from './helpers/keys';
import {get} from './helpers/get';
import {getBulk} from './helpers/get-bulk';
import {set} from './helpers/set';
import {setBulk} from './helpers/set-bulk';
import {increment} from './helpers/increment';
import {iterate} from './helpers/iterate';
import {iterateKeys} from './helpers/iterate-keys';
import {remove} from './helpers/remove';
import {removeBulk} from './helpers/remove-bulk';
import {removeByPrefix} from './helpers/remove-by-prefix';
import {removeBySuffix} from './helpers/remove-by-suffix';
import {clear} from './helpers/clear';

export class LocalstorageService {
  private localForageInstance?: LocalForage;

  get localForage() {
    if (!this.localForageInstance) {
      throw new Error('No localForage instance, please init() first.');
    }
    return this.localForageInstance;
  }

  init(options: Parameters<typeof createLocalForage>[0]) {
    this.localForageInstance = createLocalForage(options);
    return this as LocalstorageService;
  }

  keys() {
    return keys(this.localForage);
  }

  get<Data>(key: Parameters<typeof get>[1]) {
    return get<Data>(this.localForage, key);
  }

  getBulk<Result>(keys: Parameters<typeof getBulk>[1]) {
    return getBulk<Result>(this.localForage, keys);
  }

  set<Data>(key: Parameters<typeof set>[1], data: Data) {
    return set<Data>(this.localForage, key, data);
  }

  setBulk(input: Parameters<typeof setBulk>[1]) {
    return setBulk(this.localForage, input);
  }

  increment(
    key: Parameters<typeof increment>[1],
    by?: Parameters<typeof increment>[2]
  ) {
    return increment(this.localForage, key, by);
  }

  iterate<Data>(handler: Parameters<typeof iterate>[1]) {
    return iterate<Data>(this.localForage, handler);
  }

  iterateKeys(handler: Parameters<typeof iterateKeys>[1]) {
    return iterateKeys(this.localForage, handler);
  }

  remove(key: Parameters<typeof remove>[1]) {
    return remove(this.localForage, key);
  }

  removeBulk(keys: Parameters<typeof removeBulk>[1]) {
    return removeBulk(this.localForage, keys);
  }

  removeByPrefix(prefix: Parameters<typeof removeByPrefix>[1]) {
    return removeByPrefix(this.localForage, prefix);
  }

  removeBySuffix(suffix: Parameters<typeof removeBySuffix>[1]) {
    return removeBySuffix(this.localForage, suffix);
  }

  clear() {
    return clear(this.localForage);
  }
}

export default LocalstorageService;

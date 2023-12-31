import createLocalForage, {
  LocalForageOptions,
} from './helpers/create-local-forage';
import keys from './helpers/keys';
import get from './helpers/get';
import getBulk from './helpers/get-bulk';
import set from './helpers/set';
import increment from './helpers/increment';
import iterate, {LocalstorageIterateHandler} from './helpers/iterate';
import iterateKeys, {
  LocalstorageIterateKeysHandler,
} from './helpers/iterate-keys';
import remove from './helpers/remove';
import clear from './helpers/clear';
import removeBulk from './helpers/remove-bulk';
import removeByPrefix from './helpers/remove-by-prefix';
import removeBySuffix from './helpers/remove-by-suffix';

export class LocalstorageService {
  private _localForageInstance?: LocalForage;

  get localForage() {
    if (!this._localForageInstance) {
      throw new Error('No localForage instance, please init() first.');
    }
    return this._localForageInstance;
  }

  init(localForageOptions: LocalForageOptions = {}) {
    this._localForageInstance = createLocalForage(localForageOptions);
    return this as LocalstorageService;
  }

  keys() {
    return keys(this.localForage);
  }

  get<Data>(key: string) {
    return get<Data>(this.localForage, key);
  }

  getBulk<Result>(keys: string[]) {
    return getBulk<Result>(this.localForage, keys);
  }

  set<Data>(key: string, data: Data) {
    return set(this.localForage, key, data);
  }

  setBulk(input: Record<string, unknown>) {
    return Promise.all(
      Object.keys(input).map(key => this.set(key, input[key]))
    );
  }

  increment(key: string, by = 1) {
    return increment(this.localForage, key, by);
  }

  iterate<Data>(handler: LocalstorageIterateHandler<Data>) {
    return iterate(this.localForage, handler);
  }

  iterateKeys(handler: LocalstorageIterateKeysHandler) {
    return iterateKeys(this.localForage, handler);
  }

  remove(key: string) {
    return remove(this.localForage, key);
  }

  removeBulk(keys: string[]) {
    return removeBulk(this.localForage, keys);
  }

  removeByPrefix(prefix: string) {
    return removeByPrefix(this.localForage, prefix);
  }

  removeBySuffix(suffix: string) {
    return removeBySuffix(this.localForage, suffix);
  }

  clear() {
    return clear(this.localForage);
  }
}

export default LocalstorageService;

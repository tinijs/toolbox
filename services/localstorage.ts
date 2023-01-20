import localForagee, {LocalForageOptions} from './localstorage/local-forage';
import keys from './localstorage/keys';
import get from './localstorage/get';
import getBulk from './localstorage/get-bulk';
import set from './localstorage/set';
// import setBulk from './localstorage/set-bulk';
import increment from './localstorage/increment';
import iterate, {LocalstorageIterateHandler} from './localstorage/iterate';
import iterateKeys, {
  LocalstorageIterateKeysHandler,
} from './localstorage/iterate-keys';
import remove from './localstorage/remove';
import clear from './localstorage/clear';
import removeBulk from './localstorage/remove-bulk';
import removeByPrefix from './localstorage/remove-by-prefix';
import removeBySuffix from './localstorage/remove-by-suffix';

export class LocalstorageService {
  private _localForageInstance?: LocalForage;

  get localForage() {
    if (!this._localForageInstance) {
      throw new Error('No localForage instance, please init() first.');
    }
    return this._localForageInstance;
  }

  init(localForageOptions: LocalForageOptions = {}) {
    this._localForageInstance = localForagee(localForageOptions);
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

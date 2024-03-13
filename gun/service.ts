import {createGunInstance} from './helpers/create-gun-instance.js';
import {initUserActions} from './helpers/init-user-actions.js';
import {extractEntries} from './helpers/extract-entries.js';
import {extractKeys} from './helpers/extract-keys.js';
import {extractValues} from './helpers/extract-values.js';
import {putValue} from './helpers/put-value.js';
import {setValue} from './helpers/set-value.js';
import {setValues} from './helpers/set-values.js';
import {createStream} from './helpers/create-stream.js';
import {promisifyStream} from './helpers/promisify-stream.js';
import {emitStaticValue} from './helpers/emit-static-value.js';
import {emitStreamValue} from './helpers/emit-stream-value.js';

export class GunService {
  createGunInstance = createGunInstance;
  initUserActions = initUserActions;
  extractEntries = extractEntries;
  extractKeys = extractKeys;
  extractValues = extractValues;
  putValue = putValue;
  setValue = setValue;
  setValues = setValues;
  createStream = createStream;
  promisifyStream = promisifyStream;
  emitStaticValue = emitStaticValue;
  emitStreamValue = emitStreamValue;
}

export default GunService;

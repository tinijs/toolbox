import {createGunInstance} from './helpers/create-gun-instance';
import {initUserActions} from './helpers/init-user-actions';
import {extractEntries} from './helpers/extract-entries';
import {extractKeys} from './helpers/extract-keys';
import {extractValues} from './helpers/extract-values';
import {putValue} from './helpers/put-value';
import {setValue} from './helpers/set-value';
import {setValues} from './helpers/set-values';
import {createStream} from './helpers/create-stream';
import {promisifyStream} from './helpers/promisify-stream';
import {emitStaticValue} from './helpers/emit-static-value';
import {emitStreamValue} from './helpers/emit-stream-value';

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

import {binaryToHex} from './helpers/binary-to-hex.js';
import {hexToBinary} from './helpers/hex-to-binary.js';
import {binaryToText} from './helpers/binary-to-text.js';
import {textToBinary} from './helpers/text-to-binary.js';
import {binaryToBase64} from './helpers/binary-to-base64.js';
import {base64ToBinary} from './helpers/base64-to-binary.js';
import {retry} from './helpers/retry.js';
import {debounce} from './helpers/debounce.js';
import {once} from './helpers/once.js';
import {deduplicateCallback} from './helpers/deduplicate-callback.js';
import {transliterate} from './helpers/transliterate.js';

export class CommonService {
  binaryToHex = binaryToHex;
  hexToBinary = hexToBinary;
  binaryToText = binaryToText;
  textToBinary = textToBinary;
  binaryToBase64 = binaryToBase64;
  base64ToBinary = base64ToBinary;
  retry = retry;
  debounce = debounce;
  once = once;
  deduplicateCallback = deduplicateCallback;
  transliterate = transliterate;
}

export default CommonService;

import {binaryToHex} from './helpers/binary-to-hex';
import {hexToBinary} from './helpers/hex-to-binary';
import {binaryToText} from './helpers/binary-to-text';
import {textToBinary} from './helpers/text-to-binary';
import {binaryToBase64} from './helpers/binary-to-base64';
import {base64ToBinary} from './helpers/base64-to-binary';
import {retry} from './helpers/retry';
import {debounce} from './helpers/debounce';
import {once} from './helpers/once';
import {deduplicateCallback} from './helpers/deduplicate-callback';
import {slugify} from './helpers/slugify';
import {transliterate} from './helpers/transliterate';

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
  slugify = slugify;
  transliterate = transliterate;
}

export default CommonService;

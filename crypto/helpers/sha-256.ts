import {textToBinary} from '../../common/helpers/text-to-binary';
import {binaryToText} from '../../common/helpers/binary-to-text';
import {binaryToHex} from '../../common/helpers/binary-to-hex';
import {binaryToBase64} from '../../common/helpers/binary-to-base64';

export enum HashEncoding {
  Base64 = 'base64',
  Hex = 'hex',
  Utf8 = 'utf8',
}

export type Sha256 = typeof sha256;

export async function sha256(
  input: string,
  encode: HashEncoding = HashEncoding.Base64
) {
  const hash = await crypto.subtle.digest('SHA-256', textToBinary(input));
  return encode === HashEncoding.Utf8
    ? binaryToText(hash)
    : encode === HashEncoding.Hex
    ? binaryToHex(hash)
    : binaryToBase64(hash);
}

export default sha256;

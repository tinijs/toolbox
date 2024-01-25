import {textToBinary} from '../../common/helpers/text-to-binary';
import {binaryToText} from '../../common/helpers/binary-to-text';
import {binaryToHex} from '../../common/helpers/binary-to-hex';
import {binaryToBase64} from '../../common/helpers/binary-to-base64';
import {HashEncoding} from './sha-256';

export const HMAC_ALGORITHM: HmacKeyGenParams = {name: 'HMAC', hash: 'SHA-256'};

export type Hmac = typeof hmac;

export async function hmac(
  input: string,
  secret: string,
  encode: HashEncoding = HashEncoding.Base64
) {
  const key = await crypto.subtle.importKey(
    'raw',
    textToBinary(secret),
    HMAC_ALGORITHM,
    false,
    ['sign', 'verify']
  );
  const signature = await crypto.subtle.sign(
    HMAC_ALGORITHM.name,
    key,
    textToBinary(input)
  );
  return encode === HashEncoding.Utf8
    ? binaryToText(signature)
    : encode === HashEncoding.Hex
    ? binaryToHex(signature)
    : binaryToBase64(signature);
}

export default hmac;

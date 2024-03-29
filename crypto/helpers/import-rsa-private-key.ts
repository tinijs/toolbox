import {base64ToBinary} from '../../common/helpers/base64-to-binary';
import {RSA_ALGORITHM} from './generate-rsa-keys';

export type ImportRSAPrivateKey = typeof importRSAPrivateKey;

export async function importRSAPrivateKey(base64: string) {
  const keyData = base64ToBinary(base64);
  return await crypto.subtle.importKey('pkcs8', keyData, RSA_ALGORITHM, false, [
    'decrypt',
  ]);
}

export default importRSAPrivateKey;

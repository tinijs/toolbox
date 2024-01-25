import {sha256} from './helpers/sha-256';
import {hmac} from './helpers/hmac';
import {generateRSAKeys} from './helpers/generate-rsa-keys';
import {importRSAPublicKey} from './helpers/import-rsa-public-key';
import {importRSAPrivateKey} from './helpers/import-rsa-private-key';
import {encryptRSA} from './helpers/encrypt-rsa';
import {decryptRSA} from './helpers/decrypt-rsa';

export class CryptoService {
  sha256 = sha256;
  hmac = hmac;
  generateRSAKeys = generateRSAKeys;
  importRSAPublicKey = importRSAPublicKey;
  importRSAPrivateKey = importRSAPrivateKey;
  encryptRSA = encryptRSA;
  decryptRSA = decryptRSA;
}

export default CryptoService;

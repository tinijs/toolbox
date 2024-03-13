import {sha256} from './helpers/sha-256.js';
import {hmac} from './helpers/hmac.js';
import {generateRSAKeys} from './helpers/generate-rsa-keys.js';
import {importRSAPublicKey} from './helpers/import-rsa-public-key.js';
import {importRSAPrivateKey} from './helpers/import-rsa-private-key.js';
import {encryptRSA} from './helpers/encrypt-rsa.js';
import {decryptRSA} from './helpers/decrypt-rsa.js';

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

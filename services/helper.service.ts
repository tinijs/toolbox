import {o2a} from './helper/o2a';
import {decodeJWTPayloadWithoutVerification} from './helper/decode-jwt-payload-without-verification';
import {createPopup, PopupConfigs} from './helper/create-popup';

export class HelperService {
  o2a() {
    return o2a;
  }

  decodeJWTPayloadWithoutVerification(token: string) {
    return decodeJWTPayloadWithoutVerification(token);
  }

  createPopup(configs: PopupConfigs) {
    return createPopup(configs);
  }
}

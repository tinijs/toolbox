import {IGunInstance, ISEA} from 'gun';

import {retry} from '../../common/helpers/retry';
import {importRSAPublicKey} from '../../crypto/helpers/import-rsa-public-key';
import {importRSAPrivateKey} from '../../crypto/helpers/import-rsa-private-key';
import {GunResult} from './create-gun-instance';

export type InitUserActions = typeof initUserActions;

export type GunUserInstance = ReturnType<IGunInstance<any>['user']>;

async function loadRSAPair(user: GunUserInstance, SEA: ISEA, retries = 7) {
  const userChain = user as any;
  if (userChain.is) {
    try {
      await new Promise((resolve, reject) => {
        userChain.once(async (userNode: GunResult<any>) => {
          if (!userNode?.rsaPub || !userNode?.rsaPriv)
            return reject(new Error('No RSA keys'));
          const publicKey = userNode.rsaPub;
          const privateKey = await SEA.decrypt(
            userNode.rsaPriv,
            userChain._.sea
          );
          return resolve(
            (userChain.rsa = {
              rpub: await importRSAPublicKey(publicKey),
              rpriv: await importRSAPrivateKey(privateKey),
            })
          );
        });
      });
    } catch (error: any) {
      // retry if available
    }
  }
  if (!userChain.rsa && retries > 0) {
    retry(() => loadRSAPair(user, SEA, --retries), 250);
  }
}

export function initUserActions(
  user: GunUserInstance,
  SEA: ISEA,
  rsaRetries?: number
) {
  user.recall({sessionStorage: true});
  loadRSAPair(user, SEA, rsaRetries);
}

export default initUserActions;

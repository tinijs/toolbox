import {GunOptions} from 'gun';
import Gun from 'gun/gun';
import 'gun/lib/radix';
import 'gun/lib/radisk';
import 'gun/lib/store';
import 'gun/lib/rindexed';
import 'gun/sea';

export type GunResult<Type> = Type | null | undefined;
export type GunLink = GunResult<{'#': string}>;

export type CreateGunInstance = typeof createGunInstance;

export function createGunInstance(options?: GunOptions) {
  const gun = Gun(
    options || {
      localStorage: false,
      peers: [
        'https://gun-manhattan.herokuapp.com/gun',
        'https://peer.wallie.io/gun',
        'https://gundb-relay-mlccl.ondigitalocean.app/gun',
        'https://plankton-app-6qfp3.ondigitalocean.app',
      ],
    }
  );
  const gunUser = gun.user();
  const sea = Gun.SEA;
  return {gun, gunUser, sea};
}

export default createGunInstance;

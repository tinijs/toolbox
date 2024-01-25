import {GunOptions} from 'gun';
import gun from 'gun/gun';
import 'gun/lib/radix';
import 'gun/lib/radisk';
import 'gun/lib/store';
import 'gun/lib/rindexed';
import 'gun/sea';

export type GunResult<Type> = Type | null | undefined;
export type GunLink = GunResult<{'#': string}>;

export type CreateGunInstance = typeof createGunInstance;

export function createGunInstance(options?: GunOptions) {
  const GUN = gun(
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
  const GUN_USER = GUN.user();
  const SEA = gun.SEA;
  return {GUN, GUN_USER, SEA};
}

export default createGunInstance;

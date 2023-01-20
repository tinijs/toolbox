import {LocalForage} from './local-forage';

export type LocalstorageIterateHandler<Data> = (
  value: Data,
  key: string,
  iterationNumber: number
) => Promise<unknown>;

function iterate<Data>(
  localForage: LocalForage,
  handler: LocalstorageIterateHandler<Data>
) {
  return localForage.iterate(handler);
}

export default iterate;
export type Iterate = typeof iterate;

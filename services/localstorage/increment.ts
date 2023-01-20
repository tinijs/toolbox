import {LocalForage} from './local-forage';

async function increment(localForage: LocalForage, key: string, by = 1) {
  const value = await localForage.getItem<number>(key);
  const newValue = +(value || 0) + by;
  await localForage.setItem(key, newValue);
  return newValue;
}

export default increment;
export type Increment = typeof increment;

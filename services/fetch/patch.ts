import {fetchh} from './fetch';

export function patch<Result>(url: string, requestInit?: RequestInit) {
  return fetchh(url, {...requestInit, method: 'PATCH'}) as Promise<Result>;
}

export default patch;
export type Patch = typeof patch;

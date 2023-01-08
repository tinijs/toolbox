import {fetch_} from './fetch';

export function patch<Result>(url: string, requestInit?: RequestInit) {
  return fetch_(url, {...requestInit, method: 'PATCH'}) as Promise<Result>;
}

export default patch;
export type Patch = typeof patch;

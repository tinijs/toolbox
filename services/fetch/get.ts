import {fetchh} from './fetch';

export function get<Result>(url: string, requestInit?: RequestInit) {
  return fetchh(url, {...requestInit, method: 'GET'}, true) as Promise<Result>;
}

export default get;
export type Get = typeof get;

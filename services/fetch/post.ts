import {fetchh} from './fetch';

export function post<Result>(url: string, requestInit?: RequestInit) {
  return fetchh(url, {...requestInit, method: 'POST'}) as Promise<Result>;
}

export default post;
export type Post = typeof post;

import {fetch_} from './fetch';

export function post<Result>(url: string, requestInit?: RequestInit) {
  return fetch_(url, {...requestInit, method: 'POST'}) as Promise<Result>;
}

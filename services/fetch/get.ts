import {fetch_} from './fetch';

export function get<Result>(url: string, requestInit?: RequestInit) {
  return fetch_(url, {...requestInit, method: 'GET'}, true) as Promise<Result>;
}

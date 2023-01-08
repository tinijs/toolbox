import {fetch_} from './fetch';

export function put<Result>(url: string, requestInit?: RequestInit) {
  return fetch_(url, {...requestInit, method: 'PUT'}) as Promise<Result>;
}

export default put;
export type Put = typeof put;

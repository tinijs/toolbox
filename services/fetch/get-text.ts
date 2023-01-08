import {fetch_} from './fetch';

export function getText(url: string, requestInit?: RequestInit) {
  return fetch_(url, {...requestInit, method: 'GET'}, false) as Promise<string>;
}

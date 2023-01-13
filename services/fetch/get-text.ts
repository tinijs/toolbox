import {fetchh} from './fetch';

export function getText(url: string, requestInit?: RequestInit) {
  return fetchh(url, {...requestInit, method: 'GET'}, false) as Promise<string>;
}

export default getText;
export type GetText = typeof getText;

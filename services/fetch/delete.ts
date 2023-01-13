import {fetchh} from './fetch';

export function deletee<Result>(url: string, requestInit?: RequestInit) {
  return fetchh(url, {...requestInit, method: 'DELETE'}) as Promise<Result>;
}

export default deletee;
export type Deletee = typeof deletee;

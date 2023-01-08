import {fetch_} from './fetch';

export function delete_<Result>(url: string, requestInit?: RequestInit) {
  return fetch_(url, {...requestInit, method: 'DELETE'}) as Promise<Result>;
}

export default delete_;
export type Delete_ = typeof delete_;

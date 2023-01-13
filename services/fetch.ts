import {fetchh} from './fetch/fetch';
import {get} from './fetch/get';
import {getText} from './fetch/get-text';
import {post} from './fetch/post';
import {put} from './fetch/put';
import {patch} from './fetch/patch';
import {deletee} from './fetch/delete';

export class FetchService {
  get<Result>(url: string, requestInit?: RequestInit) {
    return get<Result>(url, requestInit);
  }

  getText(url: string, requestInit?: RequestInit) {
    return getText(url, requestInit);
  }

  post<Result>(url: string, requestInit?: RequestInit) {
    return post<Result>(url, requestInit);
  }

  put<Result>(url: string, requestInit?: RequestInit) {
    return put<Result>(url, requestInit);
  }

  patch<Result>(url: string, requestInit?: RequestInit) {
    return patch<Result>(url, requestInit);
  }

  delete<Result>(url: string, requestInit?: RequestInit) {
    return deletee<Result>(url, requestInit);
  }

  fetch(input: RequestInfo, requestInit?: RequestInit, isJson = true) {
    return fetchh(input, requestInit, isJson);
  }
}

export default FetchService;

export class FetchService {
  get<Data>(url: string, requestInit?: RequestInit) {
    return this.fetch(
      url,
      {...requestInit, method: 'GET'},
      true
    ) as Promise<Data>;
  }

  getText(url: string, requestInit?: RequestInit) {
    return this.fetch(
      url,
      {...requestInit, method: 'GET'},
      false
    ) as Promise<string>;
  }

  post<Data>(url: string, requestInit?: RequestInit) {
    return this.fetch(url, {...requestInit, method: 'POST'}) as Promise<Data>;
  }

  put<Data>(url: string, requestInit?: RequestInit) {
    return this.fetch(url, {...requestInit, method: 'PUT'}) as Promise<Data>;
  }

  patch<Data>(url: string, requestInit?: RequestInit) {
    return this.fetch(url, {...requestInit, method: 'PATCH'}) as Promise<Data>;
  }

  delete<Data>(url: string, requestInit?: RequestInit) {
    return this.fetch(url, {...requestInit, method: 'DELETE'}) as Promise<Data>;
  }

  private async fetch(
    input: RequestInfo,
    requestInit?: RequestInit,
    isJson = true
  ) {
    const response = await fetch(input, requestInit);
    if (!response.ok) {
      throw new Error('Fetch failed!');
    }
    return !isJson ? response.text() : response.json();
  }
}

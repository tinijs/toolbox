export class FetchService {
  private globalHeaders: Record<string, string> = {};

  constructor(private readonly _baseUrl?: string) {}

  get BASE_URL() {
    return this._baseUrl;
  }

  registerGlobalHeaders(headers: Record<string, string>) {
    this.globalHeaders = {...this.globalHeaders, ...headers};
    return this as FetchService;
  }

  get<Result>(path: string, options?: RequestInit) {
    return this.fetch<Result>('GET', path, undefined, options);
  }

  post<Result>(path: string, body?: unknown, options?: RequestInit) {
    return this.fetch<Result>('POST', path, body, options);
  }

  patch<Result>(path: string, body?: unknown, options?: RequestInit) {
    return this.fetch<Result>('PATCH', path, body, options);
  }

  put<Result>(path: string, body?: unknown, options?: RequestInit) {
    return this.fetch<Result>('PUT', path, body, options);
  }

  delete<Result>(path: string, body?: unknown, options?: RequestInit) {
    return this.fetch<Result>('DELETE', path, body, options);
  }

  async fetch<Result>(
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
    input: RequestInfo | URL,
    body?: unknown,
    options?: RequestInit
  ): Promise<Result> {
    const headers =
      method === 'GET'
        ? this.globalHeaders
        : {
            'Content-Type': 'application/json',
            ...this.globalHeaders,
            ...options?.headers,
          };
    const response = await fetch(
      !this._baseUrl || typeof input !== 'string'
        ? input
        : `${this._baseUrl}/${input}`,
      {
        ...options,
        method,
        body: method === 'GET' ? undefined : JSON.stringify(body || {}),
        headers,
        credentials: 'include',
      }
    );
    const responseBody = await response.json();
    if (!response.ok) {
      throw new (Error as any)(`${response.statusText} (${response.status})`, {
        cause: responseBody,
      });
    }
    return responseBody;
  }
}

export default FetchService;

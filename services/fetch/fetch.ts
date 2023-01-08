export async function fetch_(
  input: RequestInfo,
  requestInit?: RequestInit,
  isJson = true
): Promise<unknown> {
  const response = await fetch(input, requestInit);
  if (!response.ok) {
    throw new Error('Fetch failed!');
  }
  return !isJson ? response.text() : response.json();
}

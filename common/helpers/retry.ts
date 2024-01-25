export type Retry = typeof retry;

export async function retry<Value>(
  handler: () => Promise<Value>,
  withTimeout: false | number = 0
) {
  return new Promise<Value>(async resolve =>
    typeof withTimeout !== 'number' || withTimeout < 0
      ? resolve(await handler())
      : setTimeout(async () => resolve(await handler()), withTimeout)
  );
}

export default retry;

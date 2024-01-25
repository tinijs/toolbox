import {StreamResult, StreamCallback} from './create-stream';

export type PromisifyStream = typeof promisifyStream;

type ExcludeLast<T extends any[]> = T extends [...infer ExcludeLast, any]
  ? ExcludeLast
  : any[];
type ExtractGeneric<Type> = Type extends StreamCallback<infer Target>
  ? Target
  : never;

export async function promisifyStream<
  Method extends (...params: any[]) => any,
  Data = ExtractGeneric<Parameters<Method>[1]>,
>(method: Method, ...params: ExcludeLast<Parameters<Method>>) {
  return new Promise<Data>(resolve =>
    method(...params, ({data, unstream}: StreamResult<Data>) => {
      unstream();
      resolve(data);
    })
  );
}

export default promisifyStream;

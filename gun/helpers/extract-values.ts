import {extractEntries} from './extract-entries';

export type ExtractValues = typeof extractValues;

export function extractValues<Value>(data: Record<string, Value>) {
  return extractEntries(data).map(([, value]) => value);
}

export default extractValues;

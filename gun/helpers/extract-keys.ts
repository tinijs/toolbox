import {extractEntries} from './extract-entries';

export type ExtractKeys = typeof extractKeys;

export function extractKeys(data: Record<string, unknown>) {
  return extractEntries(data).map(([key]) => key) as string[];
}

export default extractKeys;

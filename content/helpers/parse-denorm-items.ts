import {DenormItems} from '../../schema';
import {parseDenorm} from './parse-denorm';

export type ParseDenormItems = typeof parseDenormItems;

export function parseDenormItems<Type = Record<string, unknown>>(
  items: DenormItems<Type>,
  fieldName = 'title'
) {
  const result = [] as Type[];
  if (items instanceof Array) {
    items.forEach(item => result.push(parseDenorm(item, fieldName)));
  } else {
    Object.entries(items).forEach(([key, value]) =>
      result.push(
        parseDenorm(
          value instanceof Object
            ? (value as Type)
            : `${value === true ? key : value} <${key}>`,
          fieldName
        )
      )
    );
  }
  return result;
}

export default parseDenormItems;

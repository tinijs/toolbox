export function o2a<Type extends Record<string, unknown>>(
  object: {[id: string]: Type},
  clone = false,
  limit?: number
) {
  const result: null | Type[] = [];
  // clone object
  if (clone) {
    object = Object.assign({}, object || {});
  }
  // turn {} => []
  for (const key of Object.keys(object)) {
    result.push(object[key]);
  }
  // limit
  if (limit) {
    result.splice(limit, result.length);
  }
  // result
  return result;
}

export default o2a;
export type O2a = typeof o2a;

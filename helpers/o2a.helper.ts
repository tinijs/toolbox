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

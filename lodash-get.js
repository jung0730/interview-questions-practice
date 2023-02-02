function lodashGet(object, path, defaultValue) {
  if (object === null) {
    return defaultValue
  }
  let count = 0;
  const length = path.length;
  while (object !== undefined && count < length) {
    object = object[path[count++]];
  }
  const result = count === length ? object : undefined;
  return result === undefined ? defaultValue : result;
}

const object = { a: [{ b: { c: 3 } }] };
console.log(lodashGet(object, ['a', '0', 'b', 'c'], 'default'));
console.log(lodashGet(object, ['a', '1', 'b', 'c'], 'default'));

// Writing object != null would check for undefined and null at the same time.
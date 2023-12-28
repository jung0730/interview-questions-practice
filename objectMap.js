function objectMap(obj, fn) {
  const result = {}
  for (const prop in obj) {
    if (prop in obj) {
      result[prop] = fn.call(obj, obj[prop]) // // 原本的寫法test case can access `this` 過不了
      // result[prop] = fn.apply(obj, [obj[prop]])
    }
  }
  return result
}

const double = (x) => x * 2;
console.log(objectMap({ foo: 2, bar: 3 }, double))

function lodashGet(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
  let object = objectParam
  let index = 0
  for (index; index < path.length ; index++) {
    if (object != null) {
      object = object[String(path[index])]
    } else {
      break // 跳出 index 就會不等於path.length
    }
  }
  const value = index === path.length ? object : undefined
  return value !== undefined ? value : defaultValue
}

console.log(lodashGet({}, 'a.0.b.c'))
console.log(lodashGet({ a: { b: [1, 2, 3, { c: 'bar' }], c: { d: 0 } }, c: 1 }, [
  'a',
  'b',
  '3',
  'c',
]))
console.log(lodashGet({ a: { b: null } }, 'a.b.c'))

// 一開始寫object !== undefined, test case object 為{ a: { b: null } } 會過不了
// 因為null !== undefined 為true

// object !== null
// This checks for strict inequality, meaning it returns true only if the object is strictly not equal to null.

// object != null
// This is a loose or abstract equality check. It returns true if the object is not equal to null or undefined.


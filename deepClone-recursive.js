function deepClone(obj) {
  // 排除原始型別
  // null 的typeof 是object
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // 排除特殊型態
  // 直接创建一个新的实例并返回
  if (obj instanceof Date || obj instanceof RegExp) {
    return new obj.constructor();
  }
  let result = Array.isArray(obj) ? [] : {};

  // 因為 Object.entries 不會列舉整個原型鍊 (prototype chain)
  // 所以不用透過 obj.hasOwnProperty(key) 額外檢查是不是非原型鏈上的屬性
  // ref: https://stackoverflow.com/questions/12735778/for-in-and-hasownproperty
  for (const [key, value] of Object.entries(obj)) {
    result[key] = deepClone(value);
  }
  return result
}

const obj = {
  a: 1,
  b: { c: 3 },
};

// console.log(deepClone(obj))
deepClone(obj)
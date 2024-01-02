// tips
// callback currentIndex:
// 若有傳入 initialValue，則由索引 0 之元素開始，若無則自索引 1 之元素開始
// initialValue:
// 若沒有提供初始值，則原陣列的第一個元素將會被當作初始的累加器。假如於一個空陣列呼叫 reduce() 方法且沒有提供累加器初始值，將會發生錯誤。

Array.prototype.myReduce = function (callbackFn, initialValue) {
  const length = this.length
  if (initialValue === undefined && length === 0) {
    throw new Error('an empty array without an initial value')
  }
  let index = 0
  let acc = initialValue
  if (initialValue === undefined) {
    index = 1
    acc = this[0]
  }
  for (let i = index; i < length; i ++) {
    if (Object.hasOwn(this, i)) {
      acc = callbackFn(acc, this[i], i, this)
    }
  }
  return acc
};

console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0))
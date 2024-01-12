Array.prototype.myFilter = function (callbackFn, thisArg) {
  const length = this.length
  const result = []
  for (let i=0; i< length; i++) {
    // Object.hasOwn & hasOwnProperty & in 都可檢查array裡的index有無value (sparse array check)
    // 若有提供 thisArg 參數予 filter 方法，thisArg 將會被當作回呼函式的 this 值，否則 this 會是 undefined
    // callback 函式於被調用時會傳入三個參數：current element, index, array itself
    if (Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)) {
      result.push(this[i])
    }
  }
  return result
};

console.log([1, 2, 3, 4].myFilter((value) => value % 2 == 0)); // [2, 4]
console.log([1, 2, 3, 4].myFilter((value) => value < 3)); // [1, 2])
const isEvenIndex = (_, index) => index % 2 === 0;
console.log([1, 2, 3].myFilter(isEvenIndex))
console.log([-1, -3, 4, 99].myFilter(isEvenIndex))
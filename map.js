Array.prototype.myMap = function (callbackFn, thisArg) {
  const length = this.length
  const array = new Array(length)
  for (let i =0; i < length; i++) {
    if (Object.hasOwn(this, i)) {
      array[i] = callbackFn.call(thisArg, this[i], i, this)
    }
  }
  return array
}

console.log([1, 2, 3, 4].myMap((i) => i))
console.log([1, 2, 3, 4].myMap((i) => i * i))
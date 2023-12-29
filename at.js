Array.prototype.myAt = function (index) {
  const length = this.length
  if (index < 0) {
    index = index + length
  }
  return this[index]
};

const arr = [42, 79];
console.log(arr.myAt(0)); // 42
console.log(arr.myAt(1)); // 79
console.log(arr.myAt(2)); // undefined
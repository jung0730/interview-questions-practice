const arr = [1, 2, 3, 2, 3, 8];

// 方法1
function removeDuplicate1(arr) {
  return [...new Set(arr)];
}

const arrAfter1 = removeDuplicate1(arr);
console.log(arrAfter1, 'arrAfter1');

// 方法2
function removeDuplicate2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

const arrAfter2 = removeDuplicate2(arr);
console.log(arrAfter2, 'arrAfter2');
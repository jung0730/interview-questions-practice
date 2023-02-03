// 方法1
let objA = {
  a: 1,
  b: { c: 3 },
};

let objB = { ...objA };

console.log(objA === objB); // false
console.log(objA.b === objB.b); // true, 第二層的物件還是指向相同位置

// 方法2
let objC = {
  a: 1,
  b: { c: 3 },
};

let objD = Object.assign({}, objC);

console.log(objC === objD); // false
console.log(objC.b === objD.b); // true, 第二層的物件還是指向相同位置
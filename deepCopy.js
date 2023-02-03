// 方法1
let objA = {
  a: 1,
  b: { c: 3 },
};

function deepCopy(item) {
  return JSON.parse(JSON.stringify(item));
}

let objB = deepCopy(objA);

console.log(objA === objB); // false
console.log(objA.b === objB.b); // false

//方法2
// node 17以上才支援structuredClone
let objC = {
  a: 1,
  b: { c: 3 },
};

let objD = structuredClone(objC);

console.log(objC === objD); // false
console.log(objC.b === objD.b); // true, 第二層的物件還是指向相同位置
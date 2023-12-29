// Spread element or syntax (note that it's not an operator) works only with objects that are iterable (i.e. implement the @@iterator method). Array.from() works also on array-like objects which are not iterable (i.e. objects that have indexed elements and a length property).

function uniqueArray(array) {
  return Array.from(new Set(array))
}

console.log(uniqueArray([1, 2, 3]))

// ex: create an array-like object
// var obj = {
//   '0': 'a',
//   '1': 'b',
//   '2': 'c',
//   'length': 3,
//   'push': Array.prototype.push
// }

// obj.push('d')

// console.log(obj)
// tips:
// needs to return a Promise
// If the input array is empty, the returned Promise resolves with an empty array
// The returned Promise rejects immediately if any of the input values are rejected
// The input array can contain non-Promise

// function promiseAll(promises) {
//   const isIterable = !!promises?.[Symbol.iterator];

//   if (!isIterable) {
//     return new TypeError('Arguments must be iterable');
//   }
//   promises = Array.from(promises);
//   if (promises.length === 0) {
//     return Promise.resolve([]);
//   }
//   const outputs = [];
//   let counter = 0;
//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, index) => {
//       promise
//         .then(value => {
//           outputs[index] = value;
//           counter +=1;
//           if (counter === promises.length) {
//             resolve(outputs);
//           }
//         })
//         .catch(reject)
//     });
//   });
// }

// const fooA = new Promise((res,rej)=>{ setTimeout(()=>{ res('promise1 成功返回！') },1000) }) 
// const fooB = new Promise((res,rej)=>{ setTimeout(()=>{ res('promise2 成功返回！') },2000) })
// const fooC = new Promise((res,rej)=>{ setTimeout(()=>{ rej('promise3 reject！') },3000) })
// console.log(promiseAll([fooA, fooB]));
// console.log(promiseAll([fooA, fooB, fooC]));

// 原本的寫法當參數為plain value會過不了
// updated version:

function promiseAll(promises) {
  const isIterable = !!promises?.[Symbol.iterator];

  if (!isIterable) {
    return new TypeError('Arguments must be iterable');
  }
  promises = Array.from(promises);
  if (promises.length === 0) {
    return Promise.resolve([]);
  }
  const outputs = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      // Use Promise.resolve to handle non-Promise values
      Promise.resolve(promise)
        .then(value => {
          outputs[index] = value;
          counter +=1;
          if (counter === promises.length) {
            resolve(outputs);
          }
        })
        .catch(reject)
    });
  });
}

console.log(promiseAll([2]));
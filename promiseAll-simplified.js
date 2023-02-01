function promiseAll(promises) {
  if (!Array.isArray(promises)) {
    return new TypeError('Arguments must be an array');
  }
  if (promises.length === 0) {
    return Promise.resolve([]);
  }
  const outputs = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
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

const fooA = new Promise((res,rej)=>{ setTimeout(()=>{ res('promise1 成功返回！') },1000) }) 
const fooB = new Promise((res,rej)=>{ setTimeout(()=>{ res('promise2 成功返回！') },2000) })
const fooC = new Promise((res,rej)=>{ setTimeout(()=>{ rej('promise3 reject！') },3000) })
console.log(promiseAll([fooA, fooB]));
console.log(promiseAll([fooA, fooB, fooC]));
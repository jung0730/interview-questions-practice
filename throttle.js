function throttle(fn, delay = 500) {
  let timer;
  return function (...args) {
    if (timer) return;
    const context = this;
    // 將一段時間內的操作，集合成一次執行
    timer = setTimeout(() => {
      timer = null;
      fn.apply(context, args);
    }, delay);
  }
}

let i = 0;

function increment() {
  i++;
  console.log(i);
}

const throttledIncrement = throttle(increment, 100);
throttledIncrement();
throttledIncrement();
throttledIncrement();
setTimeout(() => {
  throttledIncrement();
}, 200);

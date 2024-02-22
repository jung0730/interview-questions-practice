// 當一定時間內沒有持續觸發事件時，事件處理函式才會被執行一次，但如果在設定的時間內又一次觸發了事件，就會重新開始計時。
// 如user一直滑動，函式就不會被觸發，這時可以改用throttle
// function debounce(fn, delay = 500) {
//   let timer;
//   return (...args) => {
//     // 每一次 debounce function 被觸發時，會先清除之前的 timer，避免觸發先前的 fn 函式
//     // 因此只要在 delay 時間內觸發 debounce function，就會一直清除先前的 timer，避免 fn 一直被執行
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   }
// }

// 原先的寫法在test 為callbacks can access this 會過不了
// updated version
function debounce(func, wait) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    const context = this;
    timer = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  }
}

const updateDebounceText = debounce((text) => {
  console.log(`call api get search result ${text}`);
}, 500);


function sayHello() {
  console.log('My name is', this.name)
}

const amy = {
  name: 'amy',
  speak: debounce(sayHello),
}

console.log(amy.speak())
// 當一定時間內沒有持續觸發事件時，事件處理函式才會被執行一次，但如果在設定的時間內又一次觸發了事件，就會重新開始計時。
function debounce(fn, delay = 500) {
  let timer;
  return (...args) => {
    // 每一次 debounce function 被觸發時，會先清除之前的 timer，避免觸發先前的 fn 函式
    // 因此只要在 delay 時間內觸發 debounce function，就會一直清除先前的 timer，避免 fn 一直被執行
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

const updateDebounceText = debounce((text) => {
  console.log(`call api get search result ${text}`);
}, 500);

console.log(updateDebounceText('foo'));
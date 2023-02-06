function factorial(num) {
  if(num <= 1) {
    return 1;
  } else {
    return num * factorial(num -1);
  }
}

console.log(factorial(6))

// 之所以能夠透過遞迴函式，是因為函式堆疊（stack）在執行時有一個特性，
// 當某個函式呼叫另一個函式時，需要等到裡面的函式執行完產生結果後，才會繼續回來執行自己的函式內容，
// 而這樣的情況也被稱作 後進先出（Last in First Out, LIFO）
// 像是氣泡一樣不斷往上升，一次比較兩個元素，如果他們的順序錯誤就把他們交換過來，每次會將最大值升到最頂端。
// 時間複雜度: O(n^2)
// 將時間複雜度為 O(n)的程式碼再嵌套循環 n 遍即其時間複雜度就是 O(n*n) = O(n^2)
function bubblesort(array) {
  const length = array.length
  for (let i=0; i < length; i++) {
    // 原本是 length - 1，會再加上 - i 是因為最後 i 個元素已經排好了
    // 所以沒必要跟那些排好的元素比較
    for (let j=0; j < length -1 - i; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]] // 把數字較大的推到右邊
      }
    }
  }
  return array
}

console.log(bubblesort([5,3,6,1,8,7,2,4]))
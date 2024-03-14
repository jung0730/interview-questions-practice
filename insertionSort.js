// 把第 i 筆資料插入前面 (i-1) 筆已經排序好的陣列中。
function insertionSort(array) {
  for (let i=0; i< array.length; i++) {
    for (let j=i; j> 0; j--) { // 往前找
      if (array[j] < array[j-1]) {
        [array[j], array[j-1]] = [array[j-1], array[j]]
      }
    }
  }
  return array
}

console.log(insertionSort([5,3,6,1,8,7,2,4]))
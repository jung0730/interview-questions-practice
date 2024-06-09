// 切一半，排好左邊，排好右邊，合併
// 用到recursive technique
// 時間複雜度 nlogn
function mergeSort (array) {
  if (array.length === 1) {
    return array;
  };
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(
    mergeSort(left),mergeSort(right)
  );
}
function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++;
    } else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
}
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([27, 34,16, 4, 1, 5, 69, 65, 223, 7, 0]))
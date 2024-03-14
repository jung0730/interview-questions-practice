// 直觀，不需要先排序，Brute Force
function sequentialSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (target === list[i]) {
      return i;
    }
  }
  return -1;
}

console.log(sequentialSearch([2,3,5,8,10], 5))
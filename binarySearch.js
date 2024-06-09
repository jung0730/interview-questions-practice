// 需將數列先排序
// 每次由中間將數列切成兩邊，比對數列的中間值，如果小於再比前半段，大於再比後半段，直到找到或是數列清空為止
// 時間複雜度 logn
function binarySearch(nums, target) {
  let left = 0
  let right = nums.length -1
  while (left <= right) {
    let mid = Math.round((left + right) / 2)
    if (target === nums[mid]) {
      return mid
    }
    if (target > nums[mid]) {
      left = mid + 1
    }
    if (target < nums[mid]) {
      right = mid - 1
    }
  }
}

console.log(binarySearch([2,3,5,8,10], 8))

function binarySearchRecursive(nums, target) {
  function searchRecursive(left, right) {
    if (left > right) {
      return -1;  // base case: target not found
    }
    
    let mid = Math.floor((left + right) / 2); // use Math.floor to ensure integer division

    if (target === nums[mid]) {
      return mid; // base case: target found
    }

    if (target > nums[mid]) {
      return searchRecursive(mid + 1, right); // search in the right half
    } else {
      return searchRecursive(left, mid - 1); // search in the left half
    }
  }

  return searchRecursive(0, nums.length - 1); // initial call to the recursive function
}

console.log(binarySearchRecursive([2,3,5,8,10], 8))
// 需將數列先排序
// 每次由中間將數列切成兩邊，比對數列的中間值，如果小於再比前半段，大於再比後半段，直到找到或是數列清空為止
function binarySearch(nums, target) {
  let left = 0
  let right = nums.length -1
  while (left <= right) {
    let mid = Math.round((left + right) / 2)
    console.log(left, 'left')
    console.log(right, 'right')
    console.log(mid, 'mid')
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
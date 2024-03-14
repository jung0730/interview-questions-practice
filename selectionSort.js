// works great in small array
// time complexity of O(n2)
// 找到最小值，移到最左邊

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Initialize index of min element to the start of the unsorted section.
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found min element with the first element of the unsorted section.
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

console.log(selectionSort([9, 3, 6, 2, 4, 11]))
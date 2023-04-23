// solve this problem using insertion sort method
// return a sorted array
// quadratic time complexity

const insertionSort = function (arr: number[]): number[] {
  // pick the second element in the array
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // compare to the one before, swap if necessary
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort([2, 1, 9, 76, 4])); // [1, 2, 4, 9, 76]
console.log(insertionSort([])); // []
console.log(insertionSort([300, 200, 900, 400, 200])); // [200, 200, 300, 400, 900]
console.log(insertionSort([9, 8, 7, 6, 5, 4])); // [4, 5, 6, 7, 8, 9]

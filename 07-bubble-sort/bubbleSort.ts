// solve this problem using bubble sort method
// return a sorted array

const bubbleSort = function (arr: number[]): number[] {
  // loop from end of array to beginning
  // establishes max number of comparisons
  for (let i = arr.length; i > 0; i--) {
    // inner loop from beginning until i - 1
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP values!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([2, 6, 1, 8, 5, 9])); // [1, 2, 5, 6, 8, 9]
console.log(bubbleSort([24, 19, 901])); // [19, 24, 901]
console.log(bubbleSort([])); // []
console.log(bubbleSort([9, 7, 8, 3, 1])); // [1, 3, 7, 8, 9]

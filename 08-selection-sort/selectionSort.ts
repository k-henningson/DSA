// solve this problem using selection sort method
// return a sorted array
// quadratic time complexity

const selectionSort = function (arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // compare first item to next item in array, check if smaller, continue through array
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // SWAP!
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([3, 4, 7, 1, 9, 2])); // [1, 2, 3, 4, 7, 9]
console.log(selectionSort([])); // []
console.log(selectionSort([34, 56, 12, 96])); // [12, 34, 56, 96]
console.log(selectionSort([500, 400, 800, 200, 100])); // [100, 200, 400, 500, 800]

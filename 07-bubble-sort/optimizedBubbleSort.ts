// solve this problem using optimized bubble sort method
// return a sorted array

const optimizedBubbleSort = function (arr: number[]): number[] {
  let noSwaps;
  // loop from end of array to beginning
  // establishes max number of comparisons
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // inner loop from beginning until i - 1
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP values!
        console.log("SWAP", arr[j], arr[j + 1]);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // make false as swap occured
        noSwaps = false;
      }
    }
    // if truthy stop looping for no reason
    if (noSwaps) break;
  }
  return arr;
};

// because only one value needs to swap as array mostly sorted, should only see console.log("SWAP") appear one pass as 9 moves over each integer
console.log(optimizedBubbleSort([9, 1, 2, 3, 4, 5, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

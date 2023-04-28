// solve this problem using a quick sort pattern

const swap = function (array: number[], i: number, j: number) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// will return the index in the array of the pivot number
const pivot = function (
  arr: number[],
  start = 0,
  end = arr.length - 1
): number {
  let pivot = arr[start];
  // swapIndex is a counter of where the index will move to start it at 0
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

const quickSort = function (
  arr: number[],
  left = 0,
  right = arr.length - 1
): number[] {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

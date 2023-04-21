// solve this problem using binary search
// accepts a sorted array of numbers, and a value
// returns index if value present or -1

const binarySearch = function (arr: number[], value: number): number {
  if (arr.length === 0) return -1;
  let left = 0;
  let right = arr.length - 1;
  // account for odd length of arrays
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== value) {
    // console.log(left, middle, right);
    if (value < arr[middle]) {
      // move right to old middle - 1 since redundant to check same middle again
      right = middle - 1;
      // move left to old middle + 1
    } else left = middle + 1;
    // reset middle
    middle = Math.floor((left + right) / 2);
  }
  return middle;
};

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  L           M           R
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
//  L  M     R
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
//        LM R

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); // 3
console.log(binarySearch([], 5)); // -1
console.log(binarySearch([10, 100, 1000], 10)); // 0
console.log(binarySearch([45, 39, 20, 94, 192, 345], 345)); // 5

// solve this problem using linear search, do not use built in methods
// array of numbers, find the index in the array of the value if it is present
// if value not found return -1

const linearSearch = function (arr: number[], value: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4], 3)); // 2
console.log(linearSearch([5, 50, 500, 5000, 500000], 5000)); // 3
console.log(linearSearch([9, 8, 7, 6, 5], 2)); // -1

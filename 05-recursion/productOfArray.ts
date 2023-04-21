// solve this problem using recursion
// given an array of numbers return the product of them all

const productOfArray = function (arr: number[]): number {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([2, 4, 6, 10])); // 480
console.log(productOfArray([])); // 1

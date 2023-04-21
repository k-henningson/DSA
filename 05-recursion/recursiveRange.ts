// solve this problem using recursion
// accept a number and add up all the numbers from 0 to the number passed to the function

const recursiveRange = function (num: number): number {
  if (num <= 0) return 0;

  return num + recursiveRange(num - 1);
};

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
console.log(recursiveRange(0)); // 0
console.log(recursiveRange(15)); // 120

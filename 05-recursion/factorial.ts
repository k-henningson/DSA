// solve this problem using recursion
// accepts a number and returns factorial of that number, zero is always 1

const factorial = function (num: number): number {
  if (num <= 1) return 1;

  return num * factorial(num - 1);
};

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

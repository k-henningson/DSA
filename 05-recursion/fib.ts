// solve this problem using recursion
// accept a number and return the nth number in the Fibonacci sequence
// whole numbers where every number thereafter is equal to the sum of the previous two numbers

const fib = function (num: number): number {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
};

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

// solve this problem using recursion
// return the power of the base to the exponent, mimin Math.pow(), negative bases and exponents are not included

const power = function (base: number, exponent: number): number {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
};

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

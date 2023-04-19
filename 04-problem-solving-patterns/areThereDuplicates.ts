// solve this problem using a frequency counter pattern
// variable number of args, check if duplicates among the args
// time complexity O(n)

const areThereDuplicates = function (...args: string[] | number[]): boolean {
  let obj1: { [key: string]: number } = {};

  for (let key in args) {
    obj1[args[key]] = (obj1[args[key]] ?? 0) + 1;
  }
  for (let key in obj1) {
    if (obj1[key] >= 2) {
      return false;
    }
  }
  return true;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

// solve this problem using a frequency counter pattern
// two positive integers, find out if they have the same frequency of digits
// time complexity O(n)

const sameFrequency = function (num1: number, num2: number): boolean {
  // O(n) toString method
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  let obj1: { [key: string]: number } = {};
  let obj2: { [key: string]: number } = {};

  for (const char of str1) {
    obj1[char] = (obj1[char] ?? 0) + 1;
  }

  for (const char of str2) {
    obj2[char] = (obj2[char] ?? 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

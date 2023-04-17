// solve this problem using a frequency counter pattern
// all imputs will be lowercase single words
// time complexity O(n)

const validAnagram = function (str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;
  // create object
  let obj1: { [key: string]: number } = {};
  let obj2: { [key: string]: number } = {};
  // loop over strings
  for (let char of str1) {
    // if = undefined set to 0 then add 1
    // if = truthy and in object add 1 to previous value
    obj1[char] = (obj1[char] ?? 0) + 1;
  }
  for (let char of str2) {
    // nullish coalescing operator when left-hand side null or undefined instead of || comparison which could include falsy
    obj2[char] = (obj2[char] ?? 0) + 1;
  }
  // compare object
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

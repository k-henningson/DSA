// solve this problem using a radix sort pattern

// returns the digit in num at the given place value counting from left to right of num
const getDigit = function (num: number, place: number): number {
  // floor to get whole numbers, abs for negative numbers
  // divide by place 10 pow 2 100 (7323/100 = 73) then modulus by 10 left with 3
  return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
};

console.log(getDigit(7323, 2)); // 3

// returns number of digits in num
const digitCount = function (num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

console.log(digitCount(7323)); // 4

// returns count of max digits from list of numbers
const mostDigits = function (nums: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

console.log(mostDigits([1, 11, 111, 1111, 11111, 111111])); // 6

// sort array of numbers, create buckets for digits (0-9)
const radixSort = function (nums: number[]): number[] {
  // find how many digits largest number has
  let maxDigitCount = mostDigits(nums);
  // loop maxDigitCount amount of times and create buckets
  for (let k = 0; k < maxDigitCount; k++) {
    // create 10 (0-9) number of empty arrays as buckets
    let digitBuckets: any[] = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      // find digit at current k index
      let digit = getDigit(nums[i], k);
      // push into correct bucket
      digitBuckets[digit].push(nums[i]);
    }
    console.log("Buckets during loops: ", digitBuckets);
    // pull back into sorted array after pushed into correct buckets
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([34, 2, 6922, 501, 789, 3, 5923])); // [2, 3, 34, 501, ,789, 5923, 6922]

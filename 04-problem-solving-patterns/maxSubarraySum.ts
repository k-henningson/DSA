// solve this problem using a sliding window pattern
// array of integers, find max subarray of consecutive elements
// time complexity O(n) space complexity O(1)

const maxSubarraySum = function (arr: number[], num: number): number | null {
  let maxSub = 0;
  let tempSub = 0;
  // add first elements together based off num parameter length
  // store as initial maxSub array total
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSub += arr[i];
  }
  tempSub = maxSub;
  // start at index based off num parameter
  for (let i = num; i < arr.length; i++) {
    // slide to the right by adding right element and removing furthest left element
    tempSub = tempSub - arr[i - num] + arr[i];
    maxSub = Math.max(maxSub, tempSub);
  }
  return maxSub;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

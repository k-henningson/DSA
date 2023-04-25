// solve this problem using a merge sort pattern
// time complexity 0(n log n)
// space complexity 0(n)

const merge = function (arr1: number[], arr2: number[]): number[] {
  let results: number[] = [];
  let i = 0;
  let j = 0;
  // first loop only applies if haven't exceeded length of one array
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // once two arrays merged, add sorted longer array onto new results array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

const mergeSort = function (arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // recursive until arr is less than 1 in length
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([1, 99, 100, 2, 14, 10, 50])); // [1, 2, 10, 14, 50, 99, 100]
console.log(mergeSort([2, 1])); // [1, 2]
console.log(mergeSort([])); // []
console.log(mergeSort([40, 50, 20, 60, 70, 10, 30])); // [10, 20, 30, 40, 50, 60, 70]

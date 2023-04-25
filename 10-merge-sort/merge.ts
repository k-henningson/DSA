// solve this problem using a merge pattern

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

console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]
console.log(merge([], [1, 2])); // [1, 2]
console.log(merge([], [])); // []
console.log(merge([40, 50, 60, 70], [10, 20, 30])); // [10, 20, 30, 40, 50, 60, 70]

// solve this problem using naive string search
// two strings, find if the second string pattern matches a subset of the first string
// add to count of matches

const naiveStringSearch = function (long: string, short: string): number {
  let count = 0;
  // loop longer string 1
  for (let i = 0; i < long.length; i++) {
    // loop shorter string 2 with potential matches
    for (let j = 0; j < short.length; j++) {
      // if characters don't match break out of inner loop
      if (long[i + j] !== short[j]) {
        // will reset j at 0 but i stays at current index to continue through long string one time
        break;
      }
      // if inner loop completes and a match is found increment count
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(naiveStringSearch("ttttttest", "test")); // 1
console.log(naiveStringSearch("kyraislearning", "loop")); // 0
console.log(naiveStringSearch("datadatadatadata", "da")); // 4
console.log(naiveStringSearch("pppppppppp", "p")); // 10

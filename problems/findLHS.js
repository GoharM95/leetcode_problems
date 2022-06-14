// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

// Input: nums = [1,2,3,4]
// Output: 2

// Input: nums = [1,1,1,1]
// Output: 0

// 594. Longest Harmonious Subsequence
function findLHS(arr) {
  let obj = {};

  arr.forEach((elem) => {
    obj[elem] = obj[elem] + 1 || 1;
  });

  let globalMax = 0;

  Object.keys(obj).forEach((elem) => {
    elem = parseInt(elem);
    let max = obj[elem + 1] ? obj[elem + 1] + obj[elem] : 0;
    globalMax = globalMax < max ? max : globalMax;
  });
  return globalMax;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));

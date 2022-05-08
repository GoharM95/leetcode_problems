// You are given an integer array nums consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Input: nums = [5], k = 1
// Output: 5.00000

// 643. Maximum Average Subarray I
function findMaxAverage(arr, k) {
  let avg = arr.slice(0, k).reduce((prev, curr) => prev + curr, 0) / k;
  let max = avg;
  for (let i = k; i < arr.length; i++) {
    avg = (avg * k - arr[i - k] + arr[i]) / k;
    max = Math.max(max, avg);
  }
  return max;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

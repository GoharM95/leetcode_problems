// Given an integer array nums, return the third distinct maximum number in this array.
// If the third maximum does not exist, return the maximum number.

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

// Input: nums = [1,2]
// Output: 2

// 414
function thirdMax(arr) {
  let max = arr[0];
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];

    if (num > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (num > thirdMax && num < secondMax) {
      thirdMax = num;
    }
  }

  return thirdMax === -Infinity ? max : thirdMax;
}

console.log(thirdMax([3, 2, 1]));

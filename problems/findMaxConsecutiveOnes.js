// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// 485
function findMaxConsecutiveOnes(nums) {
  let currMax = 0;
  let finalMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currMax++;
      finalMax = Math.max(currMax, finalMax);
    } else {
      currMax = 0;
    }
  }
  return finalMax;
}

console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1]));

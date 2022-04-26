// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// 448
function findDisappearedNumbers(nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = Math.abs(nums[i]) - 1;
    console.log("j", j);
    nums[j] = Math.abs(nums[j]) * -1;
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(findDisappearedNumbers([1, 1]));

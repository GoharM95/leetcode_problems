// Given a non-empty array nums containing only positive integers,
// find if the array can be partitioned into two subsets such that
// the sum of elements in both subsets is equal.

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// 416. Partition Equal Subset Sum
function canPartition(nums) {
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  if (sum % 2 === 1) {
    return false;
  }

  sum = sum / 2;

  const combos = new Array(sum + 1).fill(false);
  combos[0] = true;

  for (let num of nums) {
    for (let i = sum; i >= num; i--) {
      combos[i] = combos[i] || combos[i - num];
    }
  }
  return combos[sum];
}

console.log(canPartition([1, 5, 11, 5]));

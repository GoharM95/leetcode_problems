// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly
// to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0
// because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

// 724. Find Pivot Index
function pivotIndex(arr) {
  if (arr.length === 1) {
    return 0;
  }

  const sum = arr.reduce((curr, next) => curr + next);
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    let right;
    if (i === arr.length - 1) {
      right = 0;
    }
    right = sum - left - arr[i];

    if (left === right) {
      return i;
    }
    left += arr[i];
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([-1, -1, 0, 1, 1, 0]));

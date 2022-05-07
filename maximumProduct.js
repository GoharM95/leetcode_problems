// Given an integer array nums, find three numbers whose product
// is maximum and return the maximum product.

// Input: nums = [1,2,3]
// Output: 6

// Input: nums = [1,2,3,4]
// Output: 24

// Input: nums = [-1,-2,-3]
// Output: -6

// 628. Maximum Product of Three Numbers
function maximumProduct(arr) {
  const len = arr.length;
  arr.sort((a, b) => a - b);
  let product = arr[len - 1] * arr[len - 2] * arr[len - 3];
  if (arr[0] < 0 && arr[1] < 0) {
    product = Math.max(
      product,
      arr[len - 1] * Math.abs(arr[0]) * Math.abs(arr[1])
    );
  }
  return product;
}

console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));

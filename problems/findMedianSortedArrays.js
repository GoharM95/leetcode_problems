// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// 4. Median of Two Sorted Arrays
function findMedianSortedArrays(nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((curr, next) => curr - next);
  console.log("arr", arr);
  let median;
  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    median = (arr[Math.floor(arr.length / 2) - 1] + arr[arr.length / 2]) / 2;
  }
  return median;
}

console.log(findMedianSortedArrays([1, 3, 4], [2]));

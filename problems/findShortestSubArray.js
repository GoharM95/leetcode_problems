// Given a non-empty array of non-negative integers nums,
// the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a
// (contiguous) subarray of nums, that has the same degree as nums.

// 697. Degree of an Array
function findShortestSubArray(arr) {
  const elemsCountObj = {};

  for (let elem of arr) {
    elemsCountObj[elem] = (elemsCountObj[elem] || 0) + 1;
  }

  const arrDegree = Math.max(...Object.values(elemsCountObj));

  let minLengthArr = arr.length;

  const sortedArr = Array.from(new Set(arr));

  for (let elem of sortedArr) {
    if (elemsCountObj[elem] === arrDegree) {
      const subArrLength = arr.lastIndexOf(elem) - arr.indexOf(elem) + 1;
      minLengthArr = Math.min(minLengthArr, subArrLength);
    }
  }

  return minLengthArr;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));

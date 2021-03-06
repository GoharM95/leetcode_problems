// Given an array of integers arr, replace each element with its rank.=
// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.

// Input: arr = [37,12,28,9,100,56,80,5,12]
// Output: [5,3,4,2,8,6,7,1,3]

// 1331. Rank Transform of an Array
function arrayRankTransform(arr) {
  const result = [];
  const sortedArr = [...arr].sort((a, b) => a - b);
  const map = {};
  let rank = 1;
  for (let i = 0; i < sortedArr.length; i++) {
    if (!map[sortedArr[i]]) {
      map[sortedArr[i]] = rank++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(map[arr[i]]);
  }
  return result;
}

console.log(arrayRankTransform([40, 10, 20, 30]));

// Given a non-empty array of non-negative integers nums,
// the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a
// (contiguous) subarray of nums, that has the same degree as nums.

// 697. Degree of an Array

// 1
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

// 2
function findShortestSubArray(arr) {
  const nestedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (!nestedObj[[elem]]) {
      nestedObj[elem] = {
        count: 1,
        firstIndex: arr.indexOf(elem),
        lastIndex: arr.lastIndexOf(elem),
      };
    } else {
      nestedObj[[elem]].count++;
    }
  }

  const arrDegree = Math.max(
    ...Object.values(nestedObj).map((obj) => obj.count)
  );

  const objectsArr = Object.values(nestedObj);
  let smallestSubArrayLength = arr.length;

  for (let i = 0; i < objectsArr.length; i++) {
    if (objectsArr[i].count === arrDegree) {
      smallestSubArrayLength = Math.min(
        smallestSubArrayLength,
        objectsArr[i].lastIndex - objectsArr[i].firstIndex + 1
      );
    }
  }

  return smallestSubArrayLength;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));

// 3
function findShortestSubArray(arr) {
  let arrDegree = 0;
  let smallestSubArrayLength = arr.length;

  const nestedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (!nestedObj[[elem]]) {
      nestedObj[elem] = {
        count: 1,
        firstIndex: i,
        lastIndex: i,
      };
    } else {
      nestedObj[elem].lastIndex = i;
      nestedObj[elem].count++;
    }

    const currSubArrLength =
      nestedObj[elem].lastIndex - nestedObj[elem].firstIndex + 1;

    if (arrDegree < nestedObj[elem].count) {
      arrDegree = nestedObj[elem].count;
      smallestSubArrayLength = currSubArrLength;
    } else if (arrDegree === nestedObj[elem].count) {
      smallestSubArrayLength = Math.min(
        smallestSubArrayLength,
        currSubArrLength
      );
    }
  }

  return smallestSubArrayLength;
}

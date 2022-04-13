// 1
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];
    const complementPair = target - currVal;
    if (complementPair in map) {
      return [map[complementPair], i];
    } else {
      map[currVal] = i;
    }
  }
}

console.log(twoSum([7, 2, 1, 15], 9));

// 9
function isPalindrome(num) {
  if (num < 0) {
    return false;
  }

  let numClone = num;
  let reversed = 0;
  while (numClone > 0) {
    const lastDigit = numClone % 10;
    reversed = reversed * 10 + lastDigit;
    numClone = Math.floor(numClone / 10);
  }
  return num === reversed;
}

console.log(isPalindrome(101));

// 13
const romansIntValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(roman) {
  let int = 0;

  for (let i = 0; i < roman.length; i++) {
    const currVal = romansIntValues[roman[i]];
    const nextVal = romansIntValues[roman[i + 1]];
    if (nextVal) {
      if (nextVal <= currVal) {
        int += currVal;
      } else {
        int += nextVal - currVal;
        i++;
      }
    } else {
      int += currVal;
    }
  }
  return int;
}

console.log(romanToInt("XCIV"));
console.log(romanToInt("LVIII"));

///////

// 14
function longestCommonPrefix(strsArr) {
  let longestPrefix = "";
  if (strsArr.length === 0) {
    return longestPrefix;
  }

  let comparisonWord = strsArr[0];
  let comparisonIndex = 0;

  for (let comparisonLetter of comparisonWord) {
    for (let i = 1; i < strsArr.length; i++) {
      let currentWord = strsArr[i];
      let currentLetter = currentWord[comparisonIndex];

      if (
        comparisonIndex > currentWord.length ||
        comparisonLetter !== currentLetter
      ) {
        return longestPrefix;
      }
    }
    comparisonIndex++;
    longestPrefix += comparisonLetter;
  }

  return longestPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// 20

const pairBrs = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function isValid(brStr) {
  if (brStr.length < 2) {
    return false;
  }

  let stk = [];
  let brStrArr = brStr.split("");
  for (let br of brStrArr) {
    if (pairBrs[br]) {
      stk.push(br);
    } else {
      const checkBr = stk.pop();
      if (pairBrs[checkBr] !== br) {
        return false;
      }
    }
  }
  if (stk.length > 0) {
    return false;
  }
  return true;
}

console.log(isValid("()[]{}"));

// 26
function removeDuplicates(arr) {
  let pointer1 = 0;
  for (let pointer2 = 1; pointer2 < arr.length; pointer2++) {
    if (arr[pointer1] !== arr[pointer2]) {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
  }
  return pointer1 + 1;
}

console.log(removeDuplicates([1, 1, 2]));

///////

// 27
function removeElement(arr, target) {
  let pointer1 = 0;

  for (let pointer2 = 0; pointer2 < arr.length; pointer2++) {
    if (arr[pointer2] !== target) {
      arr[pointer1] = arr[pointer2];
      pointer1++;
    }
  }
  return pointer1;
}

console.log(removeDuplicates([1, 2, 2, 1], 1));

// 35
function searchInsertPosition(arr, target) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target || arr[i] > target) {
      return index;
    } else {
      index++;
    }
  }
}

console.log(searchInsertPosition([1, 3, 5, 6], 5));

// 53
function maxSubArray(arr) {
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

///////

// 58
function lengthOfLastWord(str) {
  let lastWordLength = 0;
  let beforeFirstNonEmptyChar = true;

  if (str.length === 0) {
    return lastWordLength;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (str.charAt(i) !== " ") {
      lastWordLength++;
      beforeFirstNonEmptyChar = false;
    } else if (!beforeFirstNonEmptyChar) {
      break;
    }
  }

  return lastWordLength;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));

// 66
function plusOne(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i]++;
      return arr;
    } else {
      arr[i] = 0;
    }
  }
  arr.unshift(1);
  return arr;
}

// console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([1, 2, 9])); // [1, 3, 0]

// 69
function mySqrt(num) {
  if (num < 2) {
    return num;
  }

  let left = 1;
  let right = num;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid * mid === num) {
      return mid;
    } else if (mid * mid > num) {
      right = mid;
    } else if (mid * mid < num) {
      left = mid + 1;
    }
  }

  return left - 1;
}

console.log(mySqrt(4));

///////

// 88
function merge(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;

  for (var i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }

    if (first >= 0 && nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// 118
function generate(numRows) {
  let triangle = [];

  if (numRows === 0) {
    return triangle;
  }

  triangle.push([1]);

  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    let newRow = [];

    newRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
}

console.log(generate(4));

// 119
function getRow(rowIndex) {
  let row = [];

  if (rowIndex < 0) {
    return row;
  }

  row.push(1);

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = row.length - 1; j > 0; j--) {
      row[j] = row[j - 1] + row[j];
    }
    row.push(1);
  }

  return row;
}

console.log(getRow(4));

///////

// 125
function validPalindrome(s) {
  let pointerOne = 0;
  let pointerTwo = s.length - 1;

  while (pointerOne < pointerTwo) {
    while (!isValidCharacter(s.charAt(pointerOne))) {
      pointerOne++;
    }

    while (!isValidCharacter(s.charAt(pointerTwo))) {
      pointerTwo--;
    }

    if (
      s.charAt(pointerOne).toLowerCase() !== s.charAt(pointerTwo).toLowerCase()
    ) {
      return false;
    }

    pointerOne++;
    pointerTwo--;
  }

  return true;
}

let isValidCharacter = function (char) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";

  return alphabet.indexOf(char.toLowerCase()) > -1;
};

console.log(validPalindrome("A man, a plan, a canal: Panama"));
console.log(validPalindrome("race a car"));

// 136
function singleNumber(nums) {
  let set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return Array.from(set)[0];
}

console.log(singleNumber([2, 2, 1]));

// 136
function majorityElement(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let half = nums.length / 2;
  let elementCount = new Map();

  for (let num of nums) {
    if (!elementCount.has(num)) {
      elementCount.set(num, 1);
    } else {
      elementCount.set(num, elementCount.get(num) + 1);
    }

    if (elementCount.get(num) > half) {
      return num;
    }
  }

  return -1;
}

console.log(majorityElement([3, 2, 3]));

///////

// 202
function isHappy(n) {
  let seen = new Set();

  while (!seen.has(n)) {
    seen.add(n);
    let sum = 0;
    while (n > 0) {
      const lastDigit = n % 10;
      n = (n - lastDigit) / 10;
      sum += lastDigit ** 2;
    }
    if (sum === 1) {
      return true;
    }

    n = sum;
  }
  return false;
}

console.log(isHappy(19345));

// 205
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (sMap[sChar] === undefined) {
      sMap[sChar] = tChar;
    }

    if (tMap[tChar] === undefined) {
      tMap[tChar] = sChar;
    }

    if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
      return false;
    }
  }
  return true;
}

console.log(isIsomorphic("foo", "bar"));

// 217
function containsDuplicate(nums) {
  if (!nums.length) {
    return [];
  }

  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));

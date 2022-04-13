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

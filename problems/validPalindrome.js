// Given a string s, return true if the s can be palindrome
// after deleting at most one character from it.

// Input: s = "aba"
// Output: true

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Input: s = "abc"
// Output: false

// 680. Valid Palindrome II
function validPalindrome(str) {
  let leftPointer = 0;
  let rightPointer = str.length - 1;
  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      const checkLeft = checkInnerPalindrome(
        leftPointer + 1,
        rightPointer,
        str
      );
      const checkRight = checkInnerPalindrome(
        leftPointer,
        rightPointer - 1,
        str
      );
      return checkLeft || checkRight;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}

function checkInnerPalindrome(leftPointer, rightPointer, str) {
  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}

console.log(validPalindrome("abca"));

// Given two strings s and goal, return true if and only if
// s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the rightmost position.
// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Input: s = "abcde", goal = "cdeab"
// Output: true

// Input: s = "abcde", goal = "abced"
// Output: false

// 796. Rotate String
function rotateString(str, goal) {
  const n = str.length;
  for (let i = 0; i < n; i++) {
    str = str.substring(1) + str[0];
    console.log(str.substring(1));
    if (str === goal) return true;
  }
  return false;
}

console.log(rotateString("abcde", "cdeab"));

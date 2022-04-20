// Given a string s, check if it can be constructed
// by taking a substring of it and appending multiple copies of the substring together.

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Input: s = "aba"
// Output: false

// 459
function repeatedSubstringPattern(str) {
  for (let i = parseInt(str.length / 2); i >= 1; i--) {
    console.log("i", i);
    if (str.length % i === 0) {
      console.log("str.length % i === 0", str.length % i === 0);
      let j = i;
      const sub = str.substring(0, j);
      while (str.indexOf(sub, j) == j) {
        j += i;
      }
      if (j == str.length) return true;
    }
  }
  return false;
}

console.log(repeatedSubstringPattern("abaaba"));

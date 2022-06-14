// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original
// string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Input: s = "abc", t = "ahbgdc"
// Output: true

// Input: s = "axc", t = "ahbgdc"
// Output: false

// 392. Is Subsequence
function isSubsequence(s, t) {
  if (s.length === 0) {
    return true;
  }

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < s.length && pointer2 < t.length) {
    if (t.charAt(pointer2) === s.charAt(pointer1)) {
      pointer1++;
    }
    pointer2++;
  }

  return pointer1 === s.length;
}

console.log(isSubsequence("abc", "ahbgdc"));

// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

// 5. Longest Palindromic Substring
function longestPalindrome(str) {
  let max = [0, 1];

  for (let i = 0; i < str.length; i++) {
    let even = getPalindome(i - 1, i, str);
    let odd = getPalindome(i - 1, i + 1, str);
    let currMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax;
  }

  return str.slice(max[0], max[1]);
}

console.log(longestPalindrome("babad"));

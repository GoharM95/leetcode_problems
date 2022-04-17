// You are given two strings s and t.
// String t is generated by random shuffling string s and then
// add one more letter at a random position.
// Return the letter that was added to t.

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.

// 389
function findeTheDifference(str1, str2) {
  const charObj = {};

  for (let char of s) {
    if (!charObj[char]) {
      charObj[char] = 1;
    } else {
      charObj[char]++;
    }
  }

  for (let char of t) {
    if (charObj[char] && charObj[char] > 0) {
      charObj[char]--;
    } else {
      return char;
    }
  }
}

console.log(findeTheDifference("abcd", "abcde"));

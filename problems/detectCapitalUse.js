// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Input: word = "USA"
// Output: true

// 520
function detectCapitalUse(str) {
  let capitalCount = 0;

  for (let char of str) {
    if (char === char.toUpperCase()) {
      capitalCount++;
    }
  }

  return (
    capitalCount === str.length ||
    capitalCount === 0 ||
    (str[0] === str[0].toUpperCase() && capitalCount === 1)
  );
}

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("leetcode"));
console.log(detectCapitalUse("Google"));

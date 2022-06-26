// Given a string licensePlate and an array of strings words, find the shortest completing word in words.
// A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.
// For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".
// Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.

// Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
// Output: "steps"
// Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
// "step" contains 't' and 'p', but only contains 1 's'.
// "steps" contains 't', 'p', and both 's' characters.
// "stripe" is missing an 's'.
// "stepple" is missing an 's'.
// Since "steps" is the only word containing all the letters, that is the answer.

// Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
// Output: "pest"
// Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.

// 748. Shortest Completing Word
function shortestCompletingWord(str, words) {
  const lettersArr = str
    .split("")
    .filter(
      (elem) =>
        elem.toLowerCase().charCodeAt(0) >= 97 &&
        elem.toLowerCase().charCodeAt(0) <= 122
    );

  const strCharCount = {};

  for (let char of lettersArr) {
    char = char.toLowerCase();
    strCharCount[char] = (strCharCount[char] || 0) + 1;
  }

  const countToCompare = [...Object.values(strCharCount)].reduce(
    (curr, next) => curr + next
  );

  const arrWithRightWords = [];

  for (let i = 0; i < words.length; i++) {
    const wordCharCount = {};
    for (let char of words[i]) {
      wordCharCount[char] = (wordCharCount[char] || 0) + 1;
    }

    let count = 0;
    for (let char in strCharCount) {
      if (wordCharCount[char]) {
        count += wordCharCount[char];
      }
    }

    if (countToCompare === count) {
      arrWithRightWords.push(words[i]);
    }
  }

  const sortedWordsByLength = arrWithRightWords.sort(
    (curr, next) => curr.length - next.length
  );

  return sortedWordsByLength[0];
}

console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
);

console.log(
  shortestCompletingWord("AN87005", [
    ("participant",
    "individual",
    "start",
    "exist",
    "above",
    "already",
    "easy",
    "attack",
    "player",
    "important"),
  ])
);

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".

// 804. Unique Morse Code Words
const alphabetInMorse = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

function uniqueMorseRepresentations(words) {
  const alphabetInMorseObj = {};

  const alphabetStr = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .forEach((letter, index) => {
      alphabetInMorseObj[letter] = alphabetInMorse[index];
    });

  const wordsInMorseArr = words.map((word) => {
    let wordInMorse = "";

    word.split("").forEach((letter) => {
      return (wordInMorse += alphabetInMorseObj[letter]);
    });

    return wordInMorse;
  });

  return new Set(wordsInMorseArr).size;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

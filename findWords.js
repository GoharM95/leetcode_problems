// Given an array of strings words,
// return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl",
// the third row consists of the characters "zxcvbnm".

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]

// 500
function isRightWord(word) {
  const firstRow = "qwertyuiop";
  const secondRow = "asdfghjkl";
  const thirdRow = "zxcvbnm";

  let firstRowCount = 0;
  let secondRowCount = 0;
  let thirdRowCount = 0;

  const wordLength = word.length;

  for (let char of word) {
    if (firstRow.includes(char)) {
      firstRowCount++;
    }

    if (secondRow.includes(char)) {
      secondRowCount++;
    }

    if (thirdRow.includes(char)) {
      thirdRowCount++;
    }
  }
  return (
    firstRowCount === wordLength ||
    secondRowCount === wordLength ||
    thirdRowCount === wordLength
  );
}

function findWords(arr) {
  return arr.filter((word) => isRightWord(word.toLowerCase()));
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

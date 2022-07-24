// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string str, int numRows);

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// 6. Zigzag Conversion
function convert(str, numRows) {
  if (numRows === 1) return str;
  const arr = new Array(numRows).fill("").map(() => new Array(1).fill(""));
  const length = str.length;
  let count = 0;
  let isIncreasing = true;
  for (let i = 0; i < length; i++) {
    arr[count].push(str[i]);
    if (isIncreasing) {
      count++;
    } else {
      count--;
    }

    if (count == numRows - 1 || count === 0) {
      isIncreasing = !isIncreasing;
    }
  }

  let result = "";
  arr.forEach((subArr) => {
    result += subArr.join("");
  });

  return result;
}

console.log(convert("PAYPALISHIRING", 3));

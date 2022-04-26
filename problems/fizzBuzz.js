// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// 412

// a
function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

console.log(fizzBuzz(15));

// b
// if we want additional options (i % 7 === 0 ? "Jazz")
function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) {
      str += "Fizz";
    }

    if (i % 5 === 0) {
      str += "Buzz";
    }

    if (i % 7 === 0) {
      str += "Jazz";
    }

    if (!str) {
      str += i.toString();
    }
    result.push(str);
  }

  return result;
}

console.log(fizzBuzz(15));

// c
function fizzBuzz(n) {
  const result = [];

  const map = {
    3: "Fizz",
    5: "Buzz",
    7: "Jazz",
  };

  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let key in map) {
      if (i % parseInt(key, 10) === 0) {
        str += map[key];
      }
    }

    if (!str) {
      str += i.toString();
    }
    result.push(str);
  }

  return result;
}

console.log(fizzBuzz(15));

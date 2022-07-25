// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8

// 1572. Matrix Diagonal Sum
function diagonalSum(matrix) {
  let sum = 0;
  matrix.map((arr, index) => {
    sum += arr[index] + arr[arr.length - 1 - index];
  });

  if (matrix.length % 2 === 1) {
    let center = Math.floor(matrix.length / 2);
    sum -= matrix[center][center];
  }
  return sum;
}

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);

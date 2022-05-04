// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

// 566
function matrixReshape(nums, finalRows, finalCols) {
  const rows = nums.length;
  const cols = nums[0].length;

  const arr = [];
  const reshapedMatrix = new Array(finalRows)
    .fill(0)
    .map(() => new Array(finalCols).fill(0));

  if (rows * cols !== finalRows * finalCols) {
    return nums;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      arr.push(nums[i][j]);
    }
  }

  for (let i = finalRows - 1; i >= 0; i--) {
    for (let j = finalCols - 1; j >= 0; j--) {
      reshapedMatrix[i][j] = arr.pop();
    }
  }
  return reshapedMatrix;
}

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);

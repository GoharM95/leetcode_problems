// 42. Trapping Rain Water
function trap(height) {
  if (height === null) {
    return 0;
  }

  let totalWater = 0;
  let length = height.length;
  let leftMax = [];
  let rightMax = [];
  leftMax[0] = height[0];

  for (let i = 1; i < length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  rightMax[length - 1] = height[length - 1];

  for (let i = length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  for (let i = 1; i < length - 1; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return totalWater;
}

console.log(trap([4, 2, 0, 3, 2, 5]));

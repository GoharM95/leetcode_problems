// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// 605. Can Place Flowers
function canPlaceFlowers(flowerbed, n) {
  let flowers = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i] && !flowerbed[i + 1] && !flowerbed[i - 1]) {
      flowers++;
      i++;
    }
  }
  return flowers >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0, 1], 1));

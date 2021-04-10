/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const allSonterArr = arr.slice().sort((a, b) => a - b).filter((item) => item !== -1);
  const totalArr = [];

  arr.forEach((item) => {
    if (item === -1) {
      totalArr.push(-1);
    } else {
      totalArr.push(allSonterArr.shift());
    }
  });

  return totalArr;
}

module.exports = sortByHeight;

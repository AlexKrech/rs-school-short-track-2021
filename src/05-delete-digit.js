/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = String(n);
  const digitCombination = [];

  digits = digits.split('');

  for (let i = 0; i < digits.length; i++) {
    let bufferArr = digits.slice();

    bufferArr.splice(i, 1);

    bufferArr = +bufferArr.join('');

    digitCombination.push(bufferArr);
  }

  return Math.max(...digitCombination);
}

module.exports = deleteDigit;

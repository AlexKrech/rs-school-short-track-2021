/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encStr = str.split('');
  let counter = 1;
  for (let i = 0; i < encStr.length; i++) {
    if (encStr[i] === encStr[i + 1]) {
      counter++;
      encStr.splice(i + 1, 1);
      i--;
    } else if (counter > 1) {
      encStr[i] = `${counter}${encStr[i]}`;
      counter = 1;
    }
  }
  return encStr.join('');
}

module.exports = encodeLine;

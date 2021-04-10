/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const compareArr = n.split('-');
  let numbers = n.split('-');

  numbers = numbers.map((item) => `0x${item}`).map(((item) => +item.toString()));

  numbers = numbers.filter((item) => Number.isFinite(item));

  return numbers.length === compareArr.length;
}

module.exports = isMAC48Address;

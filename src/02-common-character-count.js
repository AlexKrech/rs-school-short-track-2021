/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCharactersCounter = 0;

  const s1Arr = s1.split('');
  const s2Arr = s2.split('');

  const unicalCharacters = new Set(s1Arr);

  unicalCharacters.forEach((character) => {
    const charactersFromS1 = s1Arr.filter((item) => item === character).length;
    const charactersFromS2 = s2Arr.filter((item) => item === character).length;

    if (charactersFromS1 > 0 && charactersFromS2 > 0) {
      commonCharactersCounter += Math.min(charactersFromS1, charactersFromS2);
    }
  });

  // for (const character of unicalCharacters) {
  //   const charactersFromS1 = s1Arr.filter((item) => item === character).length;
  //   const charactersFromS2 = s2Arr.filter((item) => item === character).length;

  //   if (charactersFromS1 > 0 && charactersFromS2 > 0) {
  //     commonCharactersCounter += Math.min(charactersFromS1, charactersFromS2);
  //   }
  // }
  return commonCharactersCounter;
}

module.exports = getCommonCharacterCount;

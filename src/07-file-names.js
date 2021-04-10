/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const unicalNames = new Set(names);
  let retArr = names.slice();

  unicalNames.forEach((name) => {
    let k = 0;
    retArr = retArr.map((item) => {
      if (item === name && k > 0) {
        const newItem = `${item}(${k})`;
        k++;
        return newItem;
      }
      if (item === name) {
        k++;
        return item;
      }
      return item;
    });
  });

  return retArr;
}

module.exports = renameFiles;

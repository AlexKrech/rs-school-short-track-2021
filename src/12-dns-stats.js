/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const retObj = {};
  let domainsSegment = domains;
  domainsSegment = domainsSegment.map((item) => item.split('.'));
  domainsSegment = domainsSegment.map((item) => item.reverse());
  domainsSegment = domainsSegment.map((item) => {
    const newItem = [];
    for (let i = 0; i < item.length; i++) {
      let DNS = '';
      for (let j = 0; j <= i; j++) {
        DNS = `${DNS}.${item[j]}`;
      }
      newItem.push(DNS);
    }
    return newItem;
  });
  domainsSegment.forEach((item) => domainsSegment.push(...domainsSegment.shift(item)));
  domainsSegment.forEach((item) => {
    if (item in retObj) {
      retObj[item]++;
    } else {
      retObj[item] = 1;
    }
  });
  return retObj;
}

module.exports = getDNSStats;

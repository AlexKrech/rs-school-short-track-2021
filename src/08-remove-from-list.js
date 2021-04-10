/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  let filterArr = [];
  let lClone = l;

  while (lClone) {
    filterArr.push(lClone.value);
    lClone = lClone.next;
  }

  filterArr = filterArr.map((item) => `${item}`);
  filterArr = filterArr.filter((item) => !item.includes(k)).map((item) => +item).reverse();
  let newList = null;

  filterArr.forEach((item) => {
    if (newList) {
      const node = new ListNode(item);
      node.next = newList;
      newList = node;
      return newList;
    }
    newList = new ListNode(item);
    return newList;
  });

  return newList;
}

module.exports = removeKFromList;

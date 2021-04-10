const ListNode = require('../extensions/list-node');
/**
  * Implement the Queue with a given interface via linked list (use ListNode extension above).
  *
  * @example
  * const queue = new Queue();
  *
  * queue.enqueue(1); // adds the element to the queue
  * queue.enqueue(3); // adds the element to the queue
  * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
  *
  */

class Queue {
  constructor() {
    this.queue = null;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    if (this.queue === null) {
      this.bottom = new ListNode(element);
      this.queue = this.bottom;
    } else {
      this.bottom.next = new ListNode(element);
      this.bottom = this.bottom.next;
    }
  }

  dequeue() {
    const { value } = this.queue;
    this.queue = this.queue.next;
    return value;
  }
}

module.exports = Queue;

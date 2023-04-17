const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queueElements = {};
    this.whoIsEntered = 0;
    this.firstEntered = 0;
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    this.queueElements[this.whoIsEntered] = value;
    this.whoIsEntered++;
  }

  dequeue() {
    const deleted = this.queueElements[this.firstEntered];
    delete this.queueElements[this.firstEntered];
    this.firstEntered++;
    return deleted;
  }
}

module.exports = {
  Queue
};

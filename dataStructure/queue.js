class Queue {
  constructor() {
    this.collection = [];
  }
  enqueue(element) {
    return this.collection.push(element);
  }
  dequeue() {
    return this.collection.shift();
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    reutrn(this.collection.length === 0);
  }
}
const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
queue.dequeue();
console.log(queue.size());

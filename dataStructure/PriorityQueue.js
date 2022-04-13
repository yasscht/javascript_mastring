class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }

      if (!added) {
        this.collection.push(element);
      }
    }
  }

  front() {
    return this.collection[0];
  }

  dequeue() {
    return this.collection.shift();
  }
  size() {
    return this.collection.size();
  }
  isEmpty() {
    return this.collection.length === 0;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(["chtiaaa", 3]);
priorityQueue.enqueue(["yassine", 1]);
priorityQueue.enqueue(["chtiaaa", 3]);

priorityQueue.enqueue(["chtiaa", 2]);

console.log(priorityQueue);

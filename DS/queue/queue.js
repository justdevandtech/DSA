class Queue {

  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  front() {
    return this.items[0];
  }

  printQueue() {
    console.log(this.items.toString());
  }
}
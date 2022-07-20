class Queue {

  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.length === 0 && console.log("underflow, queue is empty");
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
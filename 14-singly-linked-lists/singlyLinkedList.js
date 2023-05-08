// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // create a new node using the value passed
    const newNode = new Node(val);
    // if no head, set head and tail to be newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // otherwise set current tail to point to new node, and set tail to be on newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment length
    this.length++;
    return this;
  }
  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log("Traverse current: ", current.val);
  //     current = current.next;
  //   }
  // }
  pop() {
    // if no nodes return undefined
    if (!this.head) return undefined;
    // loop through list until you reach tail, keep track of 2nd to last node
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // set tail to be 2nd to last node
    this.tail = newTail;
    this.tail.next = null;
    // decrement length
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return value of node removed
    return current;
  }
  shift() {
    // if no nodes return undefined
    if (!this.head) return undefined;
    // store the current head property in a variable
    let currentHead = this.head;
    // set new head to be next head
    this.head = currentHead.next;
    // decrement length
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
}

const list = new SinglyLinkedList();
console.log(list);
list.push("HELLO");
console.log(list);
list.push("GOODBYE");
console.log(list);
list.push("TOODLES");
console.log(list);
// list.traverse();
// console.log("Pop: ", list.pop()); // TOODLES
// console.log("Pop: ", list.pop()); // GOODBYE
// console.log("Pop: ", list.pop()); // HELLO
// console.log("Pop: ", list.pop()); // Undefined
console.log("Shift: ", list.shift()); // HELLO
console.log("Shift: ", list.shift()); // GOODBYE
console.log("Shift: ", list.shift()); // TOODLES
console.log("Shift: ", list.shift()); // Undefined

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");

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
}

const list = new SinglyLinkedList();
console.log(list);
list.push("HELLO");
console.log(list);
list.push("GOODBYE");
console.log(list);

// const first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");

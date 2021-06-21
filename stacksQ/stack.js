class Stack {
    // linkedlist but add at start and remove at start
    constructor() {
        this.head = null;
        this.size = 0;
    }
    push(value) {
        let node = new Node(value);
        this.size++;
        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return this.size;
    }

    pop() {
        if (this.size > 0) {
            this.size--;
            let node = this.head;
            this.head = this.head.next;
            let val = node.value;
            node = null;
            return val;
        }
        return null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    push(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let headPointer = this.head;
            while (headPointer.next) {
                headPointer = headPointer.next;
            }
            headPointer.next = node;
        }
    }
    pop() {
        let headPointer = this.head;
        if (!headPointer) return null;
        if (!headPointer.next) {
            let value = headPointer.value;
            this.head = null;
            return value;
        }
        while (headPointer.next.next != null) {
            headPointer = headPointer.next;
        }
        let value = headPointer.next.value;
        headPointer.next = null;
        return value;
    }
    print() {
        let headPointer = this.head;
        while (headPointer) {
            console.log(headPointer.value);
            headPointer = headPointer.next;
        }
    }
    contains(value) {
        let headPointer = this.head;
        while (headPointer) {
            if (headPointer.value == value) return true;
            headPointer = headPointer.next;
        }
        return false;
    }
    reverse() {
        if (!this.head || !this.head.next) return;
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let sll = new SinglyLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.print();

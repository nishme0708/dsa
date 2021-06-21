class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            let start = this.head;
            while (start.next != null) {
                start = start.next;
            }
            start.next = new Node(value);
        }
    }
    print() {
        let start = this.head;
        let arr = [];
        while (start != null) {
            arr.push(start.value);
            start = start.next;
        }
        console.log('printing', arr);
    }
    remove(value) {
        let start = this.head;
        if (this.head.value === value) {
            let node = this.head;
            this.head = this.head.next;
            node = null;
        }
        while (start.next != null) {
            let nextNode = start.next;
            if (nextNode.value === value) {
                start.next = nextNode.next;
                nextNode = null;
            }
            start = start.next;
        }
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.print();
list.remove(1);
list.remove(4);
list.print();

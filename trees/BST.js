class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            let start = this.root;
            while (true) {
                let currValue = start.value;
                if (value < currValue) {
                    if (start.left) start = start.left;
                    else {
                        start.left = new Node(value);
                        break;
                    }
                } else {
                    if (start.right) start = start.right;
                    else {
                        start.right = new Node(value);
                        break;
                    }
                }
            }
        }
    }
    print() {
        console.log(this.root);
    }
    find(value) {
        let start = this.root;
        let found = false;
        while (true) {
            let val = start.value;
            if (val === value) {
                found = true;
                break;
            }
            if (value > val) {
                if (start.right) {
                    start = start.right;
                } else {
                    break;
                }
            } else {
                if (start.left) {
                    start = start.left;
                } else {
                    break;
                }
            }
        }
        return found;
    }

    BFS() {
        let start = this.root;
        let queue = [];
        let result = [];
        queue.push(start);
        while (queue.length) {
            let element = queue.shift();
            result.push(element.value);
            if (element.left) {
                queue.push(element.left);
            }
            if (element.right) {
                queue.push(element.right);
            }
        }
        console.log(result);
    }

    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        console.log(data);
    }
}

var bst = new BST();
bst.add(10);
bst.add(8);
bst.add(12);
bst.add(11);
bst.add(13);
bst.add(6);
bst.add(9);
bst.print();

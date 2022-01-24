class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let node = new Node(value);
        if (this.root) {
            let parent = this.root;
            while (true) {
                if (parent.value > value) {
                    if (parent.left == null) {
                        parent.left = node;
                        break;
                    } else {
                        parent = parent.left;
                    }
                } else {
                    if (parent.right == null) {
                        parent.right = node;
                        break;
                    } else {
                        parent = parent.right;
                    }
                }
            }
        } else {
            this.root = node;
        }
    }

    find(value) {
        let parent = this.root;
        let found = false;
        while (parent) {
            if (parent.value == value) {
                found = true;
                break;
            }
            if (parent.value > value) {
                parent = parent.left;
            } else {
                parent = parent.right;
            }
        }
        return found;
    }

    bfs() {
        let res = [];
        let queue = [];
        let parent = this.root;
        if (parent) {
            queue.push(parent);
            while (queue.length) {
                let element = queue.shift();
                res.push(element.value);
                if (element.left) {
                    queue.push(element.left);
                }
                if (element.right) {
                    queue.push(element.right);
                }
            }
        }
        return res;
    }

    dfsPRE() {
        let res = [];
        let parent = this.root;
        function traverse(node) {
            if (node == null) return;
            res.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(parent);
        return res;
    }

    dfsPOST() {
        let res = [];
        let current = this.root;
        function traverse(node) {
            if (!node) {
                return;
            }
            traverse(node.left);
            traverse(node.right);
            res.push(node.value);
        }
        traverse(current);
        return res;
    }

    dfsIN() {
        let res = [];
        let current = this.root;
        function traverse(node) {
            if (!node) return;
            traverse(node.left);
            res.push(node.value);
            traverse(node.right);
        }
        traverse(current);
        return res;
    }

    mirror(node) {
        // your code here
        function traverse(node) {
            debugger;
            if (!node) return;
            if (!node.left && !node.right) return;
            traverse(node.left);
            traverse(node.right);
            let temp = node.left;
            node.left = node.right;
            node.right = temp;
            return node;
        }
        traverse(node);
    }
}

let b = new BST();
b.insert(10);
b.insert(6);
b.insert(15);
b.insert(3);
b.insert(8);
b.insert(20);

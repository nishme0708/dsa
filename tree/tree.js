class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insertBFS(value) {
        let node = new Node(value);
        let q = [];
        let curr = this.root;
        q.push(curr);
        while (q.length) {
            let item = q.shift();
            if (item.left) {
                q.push(item.left);
            } else {
                item.left = node;
                break;
            }
            if (item.right) {
                q.push(item.right);
            } else {
                item.right = node;
                break;
            }
        }
    }

    printBFS() {
        let curr = this.root;
        let q = [];
        q.push(curr);
        let res = [];
        while (q.length) {
            let item = q.shift();
            res.push(item.value);
            if (item.left) {
                q.push(item.left);
            }
            if (item.right) {
                q.push(item.right);
            }
        }
        console.log(res);
    }

    del(value) {
        let curr = this.root;
        let found = null;
        let del = null;
        function traverse(node) {
            if (node == null || found) return;
            if (node.value == value) {
                found = node;
                return;
            }
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        function findright(node) {
            if (node == null) return;
            if (node.right) {
                let val = findright(node.right);
                if (val) node.right = null;
            } else {
                del = node;
                return true;
            }
        }
        traverse(curr);
        if (found) {
            findright(curr);
            if (del) {
                if (found == del) { found = null;   } else {  found.value = del.value;   del = null;   }
            }
        }
    }
}

let t = new Tree();
let item = new Node(10);
let item1 = new Node(11);
let item2 = new Node(9);
let item3 = new Node(7);
let item4 = new Node(15);
let item5 = new Node(8);

item.left = item1;
item.right = item2;
item1.left = item3;
item2.left = item4;
item2.right = item5;

t.root = item;

let n = new Tree();
n.root = new Node(10);
n.root.left = new Node(20);
n.root.right = new Node(30);

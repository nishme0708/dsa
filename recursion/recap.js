function rev(str) {
    if (str == '') return '';
    return rev(str.substring(1)) + str[0];
}
function ispalin(str) {
    return palin(str, 0, str.length - 1);
}

function palin(str, i, j) {
    if (i >= j) return true;
    return str[i] == str[j] && palin(str, i + 1, j - 1);
}

function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}

function revLL(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let node = revLL(head.next);
    head.next.next = head;
    head.next = null;
    return node;
}

function mLL(node1, node2) {
    if (node1 == null) return node2;
    if (node2 == null) return node1;
    if (node1.value < node2.value) {
        node1.next = mLL(node1.next, node2);
        return node1;
    } else {
        node2.next = mLL(node2.next, node1);
        return node2;
    }
}

function printL(root) {
    if (root === null) return null;
    if (root.left == null && root.right == null) {
        console.log(root.value);
        return null;
    }
    printL(root.left);
    printL(root.right);
}

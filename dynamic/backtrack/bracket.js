function bracket(n) {
    return brack(n, n);
}

function brack(m, n) {
    if (m > n || m < 0 || n < 0) return null;
    if (m === 0 && n === 0) return [''];
    let res = [];
    let left = brack(m - 1, n);
    if (left != null) {
        left = left.map((item) => '(' + item);
        res = res.concat(left);
    }
    let right = brack(m, n - 1);
    if (right !=null) {
        right = right.map((item) => ')' + item);
        res = res.concat(right);
    }
    return res;
}

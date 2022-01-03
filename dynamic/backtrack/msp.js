function msp(arr, i = 0, j = 0) {
    debugger;
    if (arr.length == 0) return 0;
    let totalrow = arr.length;
    let totalcol = arr[0].length;
    if (i >= totalrow || j >= totalcol) return null;
    if (i == totalrow - 1 && j == totalcol - 1) return 0;
    let left = msp(arr, i + 1, j);
    let right = msp(arr, i, j + 1);
    if (left != null && right != null) {
        return Math.min(left + arr[i + 1][j], right + arr[i][j + 1]);
    }
    if (left != null) {
        left += arr[i + 1][j];
        return left;
    }
    right += arr[i][j + 1];
    return right;
}

function msp1(arr) {
    let tr = arr.length;
    let tc = arr[0].length;
    let table = Array(tr).fill().map(() => Array(tc).fill(0));
    table[0][0] = arr[0][0];
    for (let i = 0; i < tr; i++) {
        for (let j = 0; j < tc; j++) {
            let l = 0;
            let r = 0;
            if (i - 1 >= 0) {
                l = arr[i - 1][j];
            }
            if (j - 1 >= 0) {
                r = arr[i][j - 1];
            }
            table[i][j] = arr[i][j] + Math.min(l, r);
        }
    }
    return table[tr - 1][tc - 1];
}

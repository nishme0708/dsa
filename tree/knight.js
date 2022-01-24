function knight(n) {
    let arr = Array(n).fill().map(() => Array(n).fill(null));
    let val = find(0, 0, arr, 0);
    console.log(val ? arr : 'false');
}

function find(i, j, arr, total) {
    debugger;
    if (total == arr.length * arr.length) {
        return true;
    }
    if (i >= arr.length || j >= arr.length || i < 0 || j < 0) {
        return false;
    }
    if (arr[i][j] != null) {
        return false;
    } else {
        arr[i][j] = total;
        total++;
    }
    let n1 = find(i + 1, j + 2, arr, total);
    let n2 = find(i + 2, j + 1, arr, total);
    let n3 = find(i - 1, j + 2, arr, total);
    let n4 = find(i + 1, j - 2, arr, total);
    let n5 = find(i - 2, j + 1, arr, total);
    let n6 = find(i + 2, j - 1, arr, total);
    let n7 = find(i - 2, j - 1, arr, total);
    let n8 = find(i - 1, j - 2, arr, total);
    if (n1 || n2 || n3 || n4 || n5 || n6 || n7 || n8) {
        return true;
    } else {
        arr[i][j] = null;
        total--;
        return false;
    }
}

function rat(arr, i = 0, j = 0) {
    if (i >= arr.length || j >= arr.length) return null;
    if (i == arr.length - 1 && j == arr.length - 1) return [''];
    if (!arr[i][j]) return null;
    let res = [];
    let down = rat(arr, i + 1, j);
    if (down != null) {
        down = down.map((item) => 'D' + item);
        res = res.concat(down);
    }
    let right = rat(arr, i, j + 1);
    if (right != null) {
        right = right.map((item) => 'R' + item);
        res = res.concat(right);
    }
    return res;
}

let ratArr = [ [ 1, 0, 0, 0 ], [ 1, 1, 0, 1 ], [ 1, 1, 0, 0 ], [ 0, 1, 1, 1 ] ];
let ratArr1 = [[0,1,0],[0,0,0],[1,1,1]];
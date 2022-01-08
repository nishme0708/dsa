function lps(arr) {
    return lps1(arr, 0, arr.length - 1);
}

function lps1(arr, i, j) {
    if (i == j) {
        return 1;
    }
    if (i > j) {
        return 0;
    }
    let one = arr[i];
    let two = arr[j];
    if (one == two) {
        return 2 + lps1(arr, i + 1, j - 1);
    } else {
        return Math.max(lps1(arr, i + 1, j), lps1(arr, i, j - 1));
    }
}

function lps2(arr) {
    let max = 0;
    let res = '';
    let n = arr.length;
    let table = Array(n).fill().map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = n - i, x = 0, y = x + i; j > 0; j--, x++, y++) {
            if (x == y) {
                table[x][y] = 1;
                continue;
            }
            if (arr[x] == arr[y]) {
                table[x][y] = 2 + table[x + 1][y - 1];
            } else {
                table[x][y] = Math.max(table[x + 1][y], table[x][y - 1]);
            }
            if (table[x][y] > max) {
                max = table[x][y];
                res = arr.slice(x, y);
            }
        }
    }
    console.log(table[0][n - 1]);
    return res;
}

function lps3(arr) {
    if (arr.length == 0 || arr.length == 1) return arr;
    let n = arr.length;
    let max = 0;
    let res = '';
    let table = Array(n).fill().map(() => Array(n).fill(false));
    for (let i = 0; i < n; i++) {
        for (let j = n - i, x = 0, y = x + i; j > 0; j--, x++, y++) {
            if (x == y) {
                table[x][y] = true;
            } else if (arr[x] == arr[y] && (table[x + 1][y - 1] || y - x == 1)) {
                table[x][y] = true;
            }
            let nmax = y - x + 1;
            if (table[x][y] && nmax > max) {
                max = nmax;
                res = arr.slice(x, y + 1);
            }
        }
    }
    return res;
}

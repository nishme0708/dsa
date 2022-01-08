function mdpcall(arr) {
    return mdp(arr, 0, arr.length - 1);
}
function mdp(arr, i, j) {
    if (i > j) return null;
    if (arr.length == 0 || arr.length == 1) return arr.length;
    if (i == j) return 0;
    if (arr[i] == arr[j]) {
        return mdp(arr, i + 1, j - 1);
    } else {
        return 1 + Math.min(mdp(arr, i + 1, j), mdp(arr, i, j - 1));
    }
}

function mdptab(arr) {
    let n = arr.length;
    let table = Array(n).fill().map(() => Array(n).fill(0));
    for (let m = 1; m < n; m++) {
        let j = m;
        let i = 0;
        while (i < n  && j < n ) {
            if (arr[i] == arr[j]) {
                table[i][j] = table[i+1][j-1];
            } else {
                table[i][j] = 1 + Math.min(table[i + 1][j], table[i][j - 1]);
            }
            i++, j++;
        }
    }
    debugger;
    return table[0][n - 1];
}

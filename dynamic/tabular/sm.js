function sm(str1, str2, i = 0, j = 0) {
    debugger;
    // if (i == str1.length - 1 && i == j) {
    //     return 0;
    // }
    if (str1 === '' && str2 === '') {
        return 0;
    }
    if (i >= str1.length && j >= str2.length) {
        return 0;
    }
    let ia = true;
    let ra = true;
    let da = true;
    if (i >= str1.length) {
        ia = false;
        ra = false;
    }
    if (j >= str2.length) {
        ra = true;
        da = true;
    }
    if (str1[i] == str2[j]) {
        return sm(str1, str2, i + 1, j + 1);
    }
    let insert = 0;
    if (ia) {
        insert = sm(str1, str2, i + 1, j);
    }
    let replace = 0;
    if (ra) {
        replace = sm(str1, str2, i + 1, j + 1);
    }
    let del = 0;
    if (da) {
        del = sm(str1, str2, i, j + 1);
    }
    return 1 + Math.min(insert, replace, del);
}

function smr(a, b) {
    let m = a.length;
    let n = b.length;
    let table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0) {
                table[i][j] = j;
                continue;
            }
            if (j == 0) {
                table[i][j] = i;
                continue;
            }
            if (a[i-1] == b[j-1]) {
                table[i][j] = table[i - 1][j - 1];
            } else {
                let ins = table[i][j - 1];
                let d = table[i - 1][j];
                let r = table[i - 1][j - 1];
                table[i][j] = 1 + Math.min(ins, d, r);
            }
        }
    }
    return table[m][n];
}

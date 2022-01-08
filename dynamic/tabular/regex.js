function regex(str, reg, i = 0, j = 0) {
    debugger;
    if (i == str.length && j == reg.length) {
        return true;
    }
    if (j >= reg.length) {
        return false;
    }

    let one = str[i];
    let two = reg[j];
    if (i >= reg.length) {
        one = '';
    }
    if (two === '.' || one === two) {
        return regex(str, reg, i + 1, j + 1);
    }
    if (two === '*') {
        if (one === '') {
            return regex(str, reg, i, j + 1);
        } else {
            return regex(str, reg, i + 1, j) || regex(str, reg, i, j + 1);
        }
    }
    if (one != two) {
        return false;
    }
}

// if equal - diag
// else
// . -> diag
// * -> up || left
// not equal -> straight away false
function regexT(str, reg) {
    let m = str.length;
    let n = reg.length;
    let table = Array(m + 1).fill().map(() => Array(n + 1).fill(false));
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0 && j == 0) {
                table[i][j] = true;
                continue;
            }
            if (j == 0) {
                table[i][j] = false;
                continue;
            }
            let one = '';
            if (i != 0) {
                one = str[i - 1];
            }
            let two = reg[j - 1];
            if (one === two) {
                table[i][j] = table[i - 1][j - 1];
            } else {
                if (two == '.') {
                    table[i][j] = table[i - 1][j - 1];
                } else if (two == '*') {
                    if (one == reg[j - 2]) {
                        table[i][j] = table[i][j - 1] || table[i - 1][j];
                    } else {
                        table[i][j] = table[i][j - 2];
                    }
                } else {
                    table[i][j] = false;
                }
            }
        }
    }
    return table[m][n];
}

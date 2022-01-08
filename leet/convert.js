function convert(str) {
    let res = 0;
    let multiplier = 1;
    let parsed = false;
    for (let i = 0; i < str.length; i++) {
        let curr = str[i];
        if (curr == ' ') {
            if (parsed) {
                break;
            }
        } else if (curr == '-' && !parsed) {
            multiplier = -1;
            parsed = true;
        } else if (curr == '+' && !parsed) {
            parsed = true;
        } else if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
            parsed = true;
            res = res * 10 + +curr;
        } else {
            break;
        }
    }
    res = res * multiplier;
    res = Math.min(res, Math.pow(2, 31) - 1);
    res = Math.max(res, Math.pow(-2, 31));
    return res;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let m = s.length;
    let n = p.length;
    let table = Array(m + 1).fill().map(() => Array(n + 1).fill(false));
    table[0][0] = true;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0 && j == 0) {
                table[i][j] = true;
                continue;
            }
            if (s[i - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.')) {
                table[i][j] = table[i - 1][j - 1];
            } else {
                if (p[j - 1] == '*') {
                    if (s[i - 1] && (s[i - 1] == p[j - 2] || p[j - 2] == '.')) {
                        table[i][j] = table[i - 1][j] || table[i][j - 1] || table[i][j - 2];
                        // if (p[j - 2] == '.') {
                        //     table[i][j] = table[i - 1][j] || table[i][j - 1] || table[i][j - 2];
                        // } else {
                        //     table[i][j] = table[i - 1][j] || table[i][j - 1];
                        // }
                    } else {
                        table[i][j] = table[i][j - 2];
                    }
                } else {
                    table[i][j] = false;
                }
            }
        }
    }
    console.log(table);
    return table[m][n];
};

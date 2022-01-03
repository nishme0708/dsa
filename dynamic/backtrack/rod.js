let p = [ 0, 1, 5, 8, 9, 10, 17, 17, 20 ];
function rod(len, div = false) {
    if (len === 0) {
        return 0;
    }
    if (len < 0) {
        return -1;
    }
    let sum = 0;
    for (let i = 1; i <= len; i++) {
        let value = rod(len - i, true);
        if (value >= 0) {
            sum = Math.max(sum, value + p[i]);
        }
    }
    return sum;
}

function rod1(len) {
    let table = Array(len + 1).fill(0);
    table[0] = 0;
    table[1] = p[1];
    let cuts = [];
    for (let i = 2; i <= len; i++) {
        let max = 0;
        let cut = -1;
        for (let j = 1; j <= i; j++) {
            if (table[i - j] + p[j] > max) {
                max = table[i - j] + p[j];
                cut = j;
            }
        }
        table[i] = max;
        cuts[i] = cut;
    }
    let num = len;
    while (num > 0) {
        console.log(cuts[num]);
        num = num - cuts[num];
    }
    return table[len];
}

// 0 1 1 2 3 5 8 13
function fibo(n) {
    let table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i < n - 1; i++) {
        table[i + 2] = table[i] + table[i + 1];
    }
    return table[n];
}

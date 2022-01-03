function lis(arr, i = 0, cur, memo = {}) {
    debugger;
    if (arr.length == 0 || arr.length == 1) return arr.length;
    if (i == arr.length) return 0;
    if (memo[arr[i]]) return memo[arr[i]];
    let left = 0;

    if (cur === undefined || cur <= arr[i]) {
        left = lis(arr, i + 1, arr[i], memo) + 1;
    }
    let right = lis(arr, i + 1, cur, memo);
    console.log('compare', cur, arr[i], left, right);
    let max = Math.max(left, right);
    // memo[arr[i]] = max;
    return max;
}

function lis1(arr) {
    let table = Array(arr.length).fill(1);
    table[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            let prev = arr[j];
            let curr = arr[i];
            if (arr[i] > arr[j]) {
                table[i] = Math.max(table[i], 1 + table[j]);
            }
        }
    }
    return table[arr.length - 1];
}

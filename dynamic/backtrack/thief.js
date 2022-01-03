function robber(arr, i = 0) {
    if (i >= arr.length) {
        return 0;
    }
    let left = robber(arr, i + 1);
    let right = arr[i] + robber(arr, i + 2);
    return Math.max(left, right);
}

function thief(arr) {
    let table = Array(arr.length - 1).fill(0);
    table[0] = arr[0];
    table[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        table[i] = Math.max(table[i - 1], arr[i] + table[i - 2]);
    }
    return table[arr.length - 1];
}

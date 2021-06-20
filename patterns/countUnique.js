function countUniqueValues(arr) {
    let total = 0;
    let prev;
    for (let value of arr) {
        if (value != prev) {
            prev = value;
            total++;
        }
    }
    console.log(arr, total);
    return total;
}
countUniqueValues([ 1, 1, 1, 1, 2 ]);

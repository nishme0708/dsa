function howsum(target, arr) {
    let table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (let j = 0; j < arr.length; j++) {
                let num = arr[j];
                let index = i + num;
                if (index <= target) {
                    table[index] = table[i];
                    table[index] = [ ...table[index], num ];
                }
            }
        }
        if (table[target]) {
            break;
        }
    }
    return table[target];
}
//tc o(mn) * o(m) for array copy
// o(m2n)

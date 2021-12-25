function countconstruct(word, arr) {
    let table = Array(word.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= word.length; i++) {
        let current = word.slice(i);
        if (table[i]) {
            for (let j = 0; j < arr.length; j++) {
                let match = arr[j];
                if (current.indexOf(match) === 0) {
                    table[i + current.length] += 1;
                }
            }
        }
    }
    console.log(table);
    return table[word.length];
}

// tc = o(mn) * m = o(m2n)

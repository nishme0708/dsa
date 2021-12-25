function canconstruct(word, arr) {
    let table = Array(word.length + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= word.length; i++) {
        if (table[i]) {
            let current = word.slice(i);
            for (let j = 0; j < arr.length; j++) {
                if (current.indexOf(arr[j]) === 0) {
                    table[i + arr[j].length] = true;
                }
            }
        }
        if (table[word.length]) {
            break;
        }
    }
    return table[word.length];
}

// tc = o(mn) * m = o(m2n)

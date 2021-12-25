function allconstruct(word, arr) {
    let table = Array(word.length + 1).fill().map(() => []);
    table[0].push([]);
    for (let i = 0; i <= word.length; i++) {
        let current = word.slice(i);
        if (table[i].length) {
            for (let j = 0; j < arr.length; j++) {
                let match = arr[j];
                if (current.indexOf(match) === 0) {
                    let newArray = [];
                    for (let item of table[i]) {
                        newArray.push([ ...item, match ]);
                    }
                    table[i + match.length] = table[i + match.length].concat(newArray);
                }
            }
        }
    }
    return table[word.length];
}

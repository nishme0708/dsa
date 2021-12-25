// 7 , [5,3,4] true

function cansum(target, arr) {
    let table = Array(target + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= target; i++) {
        let value = table[i];
        if (value) {
            for (let j = 0; j < arr.length; j++) {
                let num = arr[j];
                let index = i+num;
                if(index>=0 && index<=target) {
                    table[index] = true;
                }
            }
        }
        if(table[target]) {
            return true;
        }
    }
    return table[target];
}

//tc o(mn)

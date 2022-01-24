function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min;
        let minIndex;
        for (let j = i; j < arr.length; j++) {
            let value = arr[j];
            if (!min || value < min) {
                min = value;
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log(arr);
}

let a = [ 3, 2, 5, 19, 7, 8, 34, 21 ];

//987
function lucky(num) {
    let res = {};
    while (num > 0) {
        let last = num % 10;
        if (res[last]) {
            return false;
        } else {
            res[last] = true;
        }
        num = parseInt(num / 10);
    }
    return true;
}

function isLucky(num) {
    let counter = 2;
    while (counter <= num) {
        if (num % counter == 0) {
            return false;
        }
        num = num - parseInt(num / counter++);
    }
    return true;
}

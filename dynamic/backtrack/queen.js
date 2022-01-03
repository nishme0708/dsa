// function queen(arr, i, n) {
//     debugger;
//     if (i == n) {
//         console.log('found', arr);
//         return true;
//     }
//     for (let j = 0; j < n; j++) {
//         if (canplace(arr, i, j,n)) {
//             arr[i][j] = 1;
//             let check = queen(arr, i + 1, n);
//             if (check) return check;
//             else             arr[i][j] = 0;
//         }
//     }
//     return false;
// }

// function canplace(arr, i, j,n) {
//     for (let index = i - 1; index >= 0; index--) {
//         if (arr[index][j]) return false;
//     }
//     while (i > 0 && j > 0) {
//         if (arr[i--][j--]) return false;
//     }
//     while (i > 0 && j < n-1) {
//         if (arr[i--][j++]) return false;
//     }
//     return true;
// }
// function qp(n) {
//     let arr = Array(n).fill().map(() => Array(n).fill(0));
//     queen(arr, 0, n);
// }

function qp(n) {
    let arr = Array(n).fill().map(() => Array(n).fill(0));
    return queen(arr, 0, n);
}

function queen(arr, i, n) {
    if (i == n) {
        return 1;
    }
    let sum = 0;
    for (let j = 0; j < n; j++) {
        if (canplace(arr, i, j, n)) {
            arr[i][j] = 1;
            let check = queen(arr, i + 1, n);
            if (check) {
                sum += check;
            }
            arr[i][j] = 0;
        }
    }
    return sum;
}

function canplace(arr, i, j, n) {
    let x = i;
    let y = j;
    for (let index = i; index >= 0; index--) {
        if (arr[index][j]) return false;
    }

    while (x >= 0 && y >= 0) {
        if (arr[x--][y--]) return false;
    }
    x = i;
    y = j;
    while (x >= 0 && y < n) {
        if (arr[x--][y++]) return false;
    }
    return true;
}

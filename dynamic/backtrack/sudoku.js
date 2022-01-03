let N = 9;
function sudoku(arr, i = 0, j = 0) {
    if (i == N - 1 && j == N) return true;
    if (j == N) {
        j = 0;
        i = i + 1;
    }
    if (arr[i][j] != 0) {
        return sudoku(arr, i, j + 1);
    }
    for (let index = 1; index <= 9; index++) {
        if (issafe(arr, i, j, index)) {
            arr[i][j] = index;
            let check = sudoku(arr, i, j + 1);
            if (!check) {
                arr[i][j] = 0;
            } else {
                return check;
            }
        }
    }
    return false;
}

function issafe(arr, i, j, val) {
    for (let index = 0; index < N; index++) {
        if (arr[i][index] == val) return false;
    }
    for (let index = 0; index < N; index++) {
        if (arr[index][j] == val) return false;
    }
    let start = i - i % 3;
    for (let x = start; x < start + 3; x++) {
        for (let y = start; y < start + 3; y++) {
            if (arr[x][y] == val) return false;
        }
    }
    return true;
}
let grid = [
    [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
    [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
    [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
    [ N, 0, 0, 8, 6, 3, 0, 0, 5 ],
    [ 0, 5, 0, 0, N, 0, 6, 0, 0 ],
    [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
    [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ]
];

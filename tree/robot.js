function robot(m, n, i = 0, j = 0) {
    if (i >= m || j >= n) return 0;
    if (i == m - 1 && j == n - 1) return 1;
    let total = 0;
    return robot(m, n, i + 1, j) + robot(m, n, i, j + 1);
}

function robot1(m, n, maze) {
    let table = Array(m).fill().map(() => Array(n).fill(0));
    table[m - 1][n - 1] = 1;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let down = 0;
            let right = 0;
            if (i + 1 <= m - 1 && maze[i + 1][j] != -1) {
                down = table[i + 1][j];
            }
            if (j + 1 <= n - 1 && maze[i][j + 1] != -1) {
                right = table[i][j + 1];
            }
            table[i][j] = table[i][j] + down + right;
        }
    }
    console.log(table);
    return table[0][0];
}

let maze = [ [ 0, 0, 0, 0 ], [ 0, -1, 0, 0 ], [ -1, 0, 0, 0 ], [ 0, 0, 0, 0 ] ];

function printRobot(arr, i = 0, j = 0, res = []) {
    let m = arr.length - 1;
    let n = arr[0].length - 1;
    if (i > m || j > n) return null;
    if (i == m && j == n) return [ [ arr[i][j] ] ];
    let fres = [];
    let down = printRobot(arr, i + 1, j, res);
    if (down) {
        down = down.map((item) => [ arr[i][j], ...item ]);
        fres = fres.concat(down);
    }
    let right = printRobot(arr, i, j + 1, res);
    if (right) {
        right = right.map((item) => [ arr[i][j], ...item ]);
        fres = fres.concat(right);
    }
    return fres;
}

// cannot directly do Array(m).fill(Array(n)) this will give single ref to all the array rows
//init
// base case
// start
function gridTraveller(m, n) {
    let table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            
            let value = table[i][j];
            if(j<n) table[i][j + 1] += value;
            if(i<m) table[i + 1][j] += value;
        }
    }
    return table[m][n];
}

//tc o(mn)
// sc o(mn)

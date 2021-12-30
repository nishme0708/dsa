// 5 - 5,4,3,2,1
function printn(n) {
    console.log(n);
    if (n === 1) {
        return;
    }
    printn(n - 1);
}

function fact(n) {
    if (n == 1) return 1;
    return n * fact(n - 1);
}

function fibo(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibo(n - 1) + fibo(n - 2);
}

let spell = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
function spellnum(n) {
    if (n >= 0 && n <= 9) {
        return spell[n];
    }
    let second = spellnum(n % 10);
    let first = spellnum(parseInt(n / 10));
    return first + ' ' + second;
}

function power(m, n) {
    if (n == 0) return 1;
    if (n == 1) return m;
    return m * power(m, n - 1);
}

function sortCheck(arr) {
    if (arr.length === 0 || arr.length === 1) return true;
    return arr[0] < arr[1] && sortCheck(arr.slice(1));
}

function printset(arr, index, output, olen) {
    if (index === arr.length) {
        let res = '';
        for (let i = 0; i < olen; i++) {
            res += output[i] + ' ';
        }
        console.log(res);
    } else {
        printset(arr, index + 1, output, olen);
        output[olen++] = arr[index];
        printset(arr, index + 1, output, olen);
    }
}

function stair(arr, target) {
    if (target === 0) return 1;
    if (target < 0) return 0;
    let sum = 0;
    for (let item of arr) {
        sum += stair(arr, target - item);
    }
    return sum;
}

function printStair(arr, target) {
    if (target === 0) return [ [] ];
    if (target < 0) return null;
    let res = [];
    for (let item of arr) {
        let value = printStair(arr, target - item);
        if (value) {
            value.map((val) => val.push(item));
            res = res.concat(value);
        }
    }
    return res;
}

function printSub(str, index, output, olen) {
    if (index === str.length) {
        console.log(output);
    } else {
        printSub(str, index + 1, output, olen);
        output[olen++] = str[index];
        printSub(str, index + 1, output, olen);
    }
}

function palin(str) {
    if (str.length === 1) return true;
    return str[0] === str[str.length - 1] && palin(str.slice(1, str.length - 1));
}
function swap(str, l, r) {
    let arr = str.split('');
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    return arr.join('');
}
function printper(str, index = 0) {
    debugger;
    if (index === str.length) {
        console.log(str);
    } else {
        let res = [];
        for (let i = index; i < str.length; i++) {
            let val = str;
            if (i != index) {
                val = swap(str, index, i);
            }
            printper(val, index + 1);
        }
    }
}

function sw(str, l, r) {
    let arr = str.split('');
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    return arr.join('');
}

function printp(str, index = 0) {
    if (index === str.length) {
        console.log(str);
    } else {
        for (let i = index; i < str.length; i++) {
            let val = str;
            if (i != index) {
                val = sw(str, index, i);
            }
            printp(val, index + 1);
        }
    }
}

function gridTravel(m, n, x, y) {
    if (x <= 0 || y <= 0 || x > m || y > n) return null;
    if (x == 1 && y == n) return [ [] ];
    let res = [];
    let up = gridTravel(m, n, x - 1, y);
    if (up) {
        up.map((item) => item.push('UP'));
        res = res.concat(up);
    }
    let right = gridTravel(m, n, x, y + 1);
    if (right) {
        right.map((item) => item.push('RIGHT'));
        res = res.concat(right);
    }
    return res;
}

function gridT(m, n) {
    return gridTravel(m, n, m, 1);
}

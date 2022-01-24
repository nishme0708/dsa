function tj(arr, max, i = 0, j = 0) {
    if (j >= arr.length) {
        return [];
    }
    let min = null;
    i = j;
    j = i + 1;
    for (let n = j; j <= arr.length; j++) {
        let m = i;
        let len = 0;
        for (; m < j; m++) {
            len += arr[m].length;
        }
        len += j - i - 1;
        if (len <= max) {
            let val = [ [ i, j ] ].concat(tj(arr, max, i, j));
            if (!min || min.length > val.length) {
                min = val;
            }
        }
    }
    return min;
}
var res = [];
var nish = [ 'nishant', 'is', 'back', 'ontrack' ];

function tfparent(arr, max) {
    let data = tj(arr, max);
    let res = [];
    for (let index = 0; index < data.length; index++) {
        let item = data[index];
        let value = arr.slice(item[0], item[1]);
        if (index == data.length - 1) {
            value = [ value.join(' ') ];
        }
        let length = value.join('').length;
        let space = max - length;
        let remSpace, each, spaceArray;
        if (value.length == 1) {
            remSpace = 0;
            each = remSpace;
            spaceArray = [ Array(remSpace).fill(' ').join('') ];
        } else {
            remSpace = space % (value.length - 1);
            each = parseInt(space / (value.length - 1));
            spaceArray = Array(value.length - 1).fill().map(() => Array(each).fill(' ').join(''));
        }
        if (remSpace == 0) {
        } else {
            let i = 0;
            while (remSpace > 0) {
                spaceArray[i++] += ' ';
                remSpace--;
            }
        }
        i = 0;
        let finalres = '';
        while (i < value.length) {
            finalres += value[i];
            if (spaceArray[i]) {
                finalres += spaceArray[i];
            }
            i++;
        }
        res.push(finalres);
    }
    return res;
}

function another(arr, max) {
    let row = [ [] ];
    let rowLength = 0;
    let rowItem = 0;
    for (let index = 0; index < arr.length; index++) {
        let item = arr[index];
        let newlen = rowLength + item.length + rowItem;
        if (newlen <= max) {
            rowLength = rowLength+item.length;
            row[row.length - 1].push(item);
            rowItem++;
        } else {
            row.push([ item ]);
            rowLength = item.length;
            rowItem = 1;
        }
    }
    let res = [];
    for (let index = 0; index < row.length - 1; index++) {
        res[index] = '';
        let item = row[index];
        let len = item.join('').length;
        let itemlen = item.length;
        let space = max - len;
        let spaceArray = [];
        if (itemlen == 1 || itemlen == 2) {
            spaceArray = [ Array(space).fill(' ').join('') ];
        } else {
            let each = parseInt(space / (itemlen - 1));
            spaceArray = Array(itemlen - 1).fill().map(() => Array(each).fill(' ').join(''));
            let rem = space % (itemlen - 1);
            let i = 0;
            while (rem > 0) {
                spaceArray[i] += ' ';
                i++;
                rem--;
            }
        }
        let resstr = '';
        for (let i = 0; i < itemlen; i++) {
            resstr += item[i];
            if (spaceArray[i]) {
                resstr += spaceArray[i];
            }
        }
        res[index] = resstr;
    }
    let last = row[row.length-1].join(' ');
    last+=Array(max-last.length).fill(' ').join('');
    res.push(last);
    return res;
}

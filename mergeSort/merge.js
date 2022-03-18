function mergeSortedArrays(arr1, arr2) {
    let res = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < arr1.length && index2 < arr2.length) {
        let elem1 = arr1[index1];
        let elem2 = arr2[index2];
        if (elem1 < elem2) {
            res.push(elem1);
            index1++;
        } else {
            res.push(elem2);
            index2++;
        }
    }
    if (index1 < arr1.length) {
        res = res.concat(arr1.slice(index1));
    }
    if (index2 < arr2.length) {
        res = res.concat(arr2.slice(index2));
    }
    return res;
}

function mergeSort(arr) {
    if (arr.length == 0 || arr.length == 1) return arr;
    if (arr.length == 2) {
        if (arr[0] < arr[1]) return arr;
        return [ arr[1], arr[0] ];
    }
    let middle = parseInt(arr.length / 2);
    let leftArray = arr.slice(0, middle);
    let rightArray = arr.slice(middle);
    return mergeSortedArrays(mergeSort(leftArray), mergeSort(rightArray));
}


// merge - log n
// mergeList - n
// final - n * logn

// space complexity - o(n)
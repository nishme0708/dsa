// [ 1, 3, 5, 7, 9 ];
function binarySearch(arr, value, start, end) {
    if (arr.length === 1) {
        if (arr[0] === value) {
            return true;
        } else {
            return -1;
        }
    }
    start = start || 0;
    end = end || arr.length - 1;
    if (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === value) {
            return mid;
        }
        if (arr[mid] > value) {
            return binarySearch(arr, value, start, mid - 1);
        } else {
            return binarySearch(arr, value, mid+1, end);
        }
    }
    return -1;
}

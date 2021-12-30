function sequence(arr) {
    if (arr.length == 0 || arr.length === 1) {
        return true;
    }
    if (arr[0] - arr[1] === -1) {
        return sequence(arr.slice(1));
    }
    return false;
}

function count(number) {
    if (number >= 0 && number <= 9) {
        return number;
    }
    return count(parseInt(number / 10)) + number % 10;
}


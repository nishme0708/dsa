function palindrome(word) {
    if (word === '' || word.length === 1) return true;
    if (word[0] === word[word.length - 1]) {
        return palindrome(word.slice(1, word.length - 1));
    }
    return false;
}

function decbin(dec) {
    if (dec == 0 || dec == 1) {
        return '' + dec;
    }
    let res = '';
    if (dec % 2 == 0) {
        res = '0';
    } else {
        res = '1';
        dec--;
    }
    return decbin(dec / 2) + res;
}

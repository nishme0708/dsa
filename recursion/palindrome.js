function palindrome(word) {
    if (word === '' || word.length === 1) return true;
    if (word[0] === word[word.length - 1]) {
        return palindrome(word.slice(1, word.length - 1));
    }
    return false;
}

function friendPair(n) {
    if (n < 0) return 0;
    if (n === 0 || n === 1) {
        return 1;
    }
    return friendPair(n - 1) + (n - 1) * friendPair(n - 2);
}

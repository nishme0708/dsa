function grid4(n) {
    if (n >= 0 && n <= 3) {
        return 1;
    }
    return grid4(n - 1) + grid4(n - 4);
}

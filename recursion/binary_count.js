function binary_count(n) {
    let tablea = Array(n + 1).fill(0);
    let tableb = Array(n + 1).fill(0);
    tablea[1] = 1;
    tableb[1] = 1;
    for (let i = 2; i <= n; i++) {
        tablea[i] = tablea[i - 1] + tableb[i - 1];
        tableb[i] = tablea[i - 1];
    }
    return tablea[n] + tableb[n];
}



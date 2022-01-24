function knap(w, v, wt, i = 0) {
    if (w.length === 0 || wt <= 0 || i >= w.length) return 0;
    if (w[i] <= wt) {
        return Math.max(v[i] + knap(w, v, wt - w[i], i + 1), knap(w, v, wt, i + 1));
    } else {
        return knap(w, v, wt - w[i], i + 1), knap(w, v, wt, i + 1);
    }
}

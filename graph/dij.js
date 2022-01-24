class weightedGraph {
    constructor() {
        this.data = {};
    }
    addVortex(v) {
        this.data[v] = [];
    }
    addEdge(a, b, w1) {
        this.data[a].push({ node: b, weight: w1 });
        this.data[b].push({ node: a, weight: w1 });
    }
}

class Graph {
    constructor() {
        this.data = {};
    }
    addVortex(vortex) {
        if (!this.data[vortex]) {
            this.data[vortex] = [];
        }
    }
    addEdge(a, b) {
        if (this.data[a] && !this.data[a].includes(b)) {
            this.data[a].push(b);
        }
        if (this.data[b] && !this.data[b].includes(a)) {
            this.data[b].push(a);
        }
    }
    removeEdge(a, b) {
        if (this.data[a].length) {
            this.data[a] = this.data[a].filter((item) => item != b);
        }
        if (this.data[b].length) {
            this.data[b] = this.data[b].filter((item) => item != a);
        }
    }

    removeVortex(a) {
        if (this.data[a].length) {
            for (let item of this.data[a]) {
                this.data[item] = this.data[item].filter((val) => val != a);
            }
        }
        delete this.data[a];
    }
    dfs(node) {
        let res = [];
        let visit = {};
        let traverse = (v) => {
            if (visit[v]) return false;
            visit[v] = true;
            res.push(v);
            for (let item of this.data[v]) {
                traverse(item);
            }
        };
        traverse(node);
        console.log(res);
    }

    bfs(node) {
        let res = [];
        let visit = {};
        let q = [ node ];
        while (q.length != 0) {
            let item = q.shift();
            if (!visit[item]) {
                visit[item] = true;
                res.push(item);
                q = q.concat(this.data[item]);
            }
        }
        console.log(res);
    }
}

let g = new Graph();
g.addVortex('a');
g.addVortex('b');
g.addVortex('c');
g.addVortex('d');
g.addVortex('e');
g.addVortex('f');
g.addEdge('a', 'b');
g.addEdge('a', 'c');
g.addEdge('b', 'd');
g.addEdge('c', 'e');
g.addEdge('d', 'e');
g.addEdge('d', 'f');
g.addEdge('e', 'f');

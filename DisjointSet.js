
class Disjoint {
    constructor(n) {
        // 存储根节点，默认都为自己
        this.p = new Array(n).fill('').map((_, index) => index)

        // 数的深度, 默认为1
        this.rank = new Array(n).fill(1)
    }

    // 寻找根节点
    find(x) {
        return this.p[x] === x ? x : this.find(this.p[x])
    }

    // 合并两个节点
    merge(x, y) {
        let fx = this.find(x)
        let fy = this.find(y)

        // 此处为并查集的路径压缩优化，具体方式是低深度合并到高深度的图中
        if (this.rank[fx] < this.rank[fy]) {
            [fy, fx] = [fx, fy]
        }

        // 合并节点数
        this.rank[fx] += this.rank[fy]

        // x根节点的父节点设为y的父节点
        this.p[fx] = fy
    }
}

module.exports = Disjoint
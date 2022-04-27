// 1584. 连接所有点的最小费用
// 给你一个points 数组，表示 2D 平面上的一些点，其中 points[i] = [xi, yi] 。

// 连接点 [xi, yi] 和点 [xj, yj] 的费用为它们之间的 曼哈顿距离 ：|xi - xj| + |yi - yj| ，其中 |val| 表示 val 的绝对值。

// 请你返回将所有点连接的最小总费用。只有任意两点之间 有且仅有 一条简单路径时，才认为所有点都已连接。



// 示例 1：



// 输入：points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// 输出：20
// 解释：

// 我们可以按照上图所示连接所有点得到最小总费用，总费用为 20 。
// 注意到任意两个点之间只有唯一一条路径互相到达。
// 示例 2：

// 输入：points = [[3,12],[-2,5],[-4,1]]
// 输出：18
// 示例 3：

// 输入：points = [[0,0],[1,1],[1,0],[-1,1]]
// 输出：4
// 示例 4：

// 输入：points = [[-1000000,-1000000],[1000000,1000000]]
// 输出：4000000
// 示例 5：

// 输入：points = [[0,0]]
// 输出：0


// 提示：

// 1 <= points.length <= 1000
// -106 <= xi, yi <= 106
// 所有点 (xi, yi) 两两不同。

const assert = require('assert')
const Disjoint = require('./DisjointSet')

var minCostConnectPoints = function (points) {
    const f = {}

    // 构建图
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            f[`${i}-${j}`] = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
        }
    }

    // 按边长排序
    const keys = Object.keys(f).sort((a, b) => {
        return f[a] - f[b]
    })

    let n = points.length
    const dsu = new Disjoint(n)
    let sum = 0

    for (let i = 0; i < keys.length; i++) {
        const [x, y] = keys[i].split('-').map(str => Number(str))

        if (dsu.find(x) !== dsu.find(y)) {
            dsu.merge(x, y)
            sum += f[keys[i]]
            n--
        }

        if (n === 1) {
            return sum
        }
    }
}

assert.deepEqual(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]), 20)
assert.deepEqual(minCostConnectPoints([[3, 12], [-2, 5], [-4, 1]]), 18)
assert.deepEqual(minCostConnectPoints([[0, 0]]), 0)
assert.deepEqual(minCostConnectPoints([[-1000000, -1000000], [1000000, 1000000]]), 4000000)
assert.deepEqual(minCostConnectPoints([[2, -3], [-17, -8], [13, 8], [-17, -15]]), 53)
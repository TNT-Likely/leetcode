// 102. 二叉树的层序遍历
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

 

// 示例 1：


// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]

const assert = require('assert')

function TreeNode(val, left, right) {
    const obj = {}
    obj.val = (val === undefined ? 0 : val)
    obj.left = (left === undefined ? null : left)
    obj.right = (right === undefined ? null : right)
    return obj
}

const root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))

var levelOrder = function (root) {
    const result = []

    const loop = (node, index) => {
        if (!node) return
        result[index] = (result[index] || []).concat(node.val)
        loop(node.left, index + 1)
        loop(node.right, index + 1)
    }

    loop(root, 0)

    return result
};


assert(levelOrder(root), [[3], [9, 20], [15, 7]])
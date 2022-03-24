// 114. 二叉树展开为链表
// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。


// 示例 1：


// 输入：root = [1,2,5,3,4,null,6]
// 输出：[1,null,2,null,3,null,4,null,5,null,6]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [0]
// 输出：[0]


// 提示：

// 树中结点数在范围 [0, 2000] 内
// -100 <= Node.val <= 100

const assert = require('assert')
const { TreeNode } = require('./struct')

const func = (root) => {
    const loop = (node) => {
        if (!node?.left && !node?.right) return node
        const left = loop(node.left)
        const right = loop(node.right)
        if (left) {
            let tmp = left
            while (tmp.right) {
                tmp = tmp.right
            }
            tmp.right = right
            node.right = left
            node.left = null
        }
        return node
    }

    return loop(root)
}

assert.deepEqual(func(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, null, new TreeNode(6)))),
    new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))))))
assert.deepEqual(func(new TreeNode(null)), new TreeNode(null))
assert.deepEqual(func(new TreeNode(0)), new TreeNode(0))
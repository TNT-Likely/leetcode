// 617. 合并二叉树
// 给你两棵二叉树： root1 和 root2 。

// 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。

// 返回合并后的二叉树。

// 注意: 合并过程必须从两个树的根节点开始。



// 示例 1：


// 输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// 输出：[3,4,5,5,4,null,7]
// 示例 2：

// 输入：root1 = [1], root2 = [1,2]
// 输出：[2,2]


// 提示：

// 两棵树中的节点数目在范围 [0, 2000] 内
// -104 <= Node.val <= 104

const assert = require('assert')
const { TreeNode } = require('./struct')

const mergeTrees = (root1, root2) => {
    if (!root1 && !root2) return null

    const node = new TreeNode((root1?.val || 0) + (root2?.val || 0))
    if (root1?.left || root2?.left) {
        node.left = mergeTrees(root1?.left, root2?.left)
    }

    if (root1?.right || root2?.right) {
        node.right = mergeTrees(root1?.right, root2?.right)
    }

    return node
}

// console.log(888, JSON.stringify(new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2))))
// console.log(888, JSON.stringify(new TreeNode(2, new TreeNode(1, null, new TreeNode(4)), new TreeNode(3, null, new TreeNode(7)))))
// console.log(888, JSON.stringify(new TreeNode(3, new TreeNode(4, new TreeNode(5), new TreeNode(4)), new TreeNode(5, null, new TreeNode(7)))))

assert.deepEqual(
    mergeTrees(
        new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2)),
        new TreeNode(2, new TreeNode(1, null, new TreeNode(4)), new TreeNode(3, null, new TreeNode(7)))
    ),
    new TreeNode(3, new TreeNode(4, new TreeNode(5), new TreeNode(4)), new TreeNode(5, null, new TreeNode(7)))
)

assert.deepEqual(
    mergeTrees(
        new TreeNode(1),
        new TreeNode(1, new TreeNode(2))
    ),
    new TreeNode(2, new TreeNode(2))
)
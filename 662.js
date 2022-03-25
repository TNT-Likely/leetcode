// 662. 二叉树最大宽度
// 给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

// 每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

// 示例 1:

// 输入: 

//            1
//          /   \
//         3     2
//        / \     \  
//       5   3     9 

// 输出: 4
// 解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。
// 示例 2:

// 输入: 

//           1
//          /  
//         3    
//        / \       
//       5   3     

// 输出: 2
// 解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。
// 示例 3:

// 输入: 

//           1
//          / \
//         3   2 
//        /        
//       5      

// 输出: 2
// 解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。
// 示例 4:

// 输入: 

//           1
//          / \
//         3   2
//        /     \  
//       5       9 
//      /         \
//     6           7
// 输出: 8
// 解释: 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)。
// 注意: 答案在32位有符号整数的表示范围内。

const assert = require('assert')
const { TreeNode } = require('./struct')

const withOfBinaryTree = root => {
    const left = {}
    let max = 0
    const loop = (node, depth = 0, pos = 0) => {
        if (!node) return
        if (left[depth] === undefined) {
            left[depth] = pos
        }
        max = Math.max(max, pos - left[depth] + 1)
        loop(node.left, depth + 1, pos * 2)
        loop(node.right, depth + 1, pos * 2 + 1)
    }

    loop(root)

    return max
}

assert.deepEqual(withOfBinaryTree(
    new TreeNode(1, new TreeNode(3, new TreeNode(5, new TreeNode(6)), null), new TreeNode(2, null, new TreeNode(9, new TreeNode(7))))
), 7)

assert.deepEqual(withOfBinaryTree(
    new TreeNode(1, new TreeNode(3, new TreeNode(5), new TreeNode(3)), new TreeNode(2, null, new TreeNode(9)))
), 4)

assert.deepEqual(withOfBinaryTree(
    new TreeNode(1, new TreeNode(3, new TreeNode(5), new TreeNode(3)), null)
), 2)

assert.deepEqual(withOfBinaryTree(
    new TreeNode(1, new TreeNode(3, new TreeNode(5), null), new TreeNode(2))
), 2)

assert.deepEqual(withOfBinaryTree(
    new TreeNode(1, new TreeNode(3, new TreeNode(5, new TreeNode(6), null), null), new TreeNode(2, null, new TreeNode(9, null, new TreeNode(7))))
), 8)

assert.deepEqual(withOfBinaryTree(
    new TreeNode(0, null, new TreeNode(0, null, new TreeNode(0, new TreeNode(1, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(5), new TreeNode(6)))))
), 4)
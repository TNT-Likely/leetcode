/**
 * 链表结构
 * @returns 
 */
function ListNode() {
    const [val, ...next] = Array.prototype.slice.call(arguments)
    this.val = val === undefined ? 0 : val
    this.next = next.length === 0 ? null : new ListNode(...next)
}

ListNode.prototype.toString = ListNode.prototype.valueOf = function () {
    const result = []
    let self = this
    while (self) {
        result.push(self.val)
        self = self.next
    }
    return result
}

/**
 * 二叉树结构
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

module.exports = {
    ListNode,
    TreeNode
}
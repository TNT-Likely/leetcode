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

module.exports = {
    ListNode
}
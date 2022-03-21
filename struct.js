/**
 * 链表结构
 * @returns 
 */
const ListNode = function () {
    const [val, ...next] = Array.prototype.slice.call(arguments)

    const obj = {}
    obj.val = (val === undefined ? 0 : val)
    obj.next = (next?.length === 0 ? null : ListNode(...next))
    return obj
}

module.exports = {
    ListNode
}
// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。


// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false
// 示例 5：

// 输入：s = "{[]}"
// 输出：true


// 提示：

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

const assert = require('assert')

const isValid = s => {
    const tmp = []
    const len = s.length
    let i = 0
    while (i < len) {
        const char = s[i]
        const lastChar = tmp[tmp.length - 1]
        if ((lastChar === '(' && char === ')') ||
            (lastChar === '{' && char === '}') ||
            (lastChar === '[' && char === ']')) {
            tmp.pop()
        } else {
            tmp.push(s[i])
        }

        i++
    }

    return tmp.length === 0
}

assert.deepEqual(isValid('()'), true)
assert.deepEqual(isValid('()[]{}'), true)
assert.deepEqual(isValid('(]'), false)
assert.deepEqual(isValid('([)]'), false)
assert.deepEqual(isValid('{[]}'), true)

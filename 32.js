// 32. 最长有效括号
// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。



// 示例 1：

// 输入：s = "(()"
// 输出：2
// 解释：最长有效括号子串是 "()"
// 示例 2：

// 输入：s = ")()())"
// 输出：4
// 解释：最长有效括号子串是 "()()"
// 示例 3：

// 输入：s = ""
// 输出：0


// 提示：

// 0 <= s.length <= 3 * 104
// s[i] 为 '(' 或 ')'

const assert = require('assert')

const longestValidParentheses = function (s) {
    // s = s.split('')
    // const tmp = []
    // let i = 0
    // while (i < s.length) {
    //     const last = tmp[tmp.length - 1] || {}
    //     if (last.value === '(' && s[i] === ')') {
    //         s[i] = s[last.key] = 1
    //         tmp.pop()
    //     } else {
    //         tmp.push({ key: i, value: s[i] })
    //     }
    //     i++
    // }

    // let max = 0
    // let num = 0
    // while (s.length) {
    //     const firstNum = s.shift()
    //     if (firstNum === 1) {
    //         num++
    //         max = Math.max(num, max)
    //     } else {
    //         num = 0
    //     }
    // }

    // return max

    const tmp = [-1]
    let max = 0

    let i = 0
    while (i < s.length) {
        if (s[i] === '(') {
            tmp.push(i)
        } else {
            tmp.pop()
            if (tmp.length === 0) {
                tmp.push(i)
            } else {
                max = Math.max(i - tmp[tmp.length - 1], max)
            }
        }
        i++
    }

    return max
}

assert.deepEqual(longestValidParentheses('()(()'), 2)
assert.deepEqual(longestValidParentheses('()(())'), 6)
assert.deepEqual(longestValidParentheses('(()'), 2)
assert.deepEqual(longestValidParentheses(')()())'), 4)
assert.deepEqual(longestValidParentheses(''), 0)
assert.deepEqual(longestValidParentheses("(()))())("), 4)


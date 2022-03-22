// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。



// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


// 提示：

// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成
const assert = require('assert')

const func = s => {
    let max = 0
    let len = s.length
    let i = 0
    while (i < len) {
        let j = i
        let tmp = ''
        while (j < len) {
            if (tmp.indexOf(s[j]) === -1) {
                tmp += s[j]
            } else {
                break
            }
            j++
        }
        max = Math.max(tmp.length, max)
        i++
    }

    return max
}

assert.deepEqual(func('abcabcbb'), 3)
assert.deepEqual(func('bbbb'), 1)
assert.deepEqual(func('pwwkew'), 3)
// 10. 正则表达式匹配
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。


// 示例 1：

// 输入：s = "aa", p = "a"
// 输出：false
// 解释："a" 无法匹配 "aa" 整个字符串。
// 示例 2:

// 输入：s = "aa", p = "a*"
// 输出：true
// 解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
// 示例 3：

// 输入：s = "ab", p = ".*"
// 输出：true
// 解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。


// 提示：

// 1 <= s.length <= 20
// 1 <= p.length <= 30
// s 只包含从 a-z 的小写字母。
// p 只包含从 a-z 的小写字母，以及字符 . 和 *。
// 保证每次出现字符 * 时，前面都匹配到有效的字符

const assert = require('assert')


const match = (s, p, i, j) => {
    if (i === 0) {
        return false
    }
    if (p[j - 1] === '.') {
        return true
    }
    return s[i - 1] === p[j - 1]
}


const isMatch = function (s, p) {
    const m = s.length
    const n = p.length
    const f = []

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (!f[i]) {
                f[i] = []
            }

            f[i][j] = false
        }
    }

    f[0][0] = true

    let i = 0;
    while (i <= m) {
        let j = 1
        while (j <= n) {
            if (p[j - 1] === '*') {
                f[i][j] = f[i][j - 2]
                if (match(s, p, i, j - 1)) {
                    f[i][j] = f[i][j] || f[i - 1][j]
                }

            } else {
                if (match(s, p, i, j)) {
                    f[i][j] = f[i - 1][j - 1]
                }
            }
            j++
        }
        i++
    }

    return f[m][n]
}

assert.deepEqual(isMatch(
    'aa', 'a'
), false)

assert.deepEqual(isMatch(
    'aa', 'a*'
), true)

assert.deepEqual(isMatch(
    'ab', '.*'
), true)

assert.deepEqual(isMatch(
    'aab', 'c*a*b'
), true)

assert.deepEqual(isMatch(
    'mississippi',
    'mis*is*ip*.'
), true)

assert.deepEqual(isMatch(
    'ab', '.*c'
), false)
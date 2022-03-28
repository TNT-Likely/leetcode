// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。



// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"


// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成
const assert = require('assert')


const isPalindrome = function (s) {
    const len = s.length
    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - i - 1]) {
            return false
        }
    }

    return true
}

var longestPalindrome = function (s) {
    const len = s.length
    if (len <= 1) {
        return s
    }

    let maxStr = ''
    let i = 0
    while (i < len - 1) {
        let j = i
        while (j < len) {
            const nextStr = s.slice(i, j + 1)
            if (j - i + 1 > maxStr.length && isPalindrome(nextStr)) {
                maxStr = nextStr
            }
            j++
        }
        i++
    }

    return maxStr
};

assert.deepEqual(longestPalindrome('babad'), 'bab')
assert.deepEqual(longestPalindrome('cbba'), 'bb')
assert.deepEqual(longestPalindrome('aaaaaaaa'), 'aaaaaaaa')
assert.deepEqual(longestPalindrome('ccaacccc'), 'ccaacc')
assert.deepEqual(longestPalindrome('a'), 'a')
assert.deepEqual(longestPalindrome('bacabab'), 'bacab')
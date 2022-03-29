// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。





// 示例 1：

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
// 示例 2：

// 输入：digits = ""
// 输出：[]
// 示例 3：

// 输入：digits = "2"
// 输出：["a","b","c"]


// 提示：

// 0 <= digits.length <= 4
// digits[i] 是范围 ['2', '9'] 的一个数字。

const assert = require('assert')

const letterCombinations = digits => {
    if (!digits) return []

    const hash = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': 'tuv',
        '9': "wxyz"
    }

    const charArray = digits.split('').map(key => hash[key])
    const charLength = charArray.length
    const tmp = charArray.map((_, index) => charArray.slice(index + 1).reduce((a, c) => a * c.length, 1))
    const length = charArray.reduce((a, c) => a * c.length, 1)

    let i = 0
    const result = []

    while (i < length) {
        let num = i
        let j = 0
        result[i] = ''
        while (j < charLength) {
            const index = j === charLength.length - 1 ? num % tmp[j] : Math.floor(num / tmp[j])
            num = num % tmp[j]
            result[i] += charArray[j][index]
            j++
        }
        i++
    }

    return result
}

assert.deepEqual(letterCombinations(
    "23"
), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])

assert.deepEqual(letterCombinations(
    ""
), [])

assert.deepEqual(letterCombinations(
    "2"
), ["a", "b", "c"])

console.log(letterCombinations(
    "6789"
))
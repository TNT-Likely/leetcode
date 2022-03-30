// 386. 字典序排数
// 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。

// 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。



// 示例 1：

// 输入：n = 13
// 输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]
// 示例 2：

// 输入：n = 2
// 输出：[1,2]


// 提示：

// 1 <= n <= 5 * 104

const assert = require('assert')

const lexicalOrder = function (n) {
    // return new Array(n).fill('').map((_, index) => index + 1).sort((a, b) => {
    //     a = a.toString()
    //     b = b.toString()
    //     let i = 0
    //     while (a[i] !== undefined || b[i] !== undefined) {
    //         const codeA = a.charCodeAt(i) || 0
    //         const codeB = b.charCodeAt(i) || 0

    //         if (codeA === codeB) {
    //             i++
    //         } else {
    //             return codeA - codeB
    //         }
    //     }

    //     return 0
    // })
    const result = []
    let num = 1
    while (result.length < n) {
        while (num <= n) {
            result.push(num)
            num *= 10
        }
        while (num % 10 === 9 || num > n) {
            num = Math.floor(num / 10)
        }
        num += 1
    }
    return result
}

assert.deepEqual(lexicalOrder(13), [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9])
assert.deepEqual(lexicalOrder(2), [1, 2])
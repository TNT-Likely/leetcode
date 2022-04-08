// 907. 子数组的最小值之和
// 给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

// 由于答案可能很大，因此 返回答案模 10^9 + 7 。



// 示例 1：

// 输入：arr = [3,1,2,4]
// 输出：17
// 解释：
// 子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
// 最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
// 示例 2：

// 输入：arr = [11,81,94,43,3]
// 输出：444


// 提示：

// 1 <= arr.length <= 3 * 104
// 1 <= arr[i] <= 3 * 104

const assert = require('assert')

// var sumSubarrayMins = function (arr) {
//     const len = arr.length

//     let i = 0
//     let sum = 0
//     let mod = Math.pow(10, 9) + 7
//     while (i < len) {
//         let j = i + 1
//         while (j <= len) {
//             sum += Math.min(...arr.slice(i, j))
//             sum = sum % mod
//             j++
//         }
//         i++
//     }

//     return sum
// }
var sumSubarrayMins = function (arr) {
    const len = arr.length
    let i = 0
    let sum = 0
    let mod = Math.pow(10, 9) + 7
    while (i < len) {
        const num = arr[i]
        let left = i - 1
        let right = i + 1

        while (left > -1 && arr[left] >= num) {
            left--
        }

        while (right < len && arr[right] > num) {
            right++
        }

        const count = (right - i) * (i - left)
        sum += count * num
        sum = sum % mod
        i++
    }

    return sum
}

assert.deepEqual(sumSubarrayMins([10, 3, 4, 5, 3, 2, 3, 10]), 108)
assert.deepEqual(sumSubarrayMins([3, 1, 2, 4]), 17)
assert.deepEqual(sumSubarrayMins([11, 81, 94, 43, 3]), 444)

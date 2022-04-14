// 46. 全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。



// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]


// 提示：

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同

const assert = require('assert')

const premute = function (nums) {

    const find = (arr, indexs = []) => {
        const result = []
        let i = 0

        while (i < arr.length) {
            if (!indexs.includes(i)) {
                const childResult = find(arr, [...indexs, i])
                for (const childNums of childResult) {
                    result.push([arr[i], ...childNums])
                }

                if (childResult.length === 0) {
                    result.push([arr[i]])
                }

            }
            i++
        }

        return result
    }

    return find(nums)
}

assert.deepEqual(premute([1, 2, 3]), [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
assert.deepEqual(premute([0, 1]), [[0, 1], [1, 0]])
assert.deepEqual(premute([1]), [[1]])
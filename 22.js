// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

//  

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]
//  

// 提示：

// 1 <= n <= 8

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/generate-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

const assert = require('assert')

var generateParenthesis = function (n) {
    const result = []
    let i = 0
    while(i <=n) {
        let j = n - i
        
        
    }
    return result
};

assert.deepEqual(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"])
assert.deepEqual(generateParenthesis(1), ["()"])
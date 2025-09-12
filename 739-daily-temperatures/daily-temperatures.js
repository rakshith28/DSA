/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    let stack = []
    let ng = new Array(temp.length).fill(0)
    for (let i = temp.length - 1; i >= 0; i--) {
        while (stack.length > 0 && temp[stack[stack.length - 1]] <= temp[i]) {
            stack.pop()
        }
        if (stack.length > 0) {
            ng[i] = stack[stack.length - 1] - i
        } 
        stack.push(i)
    }
    return ng
};
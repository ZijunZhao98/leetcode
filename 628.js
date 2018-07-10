/**
 * @param {number[]} nums
 * @return {number}
 */
 //一开始考虑的用前三大的数的思路是正确的，但是忘记考虑负数的情况
 
var maximumProduct = function(nums) {
    nums.sort(function(a, b){
        return a - b;
    });
    var n = nums.length;
    var temp = nums[n - 1]*nums[n - 2]*nums[n -3];
    var max = Math.max(temp, nums[0] * nums[1] * nums[n - 1]);
    return max;
};

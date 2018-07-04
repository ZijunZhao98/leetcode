/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//reference: https://leetcode.com/problems/rotate-array/solution/ approach 4
//一开始用brute force,但果然还是超时了呢

var rotate = function(nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length -1);
    reverse(nums, 0, k -1);
    reverse(nums, k, nums.length -1);
};

var reverse = function(nums, start, end){
    var temp;
    while (start < end) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
   }
    
}

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var count = 0;
    var pointer = 0;
    for(var i = 0; i < nums.length; i ++){
        if(nums[i] != val){
            nums[pointer] = nums[i];
            pointer ++;
            count ++;
        }
    }
    return count;
};

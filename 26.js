/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var pointer = 1;
    var holder = nums[0];
    var count = 1;
    for(var i = 1; i < nums.length; i ++){
        if(nums[i] != holder){
            holder = nums[i];
            nums[pointer] = nums[i];
            pointer ++;
            count ++;
        }
    }
    
    return count;
};

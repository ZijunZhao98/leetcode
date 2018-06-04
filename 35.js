/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var holder = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i;
        }
        
        if(nums[i] < target){
            holder = i + 1;
        }
    }
    
    return holder;
};

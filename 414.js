/**
 * @param {number[]} nums
 * @return {number}
 */


var thirdMax = function(nums) {
    var first = -Number.MAX_VALUE, second = -Number.MAX_VALUE, third = -Number.MAX_VALUE;
    
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > first){
            if(second !== -Number.MAX_VALUE) third = second;
            if(first !== -Number.MAX_VALUE) second = first;
            first = nums[i];
        }else if(nums[i] > second && nums[i] !== first){
            if(second !== -Number.MAX_VALUE) third = second;
            second = nums[i];
        }else if(nums[i] >= third && nums[i] !== second && nums[i] !== first){
            third = nums[i];
        }
        
    }
    
    
    return third !== -Number.MAX_VALUE?third: first;
    
};

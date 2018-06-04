/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = nums[0];
    var sum = 0;
    for(var i = 0; i < nums.length; i ++){
        sum = nums[i];
        for(var j = i + 1; j < nums.length; j ++){
            sum = sum + nums[j];
            if(sum > max){
                max = sum;
            }
        }
        //if one single number is larger than any sum
        if(nums[i] > max){
            max = nums[i];
        }
    }
    return max;
    
};

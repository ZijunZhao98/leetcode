/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var temp = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            temp ++;
        }else{
            temp = 0;
        }
        if(temp > max) max = temp;
        
    }
    return max;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var returnArr = [];
    
    //[4,3,2,7,8,2,3,1]
    
    //[-4,-3,-2,-7,8,2,-3,-1]
    
    for(var i = 0; i < nums.length; i++){
        var index = Math.abs(nums[i]) - 1;
        if(nums[index] > 0){
           nums[index] = -nums[index];   
        }
    }
    
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            returnArr.push(i+1);
        }
    }
    
    return returnArr;
};

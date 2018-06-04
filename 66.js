/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var nums = digits;
    var i = nums.length - 1;
    var flag = false;
    nums[i] = nums[i] + 1;
    while(nums[i] > 9 && i >= 0){
        nums[i] = 0;
        i --;
        nums[i] = nums[i] + 1;
        if(i < 0){
            flag = true;
        }
    }
    if(flag){
        nums.unshift(1);
    }
    return nums;
};

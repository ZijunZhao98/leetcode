/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//不是很确定我comment里面的东西哪里错了啊

var findMaxAverage = function(nums, k) {
    var temp = 0;
    var max = 0;

    for(var i = 0; i < k; i ++){
        temp += nums[i];
    }
    max = temp;
    for(var l = 0, r = k; r < nums.length; l++, r++){
        temp += nums[r] - nums[l];
        max = Math.max(max, temp);
    }
    
    // for(var i = 0; i < nums.length; i++){
    //     if(i < k){
    //         temp += nums[i];
    //     }else{
    //         temp = temp + nums[i] - nums[i - k];
    //     }
    //     max = Math.max(max, temp);
    //     console.log(max + " " + max/k);
    // }
    
    return max/k;
    
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//references solution https://blog.csdn.net/pistolove/article/details/41631609
//看起来从后面往前思考更简单一些，看起来我的思维不能太死了

var merge = function(nums1, m, nums2, n) {
    if(n === 0){
        return;
    }
    
    if(m === 0){
        for(var i = 0; i < n; i ++){
            nums1[i] = nums2[i];
        }
        return;
    }
    
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;
    
    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    while(i >= 0){
        nums1[k] = nums1[i];
        i--;
        k--;
    }
    
    while(j >= 0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //if nums1 is empty
    if(nums1.length === 0){
        //if nums 2 contains odd amount of number, the median is the middle number
        if(nums2.length % 2){
            return nums2[Math.floor(nums2.length/2)];
        }else{
            return (nums2[nums2.length/2] + nums2[nums2.length/2 - 1])/2.0;
        }
    }
    
    //if nums2 is empty
    if(nums2.length === 0){
        if(nums1.length % 2){
            return nums1[Math.floor(nums1.length/2)];
        }else{
            return (nums1[nums1.length/2] + nums1[nums1.length/2 - 1])/2.0;
        }
    }
    
    //if neither of the arrays are empty
    findMedian(nums1, nums2, 0, 0, nums1.length, nums2.length);
    
};

var findMedian(a, b, a_begin, a_end, b_begin, b_end){
    
}

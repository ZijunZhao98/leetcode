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
    return findMedian(nums1, nums2);
    
};

var findMedian = function(a, b){
    var N1 = a.length;
    var N2 = b.length;
    if (N1 < N2) return findMedian(b, a);
    
    var lo = 0, hi = N2 * 2;
    while (lo <= hi) {
        var mid2 = Math.floor((lo + hi) / 2);  
        var mid1 = N1 + N2 - mid2; 
        
        var INT_MAX = Number.MAX_SAFE_INTEGER;
        var INT_MIN = Number.MIN_SAFE_INTEGER;
        
        var L1 = (mid1 == 0) ? INT_MIN : a[Math.floor((mid1-1)/2)];	
        var L2 = (mid2 == 0) ? INT_MIN : b[Math.floor((mid2-1)/2)];
        var R1 = (mid1 == N1 * 2) ? INT_MAX : a[Math.floor((mid1)/2)];
        var R2 = (mid2 == N2 * 2) ? INT_MAX : b[Math.floor((mid2)/2)];
        
        
        if (L1 > R2){
            lo = mid2 + 1;
        } else if (L2 > R1){
            hi = mid2 - 1;
        } else{
            return (Math.max(L1,L2) + Math.min(R1, R2)) / 2;
        }
              
    }
    return -1;
    
};

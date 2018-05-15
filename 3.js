/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var leftbound = 0;
    var max = 0;
    
    var hash = new Object();
    
    for(var i = 0; i < s.length; i ++){
        var c = s.charAt(i);
        if(hash.hasOwnProperty(c)){
            leftbound = Math.max(leftbound, hash[c] + 1);
        }
        max = Math.max(max, (i - leftbound + 1));
        hash[c] = i;
    }
    
    return max;
    
};

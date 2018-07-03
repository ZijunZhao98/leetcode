/**
 * @param {number[]} prices
 * @return {number}
 */

//reference: https://blog.csdn.net/feliciafay/article/details/18579661
//一开始想的太复杂了，真的没想到啊

var maxProfit = function(prices) {
    var total = 0;

    
    for(var i = 0; i < prices.length-1; i ++){
        if((prices[i+1] - prices[i]) > 0){
            total += prices[i+1] - prices[i];
        }
    }
    
    return total;
    
};

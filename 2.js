/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var sum;
    var currentNode = new ListNode();
    var returnptr = currentNode;
    var newNode = false;
    currentNode.val = 0;
    
    while(l1 || l2){
        
        
        if(l1 && l2){
           sum = l1.val + l2.val;
        }else if(l1){
           sum = l1.val;
        }else if(l2){
           sum = l2.val;
        }
        
        console.log(sum);
        
        if(l1){
            if(l1.next){
                newNode = true;
            }
        }
        
        if(l2){
            if(l2.next){
                newNode = true;
            }
        }
        
        if(newNode){
            currentNode.next = new ListNode();
        }
        
        
        if((sum + currentNode.val) >= 10){
            currentNode.val = (sum + currentNode.val) - 10;
            if(newNode){
                currentNode = currentNode.next;
                currentNode.val = 1;
            }else{
                currentNode.next = new ListNode();
                currentNode.next.val = 1;

            }
        }else{
            currentNode.val += sum;
            if(newNode){
                currentNode = currentNode.next;
                currentNode.val = 0;                
            }

        }
        
        if(l1 && l2){
           l1 = l1.next;
           l2 = l2.next;
        }else if(l1){
           l1 = l1.next;
        }else if(l2){
           l2 = l2.next;
        }
        
        newNode = false;
    }
    return returnptr;
    
};

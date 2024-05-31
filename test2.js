//You are given two non-empty linked lists representing two non-negative integers.
//The digits are stored in reverse order, and each of their nodes contains a single digit.
//Add the two numbers and return the sum as a linked list.
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Example :
//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.



// CODE
class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next;
    }
}

var addTwoNumbers = function(l1, l2) {
    // Create a dummy node to store the head of the result list
  let dummy = new ListNode(0);
  let cur = dummy;

  // Track the carry over value
  let carry = 0;

  // Loop until both lists are empty and there is no carry
  while (l1 !==null || l2 !==null || carry !==0) {
    // Get the values of the current nodes in each list (or 0 if null)
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    // Add the values and carry, calculate the new digit and carry
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    // Create a new node for the result list with the current digit
    cur.next = new ListNode(digit);
    cur = cur.next;

    // Move on to the next nodes in the lists
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  // Return the head of the result list (excluding the dummy node)
  return dummy.next;
};

// Example usage
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);

// Print the result list (optional)
while (result) {
  console.log(result.val, "->");
  result = result.next;
}
console.log("null");
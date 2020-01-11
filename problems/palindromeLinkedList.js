// Given a singly linked list, determine if it is a palindrome.

var isPalindrome = function(head) {
  let currentNode = head;
  let stack = [];
  let linkedListStr = "";
  let reversedLinkedListStr = "";
  while (currentNode != null) {
    stack.push(currentNode.val);
    currentNode = currentNode.next;
  }
  let i = 0;
  let j = stack.length - 1;
  while (i < stack.length) {
    linkedListStr += stack[i];
    reversedLinkedListStr += stack[j];
    i++;
    j--;
  }

  return linkedListStr == reversedLinkedListStr;
};

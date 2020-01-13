// Given a singly linked list, determine if it is a palindrome.

var isPalindrome = function(head) {
  if (head == null) {
    return true;
  }
  let regularNode = JSON.parse(JSON.stringify(this.head));
  let reversedNode = reverse({ ...head });

  while (regularNode != null && reversedNode != null) {
    if (regularNode.val !== reversedNode.val) {
      return false;
    }
    reversedNode = reversedNode.next;
    regularNode = regularNode.next;
  }
  return regularNode == null && reversedNode == null;
};

var reverse = function(head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;

  return head;
};

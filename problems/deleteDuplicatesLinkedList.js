// Given a sorted linked list, delete all duplicates such that each element appear only once.

var deleteDuplicates = function(head) {
  let map = {};
  let currentNode = head;
  let previousNode = null;

  while (currentNode != null) {
    if (map[currentNode.val] != undefined) {
      previousNode.next = currentNode.next;
    } else {
      map[currentNode.val] = currentNode.val;
      previousNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  return head;
};

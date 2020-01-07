// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

var findDuplicate = function(nums) {
  // let sortedNumbers = nums.sort();
  // for(let i = 1; i < sortedNumbers.length;i++){
  //   if(sortedNumbers[i-1] ==sortedNumbers[i]){
  //     return sortedNumbers[i];
  //   }
  // } //O(n) O(1)

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return nums[i];
      }
    }
  } //O(n^2) O(1)
};

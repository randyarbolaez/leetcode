// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function(nums) {
  let evenNumberOfDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      evenNumberOfDigits++;
    }
  }

  return evenNumberOfDigits;
};

// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

var maxProduct = function(nums) {
  let maximumProduct = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      maximumProduct = Math.max(maximumProduct, product);
    }
  }
  return maximumProduct;
};

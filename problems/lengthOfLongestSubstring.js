// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
  let arr = [];
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) {
      arr = arr.slice(arr.indexOf(s[i]) + 1);
    }
    arr.push(s[i]);
    length = Math.max(length, arr.length);
  }
  return length;
};

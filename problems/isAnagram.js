// Given two strings s and t , write a function to determine if t is an anagram of s.

var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false;
  }

  s = s.split("").sort();
  t = t.split("").sort();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return false;
    }
  }

  return true;
};

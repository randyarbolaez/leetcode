// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. Note: For the purpose of this problem, we define empty string as valid palindrome.

var isPalindrome = function(s) {
  let stringWIthAlphaNumericCharactesOnlyCheck = s.replace(/[^a-z0-9]/gi, "");

  let reversedString = stringWIthAlphaNumericCharactesOnlyCheck
    .split("")
    .reverse()
    .join("");

  return (
    reversedString.toLowerCase() ===
    stringWIthAlphaNumericCharactesOnlyCheck.toLowerCase()
  );
};

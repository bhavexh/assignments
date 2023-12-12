/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  const lastChar = str[str.length - 1];
  if(lastChar === "!" || lastChar === "?" || lastChar === "." || lastChar === ",") {
    str = str.slice(0, - 1);
  }
  newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length/2; i++) {
    if(newStr[i] === newStr[newStr.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = isPalindrome;

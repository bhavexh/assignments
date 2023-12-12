/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (!str2.includes(char)) {
      return false;
    }
  }
}

module.exports = isAnagram;

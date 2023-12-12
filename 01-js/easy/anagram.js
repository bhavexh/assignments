/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
<<<<<<< HEAD
  if(str1.length !== str2.length){
    return false;
  }
  let lowercasedStr1 = str1.toLowerCase();
  let lowercasedStr2 = str2.toLowerCase();
  if(lowercasedStr1.split('').sort().join('') == lowercasedStr2.split('').sort().join('')){
    return true;
  } else {
    return false;
  } 
=======
  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (!str2.includes(char)) {
      return false;
    }
  }
>>>>>>> 5b1d641 (assignment 1,2 done)
}

module.exports = isAnagram;

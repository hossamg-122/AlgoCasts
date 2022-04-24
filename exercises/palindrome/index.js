// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
 return str.split("").every((char,index)=>
char === str[str.length-index-1]
 )
}

module.exports = palindrome;

// 1st solution
// function palindrome(str) {
//     const reversedString = str.split("").reverse().join("")
//     if(reversedString===str){
//         return true
//     }else{
//         return false
//     }
//  }

// 2n solution
// function palindrome(str) {
//     let reversedString =""
//       for (const char of str) {
//        reversedString = char + reversedString
//       }
//        return reversedString === str;
//   }

// 3rd solution
// function palindrome(str) {
//     const reversedString = str
//       .split("")
//       .reduce((reversed, char) => char + reversed, "");
//      return reversedString === str;
//   }
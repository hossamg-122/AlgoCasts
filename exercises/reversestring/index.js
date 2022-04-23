// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((reverced, char) => char + reverced, "");
}

module.exports = reverse;

//1st solution
// return str.split("").reverse().join("")

// 2n solution
//let reversedString = ""
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     reversedString = element+reversedString
// }
// return reversedString

// or

//let reversedString = ""
// for (const char of str) {
//     reversedString=char+reversedString
// }
// return reversedString

//2nd solution
// let reversedString = []
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     reversedString.unshift(element)
// }
// return reversedString.join("")

// 4th solution
// return str.split("").reduce((reverced,char)=>char+reverced,"")

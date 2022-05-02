// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let modifiedString = str.replace(/[^\w]/g, "").toLowerCase()
    let counter =0
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for (const char of modifiedString) {
      vowels.includes(char) && ++counter
    }
  
return counter
  
}

module.exports = vowels;

// 1st solution
// function vowels(str) {
//     let modifiedString = str.replace(/[^\w]/g, "").toLowerCase()
//     let stringContainer = {}
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     for (const char of modifiedString) {
//         stringContainer[char] ? ++stringContainer[char] : stringContainer[char] =1
//     }
//    return Object.keys(stringContainer).reduce((counter,char)=>{
// if(vowels.includes(char) ){
// ++counter
// }
// return counter
//     },0)
// }


// 2nd solution
// function vowels(str) {
//     let modifiedString = str.replace(/[^\w]/g, "").toLowerCase()
//     let counter =0
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     for (const char of modifiedString) {
//       vowels.includes(char) && ++counter
//     }
// return counter
// }
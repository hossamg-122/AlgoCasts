// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const stringModifier = (string) => string.replace(/[^\w]/g, "").toLowerCase();
const stringContainer = (string) => {
  const container = {};
  for (const char of string) {
    container[char] ? ++container[char] : (container[char] = 1);
  }
  return container;
};
function anagrams(stringA, stringB) {
  const stringAModified = stringModifier(stringA).split("").sort().join("");
  const stringBModified = stringModifier(stringB).split("").sort().join("");

  return stringAModified === stringBModified;
}

module.exports = anagrams;

// 1st solution
// function anagrams(stringA, stringB) {
//     const stringAModified = stringModifier(stringA);
//     const stringBModified = stringModifier(stringB);
//     const stringAContainer = stringContainer(stringAModified);
//     const stringBContainer = stringContainer(stringBModified);
//     return (
//       Object.keys(stringAContainer).every(
//         (key) => stringAContainer[key] === stringBContainer[key]
//       ) && stringA.length === stringB.length
//     );
//   }

// 2nd solution
// function anagrams(stringA, stringB) {
//     const stringAModified = stringModifier(stringA);
//     const stringBModified = stringModifier(stringB);  
//     if (stringAModified.length !== stringBModified.length) {
//       return false;
//     }
//     const stringAContainer = stringContainer(stringAModified);
//     const stringBContainer = stringContainer(stringBModified);
//     for (const char in stringAContainer) {
//       if (stringAContainer[char] !== stringBContainer[char]) {
//         return false;
//       }
//     }
//     return true;
//   }.

//  3rd solution
//  function anagrams(stringA, stringB) {
//     const stringAModified = stringModifier(stringA).split("")
//     const stringBModified = stringModifier(stringB).split("")
//     if (stringAModified.length !== stringBModified.length) {
//             return false;
//           }
//           return stringAModified.every((char,index)=>char===stringBModified.find((charB)=>charB===char))
//   }

// 4th solution

// function anagrams(stringA, stringB) {
//     const stringAModified = stringModifier(stringA).split("").sort().join("")
//     const stringBModified = stringModifier(stringB).split("").sort().join("")

//     return stringAModified===stringBModified
//   }

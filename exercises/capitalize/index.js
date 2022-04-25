// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capitalizedString = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    str[i - 1] === " "
      ? (capitalizedString = capitalizedString + str[i].toUpperCase())
      : (capitalizedString = capitalizedString + str[i]);
  }
  return capitalizedString;
}

module.exports = capitalize;

// 1st solution
// function capitalize(str) {
//     return str
//       .split(" ")
//       .map((word) => {
//         return word[0].toUpperCase() + word.slice(1);
//       })
//       .join(" ");
//   }

// 2nd solution
// function capitalize(str) {
//     const modifiedString = str.split(" ");
//     let capitalizedString = []
//     for (const word of modifiedString) {
//         capitalizedString.push(word[0].toUpperCase() + word.slice(1))
//     }
//     return capitalizedString.join(" ")
//   }

// 3rd solution
// function capitalize(str) {
//     let capitalizedString = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++) {
//       str[i - 1] === " "
//         ? (capitalizedString = capitalizedString + str[i].toUpperCase())
//         : (capitalizedString = capitalizedString + str[i]);
//     }
//     return capitalizedString;
//   }
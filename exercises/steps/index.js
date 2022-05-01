// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, str = "") {
  if (n === row) {
    return;
  }

  if (str.length === n) {
    console.log(str);
    return steps(n, row + 1);
  }
  str.length <= row ? (str += "#") : (str += " ");
  steps(n, row, str);
}

module.exports = steps;

// 1st solution
// function steps(n) {
//     let shape = Array(n).fill(" ");
//     for (let index = 0; index < n; index++) {
//       shape.fill("#", index, index + 1);
//       console.log(shape.join(""));
//     }
//   }

// 2nd solution
// function steps(n) {
//     for (let i = 0; i < n; i++) {
//       let square = [];
//       for (let j = 0; j < n; j++) {
//         j <= i ? square.push("#") : square.push(" ");
//       }
//       console.log(square.join(""));
//     }
//   }

// 3rd solution
// function steps(n) {
//     for (let i = 0; i < n; i++) {
//       let square = [];
//       for (let j = 0; j < n; j++) {
//         j <= i ? square.push("#") : square.push(" ");
//       }
//       console.log(square.join(""));
//     }
//   }

// 4th solution
// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let square = "";
//     for (let j = 0; j < n; j++) {
//       j <= i ? (square += "#") : (square += " ");
//     }
//     console.log(square);
//   }
// }

// 5th recursive solution
// function steps(n, row = 0, str = "") {
//   if (n === row) {
//     return;
//   }

//   if (str.length === n) {
//     console.log(str);
//     return steps(n, row + 1);
//   }
//   str.length <= row ? (str += "#") : (str += " ");
//   steps(n, row, str);
// }
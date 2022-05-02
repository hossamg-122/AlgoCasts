// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, str = "") {
  if (n === row) {
    return;
  }
  let cols = n * 2 - 1;
  if (str.length === cols) {
    console.log(str);
    return pyramid(n, row + 1);
  }
  let leftRange = n - 1 - row;
  let rightRange = n - 1 + row;
  str.length >= leftRange && str.length <= rightRange
    ? (str += "#")
    : (str += " ");
  pyramid(n, row, str);
}

module.exports = pyramid;

// 1st solution
// function pyramid(n) {
//     if (n < 0){
//         return
//     }
//     let cols = (n * 2) - 1
//     for (let i = 0; i < n; i++) {
//         let row = []
//         let leftRange = n-1-i
//         let rightRange = n-1+i
//         for (let j = 0; j < cols; j++) {

//           j>=leftRange && j<=rightRange ? row.push("#"):row.push(" ")

//         }
//         console.log(row.join(""))
//     }
// }

// 2nd recursive solution
// function pyramid(n,row=0,str="") {
//     if (n === row){
//         return
//     }
//     let cols = (n * 2) - 1
//     if(str.length===cols){
//         console.log(str)
//      return pyramid(n,row+1)
//     }
//     let leftRange = n-1-row
//         let rightRange = n-1+row
//         str.length>=leftRange && str.length<=rightRange ? str+="#":str+=" "
//         pyramid(n,row,str)
// }

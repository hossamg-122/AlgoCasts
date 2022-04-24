// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2)             --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2)          --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4)          --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10)         --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let container = [];
  let index = 0;
  while (index < array.length) {
    container.push(array.slice(index, index + size));
    index += size;
  }
  return container;
}

module.exports = chunk;

// 1st solution
// function chunk(array, size) {
//     let container = []
//     let subarray = []
//     for (let i = 0; i < array.length; i++) {
//          subarray = [...subarray,array[i]]
//          if(subarray.length===size ||i ===array.length-1){
//             container.push(subarray)
//             subarray=[]
//          }
//     }
//     return container
// }

// 2nd solution
// function chunk(array, size) {
//     let container = [];
//     let index = 0;
//     while (index < array.length) {
//       container.push(array.slice(index, index + size));
//       index += size;
//     }
//     return container;
//   }
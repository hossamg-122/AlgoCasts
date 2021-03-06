// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charsContainer = {};
  for (const char of str) {
    charsContainer[char] ? ++charsContainer[char] : charsContainer[char] = 1
    
  }
 
 return Object.keys(charsContainer).reduce((a,b)=> charsContainer[a] > charsContainer[b]? a :b)
}

module.exports = maxChar;

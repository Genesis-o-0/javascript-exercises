const palindromes = function (word) {
  const newWord = word.toLowerCase().replace(/[^a-z]/g, "");
  return newWord.split("").reverse().join("") === newWord;
};
console.log(palindromes("ZZZZ car, a man, a maracaz."));
// Do not edit below this line
module.exports = palindromes;

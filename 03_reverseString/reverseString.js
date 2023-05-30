const reverseString = function (string) {
  const splittedString = string.split(""); //Array of strings
  const reversedArray = []; // Reversed Array

  for (let i = 0; i < splittedString.length; i++) {
    reversedArray.unshift(splittedString[i]);
  }
  return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

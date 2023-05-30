const removeFromArray = function (array, ...elementsToRemove) {
  const remainingArray = [];
  outer: for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < elementsToRemove.length; j++) {
      if (array[i] === elementsToRemove[j]) {
        continue outer;
      }
    }
    remainingArray.push(array[i]);
  }
  return remainingArray;
};

// Do not edit below this line
module.exports = removeFromArray;

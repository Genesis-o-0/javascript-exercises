const getTheTitles = function (arrayOfObjects) {
  return arrayOfObjects.map((bookObject) => {
    return bookObject.title;
  });
};

// Do not edit below this line
module.exports = getTheTitles;

const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  } else {
    if (num2 > num1) {
      let total = 0;
      while (num1 <= num2) {
        total += num1;
        num1++;
      }
      return total;
    } else {
      let total = 0;
      while (num2 <= num1) {
        total += num2;
        num2++;
      }
      return total;
    }
  }
};

// Do not edit below this line
module.exports = sumAll;

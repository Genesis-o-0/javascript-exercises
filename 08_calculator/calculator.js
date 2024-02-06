const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce(
    (accumilator, currentValue) => accumilator + currentValue,
    0
  );
};

const multiply = function (arr) {
  return arr.reduce(
    (accumilator, currentValue) => accumilator * currentValue,
    1
  );
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

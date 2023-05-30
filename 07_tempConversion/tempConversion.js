const convertToCelsius = function (temp) {
  const tempRounded = Math.round((temp - 32) * (5 / 9) * 10) / 10;
  return tempRounded;
};

const convertToFahrenheit = function (temp) {
  const tempRounded = Math.round((temp * (9 / 5) + 32) * 10) / 10;
  return tempRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

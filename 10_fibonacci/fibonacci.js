const fibonacci = function (lastFibonacciNumber) {
  if (lastFibonacciNumber < 0) {
    return "OOPS";
  }
  if (parseInt(lastFibonacciNumber) > 0) {
    const series = [];
    for (
      let currentIndex = 0;
      currentIndex < lastFibonacciNumber;
      currentIndex++
    ) {
      let firstNumber = 1;
      if (series.length < 2) {
        series.push(firstNumber);
      } else {
        series.push(series[currentIndex - 1] + series[currentIndex - 2]);
      }
    }
    return series[series.length - 1];
  } else {
    return 0;
  }
};
console.log(fibonacci(10));
// Do not edit below this line
module.exports = fibonacci;

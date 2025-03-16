function round(number, decimalPlaces) {
  return Math.round(number * 10 ** decimalPlaces) / 10 ** decimalPlaces;
}

const convertToCelsius = function (farenheit) {
  const celcius = (5 / 9) * (farenheit - 32);
  return round(celcius, 1)
};

const convertToFahrenheit = function (celcius) {
  return round(1.8 * celcius + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

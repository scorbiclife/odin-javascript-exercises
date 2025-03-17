const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (xs) {
  return xs.reduce(add, 0);
};

const multiply = function (xs) {
  return xs.reduce((x, y) => x * y, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  const rangeXs = Array.from({ length: x }).map((_, i) => i + 1);
  return multiply(rangeXs);
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

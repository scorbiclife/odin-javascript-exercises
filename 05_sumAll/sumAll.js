function validInput(i) {
  return typeof i === "number" && i >= 0 && Number.isInteger(i);
}

const sumAll = function (x, y) {
  if (!(validInput(x) && validInput(y))) {
    return "ERROR";
  }
  const [start, end] = x < y ? [x, y] : [y, x];
  let sum = 0;
  for (let i = start; i <= end; ++i) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

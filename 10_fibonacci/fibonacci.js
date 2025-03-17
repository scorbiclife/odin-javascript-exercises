const fibonacci = function (input) {
  const n = Number(input);
  if (!Number.isInteger(n)) {
    return "OOPS";
  }
  if (n < 0) {
    return "OOPS";
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let [x, y] = [0, 1];
  for (let i = 2; i <= n; ++i) {
    [x, y] = [y, x + y];
  }
  return y;
};

// Do not edit below this line
module.exports = fibonacci;

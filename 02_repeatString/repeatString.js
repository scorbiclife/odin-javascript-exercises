const repeatString = function (string, times) {
  if (times < 0) {
    return "ERROR";
  }
  const chars = [];
  for (let i = 0; i < times; ++i) {
    for (const c of string) {
      chars.push(c);
    }
  }
  return chars.join("");
};

// Do not edit below this line
module.exports = repeatString;

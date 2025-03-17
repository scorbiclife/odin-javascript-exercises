const palindromes = function (string) {
  const isAlphanumeric = (c) =>
    ("a" <= c && c <= "z") || ("0" <= c && c <= "9");
  const charsThatCount = [...string.toLowerCase()].filter(isAlphanumeric);
  let [i, j] = [0, charsThatCount.length - 1];
  for (; i < j; ++i, --j) {
    if (charsThatCount[i] !== charsThatCount[j]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

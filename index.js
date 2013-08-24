module.exports = function factorial(v) {
  return v === 0
    ? 1
    : v * factorial(v - 1);
};
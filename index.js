module.exports = function factorial(n) {
  if (n === 0) return 1
  if (n < 0) return NaN
  for (var r = 1; n > 1; n--) r *= n
  return r
}

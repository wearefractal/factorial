module.exports = function factorial(n) {
  var sign = BigInt(Math.sign(n))
  n = BigInt(Math.abs(n))
  if (n == 0) return 1
  for (var r = BigInt(1); n > 1; n--) r *= n
  return r * sign
}

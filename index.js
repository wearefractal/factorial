module.exports = function(n) {
  if (n < 0) {
    throw new RangeError("Cannot take factorial out of a negative number.");
  } else {
    return factorial(n);
  }
}

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

factorial = (v) -> 
  (if v is 0 then 1 else v*factorial(v-1))

module.exports = factorial
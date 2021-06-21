var factorial = require('../');
var should = require('should');
var test_data = require('./test_data')
require('mocha');

describe('factorial', function() {
  Object.keys(test_data).forEach((number) => {
    it(`should work with ${number}`, function(done) {
      factorial(number).should.equal(test_data[number])
      done();
    })
  })
});

var factorial = require('../');
var should = require('should');
require('mocha');

describe('factorial', function() {
  it('should error with -1', function(done) {
    try {
      factorial(-1);
    } catch (err) {
      should.exist(err);
      return done();
    }
    done(new Error('Not thrown!'));
  });
  it('should work with 0', function(done) {
    factorial(0).should.equal(1);
    done();
  });
  it('should work with 10', function(done) {
    factorial(10).should.equal(3628800);
    done();
  });
  it('should work with 21', function(done) {
    factorial(21).should.equal(51090942171709440000);
    done();
  });
});

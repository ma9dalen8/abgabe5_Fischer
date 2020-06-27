var assert = require('assert');
var bearing = require ('@turf/bearing');
var distance = require ('@turf/distance');

bearing(start, end);
distance(from, to);

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

/**
 * LICENSE MIT
 * - test/string.test.js
 * @author luckydrq(drqzju@gmail.com)
 */
'use strict';

var assert = require('assert');
var util = require('core-util-is');
var string = require('..');

describe('string extras', function() {
  it('string.hashCode', function() {
    var s = 'test';
    var hashCode1 = string.hashCode(s);
    var hashCode2 = string.hashCode(s);
    assert(hashCode1 === hashCode2);
    assert(util.isNumber(hashCode1));
  });
});

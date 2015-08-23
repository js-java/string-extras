/**
 * - index.js
 * @author luckydrq(drqzju@gmail.com)
 */
'use strict';

var assert = require('assert');
var util = require('core-util-is');

/**
 * return a hash code of this string
 * @ref http://blog.csdn.net/exceptional_derek/article/details/9074137
 * @param {String} str
 * @return {Number}
 * @api public
 */
exports.hashCode = function(str) {
  assert(util.isString(str), 'string.hashCode require String');

  if (util.isFunction(str.hashCode)) {
    return str.hashCode();
  }

  str = new String(str);
  str.value = str.split('').map(function(c) { return c.charCodeAt(0); });
  str.offset = 0;
  str.hash = 0;
  str.hashCode = function() {
    var count = this.length;
    var h = this.hash;
    if (h === 0 && count > 0) {
      var off = this.offset;
      var val = this.value;
      var len = count;
      for (var i = 0; i < len; i++) {
        h = 31 * h + val[off++];
      }
      this.hash = h;
    }
    return h;
  };
  return str.hashCode();
};

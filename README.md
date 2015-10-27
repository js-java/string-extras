# string-hashcode
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Extra utilities for string.

## Install
`npm install string-hashcode`

## Example
```javascript
var hashCode = require('string-hashcode');
var s = 'abc';

console.log(s.hashCode); // undefined
var code = hashCode(s);
console.log(s.hashCode); // Function

var code2 = s.hashCode();
assert.equal(code, code2);
```

## API

### hashCode(str)
#### params:
- str: string object

#### return:
Number: hash code

Return a hash code of a string. Note that a hash code is immutable with
a certain string.

## Lisence
MIT

[npm-image]: https://img.shields.io/npm/v/string-hashcode.svg?style=flat-square
[npm-url]: https://npmjs.org/package/string-hashcode
[travis-image]: https://img.shields.io/travis/luckydrq/string-hashcode/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/luckydrq/string-hashcode
[coveralls-image]: https://img.shields.io/coveralls/luckydrq/string-hashcode/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/luckydrq/string-hashcode?branch=master

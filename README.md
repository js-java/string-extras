# string-extras
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Extra utilities for string.

## Install
`npm install string-extras`

## Example
```javascript
// string.hashCode
var string = require('string-extras');
var hashCode = string.hashCode("abc"));
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

[npm-image]: https://img.shields.io/npm/v/string-extras.svg?style=flat-square
[npm-url]: https://npmjs.org/package/string-extras
[travis-image]: https://img.shields.io/travis/luckydrq/string-extras/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/luckydrq/string-extras
[coveralls-image]: https://img.shields.io/coveralls/luckydrq/string-extras/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/luckydrq/string-extras?branch=master

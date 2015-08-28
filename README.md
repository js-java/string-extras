# string-extras
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

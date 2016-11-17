//in a file called type_coercion.js

const assert = require('assert');

//this will evaluate to true
var match = ('190' == 190);
assert.equal(match, true);

//this will evaluate to false
var match = '190' === 190;
assert.equal(match), false);

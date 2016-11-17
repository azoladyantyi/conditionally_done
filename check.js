var transportFee = function(shift){
  switch(shift){
    case 'Morning':
      return  'R20';
    case 'afternoon':
      return  'R10';
    default:
      return  'You pay nothing'
  }
}
const assert = require('assert');

assert.equal(transportFee('Morning'),'R20');
assert.equal(transportFee('afternoon'),'R10');

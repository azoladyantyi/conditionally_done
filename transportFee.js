const assert = require ('assert');
var transportFee = function(shift){
  switch(shift){
    case 'Morning':
    console.log('Morning')
      return  'R20';
    case 'afternoon':
    console.log('afternoon')
      return  'R10';
    default:
    console.log('night shift')
      return  'You pay nothing'
  }
}

assert.equal(transportFee('Morning'),'R20');
assert.equal(transportFee('afternoon'),'R10');
assert.equal(transportFee('night shift'),'You pay nothing');

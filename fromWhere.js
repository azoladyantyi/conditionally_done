 const assert = require ('assert');
var fromWhere = function(regNumber){
  if (regNumber.startsWith('CY')){

  //  console.log('Bellville')
      return 'Bellville';

  }if (regNumber.startsWith('CJ')){
    // console.log('Paarl');
      return 'Paarl';

  } if (regNumber.startsWith('CA')){
  // console.log('Cape Town');
    return 'Cape Town';
  }
  else {
    return 'Some other place'
  }
};

assert.equal(fromWhere('CY123'), 'Bellville');
assert.equal(fromWhere('CJ4500'), 'Paarl');
assert.equal(fromWhere('CA1256'), 'Cape Town');

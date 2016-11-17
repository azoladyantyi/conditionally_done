const assert = require ('assert');
var weekOrWeekend = function(day){

    if (!day.startsWith('S')){
        console.log('week');
    return 'week';
  } else  {
    console.log('weekend');
    return 'weekend';
  }
}
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');

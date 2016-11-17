const assert = require('assert');
var alarm = function(Time){
  switch (Time){
      case 'alarmRing':
      console.log('alarmRing')
        return '5:00AM';

      case 'Snooze alarm':
      console.log('Snooze alarm')
      return '5:10AM';

      default:
      return 'alarm is off!';
  }
}
assert.equal(alarm('alarmRing'),'5:00AM');
assert.equal(alarm('Snooze alarm'),'5:10AM')

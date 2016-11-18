const assert = require('assert');
var alarm = function(setAlarm){
  switch (setAlarm){
      case '5:00AM':
      console.log('5:00AM')
        return 'alarmRing';

      case 'Snooze alarm':
      console.log('Snooze alarm')
      return '5:10AM';

      default:
      return 'alarm is off!';
  }
}
assert.equal(alarm('5:00AM'),'alarmRing');
assert.equal(alarm('Snooze alarm'),'5:10AM')

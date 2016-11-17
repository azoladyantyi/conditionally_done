const assert = require ('assert');
var meal = function(breakfast){
  switch (breakfast){
    case 'Eggs and Bacon':
        console.log('Eggs and Bacon')
        return 'i want to eat Eggs and Bacon as my breakfast meal';

    case 'Oats':
        console.log('Oats')
          return 'i am not a fan of Oats';

  default:
        return 'I dont want to eat anything for breakfast';
  }
};
assert.equal(meal('Eggs and Bacon'), 'i want to eat Eggs and Bacon as my breakfast meal' );
assert.equal(meal('Oats'), 'i am not a fan of Oats' );
assert.equal(meal(''), 'I dont want to eat anything for breakfast' );

const assert = require ('assert');
var meal = function(breakfast){
  switch (breakfast){
    case 'I want to eat Eggs and Bacon as my breakfast meal':
        console.log('I want to eat Eggs and Bacon as my breakfast meal')
        return 'Eggs and Bacon';

    case 'I am not a fan of Oats':
        console.log('I am not a fan of Oats')
          return 'Oats';

  default:
  console.log()
        console.log('I have nothing to eat for breakfast')
       return 'I have nothing to eat for breakfast';
  }
};
assert.equal(meal('I want to eat Eggs and Bacon as my breakfast meal'),'Eggs and Bacon');
assert.equal(meal('I am not a fan of Oats'), 'Oats' );
assert.equal(meal(),'I have nothing to eat for breakfast' );

//in a file called platforms.js

var whichPlatform = function(){
    switch(route) {
      var route = Platform
        case "Langa":
            return "platform 1";
        case "Stellenbosch":
            return "platform 6";
        case "Wynberg":
            return "Platform 2";
        default:
            return "There is no train to " + route;
    }
}

const assert = require('assert');

//fix these asserts
assert.equal(whichPlatform('Langa'), 'Platform 1');
assert.equal(whichPlatform('Stellenbosch'), 'platform 6');
assert.equal(whichPlatform('Wynberg'), 'Platform 2');
assert.equal(whichPlatform('Parow'), '');
// make sure all the asserts are passing

//in a file called lunchWhere.js
var lunchWhere = function(bankBalance){
    if (bankBalance > 4500 ){
        return "Go and get KFC!"
    }
    else if (bankBalance < 4500 && bankBalance > 1500){
        return "Go to PnP!"
    }
    else{
        return "Two minute noodles today!";
    }
};

const assert = require('assert');

//fix these asserts
assert.equal(lunchWhere(4500), '');
assert.equal(lunchWhere(3500), '');
assert.equal(lunchWhere(1000), '');
//ensure all these asserts are passing

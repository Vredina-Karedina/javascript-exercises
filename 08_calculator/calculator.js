const add = function(a, b) {
  return a + b; 
};

const subtract = function(a, b) {
  return a - b; 
};

const sum = function(array) {
  return array.reduce((total, next) => total + next, 0);
};

const multiply = function(array) {
  return array.reduce((total, next) => total * next);
};

const power = function() {
	return Math.pow(arguments[0], arguments[1]);
};

const factorial = function(item) {
//  let result = 1;
  if (item === 0) return 1;
//  if (item>0) {
//    for (let i=1; i<=item; i++) {
//      result *= i;
//    }
//    return result;
//  }

  return item * factorial (item-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

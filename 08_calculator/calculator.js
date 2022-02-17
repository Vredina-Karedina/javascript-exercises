const add = function() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
      result = result + arguments[i];
  }
  return result; 
};

const subtract = function() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
      result = result - arguments[i];
  }
  return result; 
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
  let result = 1;
  if (item === 0) {
    result = 1;
  } else if (item>0) {
    for (let i=1; i<=item; i++) {
      result = result * i;
    }
  }
  return result;
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

const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((acc, currentValue) => acc + currentValue, 0) 
};

const multiply = function(arr) {
  return arr.reduce((acc, current) => acc * current, 1)

};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(n) {
	let result = 1;
  for (i=1; i<=n; i++){
    result *= i;
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

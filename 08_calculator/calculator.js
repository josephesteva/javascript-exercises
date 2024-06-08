const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	let sum = 0
  for (i=0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum
};

const multiply = function(array) {
  if (array.length < 1) {
    return 0
  }
	let total = 1
  for (i=0; i < array.length; i++) {
    total = total * array[i]
  }
  return total

};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	total = 1
  for (i=a; i > 0; i--) {
    total = total * i
  }
  return total
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

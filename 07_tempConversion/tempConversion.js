const convertToCelsius = function(fahrTemp) {
  return +((fahrTemp - 32)/1.8).toFixed(1)
};

const convertToFahrenheit = function(celcTemp) {
  return +(celcTemp*1.8+32).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

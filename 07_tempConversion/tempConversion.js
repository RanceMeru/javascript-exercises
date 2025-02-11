const convertToCelsius = function(Farenheit) {
  const Celsius = ((Farenheit *  9/5) + 32);
  return Celsius
};

const convertToFahrenheit = function(Celsius) {
  const Farenheit = ((9/5) * Celsius + 32);
  return Farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

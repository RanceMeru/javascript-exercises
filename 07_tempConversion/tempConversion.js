const convertToCelsius = function(Farenheit) {
  //created the formula to have farenheit converted to celsius and stored in the variable
  const Celsius = (5/9 *(Farenheit-32));
  return Math.round(Celsius*10)/10;
};

const convertToFahrenheit = function(Celsius) {
  const Farenheit = (Celsius * 9/5) + 32; 
  return Math.round(Farenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

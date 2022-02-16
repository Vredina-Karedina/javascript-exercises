const ftoc = function (fah) {
    const fahrenheitToCelsius = (fah - 32) * 5 / 9;
    const roundToFirstDecimal = Math.round(fahrenheitToCelsius * 10) / 10;
    return roundToFirstDecimal;
};

const ctof = function (cel) {
    const celsiusToFahrenheit = cel * 9 / 5 + 32;
    const roundToFirstDecimal = Math.round(celsiusToFahrenheit * 10) / 10;
    return roundToFirstDecimal;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

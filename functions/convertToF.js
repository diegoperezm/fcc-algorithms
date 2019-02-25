/**
 * 
 * @param   {number}  celsius 
 * @returns {number}  number 
 */

function convertToF(celsius) {
  let fahrenheit = 32;
  return  (celsius * 9/5) + fahrenheit;
}

module.exports = convertToF;

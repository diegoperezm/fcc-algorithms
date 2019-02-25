/**
 * 
 * @description       Convert from Celsius to Fahrenheit
 * @param   {number}  celsius 
 * @returns {number}  number 
 * @example
 *
 * convertToF(0);   
 * // =>  32
 *
 * convertToF(30);
 * // =>  86
 *
 * convertToF(-30); 
 * // => -22
 *
 * convertToF(-10); 
 * // => 14
 *
 * convertToF(20);    
 * // => 68
 *
 */

function convertToF(celsius) {
  let fahrenheit = 32;
  return  (celsius * 9/5) + fahrenheit;
}

module.exports = convertToF;

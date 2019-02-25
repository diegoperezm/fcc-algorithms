const test = require("tape");
let convertToF = require("../functions/convertToF.js");

test('convertToF test', function (t) {

 t.plan(6);
 t.equal(typeof convertToF(0),'number' ,'convertToF(0) should be a number' );
 t.equal(convertToF(0)   ,32,  "convertToF(0)   should return a value  of  32");
 t.equal(convertToF(30)  ,86,  "convertToF(30)  should return a value  of  86");
 t.equal(convertToF(-30) ,-22, "convertToF(-30) should return a value  of -22");
 t.equal(convertToF(-10) ,14,  "convertToF(-10) should return a value  of  14");
 t.equal(convertToF(20)  ,68,  "convertToF(20)  should return a value  of  68");
 t.end();
});

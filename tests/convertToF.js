
const expect = require("/home/erretres/mocha_chai/node_modules/chai/chai.js").expect;

let convertToF = require("/home/erretres/Desktop/MISC_PROJECTS/FCC_algorithm/functions/convertToF.js");

describe("converToF.js", function() {

  it("should return a number when parameter is 0", function() {

  let value = convertToF(0);  

  expect(value).to.be.an('number')
  });

  it("should return a value of 32 when parameter is 0", function() {
  let value = convertToF(0);  
  expect(value).to.equal(32);
  });


  it("should return a value of 86 when parameter is 30 ", function() {
   let value = convertToF(30);  
   expect(value).to.equal(86);
  });
 
  it("should return a value of -22 when parameter is -30", function() {
   let value = convertToF(-30);  
   expect(value).to.equal(-22);
  });

   it("should return a value of 14  when parameter is -10", function() {
   let value = convertToF(-10);  
   expect(value).to.equal(14);
  });
  
   it("should return a value of 68  when parameter is 20", function() {
   let value = convertToF(20);  
   expect(value).to.equal(68);
  });
 
});

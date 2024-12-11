// Global Scope
let globalVar = "I am global";

function testScope() {
  // Function Scope
  var functionVar = "I am inside a function";
  console.log(globalVar); 
}

testScope();
// console.log(functionVar); // Error: functionVar is not defined

if (true) {
  // Block Scope
  let blockVar = "I am inside a block";
  console.log(blockVar); 
}
// console.log(blockVar); // Error: blockVar is not defined

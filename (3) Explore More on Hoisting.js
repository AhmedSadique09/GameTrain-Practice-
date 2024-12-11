// Function Hoisting
console.log(add(5, 10)); // Works: 15
function add(x, y) {
  return x + y;
}

// Var Hoisting
console.log(a); // undefined
var a = 10;

// Let and Const Hoisting
// console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;

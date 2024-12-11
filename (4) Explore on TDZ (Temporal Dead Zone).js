// Temporal Dead Zone Example
// console.log(x); // ReferenceError
let x = 10;

// TDZ in Block Scope
{
  // console.log(y); // ReferenceError
  const y = 15;
}

// TDZ with let in loops
for (let i = 0; i < 3; i++) {
  console.log(i); // Works
}
// console.log(i); // Error: i is not defined

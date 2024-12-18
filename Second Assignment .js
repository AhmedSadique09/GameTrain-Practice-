// ---------------------------------------First Question Start Here----------------------------------------------

// Declare variables for all primitive data types
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let symbolVar = Symbol("unique");
let bigintVar = 9007199254740991n;

// Log types using typeof
console.log("stringVar type:", typeof stringVar);
console.log("numberVar type:", typeof numberVar);
console.log("booleanVar type:", typeof booleanVar);
console.log("nullVar type:", typeof nullVar); 
console.log("undefinedVar type:", typeof undefinedVar);
console.log("symbolVar type:", typeof symbolVar);
console.log("bigintVar type:", typeof bigintVar);

// Create an object with properties of different data types
const mixedObject = {
  name: "Alice",
  age: 25,
  isStudent: true,
  hobbies: null,
  address: undefined,
  uniqueID: Symbol("id"),
  bigNumber: 100n,
};

// Access properties dynamically
for (let key in mixedObject) {
  console.log(`Key: ${key}, Value: ${mixedObject[key]}, Type: ${typeof mixedObject[key]}`);
}


// ---------------------------------------Second Question Start Here----------------------------------------------

// Simple Calculator
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Arithmetic operations
console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);
console.log(`Modulus: ${num1 % num2}`);

// Relational operators
console.log(`Is num1 greater than num2? ${num1 > num2}`);
console.log(`Are the numbers equal? ${num1 === num2}`);

// Logical operators
let bothPositive = num1 > 0 && num2 > 0;
let bothEven = num1 % 2 === 0 && num2 % 2 === 0;
console.log(`Both numbers are positive: ${bothPositive}`);
console.log(`Both numbers are even: ${bothEven}`);


// ---------------------------------------Third Question Start Here----------------------------------------------


console.log(a); // Output: undefined (due to var hoisting)
var a = 10;

console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;


function hoistingExample() {
  if (true) {
    var x = 5; // `var` is function-scoped and accessible outside the block
    let y = 10; // `let` is block-scoped
    const z = 15; // `const` is block-scoped
  }
  console.log(x); // Accessible
  // console.log(y); // Error: y is not defined
  // console.log(z); // Error: z is not defined
}
hoistingExample();

// ---------------------------------------Forth Question Start Here----------------------------------------------

// Convert a string to a number and perform arithmetic operations
let strNum = "25";
let convertedNum = Number(strNum);
console.log("Converted number:", convertedNum);
console.log("Addition:", convertedNum + 10);

// Convert boolean to string and vice versa
let boolVal = true;
let boolToString = String(boolVal);
console.log("Boolean to string:", boolToString);

let stringToBool = Boolean("false"); 
console.log("String to boolean:", stringToBool);

// Demonstrate type coercion
console.log("1 + '2':", 1 + "2"); // String concatenation
console.log("'3' * '4':", "3" * "4"); // Implicit conversion to numbers
console.log("'5' - true:", "5" - true); // Implicit conversion to numbers

// ---------------------------------------Fifth Question Start Here----------------------------------------------

// Ask the user for their age
let age = parseInt(prompt("Enter your age:"));

let category;
if (age <= 12) {
  category = "Child";
} else if (age <= 19) {
  category = "Teenager";
} else if (age <= 59) {
  category = "Adult";
} else {
  category = "Senior Citizen";
}

// Print a personalized message
console.log(`You are categorized as a "${category}". Welcome!`);









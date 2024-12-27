// Create an array of numbers
let numbers = [23, 45, 12, 89, 5, 37];

// Find the sum of all elements
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of all elements:", sum);

// Find the maximum value
let max = Math.max(...numbers);
console.log("Maximum value:", max);

// Find the minimum value
let min = Math.min(...numbers);
console.log("Minimum value:", min);

// Reverse the array
let reversedArray = [...numbers].reverse(); 
console.log("Reversed array:", reversedArray);

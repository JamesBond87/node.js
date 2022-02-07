// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// --------------------------------------

// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

console.log((parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2));

// --------------------------------------

// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

console.log(((one + two + three) / 3).toFixed(5));

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

const singleLetter = letters.substring(2);
console.log(singleLetter);


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

console.log(fact.charAt(fact.indexOf("javascript")));
console.log(fact.slice(0, fact.indexOf("javascript")).concat(fact.charAt(fact.indexOf("javascript")).toUpperCase()).concat(fact.slice(fact.indexOf("javascript") + 1)));

// --------------------------------------

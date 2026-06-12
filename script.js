//your JS code here. If required.
// Declare two variables
let firstVariable;
let secondVariable;

// Take input for the first variable and multiply it by 2
firstVariable = prompt("First Input:");
firstVariable = Number(firstVariable) * 2;

// Take input for the second variable
secondVariable = prompt("Second Input:");
secondVariable = Number(secondVariable);

// Add the second input to the result of the first input multiplied by 2
const finalResult = firstVariable + secondVariable;

// Display the final result using alert()
alert("The final result is: " + finalResult);
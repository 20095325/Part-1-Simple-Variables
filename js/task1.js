// Version 2.0
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/

// calculate factorial
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

function calculate() {
  // Get the number input from the form
  const numberInput = document.getElementById('number');
  const number = parseInt(numberInput.value);

  // Check if the input is a valid number between 0 and 50
  if (isNaN(number) || number < 0 || number > 50) {
    alert('Please enter a valid integer between 0 and 50.');
    return false;
  }

  // Calculate square, cube, and factorial
  const squared = number ** 2;
  const cubed = number ** 3;
  const factorial = calculateFactorial(number);

  // Set the results in the respective fields
  document.getElementById('squared').value = squared;
  document.getElementById('cubed').value = cubed;
  document.getElementById('factorial').value = factorial;

  return false; // Prevent form submission (page reload)
}

function init() {
  // Set up the event listener for the form submission
  const form = document.forms['theForm'];
  form.onsubmit = calculate;
}

// Initialize the script when the window loads
window.onload = init;

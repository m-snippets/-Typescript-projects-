import inquirer from "inquirer";

// Prompt the user to enter two numbers and choose an operation
const question = await inquirer.prompt([
  {
    type: "number", // Input type for the first number
    name: "num1", // Variable to store the first number
    message: "Enter the 1st number", // Prompt message for the first number
  },
  {
    type: "number", // Input type for the second number
    name: "num2", // Variable to store the second number
    message: "Enter the 2nd number", // Prompt message for the second number
  },
  {
    type: "list", // Input type for the operation
    name: "operation", // Variable to store the chosen operation
    message: "Choose an operation", // Prompt message for the operation
    choices: ["add", "subtract", "multiply", "divide"], // Available operations
  },
]);
import {sum,subtract,multiply,divide} from "./operations.js";
// Perform the chosen operation based on the user's input
if (question.operation == "add") {
  // Call the sum function with num1 and num2 as arguments
  sum(question.num1, question.num2);
} else if (question.operation == "subtract") {
  // Call the subtract function with num1 and num2 as arguments
  subtract(question.num1, question.num2);
} else if (question.operation == "multiply") {
  // Call the multiply function with num1 and num2 as arguments
  multiply(question.num1, question.num2);
} else if (question.operation == "divide") {
  // Call the divide function with num1 and num2 as arguments
  divide(question.num1, question.num2);
}



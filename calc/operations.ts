function sum(num1: number, num2: number) {
	//use explicit typing if the issue of types in function parameters
	const result = num1 + num2;
	console.log(`sum of ${num1} and ${num2}= ${result} `);
}
function subtract(num1: number, num2: number) {
	const result = num1 - num2;
	console.log(`subtraction of ${num1} and ${num2}= ${result} `);
}
function multiply(num1: number, num2: number) {
	const result = num1 * num2;
	console.log(`multiplication of ${num1} and ${num2}= ${result} `);
}
function divide(num1: number, num2: number) {
	const result = num1 / num2;
	console.log(`division of ${num1} and ${num2}= ${result} `);
}
export { sum, subtract, multiply, divide };

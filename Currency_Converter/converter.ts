#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

interface CurrencyConversion {
	[currency: string]: number;
}

const currencyRates: CurrencyConversion = {
	USD: 280.98,
	CAD: 207.23,
	EUR: 301.02,
	GBP: 354.12,
};

const displayBanner = async () => {
	await showBanner(
		`Currency Converter`,
		chalk.cyan(`This is Currency Converter Project\n Created by "taha"`),
		"blue"
	);
};

async function promptUser() {
	let questions = [
		{
			type: "input",
			name: "amount",
			message: chalk.green("Enter the amount in PKR:"),
		},
		{
			type: "list",
			name: "choice",
			message: "Which Currency would you like to convert your money to?",
			choices: ["USD", "CAD", "EUR", "GBP"],
		},
	];

	return await inquirer.prompt(questions);
}

async function main() {
	await displayBanner();

	let shouldExit = false;

	while (!shouldExit) {
		const { choice, amount } = await promptUser();

		const conversionRate = currencyRates[choice];
		if (conversionRate) {
			const convertedAmount = parseFloat(amount) / conversionRate;
			console.log(
				chalk.blue(`Converted amount: ${convertedAmount.toFixed(2)} ${choice}`)
			);

			const { exit } = await inquirer.prompt({
				type: "confirm",
				name: "exit",
				message: "Do you want to exit?",
				default: false,
			});

			shouldExit = exit;
		} else {
			console.log(chalk.red("Invalid currency choice!"));
		}
	}
}

main();

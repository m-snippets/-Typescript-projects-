#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
let idPw;
idPw = {
    id: "raffey",
    pin: 123,
    balance: 1000,
};
const displayBanner = async () => {
    await showBanner(`Bank's  ATM`, chalk.cyan(` This is ATM PROJECT CREATED BY Muhammad Taha`), "blue");
};
async function promptUser() {
    const questions = [
        {
            type: "input",
            name: "id",
            message: chalk.green("Enter your ID:"),
        },
        {
            type: "password",
            name: "pin",
            message: chalk.green("Enter your pin:"),
            mask: "*",
        },
    ];
    return await inquirer.prompt(questions);
}
async function main() {
    try {
        await displayBanner();
        let id, pin;
        let authenticated = false; // Variable to track authentication status
        do {
            const userInput = await promptUser();
            id = userInput.id;
            pin = userInput.pin;
            pin = Number(pin);
            if (id !== idPw.id) {
                console.log(chalk.red("Enter your correct ID please"));
            }
            else if (pin !== idPw.pin) {
                console.log(chalk.red("Incorrect PIN, try again"));
            }
            else {
                authenticated = true;
            }
        } while (!authenticated);
        console.log(chalk.green("Welcome!"));
        while (true) {
            const options = [
                {
                    type: "list",
                    name: "choice",
                    message: "What would you like to do?",
                    choices: ["Check Balance", "Withdraw Money", "Exit"],
                },
            ];
            const selectedOption = await inquirer.prompt(options);
            if (selectedOption.choice === "Check Balance") {
                console.log(chalk.yellow(`Your Current balance is ${idPw.balance}`));
            }
            else if (selectedOption.choice === "Withdraw Money") {
                const userInputWithdraw = await inquirer.prompt([
                    {
                        type: "input",
                        name: "wMoney",
                        message: chalk.green("Enter the amount you'd like to withdraw: "),
                    },
                ]);
                const withdrawAmount = Number(userInputWithdraw.wMoney);
                if (withdrawAmount <= idPw.balance) {
                    console.log(chalk.yellow(`You successfully withdrew ${withdrawAmount}`));
                    idPw.balance -= withdrawAmount;
                }
                else {
                    console.log(chalk.red("You have insufficient balance"));
                }
            }
            else {
                console.log(chalk.green("Thank you for using our ATM"));
                process.exit();
            }
        }
    }
    catch (error) {
        console.error("Error:", error);
    }
}
main();

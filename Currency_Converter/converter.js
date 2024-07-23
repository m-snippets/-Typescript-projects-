#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const node_banner_1 = __importDefault(require("node-banner"));
const currencyRates = {
    USD: 280.98,
    CAD: 207.23,
    EUR: 301.02,
    GBP: 354.12,
};
const displayBanner = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, node_banner_1.default)(`Currency Converter`, chalk_1.default.cyan(`This is Currency Converter Project\n Created by "Raffey"`), "blue");
});
function promptUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const questions = [
            {
                type: "input",
                name: "amount",
                message: chalk_1.default.green("Enter the amount in PKR:"),
            },
            {
                type: "list",
                name: "choice",
                message: "Which Currency would you like to convert your money to?",
                choices: ["USD", "CAD", "EUR", "GBP"],
            },
        ];
        return yield inquirer_1.default.prompt(questions);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield displayBanner();
        let shouldExit = false;
        while (!shouldExit) {
            const { choice, amount } = yield promptUser();
            const conversionRate = currencyRates[choice];
            if (conversionRate) {
                const convertedAmount = parseFloat(amount) / conversionRate;
                console.log(chalk_1.default.blue(`Converted amount: ${convertedAmount.toFixed(2)} ${choice}`));
                const { exit } = yield inquirer_1.default.prompt({
                    type: "confirm",
                    name: "exit",
                    message: "Do you want to exit?",
                    default: false,
                });
                shouldExit = exit;
            }
            else {
                console.log(chalk_1.default.red("Invalid currency choice!"));
            }
        }
    });
}
main();

#! /usr/bin/env node
import inquirer from "inquirer";
const rand_no = Math.floor(Math.random());
//the answers object is in array
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please a guess a number",
    },
]);
if (answers.userguessednumber === rand_no) {
    console.log("You guessed it right");
}
else {
    console.log("You guessed it wrong");
}
//if error is provide a  name //then check for spelling mistakes

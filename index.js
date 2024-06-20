#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let numbers = await inquirer.prompt({
    name: "time",
    type: "number",
    message: chalk.green.bold("\n\n\nSet Your Timer")
});
let timer = setInterval(countdown, 1000);
function countdown() {
    if (numbers.time > 0) {
        if (numbers.time < 10) {
            console.log(chalk.yellowBright.bold(`Time Remaining...... ` + chalk.red.bold(` 0${numbers.time}`)));
        }
        else {
            console.log(chalk.yellowBright.bold(`Time Remaining...... ` + chalk.green.bold(` ${numbers.time}`)));
        }
        numbers.time = numbers.time - 1;
    }
    else if (Number.isNaN(numbers.time)) {
        clearInterval(timer);
        console.log(chalk.red.bold("Invalid Number"));
    }
    else {
        console.log(chalk.whiteBright.bold("\n\n---Time is up---\n\n"));
        clearInterval(timer);
    }
}

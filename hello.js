const chalk = require("chalk");

function helloFunction(name) {
  console.log(chalk.blue(`Hello, ${name}!`));
}

// this file EXPORTS the "helloFunction" function
module.exports = helloFunction;

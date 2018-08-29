// "require()" is a special Node.js function for IMPORTING code
const chalk = require("chalk");
const kirbyDance = require("kirby-dance");

// create a local variable "hello" that contains what "hello.js" is EXPORTING
const hello = require("./hello.js");

console.log(chalk.bgMagenta(kirbyDance(4)));

console.log(chalk.bgYellow("¡Hola, Mundo!"));
console.log(chalk.bgRed("Bonjour"));

hello("world");
// console.log(chalk.blue("Hello, world!"));

hello("Mostafa");
hello("Marie");

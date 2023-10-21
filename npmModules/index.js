const chalk = require('chalk')
const validator = require('validator')


console.log(chalk.red('hello world'))
const val =validator.isEmail('vk220783@gamil.com')
console.log(val? chalk.green(val): chalk.red(val))
console.log(chalk.yellow(validator.equals('vk220783@gamil.com','vk220783')))

// note there we are using npm package :- chalk , validator -- using to check the email is vaild or not 

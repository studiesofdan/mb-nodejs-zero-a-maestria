// Chalk
const chalk = require('chalk')
const nota = 10

if (nota >= 7) {
    console.log(chalk.green("Parabéns! Você foi aprovado!"))
} else {
    console.log(chalk.bgRed.black("Você foi reprovado :("))
}
const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
    .prompt([
    {
        name: 'q1',
        message: 'Nome: '
    },
    {
        name: 'q2',
        message: 'Idade: '
    }
])
    .then((resposta) => {
        console.log(chalk.bgYellow.black(`Nome: ${resposta.q1} / Idade: ${resposta.q2}`))

    })
    .catch((err) => console.log(err))
const inquirer = require("inquirer")

inquirer
    .prompt([
        {
            name: 'q1',
            message: 'Qual a primeira nota?',
        },
        {
            name: 'q2',
            message: 'Qual a segunda nota?'
        },
    ])
    .then((answers) => {
        console.log(answers)
        const media = (parseInt(answers.q1) + parseInt(answers.q2)) / 2

        console.log(`A média é: ${media}`)
    })
    .catch((err) => console.log(err))
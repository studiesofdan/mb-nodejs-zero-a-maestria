const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a sua linguagem preferida? ", (language) => {
    console.log(`A minha linguagem preferida é: ${language}`)

    if(language === 'Java') {
        console.log(`Eitaaaa!!! Haja café!!! :D`)
    }

    readline.close()
})
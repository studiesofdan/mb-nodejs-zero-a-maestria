const fs = require('fs')

if(!fs.existsSync('./minhapasta')) {
    console.log('Não existe')
} else if (fs.existsSync('./minha_pasta')){
    console.log('Existe!')
}

fs.mkdirSync('minha_pasta')
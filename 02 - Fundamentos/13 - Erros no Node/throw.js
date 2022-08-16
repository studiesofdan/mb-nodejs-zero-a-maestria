const x = "10"

// Checar se o numero e do tipo inteiro
if(!Number.isInteger(x)){
    throw new Error('O valor de x não é do tipo inteiro')
}

console.log('Verificando o numero...')
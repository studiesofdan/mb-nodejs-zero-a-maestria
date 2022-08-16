// Event loop: garantir que as funções sejam executadas de acordo com o que foi declarado.
// Exemplo: Temos três funções e na função c foi chamado as funções b e a.
// Sera executado em ordem: c -> b -> a

function a(){
    console.log('Executando a()')
}

function b(){
    console.log('Executando b()')
}

function c(){
    console.log('Executando c()')
    b()
    a()
}

c()
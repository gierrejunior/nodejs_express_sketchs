var nome = "Gierre Calculadora" //exportar variavel

function soma(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function mult(a,b){
    return a * b
}

function div(a,b){
    return a / b
}

module.exports = {
    sub,
    soma,
    div,
    mult,
    nome
}
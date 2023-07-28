var SomaFunc = require("./soma")    // coloca o modulo exportado em outro arquivo dentro da variavel
var SubFunc = require("./sub")
var MultFunc = require("./mult")
var DivFunc = require("./div")
var calculadora = require("./calculadora")

console.log(SubFunc(3,2))
console.log(SomaFunc(3,3))
console.log(MultFunc(6,9))
console.log(DivFunc(6,4))

console.log(calculadora.soma(6,2))
console.log(calculadora.mult(5,9))
console.log(calculadora.sub(5,7))
console.log(calculadora.div(5,8))
console.log(calculadora.nome)



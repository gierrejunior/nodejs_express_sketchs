const vel = 70

console.log(`a velocidade do carro é ${vel}Km/h`) // lembra a fstring em python só q usa a crase e o $

if (vel > 60) {
  console.log(`Você ultrapassou a velocidade permitida, MULTADO!`)
}

console.log(`Dirija sempre usando o cinto de segurança!`)


const pais = "Brasil"

console.log(`Você nasceu no ${pais}`)
if (pais.toLowerCase === "brasil"){
  console.log(`VOcê é Brasileiro !`)
} else {
  console.log(`Você é Gringo!`)
}


function sayHello(name) {
  return (`olá! Seja bem vindo, ${name}`)
}

console.log(sayHello("Gierre"))

function soma(a,b) {
  return a+b
}


let resultado = soma(93,87)

console.log(resultado)


// {} é objeto em Javascript


const celular = {
  cor : "preto",
  modelo: "poco x3 NFC",
  fabricante: "Xiaomi",
  valor: 1534.82,
  call: function (numero) {
    return console.log(`ligando para ${numero}`)
  },
  pecas: {
    software: ["windows", "Linux", "IOS", "Android"],
    hardware:["display", "bateria", "pelicula, bateria"]
  }
}

console.log (celular.cor)
console.log(celular.modelo)

let {fabricante} = celular

console.log(fabricante)

celular.call("(91)98401-7065")

let {call} = celular

call(71263712)

console.log(celular.pecas)

console.log(celular.pecas.software)

// Filtrando peças de hardware que contêm a palavra "bateria"
const pecasComBateria = celular.pecas.hardware.filter(item => item.includes("bateria"));

console.log(pecasComBateria)

const express = require("express") // importando o express
const app = express() // iniciando express


//isso é uma rota, ao criar uma rota, se informa pra qual url essa rota aponta e o que a rota faz
// essa rota aponta para a url "/", essa url é a pagina inicial do app, onde só coloca o endereço do app e mais nada
// no exemplo abaixo res.send é o que a minha rota faz, no caso envia uma mensagem pode ser varias coisas ex: json, xml e etc..
// não se pode enviar duas response numa mesma rota, e não pode deixar uma rota sem response
// no caso de duas response, ele só enviará a primeira
//no caso de uma rota sem response  ele ficará carregando infinitamente
app.get("/", function(req, res){
    res.send("Bem vindo ao meu aplicativo") // só pode enviar uma resposta uma unica vez
    // res.send("outra resposta") //por exemplo, isso esta errado, esta tentando enviar duas resposta, logo essa n funciona
})

app.get("/blog", function(req,res){
    res.send("<h3> Bem vindo ao meu blog! </h3>")
})

app.get("/canal/youtube", function(req,res){
    res.send("<h1>Olá! Bem vindo ao meu canal</h1>")
})



// o código abaixo abre o servidor, e abrir o servidor é sempre a ultima parte do código
// pois abrir o servidor tem q ser a ultima cois a ser feita
app.listen(4000, function(erro){ // 4000 é a porta local onde vai rodar
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})


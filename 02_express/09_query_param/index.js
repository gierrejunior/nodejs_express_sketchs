const express = require("express") // importando o express
const app = express() // iniciando express

/*
Nesta sintaxe, você usa o require para importar o módulo express e armazená-lo na variável express.
Em seguida, você chama a função express() para criar uma instância do framework Express e armazená-la na variável app.
*/


app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app!")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog!")
})

app.get("/blog/sobre", function(req,res){
    res.send("Bem-vindo ao meu blog! vamos falar sobre ele")
})

app.get("/youtube", function(req,res){
    var canal = req.query.canal
    // ou
    var canal = req.query["canal"]

    if(canal){
        res.send("você esta acessando o canal " + canal)
    }else{
        res.send("Bem vindo ao youtube")
    }
})


app.listen(4000, function(){  // a função listen do express quando é executada ela dispara um evento, a partir desse evento podemos executar uma função de callback
    console.log("Servidor rodando na url http://localhost:8081")
}) // pede apenas a porta, só isso ja é capaz de deixar o servidor rodando, tem q ser a ultima linha do código


//  Função de callback: é uma função que é executada sempre que algum evento acontece/executada 
const { Console } = require("console")
const express = require("express") // retorna essa função pra dentor dessa variavél, a função que cria o express
const app = express() // a variavel app cria uma instancia de todo framework express
/*
Nesta sintaxe, você usa o require para importar o módulo express e armazená-lo na variável express.
Em seguida, você chama a função express() para criar uma instância do framework Express e armazená-la na variável app.
*/

app.get("/", function(req, res){
    res.send("Seja bem vindo ao meu app!")
})


app.listen(8081, function(){  // a função listen do express quando é executada ela dispara um evento, a partir desse evento podemos executar uma função de callback
    console.log("Servidor rodando na url http://localhost:8081")
}) // pede apenas a porta, só isso ja é capaz de deixar o servidor rodando, tem q ser a ultima linha do código


//  Função de callback: é uma função que é executada sempre que algum evento acontece/executada 
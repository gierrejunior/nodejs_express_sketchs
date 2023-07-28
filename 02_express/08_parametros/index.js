const express = require("express") // importando o express
const app = express() // iniciando express



app.get("/", function(req, res){
    res.send("Bem vindo ao meu aplicativo") 
})

app.get("/blog", function(req,res){
    res.send("<h3> Bem vindo ao meu blog! </h3>")
})

app.get("/canal/youtube", function(req,res){
    res.send("<h1>Olá! Bem vindo ao meu canal</h1>")
})

// Exemplo de parametro obrigatório, se não for passado o parametro na URL da erro
app.get("/ola/:nome", function(req,res){ // /:nome é um parametro na rota, é possivel ter varios parametros
    //REQ/REQUEST => DADOS ENVIADOS PELO USUÁRIO
    //RES/RESPONSE => DADOS QUE IRÃO SER ENVIADOS PARA O USUÁRIO
    var nome = req.params.nome
    res.send("<h1>Olá " + nome + " </h1>")
})

// Exemplo de parametro obrigatório, se não for passado o parametro na URL da erro
app.get("/ola/:nome/:empresa", function(req,res){ // passando dois parametros obrigatórios
    //REQ/REQUEST => DADOS ENVIADOS PELO USUÁRIO
    //RES/RESPONSE => DADOS QUE IRÃO SER ENVIADOS PARA O USUÁRIO
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send("<h1>Olá! " + nome + " da " + empresa + " </h1>")
})

// Ex de Parametro opcional
app.get("/vlog/:artigo?", function(req,res){ // /artigo? é um parametro opcional devido ao "?"
    var artigo = req.params.artigo
    if(artigo){
        res.send("<h2>Artigo: " + artigo + " </h2>")
    }else{
        res.send("Bem vindo ao meu Vlog")
    }
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


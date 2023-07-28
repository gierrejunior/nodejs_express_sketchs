var http = require("http")


http.createServer(function(req, res){ // req de request, res de response
    res.end("Hello World! Welcome to my website")  // res.end = serve para enviar uma mensagem
}).listen(8081) //createServer = abre um servidor HTTP , listen = serve pra escolher em qual porta queremos abrir o servidor 

console.log("Servidor Rodando!")

// dessa forma que está, a cada alteração tem q fecha e abrir o servidor, para ser aplicado as alterações
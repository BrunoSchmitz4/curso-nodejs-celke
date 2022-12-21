// //O node é um Javascript puro
// console.log("Gerenciador Financeiro")

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Gerenciador Financeiro")
});

app.get("/contato", function(req, res){
    res.send("Pagina de contato");
});

app.get("/sobre-empresa", function(req, res){
    res.send("Pagina da empresa");
});

app.get("/blog", function(req, res){
    res.send("Pagina do blog");
});

app.listen(8080);

var http = require ('http'); // carrega um módulo do próprio node

// // localhost:8080
// http.createServer(function(req, res){
//     res.end("Gerenciador Financeiro")
// }).listen(8080) //startar o server

// Express é usado para criar rotas entre os arquivos .js
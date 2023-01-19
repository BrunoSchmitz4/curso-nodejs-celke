const express = require("express");
const app = express();
// const handlebars = require("express-handlebars");
const { engine } = require("express-handlebars");
// const acima para fins de testes do handlebars

const bodyParser = require("body-parser")
const pagamento = require("./models/Pagamento")

// Modificação do handlears em andamento
// app.engine('handlebars', handlebars({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

// Código acima sustitui o comentado


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/pagamento', function(req, res){
    res.render('pagamento');
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});


// Criando rota para enviar dados

app.post('/add-pagamento', function(req, res){
    //res.send("Nome" + req.body.nome + "<br>Valor: " + req.body.valor + "<br>");
    pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        // res.send("Pagamento concluído! :)")
        res.redirect('/pagamento')
    }).catch(function(erro){
        res.send("Erro: O pagamento não foi cadastrado com sucesso." + erro)
    })
})
app.listen(8080);
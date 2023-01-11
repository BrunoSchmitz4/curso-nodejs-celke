lear// Fazendo a onexão com o banco de dados usando o sequelize

const Sequelize = require('sequelize');

const sequelize = new Sequelize('bruno', 'brunotwo', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function(){
    console.log('Conexao realizada com sucesso');
}).catch(function(err){
    console.log('Erro o realizar a conexao com BD: ' + err)
});



// Passar o conteúdo abaixo para o caderno

// Criando uma tabela no banco de dados (já conectado) usando o sequelize

const Pagamento = sequelize.define('pagamentos', {
    //Atributos da coluna da tabela
    nome:{
        type: Sequelize.STRING, // Tipo de dado
    },
    valor: {
        type: Sequelize.DOUBLE
        // Para permitir valores nulos basta deixar allowNull = true
    }
});


// Criar tabel com Sequelize
// Pagamento.sync({force: true});


// Inserir registro no banco de dados
Pagamento.create({
    nome: "Energia",
    valor: 220
})
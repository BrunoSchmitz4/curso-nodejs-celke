//O node é um Javascript puro
console.log("Gerenciador Financeiro")

var client = "Bruno Schmitz da Silva"

console.log("Cliente:" + client);

var valProduct = 100;
var valDiscount = 37;

var discountFunc = require("./Modules/calDiscount");

var finalValue = discountFunc(valProduct, valDiscount);

console.log("Valor final do produto: R$" + finalValue + ",00");
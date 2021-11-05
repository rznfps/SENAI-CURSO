'use strict';
var readlinesync = require("readline-sync");
var peso, nome,
    listadepeças = [];
const caixa = listadepeças.length;

console.log("\t--- Cadastro ---");

if (caixa <= 10) {
    nome = readlinesync.question("\t Digite o nome da peça: ");
    if (nome.length < 3) {
        console.log("\t Nome muito pequeno!");
        return;
    }
    peso = readlinesync.question("\t Indique o peso da peça: ");
    if (peso < 100) {
        console.log("\t Peso insuficiente");
        return;
    }
    listadepeças.push(nome)

} else {
    console.log("Caixa cheia");
    return;
}
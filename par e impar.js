'use strict';
var readlinesync = require("readline-sync");

const alunos = readlinesync.question("\t Digite o numero de alunos aqui: ");

if (alunos == 0) {
    console.log("numero é zero.");
} else if (alunos % 2 == 0) {
    console.log("numero é par.");
} else {
    console.log("Numero é impar.");
}

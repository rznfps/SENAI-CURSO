'use strict';

var readlinesync = require("readline-sync");
var opcao, data, lindata, partdata, eventos, eventoins, palestra, palestrains, participantes,
    participantesins, idade;
var listaEvento = [],
    listaPalestra = [],
    listaParticipantes = [];
const numParticipantes = 100

do {
    console.log();
    console.log("\t--- Eventos ---");

    opcao = readlinesync.question("\t Digite 1 para continuar e 0 para sair.");

    if (opcao != 0) {
        console.log("\t Bem vindo ao registro para eventos!");
        lindata = readlinesync.question("\t Digite uma data valida (00/00/0000): ");
        partdata = lindata.split("/");
        data = new Date(partdata[2], partdata[1] - 1, partdata[0]);
        if (data < new Date) {
            console.log("Desculpe o evento ja passou.");
            return;
        } else;
        eventoins = readlinesync.question("\t Digite o nome do evento: ");
        listaEvento.push(eventoins);

        palestrains = readlinesync.question("\t Insira o nome do palestrante: ");
        listaPalestra.push(palestrains);

        participantesins = readlinesync.question("\t Digite seu nome: ");
        idade = readlinesync.question("\t Digite Sua idade: ");
        if (idade < 18) {
            console.log("\t Evento permitido apenas para maiores de 18!")
            return;
        } else
            listaParticipantes.push(participantesins);
        console.log("\t Inscrição completa!")
    } else;

} while (opcao != 0);

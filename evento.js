'use strict'
var readlinesync = require("readline-sync")
var opcao, insEvento, quantEvento;
var quantpalestranets, insPalestrante;
var data, strData, dataPartes;
var evento = [], listaparticipantes = [], palestrante = [];
var idade
var participantes , participante
const numparticipantes = 4;

do{
    console.log();
    console.log("\t\t----- Sistema De Cadastro De Eventos -----");
    console.log("\tEscolha uma opção: ");
    console.log("\t1 - Cadastrar evento");
    console.log("\t2 - Cadastrar palestrante");
    console.log("\t3 - Cadastrar participante");
    console.log("\t4 - listar evento");
    console.log("\t5 - listar palestrante");
    console.log("\t6 - listar participantes");
    console.log("\t0 - Sair Do Sistema");
    opcao=readlinesync.question("\tDigite a opcao desejada: ");
    switch(opcao){
        case '1':
            console.log("\t--- Cadastro de Evento ---")
            strData = readlinesync.question("Digite uma data valida(dd/mm/aaaa)");
            dataPartes = strData.split("/");
            data = new Date(dataPartes[2], dataPartes[1] - 1, dataPartes[0]);
            if(data < new Date()){
                console.log("Desculpe, o evento ja passou.");
            } else {
                insEvento = readlinesync.question("Digite o nome do evento: ");
                evento.push(insEvento);
            }
            break;
        case '2':
            console.log("\t--- Cadastro de Palestrantes ---");
            quantpalestranets = palestrante.length;
            if(quantpalestranets<0){
                console.log("Evento sem palestrantes.");
            } else insPalestrante = readlinesync.question("Digite o nome do palestrante: ");
            palestrante.push(insPalestrante);
            break;
        case '3':
            console.log("\t--- Cadastro de participantes ---")
            participantes = listaparticipantes.length;
            if(participantes < numparticipantes){
                participante = readlinesync.question("Digite seu nome: ");
                idade = readlinesync.question("Digite sua idade: ");
                if(idade>=18){
                    listaparticipantes.push(participante);
                } else {
                    console.log("Evento não permitido para menores de 18!");
            }} else{
                console.log("Evento Cheio !");
            }
            break;
        case '4':
            console.log("\t Lista de eventos: ");
            quantEvento = evento.lenght;
            console.log("Existem " + quantEvento + "Eventos cadastrados");
            console.log("O nome do evento é " + evento[0]);
            break;
        case '5':
            console.log("\t Lista de Palestrantes registrados: ");
            quantpalestranets = palestrante.lenght;
            console.log("Existem " + quantpalestranets + "Palestrantes cadastrados");
            console.log("O nome do palestrante é" + palestrante[0]);
            break;
        case '6':
            console.log("\tLista de Participantes cadastrados: ")
            participantes = listaparticipantes.lenght
            console.log("Existem " + participantes + "Registrados")
            for(let indice = 0; indice < participantes; indice++){
                const patual = listaparticipantes[indice];
                console.log("participante n° " + (indice + 1) + " - " + patual);        
                }
            break;
        case '0':
            console.log("\tObrigado por acessar o sitema!");
            break;
        default:
            console.log();
            console.log("\tSelecione uma das opções");
    }
} while(opcao != 0);
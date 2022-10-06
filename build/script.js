"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port = 7000;
var spring = express();
spring.get('/', function (request, response) {
    response.send('Hellow world');
});
//=============================================
spring.get('/BSM', function (request, response) {
    response.send('<< Lista de BSMs da Generation Brasil >> <br> <br>' +
        '<< **Mentalidades** >> <br>' +
        '<< Persistência >> <br>' +
        '<< Responsabilidade pessoal >> <br> ' +
        '<< Orientacão ao Futuro >> <br> ' +
        '<< Mentalidade de Crescimento >> <br> <br>' +
        '<< **Habilidades >> <br>' +
        '<< Trabalho em Equipe >> <br>' +
        '<< Atenção aos Detalhes >> <br>' +
        '<< Proatividade >> <br>' +
        '<< Comunicação >> <br>');
});
spring.get('/Aprendizagem', function (request, response) {
    response.send(' << Objetivos de aprendizagem desta semana >> <br> <br>' +
        '<< Banco de dados >> <br>' +
        '<< REST FULL >> <BR>' +
        '<< MER/DER >> <BR>');
});
spring.listen(port, function () {
    console.log("Serve is runningat por port ".concat(port));
});

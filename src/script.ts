import * as express from 'express';

const port = 7000
const spring = express();

spring.get ('/' , (request, response) => {
    response.send ('Hellow world');
});

    //=============================================

spring.get ('/BSM' , (request, response) => {
    response.send ('<< Lista de BSMs da Generation Brasil >> <br> <br>' +

                 '<< **Mentalidades** >> <br>' +
                 
                '<< Persistência >> <br>' +
                '<< Responsabilidade pessoal >> <br> ' +
                '<< Orientacão ao Futuro >> <br> ' +
                '<< Mentalidade de Crescimento >> <br> <br>' +

                '<< **Habilidades >> <br>' +

                '<< Trabalho em Equipe >> <br>' +
                '<< Atenção aos Detalhes >> <br>' +
                '<< Proatividade >> <br>' +
                '<< Comunicação >> <br>' );
})

spring.get ('/Aprendizagem' , (request, response) => {
    response.send (' << Objetivos de aprendizagem desta semana >> <br> <br>' +
                   
                    '<< Banco de dados >> <br>' +
                    '<< REST FULL >> <BR>' +
                    '<< MER/DER >> <BR>'  );
})

spring.listen(port , () => {
    console.log(`Serve is runningat por port ${port}`);
});
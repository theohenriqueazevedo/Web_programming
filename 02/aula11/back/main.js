//ideia é ter um form e acessar disiciplinas, listar e cadastrar displicnas

//importar express
const express = require('express');
const fs = require('fs');
const path = require('path');
//expres ta com dependecia no jsnon

//path ajudara a construir ma==caminho para o db


const app = express();


const dbPath = path.join('db', 'disciplinas.json')

//assim que receber a requisiççai ira acessar /disciplinas e fazer a funcao aero
app.get('/disciplinas', (req, res)=>{
    //form envia dados em query paaramns
    const {sigla} = req.query //obj req carrega a requiscao

    //operador desestruturar, coloca entre {} o que voce quer e ele vai automartico com o que escreveu entre {}
    
    //buscar no banco a sigla(serviço que esta buscando)
    const disciplinasString = fs.readFileSync(dbPath, {encoding: 'utf8'})

    //transformar o arquvio em um 'vetor de classes'
    const disciplinas = JSON.parse(disciplinasString);

    //isso agora funciona:
    // disciplinas[0];
    // disciplinas[2];
    // disciplinas[1];

    // for (let index = 0; index < disciplinas.length; index++) {
    //     if (disciplinas[index].sigla === sigla) {
    //         res.status(200).send(disciplinas[index])
    //     }
    //     res.status(200).send(disciplinas[index])
    // }


    // for == find

    const disciplina_atual = disciplinas.find( (d) => d.sigla === sigla)
    //d vai receber o primeiro elemnto, depois o segundo, depois o terceiro... e vao para quando entra na funcao


    if (disciplina_atual) {
        res.status(200).send(disciplina_atual);
    }else{
        res.status(404).send('disicplina nao encotnrada')
    }


})

//ligar o servidor para ouvir porta
app.listen(3000, () =>{
    console.log('servidor ouvindo');
})

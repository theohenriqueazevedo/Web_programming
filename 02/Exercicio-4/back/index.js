
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const path_user = path.join('db','banco-dados-usuario.json')
const path_cursos = path.join('db','cursos.json')

//Necessário para extrair os dados de Forms vindos de uma requisição POST
app.use(express.json());
app.use(cors());


app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});


//Requisicao com POST publica para autenticar usuário...
app.post('/login', async (req,res) => {

    const {email, password} = req.body;

    //acessar banco de dados e verificar user e password
    const banco_user_string = fs.readFileSync(path_user, {encoding: 'utf8'})
    const banco_user = JSON.parse(banco_user_string);

    const usuario = banco_user.find(u => u.email === email);

    //não encontrou o usuário
    if (!usuario) {
        return res.status(401).send(`Usuario com email ${email} não existe. Considere criar uma conta!`);
    }

    //encontrou o email, mas a senha nao bate
    if (usuario.password !== password) {
        return res.status(401).send("Usuario ou senhas incorretas.");
    }

    //email e senha estão certos
    return res.status(200).send("Autenticado com Sucesso");
})

//rotas de acordo com os requisitos
app.post('/create', async (req,res) => {
    const {username, email, password} = req.body;
    //acessar banco de dados e verificar user e password
    
    const banco_user_string = fs.readFileSync(path_user, {encoding: 'utf8'})
    const banco_user = JSON.parse(banco_user_string);

    const novoUser = {
        //criar json igual ao arquvio:
        id: banco_user.length + 1,
        username,
        email,
        password,
        
    }
    for (let index = 0; index < banco_user.length; index++) {
        if (banco_user[index].email === email) {
            return res.status(401).send(`Usuario com email ${email} já
            existe`)
        }
    }
    res.status(201).send('Tudo certo usuario criado com sucesso.')
    banco_user.push(novoUser)
    fs.writeFileSync(path_user, JSON.stringify(banco_user, null, 2))


})


app.get('/cursos', async (req,res) => { 
    const banco_curso_string = fs.readFileSync(path_cursos, {encoding: 'utf8'})
    const banco_curso = JSON.parse(banco_curso_string);
    return res.json(banco_curso)
})

app.get('/cursos/:nome', async (req, res) =>{
    const {nome} = req.params;

    //acessar arquivo e retonar cursos de acordo com parametro
    const banco_curso_string = fs.readFileSync(path_cursos, {encoding: 'utf8'})
    const banco_curso = JSON.parse(banco_curso_string);

     // converte para minúsculo e busca se contém parte do nome
    const curso_filtrado = banco_curso.filter(curso =>
        curso.nome.toLowerCase().includes(nome.toLowerCase())
    );

    if (curso_filtrado.length > 0) {
        return res.status(200).json(curso_filtrado);
    }

    // Caso nenhum curso seja encontrado, devolver msg
    return res.status(404).send('Curso Não Encontrado!');
})
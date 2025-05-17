
//criar referencias(ptr) primeiro

const ul = document.querySelector('ul');
const btn = document.querySelector('button');

//preciso ler o =q esta dentro do input para add, tem mais de 1 inout, entaodeve usar id
const qtdRef = document.querySelector('#qtd')
const nomeRef = document.querySelector('#nome')
const pMsg = document.querySelector('#p-msg')

//salvar a mensagem paradepois tirar

const msg = 'Seu carrinho esta vazio. Add prod'

const addProdutos = () =>{
    if (qtdRef.value === ''|| nomeRef.value === '') { 
        alert('Valores nao podem ser vazios')
        return;
    }

    const qtdValue = Number(qtdRef.value); //qtdRef.value é literal que quer transformar
    const nomeValue = nomeRef.value;

    //criar li's
    const newLi = document.createElement('li'); //cria e devolve uma referencia
    newLi.innerText = `${qtdValue}: ${nomeValue}`;

    //criar botao
    const newBtn = document.createElement('button');
    newBtn.innerText = 'X';
    newBtn.addEventListener('click', removeProd); //todo new btn que cria esta ac=ssociado a essa funcao
    //devo colocar na arvore do thml, fazer o li ser filho
    newLi.append(newBtn); //acessei o li e adicionei o filho botao
    //agora devo fazer o li ser filho do ul
    ul.append(newLi);

    //ul.insertAdjacentElement('beforeend', newLi) equivalente a ul.append(newli)

    pMsg.innerText = '';

}

btn.addEventListener("click", addProdutos)

//forma dinamica de saber qnd um botao foi add
//preciso saber quak botao foi clicado, por isso esse 'evento' que ira armazenar oq acontece
const removeProd = (evt) =>{
    console.dir(evt)
    evt.target.parentNode.remove();

    //verificar se tem algo, se nao tiver, deve retornar a msg de carrino vazio
    if (ul.childNodes.length === 0) {
        pMsg.innerText = msg;
    }
}

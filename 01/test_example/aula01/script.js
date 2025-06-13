//pegar referenfia botton  input

const btn = document.querySelector('button');
const nomeProdref = document.querySelector('#nome');
const ul = document.querySelector('ul');

//funcao para ler o input
const leitura = () =>{
    const nomeValue = nomeProdref.value;
    if (!nomeValue){
        alert('Nome do produto não pode ser vazio');
        return;
    }
    addProduto(nomeValue);
}

btn.addEventListener('click', leitura)

const addProduto = (nomeProduto) =>{
    //gerar dinamicamente os elementos
    const newLi = document.createElement('li');

    const newP = document.createElement('p');
    newP.innerText = `${nomeProduto}.Quantidade: `;

    const newSpan = document.createElement('span');
    newSpan.innerText = '1';

    newP.append(newSpan); //fez span ser descente de p

    const newbtnadd = document.createElement('button');
    newbtnadd.innerText = '+';
    newbtnadd.addEventListener('click', incrementaProd); //dinacmivamene a cada btn criado, ira ter um evento associado
    newbtnadd.style.backgroundColor = 'green';


    const newbtnsub = document.createElement('button');
    newbtnsub.innerText = '-';
    newbtnsub.addEventListener('click', decrementaProd)  
    newbtnsub.style.backgroundColor = 'red';




    newLi.append(newP);
    newLi.append(newbtnadd);
    newLi.append(newbtnsub);
    ul.append(newLi);
}
const incrementaProd = (evt) =>{
    console.dir(evt);
    let qtdAtual = Number(evt.target.parentNode.childNodes[0].childNodes[1].innerText);
    
    qtdAtual++;
    evt.target.parentNode.childNodes[0].childNodes[1].innerText = qtdAtual;
    console.log(evt);
}
const decrementaProd = (evt) =>{
    let qtdAtual = Number(evt.target.parentNode.childNodes[0].childNodes[1].innerText);
    qtdAtual--;
    if (qtdAtual <= 0){
        evt.target.parentNode.remove();
    }
    else{
        evt.target.parentNode.childNodes[0].childNodes[1].innerText = qtdAtual;
    }
}
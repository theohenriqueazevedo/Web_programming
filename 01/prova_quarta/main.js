const inputName = document.querySelector('#name');
const inputValor = document.querySelector('#valor');
const btnAdd = document.querySelector('#addProd');
const btnCalcTotal = document.querySelector('#calctotal');
const ul = document.querySelector('ul');

btnAdd.addEventListener('click', () => {

    let nome = inputName.value;
    let preco = Number(inputValor.value);


    const newli = document.createElement('li');
    newli.innerText = `${nome} - Preço: ${preco}`

    const newbtnRem = document.createElement('button');
    newbtnRem.innerText = 'X';
    newli.append(newbtnRem);


    ul.append(newli);


    newbtnRem.addEventListener('click', (evt) => {
        console.dir(evt)
    });
});

btnCalcTotal.addEventListener('click', (evt) => {
    console.log(evt)
});
const btnadd = document.querySelector('button');
const inputNome = document.querySelector('input');
const ul = document.querySelector('ul');



const addProduto = () => {
    if (inputNome.value === '') {
        alert('Nome do produto não pode ser vazio');
        return;
    }

    let quantidade_prod = 1;

    const newli = document.createElement('li');
    const span = document.createElement('span');
    const newbtnAdd = document.createElement('button');
    const newbtnRem = document.createElement('button');
    
    
    span.innerText = `${inputNome.value} Quantidade:${quantidade_prod}`;
    newbtnAdd.innerText = '+';
    newbtnRem.innerText = '-';

    newli.append(span, newbtnAdd, newbtnRem);
    ul.appendChild(newli);

    newbtnAdd.addEventListener('click', ()=>{
        quantidade_prod++;
        console.log(quantidade_prod);
        span.innerText = `${inputNome.value} Quantidade:${quantidade_prod}`;
    });
    newbtnRem.addEventListener('click', ()=>{
        if (quantidade_prod === 1) {
            newli.remove();
        } else {
            quantidade_prod--;
            span.innerText = `${inputNome.value} Quantidade:${quantidade_prod}`;
        }
    });

} 
btnadd.addEventListener('click', addProduto);


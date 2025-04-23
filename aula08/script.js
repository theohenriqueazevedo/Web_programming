// é funcional usar:
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
//no css usa-se:
//h1{
// }
// .classe1{

// }
// #qntd{
    
// }
//entao tornou-se padrao usar: queryselector

// const main = document.querySelector('main');

// const btn = document.querySelector('button'); //const pois nao iremso mudar e nao corre o risco de perder a referencia

// const h1 = document.querySelector('h1');

// //btn.addEventListener('click', mudarCor());

// //criar funcao e amarrar no botao
// // function mudarCor(){
// //     console.log('hello world');
// // }
// //mesmo nao clicando no botao executa pois a funcao esta mudarcor() sem parametros. Para resolver isso, criamos a funcao e guardamos em uma var e passamos a var para o metodo

// // btn.addEventListener('click', mudaCorFunctio);

// // const mudaCorFunctio = function mudarCor(){
// //     console.log('passei aqui')
// // }

// //usando areo function

// const geraCor = () => {

//     const novaCor = {
//         r:Math.trunc(Math.random() * 256),
//         g:Math.trunc(Math.random() * 256),
//         b:Math.trunc(Math.random() * 256)
//     }
//     return novaCor;
// }

// const mudaCor = () => {
//     const novaCor = geraCor();

//     //aplicar isso, ou seja, acesar a main, depois a div depois o botao
//     main.style.backgroundColor = `
//     rgb(${novaCor.r}, ${novaCor.g}, ${novaCor.b})
//     S`

//     //h1.innerText = `Cor de fundo; rgb(${novaCor.r},${novaCor.g},${novaCor.b})`
// }

// btn.addEventListener('click', mudaCor);



const main = document.querySelector('main');
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

const geraCor = () => {
    return {
        r: Math.trunc(Math.random() * 256),
        g: Math.trunc(Math.random() * 256),
        b: Math.trunc(Math.random() * 256)
    };
};

const mudaCor = () => {
    const novaCor = geraCor();
    const rgbString = `rgb(${novaCor.r}, ${novaCor.g}, ${novaCor.b})`;

    main.style.backgroundColor = rgbString;
    h1.innerText = `Cor de fundo: ${rgbString}`;
};

btn.addEventListener('click', mudaCor);

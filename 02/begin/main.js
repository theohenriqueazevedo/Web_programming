console.log('ola Node');

// const button = document.querySelector('button');
// console.log(button);
// isso gera um erro de nao ter documento, ou seja, estamos em um servidor, nao tem html

const parametros = process.argv;
console.log(parametros);

//recebe a versao do node e o arquivo principal que esta executando 


//argv é uma lista
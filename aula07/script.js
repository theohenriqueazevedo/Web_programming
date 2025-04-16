console.log('hello world')

const x = 10;

let cidade = 'itajuba';

//const nao altera o valor
//x = 11 

console.log(x, cidade);
console.log(typeof(x));
console.log(typeof(cidade));

x = 'cafe'

console.log(typeof(x));

{
    let c = 10;
}
//console.log(c) //ira dar problema pois esta fora do escopo

let c = [1,2,3,4];

console.log(x[0]);
console.log(x[2]);

x = 'cafe';

console.log(x[0])

let a = 5;
let z = 5;
let k = '5';

if(a == k)
{
    console.log('sao iguais');
}
if(a==z){
    console.log('sao iguais tambem');
}
//o == é abolido do javascript. É melhor usar '===' ele compara o valor e o tipo

if(x===k){
    console.log('sao iguais')
}
else{
    console.log('nem')
}
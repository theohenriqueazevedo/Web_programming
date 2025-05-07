const botaoPensar = document.querySelector('#btnpensar');
const botaoAdivinhar = document.querySelector('#btnadivinhar');
const inputInicio = document.querySelector('#inicio');
const inputFim = document.querySelector('#fim');
const inputAdivinhado = document.querySelector('#adivinhado');
const main = document.querySelector('main');

const newP = document.createElement('p');
newP.id = 'pmsg';
main.appendChild(newP);

let tentativas = 0;
let numeroPensado = null;

const pensar = (e) => {
    if (inputInicio.value === '' || inputFim.value === '') {
        newP.innerText = 'Digite um número inteiro nos campos início e fim!'; 
        return;
    }
    tentativas = 0;
    let inicio = parseInt(inputInicio.value);
    let fim = parseInt(inputFim.value);
    numeroPensado = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
    newP.innerText = `Pronto! Pensei em um numero entre ${inicio} e ${fim}. Tente adivinhar`; 


}

const adivinhar = () =>{
    
    if (numeroPensado === null) {
        newP.innerText = 'Calma Jovem! Nem pensei em nenhum número. Lembrou de clicar no "Pensar?';
        return;
    }
    if (!inputAdivinhado.value) {
        newP.innerText = 'Digite um número inteiro para tentar adivinhar o que pensei'; 
        return;
    }
    let chute = parseInt(inputAdivinhado.value);
    if (chute > numeroPensado) {
        newP.innerText = "O numero que eu pensei é menor"
        tentativas++;
    }
    else if (chute < numeroPensado){
        newP.innerText = "O numero que eu pensei é maior"
        tentativas++;
    }
    else{
        newP.innerText = `Parabens! Eu pensei no numero ${numeroPensado}. Voce conseguiu apos ${tentativas} tentativa(s)`
        inputAdivinhado.value = '';
    }
}

botaoPensar.addEventListener('click', pensar);
botaoAdivinhar.addEventListener('click', adivinhar);
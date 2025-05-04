const btnjog1 = document.querySelector('#btn-jogador1');
const btnjog2 = document.querySelector('#btn-jogador2');
const btnreset = document.querySelector('#btn-reset');



const pontojog1 = (evt) => {
    const divPrincipal = evt.target.parentNode.parentNode;
    const placar = divPrincipal.querySelector('#placar');
  
    let [j1, j2] = placar.innerText.split(' a ').map(Number);
    j1++;
  
    if (j1 >= pontuacaoMaxima) {
      // Vitória do jogador 1
      placar.innerText = `${j1} a ${j2}`;
      btnjog1.style.backgroundColor = 'green';
      btnjog2.style.backgroundColor = 'red';
    } else {
      placar.innerText = `${j1} a ${j2}`;
    }
  };

const pontojog2 = (evt) =>{
    // sobe dois níveis: botão → controles_jogo → div principal
    const divPrincipal = evt.target.parentNode.parentNode;

    // agora busca o <p> 'placar' com id placar dentro da div principal
    const placar = divPrincipal.querySelector('#placar');

    //pegar o 0 a 0 do placar 
    let placar_atual = placar.innerText// placar atual = "0 a 0"

    //retirar 'a' e somar o elemento[0]
    let partes = placar_atual.split(' a ');   

    let j1 = Number(partes[0]);
    let j2 = Number(partes[1]);
    j2++;
    if (j2 >= pontuacaoMaxima) {
        // Vitória do jogador 2
        placar.innerText = `${j1} a ${j2}`;
        btnjog2.style.backgroundColor = 'green';
        btnjog1.style.backgroundColor = 'red';
      } else {
        placar.innerText = `${j1} a ${j2}`;
      }
}
const reiniciar = (evt) =>{
    const placar = document.querySelector('#placar');
    placar.innerText = '0 a 0';
    // Limpar a cor de fundo ao reiniciar
    btnjog1.style.backgroundColor = '';
    btnjog2.style.backgroundColor = '';
}

const select = document.querySelector('#qtdvitoriosa');
let pontuacaoMaxima = Number(document.querySelector
('#qtdvitoriosa').value);

select.addEventListener('change', (e) => {
    //mudar valor da pontuacao da vitoria
    pontuacaoMaxima = Number(e.target.value);
    reiniciar();
});


btnjog1.addEventListener('click', pontojog1);
btnjog2.addEventListener('click', pontojog2);
btnreset.addEventListener('click', reiniciar);
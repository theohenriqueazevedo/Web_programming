const btnjog1 = document.querySelector('#btn-jogador1');
const btnjog2 = document.querySelector('#btn-jogador2');
const btnreset = document.querySelector('#btn-reset');
const select = document.querySelector('#qtdvitoriosa');

let pontuacaoMaxima = Number(document.querySelector
('#qtdvitoriosa').value);// pega a pont max q ta no select logo q inicia
let jogoAcabou = false; 

const pontojog1 = (evt) => {
    if (jogoAcabou) return;

    // sobe dois niveis: botao → controles_jogo → div principal
    const divPrincipal = evt.target.parentNode.parentNode;
    // agora busca o <p> 'placar' com id placar dentro da div principal
    const placar = divPrincipal.querySelector('#placar');
  
     // pega o placar atual e quebra nos numeros
    let [j1, j2] = placar.innerText.split(' a ').map(Number);
    j1++;
  
     // se j1 ganhou
    if (j1 >= pontuacaoMaxima) {
        placar.innerHTML = `<span style="color: green">${j1}</span> a <span style="color: red;">${j2}</span>`;
        jogoAcabou = true;
    } else {
      placar.innerText = `${j1} a ${j2}`;
    }
  };

const pontojog2 = (evt) =>{
    if (jogoAcabou) return;

    // sobe dois níveis: botão → controles_jogo → div principal
    const divPrincipal = evt.target.parentNode.parentNode;

    // agora busca o <p> 'placar' com id placar dentro da div principal
    const placar = divPrincipal.querySelector('#placar');

    // pega o placar atual e quebra nos numeros
    let [j1, j2] = placar.innerText.split(' a ').map(Number);
    j2++;

    // se j2 ganhou
    if (j2 >= pontuacaoMaxima) {
        placar.innerHTML = `<span style="color: red">${j1}</span> a <span style="color: green;">${j2}</span>`;
        jogoAcabou = true;
      } else {
        placar.innerText = `${j1} a ${j2}`;
      }
}
const reiniciar = (evt) =>{
    const placar = document.querySelector('#placar');
    placar.innerText = '0 a 0';
    jogoAcabou = false;
    // Limpar a cor de fundo ao reiniciar
    btnjog1.style.backgroundColor = '';
    btnjog2.style.backgroundColor = '';
}


select.addEventListener('change', (e) => {
    //mudar valor da pontuacao da vitoria
    pontuacaoMaxima = Number(e.target.value);
    reiniciar();
});

btnjog1.addEventListener('click', pontojog1);
btnjog2.addEventListener('click', pontojog2);
btnreset.addEventListener('click', reiniciar);
btnGerar = document.querySelector('#btngerador');
btnValidar = document.querySelector('#btnvalidar');
inputexpgerada = document.querySelector('#expgerada');
inputRESuser = document.querySelector('#resposta_user');
inputmsgfinal = document.querySelector('#mensagem_final');

let res_operacao = ''

btnGerar.addEventListener('click', () => {
    // console.log('clicou gerar')
    const valor_gerado1 = Math.floor(Math.random()* 10);
    const valor_gerado2 = Math.floor(Math.random()* 10);
    // max-min+1 -min
    const operacoes = ['+', '-', '*'];
    idx_operacao = Math.floor(Math.random()* 3);
    operacao_escolhida = operacoes[idx_operacao];
    // console.log(valor_gerado1, valor_gerado2, idx_operacao)
    if (operacao_escolhida === '+') {

        inputexpgerada.value = `${valor_gerado1} + ${valor_gerado2}`;
        res_operacao = valor_gerado1 + valor_gerado2
    }
    else if(operacao_escolhida === '-'){

        inputexpgerada.value = `${valor_gerado1} - ${valor_gerado2}`;
        res_operacao = valor_gerado1 - valor_gerado2
    }
    else{

        valor_gerado1 * valor_gerado2;
        inputexpgerada.value = `${valor_gerado1} x ${valor_gerado2}`;
        res_operacao = valor_gerado1 * valor_gerado2
        
    }
});
btnValidar.addEventListener('click', (evt) => {
    tentaiva_user = Number(inputRESuser.value);
    if (tentaiva_user === res_operacao) {
        inputmsgfinal.value = 'Parabéns'
    }
    else{
        inputmsgfinal.value = `Deu Ruim. A resposta correta é ${res_operacao}`
    }

});
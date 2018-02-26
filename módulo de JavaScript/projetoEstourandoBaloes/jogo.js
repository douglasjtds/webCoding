var timerID = null; //variável que armazena a função da chamada timeout

function iniciaJogo (){
	// alert('Jogo iniciado');
	var url = window.location.search;
	var nivelJogo = url.replace("?", "");
	// alert(nivelJogo);
	var tempoSegundos = 0;

	//níveis jogo
		// 1 -> fácil - 120 segundos
		// 2 -> médio - 60 segundos
		// 3 -> difícil - 30 segundos
	if(nivelJogo == 1) {
		tempoSegundos = 120;
	} else if(nivelJogo == 2){
		tempoSegundos = 60;
	} else if(nivelJogo == 3){
		tempoSegundos = 30;
	}

	// inserindo segundos no span
	document.getElementById('cronometro').innerHTML = tempoSegundos;

	// quantidade de balões
	var qtdeBaloes = 40;
	criaBaloes(qtdeBaloes);

	// imprimir qtde de baloes no jogo
	document.getElementById('baloesInteiros').innerHTML = qtdeBaloes;
	document.getElementById('baloesEstourados').innerHTML = 0;

	contagemTempo(tempoSegundos + 1);

}


function contagemTempo (segundos) {
	segundos = segundos - 1;

	if (segundos == -1) {
		clearTimeout(timerID); // para a execução da função setTimeout
		gameOver();
		return false;
	}	

	document.getElementById('cronometro').innerHTML = segundos;
	timerID = setTimeout("contagemTempo("+segundos+")", 1000);
}

function criaBaloes(qtdeBaloes){
	for (var i = 1; i <= qtdeBaloes; i++) {

		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';
		balao.id = 'b' + i;
		balao.onclick = function() { estourar(this) };
		document.getElementById('cenario').appendChild(balao);

	}
}

function gameOver() {
	alert('Fim de jogo, você não conseguiu estourar todos os balões a tempo.');
}

function estourar(e){
	var idBalao = e.id;
	document.getElementById(idBalao).src = 'imagens/balao_azul_pequeno_estourado.png'
	pontuacao(-1);
}

function pontuacao(acao) {
	var baloesInteiros = document.getElementById('baloesInteiros').innerHTML;
	var baloesEstourados = document.getElementById('baloesEstourados').innerHTML;
	baloesInteiros = parseInt(baloesInteiros);
	baloesEstourados = parseInt(baloesEstourados);

	baloesInteiros = baloesInteiros + acao;
	baloesEstourados = baloesEstourados - acao;

	document.getElementById('baloesInteiros').innerHTML = baloesInteiros;
	document.getElementById('baloesEstourados').innerHTML = baloesEstourados;

	situacaoJogo(baloesInteiros);
}

function situacaoJogo(baloesInteiros){
	if (baloesInteiros == 0) {
		alert('Parabéns! Você conseguiu estourar todos os balões a tempo.');
		pararJogo();
	}
}

function pararJogo() {
	clearTimeout(timerID);
}
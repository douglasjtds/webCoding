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
	var qtdeBaloes = 10;
	criaBaloes(qtdeBaloes);

	// imprimir qtde de baloes inteiros
	document.getElementById('baloesInteiros').innerHTML = qtdeBaloes;
	document.getElementById('baloesEstourados').innerHTML = 0;

	contagemTempo(tempoSegundos);

}

function criaBaloes(qtdeBaloes){
	for (var i = 1; i <= qtdeBaloes; i++) {
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';

		document.getElementById('cenario').appendChild(balao);
	}
}

function contagemTempo (segundos) {
	segundos = segundos - 1;

	if (segundos < 0) {
		clearTimout(timerID); // para a execução da função setTimeout
		return false;
	}	

	document.getElementById('cronometro').innerHTML = segundos;
	timerID = setTimeout("contagemTempo("+segundos+")", 1000);
}

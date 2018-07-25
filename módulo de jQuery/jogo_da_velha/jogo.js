var rodada = 1;
var matrizJogo = Array(3);

matrizJogo['a'] = Array(3);
matrizJogo['b'] = Array(3);
matrizJogo['c'] = Array(3);

matrizJogo['a'][1] = 0;
matrizJogo['a'][2] = 0;
matrizJogo['a'][3] = 0;

matrizJogo['b'][1] = 0;
matrizJogo['b'][2] = 0;
matrizJogo['b'][3] = 0;

matrizJogo['c'][1] = 0;
matrizJogo['c'][2] = 0;
matrizJogo['c'][3] = 0;

$(document).ready( function(){

	$('#btnIniciarJogo').click( function(){

		//valida a digitação dos apelidos dos jogadores
		if($('#entradaApelido1').val() == ''){
			alert('Apelido do jogador 1 não foi preenchido');
			return false;
		}
		if($('#entradaApelido2').val() == ''){
			alert('Apelido do jogador 2 não foi preenchido');
			return false;
		}


		//exibir os apelidos
		$('#nomeJogador1').html($('#entradaApelido1').val());
		$('#nomeJogador2').html($('#entradaApelido2').val());


		//controla visualização das divs
		$('#paginaInicial').hide();
		$('#paginaPalcoJogo').show();

	});

	$('.jogada').click( function(){
		var idCampoClicado = this.id;
		$('#'+idCampoClicado).off();
		jogada(idCampoClicado);
	});


	//atribuir imagem ao campo clicado
	function jogada(id){
		var icone = '';
		var ponto = 0;

		if((rodada % 2) == 1){
			icone = 'url("imagens/marcacao_1.png")'
			ponto = -1;
			// alert('É a vez do jogador 1');
		} else {
			icone = 'url("imagens/marcacao_2.png")'
			ponto = 1;
			// alert('É a vez do jogador 2');
		}
		// alert(rodada);
		rodada++;

		$('#' + id).css('background-image', icone);

		// alert(id);
		var linhaColuna = id.split('-');
		// alert(linhaColuna);


		matrizJogo[linhaColuna[0]][linhaColuna[1]] = ponto;

		// console.log(matrizJogo);
		verificaCombinacaoDePontos();
	}


	function verificaCombinacaoDePontos(){

		//verifica na horizontal
		var pontos = 0;
		for (var i = 1; i <= 3; i++) {
			pontos = pontos + matrizJogo['a'][i];
		}
		isGanhador(pontos);

		pontos = 0;
		for (var i = 1; i <= 3; i++) {
			pontos = pontos + matrizJogo['b'][i];
		}
		isGanhador(pontos);

		pontos = 0;
		for (var i = 1; i <= 3; i++) {
			pontos = pontos + matrizJogo['c'][i];
		}
		isGanhador(pontos);


		//verifica na vertical
		for (var j = 1; j <= 3; j++) {
			pontos = 0;
			pontos += matrizJogo['a'][j];
			pontos += matrizJogo['b'][j];
			pontos += matrizJogo['c'][j];

			isGanhador(pontos);
		}


		//verifica na diagonal
		pontos = 0;
		pontos = matrizJogo['a'][1] + matrizJogo['b'][2] + matrizJogo['c'][3];  
		isGanhador(pontos);

		pontos = 0;
		pontos = matrizJogo['a'][3] + matrizJogo['b'][2] + matrizJogo['c'][1];  
		isGanhador(pontos);

	}

	function isGanhador(pontos){
		if (pontos == -3) {
			var jogada1 = $('#entradaApelido1').val();
			alert (jogada1 + ' foi o(a) vencedor(a)!!!');
			$('.jogada').off();
		} else if (pontos == 3) {
			var jogada2 = $('#entradaApelido2').val();
			alert (jogada2 + ' foi o(a) vencedor(a)!!!');
			$('.jogada').off();
		}
	}

});
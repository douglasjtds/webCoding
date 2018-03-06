var rodada = 1;
var matrizJogo = Array(3);

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
	}

});
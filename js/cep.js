// Autocomplete com jquery-ui
$( function() {
    $("#cep").autocomplete({
      source: function( request, response ) {
        $.ajax( {
          url: "app/endereco.php",
          dataType: "json",
          data: {
            _action: 'get_endereco', // Método remoto
            term: request.term // Parâmetro enviado ao método
          },
          success: function( data ) {
            response( data );
          }
        } );
      },
      minLength: 4,
      select: function( event, ui ) {
        // Alimenta os campos a partir do retorno do método remoto
        $("#logradouro").val(ui.item.logradouro);
        $("#cidade").val(ui.item.cidade);
        $("#bairro").val(ui.item.bairro);
      }
    });

});

$(document).ready(function () {

  var $seuCampoCpf = $("#cpf");

  $seuCampoCpf.mask('000.000.000-00', {reverse: true});

});

$(document).ready(function () {

  var $seuCampoTelefone = $("#telefone");

  $seuCampoTelefone.mask('(00)0000-0000', {reverse: true});

});

$(document).ready(function () {

  var $seuCampoCelular = $("#celular");

  $seuCampoCelular.mask('(00)00000-0000', {reverse: true});

});

function valCpf($cpf){
		$cpf = preg_replace('/[^0-9]/','',$cpf);
		$digitoA = 0;
		$digitoB = 0;
		for($i = 0, $x = 10; $i <= 8; $i++, $x--){
			$digitoA += $cpf[$i] * $x;
		}
		for($i = 0, $x = 11; $i <= 9; $i++, $x--){
			if(str_repeat($i, 11) == $cpf){
				return false;
			}
			$digitoB += $cpf[$i] * $x;
		}
		$somaA = (($digitoA%11) < 2 ) ? 0 : 11-($digitoA%11);
		$somaB = (($digitoB%11) < 2 ) ? 0 : 11-($digitoB%11);
		if($somaA != $cpf[9] || $somaB != $cpf[10]){
			return false;	
		}else{
			return true;
		}
	}
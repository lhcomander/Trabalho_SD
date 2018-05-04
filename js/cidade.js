	$( function() {
    $("#cidade").autocomplete({
      source: function( request, response ) {
        $.ajax( {
          url: "app/cidade.php",
          dataType: "json",
          data: {
            _action: 'get_cidade', // Método remoto
            term: request.term // Parâmetro enviado ao método
          },
          success: function( data ) {
            response( data );
          }
        } );
      },
      minLength: 2,
      select: function( event, ui ) {
        // Alimenta os campos a partir do retorno do método remoto
        $("#logradouro").val(ui.item.logradouro);
        $("#cidade").val(ui.item.cidade);
        $("#bairro").val(ui.item.bairro);
      }
    });

});
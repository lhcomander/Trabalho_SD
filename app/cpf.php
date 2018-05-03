<?php

require_once('baseClass.php');

class cpf extends baseClass {

    // Lista de métodos disponíveis nesta classe
    protected $actions = array(
        'get_endereco'
    );

    // Recebe o CEP como parâmetro
    // Retorna dados de endereço
    public function get_cpf(){
		
        $data = (object) $_GET;

        $term = mysqli_real_escape_string($this->conn,$data->term);

        $sql = " SELECT * FROM CPF ";

        $result = $this->_select_fetch_all($sql);

        // Retorna os dados em formato JSON
        echo json_encode($result);

    }

}

$endereco = new endereco($_GET['_action']);
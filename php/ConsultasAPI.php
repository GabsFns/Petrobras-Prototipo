<?php

include 'BancoAPI.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica qual ação está sendo solicitada
    if(isset($_POST['acao'])) {
        $acao = $_POST['acao'];

        switch($acao) {
            case "cadastrar":
                cadastrarCliente();
                break;
            case "login":
                loginCliente();
                break;
            case "atualizar":
                AtualizarCredencias();
                break;
            // Adicione outros casos conforme necessário
            default:
                echo json_encode(['mensagem' => 'Ação desconhecida']);
        }
    } else {
        echo json_encode(['mensagem' => 'Ação não especificada']);
    }
} else {
    echo json_encode(['mensagem' => 'Método de requisição inválido']);
}





function cadastrarCliente(){
$Nome = $_POST['nome'];
$CPF = $_POST['CPF'];
$Telefone = $_POST['telefone'];
$RG = $_POST['RG'];
$DataNsc = $_POST['DataNasc'];
$estCivil = $_POST['estCivil'];
$Email = $_POST['Email'];
$Senha = $_POST['senha'];
$CEP = $_POST['cep'];
$UF = $_POST['uf'];
$Cidade = $_POST['cidade'];
$Logradouro = $_POST['logradouro'];
$Bairro = $_POST['bairro'];


  //INSERINDO OS DADOS AO BANCO - CADASTRO AO CLIENTE
global $pdo;
$query = $pdo ->prepare('INSERT INTO nome_tabela ( ) VALUES (?, ?)');
$query -> execute([$Nome, $CPF, $Telefone, $RG, $DataNsc, $estCivil, $Email, $Senha, $CEP, $UF, $Cidade, $Logradouro, $Bairro]);

echo json_encode(['Dados Realizado com Sucesso => true']);

}


function LoginCliente(){
if(isset($_POST['login'])) {
    $email = $_POST['email'];
    $senha = $_POST['senha'];
    
    // Consulta ao banco de dados para verificar se as credenciais estão corretas
    global $pdo;
    $query = $pdo->prepare('SELECT * FROM nome_tabela WHERE Email = ? AND Senha = ?');
    $query->execute([$email, $senha]);
    
    // Verifica se encontrou algum registro com as credenciais fornecidas
    if($query->rowCount() > 0) {
        // Credenciais corretas, redireciona para outra página
        header("Location: outra_pagina.php");
        exit();
    } else {
        // Credenciais incorretas
        echo json_encode(['mensagem' => 'Credenciais inválidas']);
    }
}
}

function AtualizarCredencias(){

    if(isset($_POST{''}) && isset ($_POST[''])  && isset ($_POST[''])  && isset ($_POST[''])
      && isset ($_POST[''])  && isset ($_POST['']) && isset ($_POST[''])){

        $CEP = $_POST['cep'];
        $UF = $_POST['uf'];
        $Cidade = $_POST['cidade'];
        $Logradouro = $_POST['logradouro'];
        $Bairro = $_POST['bairro'];
        $Telefone = $_POST['telefone'];
        $estCivil = $_POST['estCivil'];
        global $pdo;
        $query = $pdo->prepare('UPDATE nome_tabela SET =? =? =? =? =? =? =?');

        if($query->rowCount() > 0) {
            echo json_encode(['mensagem' => 'Credenciais atualizadas com sucesso']);
        } else {
            echo json_encode(['mensagem' => 'Erro ao atualizar credenciais']);
        }
    } else {
        echo json_encode(['mensagem' => 'Dados incompletos']);
    }
     
    }

?>



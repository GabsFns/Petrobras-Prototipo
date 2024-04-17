<?php
$host = '';     // host do banco de dados
$username = ''; // nome de usuário do banco de dados
$password = ''; // senha do banco de dados
$database = ''; // nome do banco de dados

// Conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $database);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

include 'consultasBanco.php';

?>


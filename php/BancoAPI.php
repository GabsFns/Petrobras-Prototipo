<?php
$url = 'mysql:host= ;dbname= ;charset=utf8';
$username = ' ';
$password = ' ';

try {
    // Cria uma nova conexão PDO
    $pdo = new PDO($url, $username, $password);
    
    // Define o modo de erro do PDO para exceção
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Conexão bem-sucedida!";
} catch (PDOException $e) {
    // Se ocorrer um erro na conexão, exibe a mensagem de erro
    echo "Erro na conexão: " . $e->getMessage();
}

?>


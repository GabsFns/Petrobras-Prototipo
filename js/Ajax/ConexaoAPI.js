

// * Utilizando o AJAX para enviar os dados do formulario de cadastro para uma API RESTful em PHP

//RESTful - Conjundo de Regras para Intereção entre o Servidor e a WEB, WEB envia uma requisição para o servidor e servidor recebe essa requisição,
//processa-a e responde com as informações solicitadas.

$('#CadastroCliente').submit(function(ImpedirEnvioPadrao) {
    ImpedirEnvioPadrao.preventDefault(); 
    
    var DadosFormatados = $(this).serialize();
    DadosFormatados += "&acao=cadastrar";

    $.ajax({
        URL: "/php/ConsultasAPI.php",
        type: "POST",
        data: DadosFormatados,
        dataType: "json",
        success: function(response){
            alert("Cadastro Finalizado!");
            console.log(response);

        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });

});

$('#LoginCliente').submit(function(event) {
    event.preventDefault(); 
    
    var dadosFormatados = $(this).serialize();
    DadosFormatados += "&acao=cadastrar";

    $.ajax({
        url: "/php/ConsultasAPI.php",
        type: "POST",
        data: dadosFormatados + "&login=1", // Adiciona o parâmetro 'login' para indicar que é uma requisição de login
        dataType: "json",
        success: function(response){
            if(response.mensagem === "Credenciais inválidas") {
                alert("Credenciais inválidas. Por favor, verifique seu email e senha.");
            } else {
                // Se as credenciais estiverem corretas, redireciona para outra página
                window.location.href = "outra_pagina.php";
            }
        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });

});

$('#AtualizarCredencias').submit(function(event) {
    event.preventDefault();

    var dadosFormatados = $(this).serialize();
    DadosFormatados += "&acao=atualizar";

    $.ajax({
        url: "/php/ConsultasAPI.php",
        type: "POST",
        data: dadosFormatados,
        dataType: "json",
        success: function(response){
            if(response.mensagem === "Credenciais Atualizadas!") {
                alert("Credenciais Atualizadas com Sucesso")
            } else {
                alert("Algo incorreto nas sua Credenciais")
            }
        }
    })
})

    var ElementoCor = null;                  // ** Variavel

    function TrocarBorderCor(element) {      // ** Função de trocar a cor da bordar de uma Div com o Paramentro (Element)
        if (ElementoCor !== null) {          // ** Verifica se houve um elemento clicado anteriormente. Se sim, o código dentro do bloco if será executado.
            ElementoCor.style.borderColor = "black";
        }
        element.style.borderColor = "green"; // ** DEFINA A COR DO ELEMENTO
        ElementoCor = element;               // ** Atualiza a variável previousElement para armazenar a referência ao elemento clicado atualmente, para que possa ser restaurada posteriormente, se necessário.
    }
function consultarCEP() {
  var cep = document.getElementById("cep").value;
  cep = cep.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (cep.length != 8) {
    alert("CEP inválido, deve conter 8 dígitos.");
    return;
  }

  var url = "https://viacep.com.br/ws/" + cep + "/json/";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        alert("CEP não encontrado.");
      } else {
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
      alert("Ocorreu um erro ao consultar o CEP.");
    });
}

function limparCampos() {
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("logradouro").value = "";
  document.getElementById("uf").value = "";
  document.getElementById("cep").value = "";
}

function GraficoRenda(params) {}

function habilitarEdicao() {
  // Seleciona todos os inputs com o atributo 'disabled'
  var inputs = [
    document.getElementById("cep"),
    document.getElementById("logradouro"),
    document.getElementById("uf"),
    document.getElementById("bairro"),
    document.getElementById("cidade"),
    document.getElementById("email"),
    document.getElementById("telefone"),
    document.getElementById("estCivil"),
  ];

  // Itera sobre os inputs e os habilita
  inputs.forEach(function (input) {
    input.disabled = false;
  });
}

function SalvarInput() {
  var inputs = [
    document.getElementById("cep"),
    document.getElementById("logradouro"),
    document.getElementById("uf"),
    document.getElementById("bairro"),
    document.getElementById("cidade"),
    document.getElementById("email"),
    document.getElementById("telefone"),
    document.getElementById("estCivil"),
  ];

  // Itera sobre os inputs e os habilita

  var algumVazio = false;                           //Esta variável será usada para verificar se há algum campo vazio
  inputs.forEach(function (input) {                 //forEach() para iterar sobre todos os elementos na array inputs
    if (input.tagName.toLowerCase() === "select") { //O método tagName retorna o nome da tag HTML do elemento atual, e toLowerCase() é usado para garantir que estamos comparando em minúsculas, pois as tags HTML são sempre em minúsculas.
      if (input.selectedIndex === 0) {              // estamos verificando se a primeira opção do campo de seleção está selecionada. selectedIndex retorna o índice da opção selecionada. Se for igual a 0, significa que a primeira opção está selecionada.
        algumVazio = true;                          //Se a primeira opção do campo de seleção não estiver selecionada, definimos algumVazio como true, indicando que encontramos um campo vazio
        input.style.border = "1px solid red"; 

      } else {                                      //Se a primeira opção do campo de seleção estiver selecionada, estamos removendo a borda vermelha do campo
        input.style.border = ""; 
      }

    } else {                                        //Esta parte do código é executada para campos que não são de seleção (ou seja, campos de texto, etc.).
     
      if (input.value.trim() === "") {              //Se o campo estiver vazio, definimos algumVazio como true e adicionamos uma borda vermelha ao campo, indicando visualmente que o campo está vazio.
        algumVazio = true;
        input.style.border = "1px solid red";
      } else {
        input.style.border = "";                    //Se o campo não estiver vazio, removemos qualquer borda vermelha que tenha sido adicionada anteriormente.
      }
    }
  });                                               //Fechamento de Loop do ForEach

  if (algumVazio) {
    alert("Por favor, preencha todos os campos antes de salvar.");  
    return;                                         //Após o loop, verificamos se algumVazio é true. Se for, exibimos um alerta informando ao usuário para preencher todos os campos antes de salvar e, em seguida, retornamos da função para impedir que os campos sejam desabilitados.
  }

  
  inputs.forEach(function (input) {
    input.disabled = true;
  });                                               //Se todos os campos estiverem preenchidos, desabilitamos todos os campos percorrendo novamente a array inputs e definindo a propriedade disabled como true. Isso impede que o usuário modifique os campos após o salvamento.
}




function mostrarConteudo(id) {
  // Oculta todos os conteúdos
  var contents = document.getElementsByClassName('content');
  for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
  }
  // Mostra o conteúdo desejado
  var contentToShow = document.getElementById(id);
  if (contentToShow) {
      contentToShow.style.display = 'block';
  }
}

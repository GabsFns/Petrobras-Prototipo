function consultarCEP() {
    var cep = document.getElementById('cep').value;
    cep = cep.replace(/\D/g, ''); // Remove caracteres não numéricos
  
    if (cep.length != 8) {
      alert('CEP inválido, deve conter 8 dígitos.');
      return;
    }
  
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado.');
        } else {
          document.getElementById('logradouro').value = data.logradouro;
          document.getElementById('bairro').value = data.bairro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('uf').value = data.uf;
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
        alert('Ocorreu um erro ao consultar o CEP.');
      });
  }
  
  function limparCampos() {
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('cep').value = '';
  }
  
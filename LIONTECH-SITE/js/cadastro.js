function salvarCadastro(event) {
      event.preventDefault();
      const login = document.getElementById('login').value;
      const senha = document.getElementById('senha').value;
      const confirmaSenha = document.getElementById('confirmaSenha').value;

      if (senha !== confirmaSenha) {
        document.getElementById('mensagem').textContent = 'As senhas não conferem!';
        return;
}

      const usuario = {
        nome: document.getElementById('nome').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        sexo: document.getElementById('sexo').value,
        nomeMaterno: document.getElementById('nomeMaterno').value,
        cpf: document.getElementById('cpf').value,
        celular: document.getElementById('celular').value,
        fixo: document.getElementById('fixo').value,
        endereco: document.getElementById('endereco').value,
        login: login,
        senha: senha
};

      localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));
      document.getElementById('mensagem').textContent = 'Cadastro realizado com sucesso! Redirecionando para login...';
      setTimeout(() => window.location.href = 'login.html', 2000);
}
  

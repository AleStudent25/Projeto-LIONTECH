// ======= LOGIN =======

function validarLogin() {
  const usuario = JSON.parse(localStorage.getItem('usuarioCadastrado'));
  const loginInput = document.getElementById('usuario').value;
  const senhaInput = document.getElementById('senha').value;

  if (!usuario) {
    alert("Nenhum usuário cadastrado.");
    return false;
  }

  if (loginInput === usuario.login && senhaInput === usuario.senha) {
    sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    alert("Login bem-sucedido!");
    window.location.href = 'principal.html';
    return false;
  } else {
    alert("Login ou senha incorretos.");
    return false;
  }
}

function voltarPagina() {
  window.history.back();
}

function verificarSessao() {
  const user = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  const topBar = document.querySelector('.top-bar');
  if (user && topBar) {
    topBar.innerHTML = `
      <span>Olá, ${user.nome.split(' ')[0]} | </span>
      <a href="#" onclick="logout()">Logout</a>
      <a href='carrinho.html' title='Carrinho'>🛒 Carrinho</a>
    `;
  }
}

function logout() {
  sessionStorage.removeItem('usuarioLogado');
  window.location.href = 'login.html';
}

// ======= MODO ESCURO =======

// Aplica classe com base na preferência salva
document.addEventListener('DOMContentLoaded', () => {
  const modoSalvo = localStorage.getItem('dark-mode');
  if (modoSalvo === 'true') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.add('light-mode');
  }

  const toggleBtn = document.getElementById('toggle-dark-mode');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
      const modoAtual = document.body.classList.contains('dark-mode');
      localStorage.setItem('dark-mode', modoAtual);
    });
  }
});

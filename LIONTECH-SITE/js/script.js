/ js/script.js

document.getElementById('formCadastro')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const login = document.getElementById('login').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const confirmaSenha = document.getElementById('confirmaSenha').value.trim();
  const mensagem = document.getElementById('mensagemFeedback');

  if (login.length < 6) {
    mensagem.textContent = 'Login deve conter no mínimo 6 caracteres.';
    mensagem.style.color = 'red';
    return;
  }

  if (senha.length < 8) {
    mensagem.textContent = 'Senha deve conter no mínimo 8 caracteres.';
    mensagem.style.color = 'red';
    return;
  }

  if (senha !== confirmaSenha) {
    mensagem.textContent = 'As senhas não coincidem.';
    mensagem.style.color = 'red';
    return;
  }

  mensagem.textContent = 'Cadastro realizado com sucesso!';
  mensagem.style.color = 'green';

  // Redireciona para login após 2 segundos
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2000);
});
const whatsappButton = document.querySelector('.whatsapp-float');

if (whatsappButton) {
    setInterval(() => {
        whatsappButton.classList.toggle('active');
    }, 1500);
}

let zoomLevel = 1;

function ajustarZoom(acao) {
  if (acao === 'aumentar' && zoomLevel < 1.5) {
    zoomLevel += 0.1;
  } else if (acao === 'diminuir' && zoomLevel > 0.5) {
    zoomLevel -= 0.1;
  } else if (acao === 'padrao') {
    zoomLevel = 1;
  }
  document.body.style.transform = `scale(${zoomLevel})`;
  document.body.style.transformOrigin = 'top center';
}


const toggleButton = document.getElementById('toggle-dark-mode');






document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-dark-mode");

  // Verifica se o usuário já tem uma preferência salva
  const savedMode = localStorage.getItem("modo");
  if (savedMode) {
    document.body.classList.add(savedMode);
  } else {
    // Define como light-mode por padrão
    document.body.classList.add("light-mode");
  }

  toggleButton.addEventListener("click", function () {
    if (document.body.classList.contains("light-mode")) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("modo", "dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("modo", "light-mode");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const login = localStorage.getItem('usuarioLogado');
    document.getElementById('userLogin').textContent = 'Usuário: ' + login;
});

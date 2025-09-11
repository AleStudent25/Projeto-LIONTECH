let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];


function adicionarCarrinho(nome, preco, imagem) {
  carrinho.push({ nome, preco, imagem });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  alert(`${nome} foi adicionado ao carrinho.`);
}


function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const totalElem = document.getElementById('total');
  lista.innerHTML = '';

  let total = 0;

  carrinho.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('item-carrinho');

    div.innerHTML = `
      ${item.imagem ? `<img src="${item.imagem}" alt="${item.nome}" style="width: 100px; height: auto; border-radius: 8px;">` : ''}
      <p><strong>${item.nome}</strong></p>
      <p>Preço: ${item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <button onclick="removerItem(${index})" style="margin-top: 10px;">Remover</button>
      <hr>
    `;

    lista.appendChild(div);
    total += item.preco;
  });

  totalElem.innerText = `Total: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}

function removerItem(index) {
  carrinho.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
}

// Atualiza ao carregar a página
atualizarCarrinho();

document.addEventListener("DOMContentLoaded", atualizarCarrinho);


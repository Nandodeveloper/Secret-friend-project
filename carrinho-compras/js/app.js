let totalGeral ;
limpar();
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorProduto;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    quantidade = document.getElementById('quantidade').value = '1';
}

function limpar() {
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '1';
}
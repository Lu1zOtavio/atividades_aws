// Método Simples
document.getElementById('titulo').innerText = 'Minha Loja Online';

// Método Complexo
var produtoDiv = document.getElementById('produto');

var nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Produto A';

var descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Esta é uma descrição do Produto A.';

var precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 50,00';

var imagemProduto = document.createElement('img');
imagemProduto.src = 'caminho/para/imagem.jpg'; 
produtoDiv.appendChild(nomeProduto);
produtoDiv.appendChild(descricaoProduto);
produtoDiv.appendChild(precoProduto);
produtoDiv.appendChild(imagemProduto);

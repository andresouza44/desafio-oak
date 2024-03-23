
const listProdutos = document.querySelector('.lista-produtos')
const listagem = document.querySelector('.listagem')
const produtos = JSON.parse(localStorage.getItem('produtos')) || [];


produtos.sort((a,b) =>a.valor - b.valor)   
produtos.forEach(element => {

    const valorFormatado = Number(element.valor).toFixed(2)
    listProdutos.innerHTML += `
    <tr>
        <td>${element.nome}</td>
        <td>${valorFormatado}</td>
    </tr>`
   
});

localStorage.setItem('produtos', JSON.stringify(produtos))


const form = document.querySelector('.form-cadastro')
const produto = document.querySelector('.produto')
const produtos = JSON.parse(localStorage.getItem('produtos')) || [];        

const addProduto = ( e =>{
    e.preventDefault();

    const novoProduto = {
        nome:form.produto.value.trim(),
        descricao: form.descricao.value.trim(),
        valor: form.valor.value,
        disponivel: form.disponivel.value
    };
               
    produtos.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    e.target.reset()
 
    window.location.href="./listagem.html"
})

form.addEventListener('submit', addProduto)





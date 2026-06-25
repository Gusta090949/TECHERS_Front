import "./ProdutoCard.js";

const produtos =
    document.querySelectorAll("produto-card");

produtos.forEach(produto => {

    produto.addEventListener(
        "adicionado-ao-carrinho",
        (evento) => {

            const {
                titulo,
                preco
            } = evento.detail;

            alert(
                `Produto ${titulo} no valor de ${preco} foi para o carrinho!`
            );

            console.log(
                `Produto ${titulo} no valor de ${preco} foi para o carrinho!`
            );
        }
    );

});

/* Demonstração da reatividade */

setTimeout(() => {

    const primeiroProduto =
        document.querySelector("produto-card");

    primeiroProduto.setAttribute(
        "titulo",
        "Teclado Mecânico RGB"
    );

    primeiroProduto.setAttribute(
        "preco",
        "R$ 299,90"
    );

}, 5000);
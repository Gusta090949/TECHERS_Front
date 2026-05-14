function criarCard(){

    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("Conteudo").value;

    let select = document.getElementById("corFundo");

    let cor = select.value;

    let textoOpcao = select.options[select.selectedIndex].text;

    if(titulo == ""){
        alert("Digite um nome!");
        return;
    }

    let card = document.createElement("div");

    card.className = "card " + cor;

    card.innerHTML = `
        <button class="delete-btn">X</button>

        <h3>${titulo}</h3>

        <p>${descricao}</p>

        <p><strong>Poção escolhida:</strong> ${textoOpcao}</p>
    `;

    // deletar card
    let deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.onclick = function(){
        card.remove();
    };

    document.getElementById("card-container").appendChild(card);

    // limpar inputs
    document.getElementById("titulo").value = "";
    document.getElementById("Conteudo").value = "";

}
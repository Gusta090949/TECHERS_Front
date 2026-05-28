function criarCard() {

    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("Conteudo").value;
    let select = document.getElementById("corFundo");

    let cor = select.value;

    let textoOpcao = select.options[select.selectedIndex].text;

    if (titulo.trim() === "") {
        alert("Digite um nome!");
        return;
    }

    

    let card = document.createElement("div");

    mouseover
    

    mouseout
    // identifica a palavra dentro da frase
    const eLendario =
        titulo.toLowerCase().includes("lendario") ||
        descricao.toLowerCase().includes("lendario");

    // adiciona classe
    if (eLendario) {

        card.className = "card " + cor + " item-lendario";

    } else {

        card.className = "card " + cor;
    }

    card.innerHTML = `
        <button class="delete-btn">X</button>

        <h3>${titulo}</h3>

        <p>${descricao}</p>

        <p><strong>Poção escolhida:</strong> ${textoOpcao}</p>
    `;

    // texto extra lendário
    if (eLendario) {

        card.innerHTML += `<p>⭐ ITEM LENDÁRIO ⭐</p>`;
    }

    // deletar
    let deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.onclick = function() {

        card.remove();
    };

    document.getElementById("card-container").appendChild(card);

    // limpar
    document.getElementById("titulo").value = "";
    document.getElementById("Conteudo").value = "";
}
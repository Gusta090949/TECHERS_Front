Enviarnota.addEventListener('click', function(event) {

    const Titulo = document.getElementById('Titulo');
    const Counteudo = document.getElementById('Counteudo');
    
    console.log(event.target);
  });



  function criarCard() {
    // 1. Capturar os valores dos inputs
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    
    // 2. Selecionar o container
    const container = document.getElementById('card-container');

    // 3. Criar os elementos do card
    const card = document.createElement('div');
    card.classList.add('card'); // Adiciona a classe CSS

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = titulo;

    const cardDescription = document.createElement('p');
    cardDescription.innerText = descricao;

    // 4. Montar o card
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    // 5. Adicionar o card ao container
    container.appendChild(card);

    // Limpar campos
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';

  }

Enviarnota.addEventListener('click', function(event) {

    const Titulo = document.getElementById('Titulo');
    const Counteudo = document.getElementById('Counteudo');
    
    console.log(event.target);
  });



  function criarCard() {

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    
  
    const container = document.getElementById('card-container');

   
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = titulo;

    const cardDescription = document.createElement('p');
    cardDescription.innerText = descricao;

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);


    container.appendChild(card);

    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';

  }

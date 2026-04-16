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

    note.onmouseenter = function(){
        note.style.transform = "scale(1.05)";
        deleteBtn.style.display = "block";
        }
        
        note.onmouseleave = function(){
        note.style.transform = "scale(1)";
        deleteBtn.style.display = "none";
        }
        
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        
        deleteBtn.style.position = "absolute";
        deleteBtn.style.top = "5px";
        deleteBtn.style.right = "5px";
        deleteBtn.style.display = "none";
        
        deleteBtn.onclick = function(){
        note.remove();
        }
        
        const titleElement = document.createElement("h4");
        titleElement.innerText = title;
        
        const contentElement = document.createElement("p");
        contentElement.innerText = content;
        
        note.appendChild(deleteBtn);
        note.appendChild(titleElement);
        note.appendChild(contentElement);
        
        board.appendChild(note);
        
        form.reset();
        

    container.appendChild(card);

    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';

  }
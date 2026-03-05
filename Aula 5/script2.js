
//const nomes = ['Ana','Henrique', 'Rafael', 'Filipe', 'Teodoro']

//nomes[0] = 'Barbara'
//nomes[7] = 'Jose'

const dataInfo = [
    "Bulbasaur é um Pokémon do tipo Planta/Veneno que carrega uma semente em suas costas. Na primeira temporada ele aparece como um Pokémon leal e protetor.",
    "Charmander é um Pokémon do tipo Fogo com uma chama na ponta da cauda que indica sua saúde e emoções. Ele é muito fiel ao seu treinador.",
    "Squirtle é um Pokémon do tipo Água que usa sua concha para defesa. No anime ele aparece como líder de um grupo chamado Esquadrão Squirtle.",
    "Pikachu é um Pokémon do tipo Elétrico conhecido por armazenar eletricidade em suas bochechas. Ele é o parceiro principal de Ash.",
    "Caterpie é um Pokémon inseto pequeno que sonha em evoluir e voar como Butterfree.",
    "Weedle é um Pokémon inseto com um ferrão venenoso na cabeça que usa para se defender.",
    "Pidgey é um Pokémon pássaro pequeno e comum, conhecido por sua habilidade de voar rapidamente.",
    "Rattata é um Pokémon roedor muito ágil e com dentes fortes usados para roer quase qualquer coisa.",
    "Meowth é um Pokémon do tipo Normal famoso por falar a língua humana e por fazer parte da Equipe Rocket.",
    "Psyduck é um Pokémon do tipo Água que sofre frequentemente de dores de cabeça, liberando poderes psíquicos quando a dor fica muito forte."
    ];
    
    const headings = [
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Pikachu",
    "Caterpie",
    "Weedle",
    "Pidgey",
    "Rattata",
    "Meowth",
    "Psyduck"

    ];
   
    const imgSrc =  [
        'Pikachu-PNG-Picture.png',
        'pikachu.png',
        'pikachu.png',
        'pikachu.png',
       'pikachu.png',
        'pikachu.png',
        'pikachu.png',
        'pikachu.png',
        'pikachu.png',
        'pikachu.png'  
    ]

    const imgCard = document.getElementsByClassName('img-card')
    const titulo = document.getElementsByClassName('titulo')
    const info = document.getElementsByClassName('info')

    // for while 
    // for repete finitas vezes 
    //while repete enquanto a condicao for verdadeira
    for(let i = 0; i < 10; i++){
     imgCard[i].setAttribute("src", imgSrc[i])
     titulo[i].textContent = headings[i]
     info[i].textContent = dataInfo[i]
    }
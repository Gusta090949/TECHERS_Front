import{ProfileCard} from './ProfileCard.js';


const meuCard = document.querySelector('profile-card');

meuCard.addEventListener('seguir-clicando', (event) =>{
    const dados = event.detail;
    console.log(`[API] Registrado que voce seguiu o usuário: ${dados.usuario}`);
    alert(`Voce começou a seguir ${dados.usuario}!`);
});

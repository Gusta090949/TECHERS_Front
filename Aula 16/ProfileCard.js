const template = document.createElement('template');
template.innerHTML = /*html*/`


    <style>
        :host {
            display: block;
            margin: 15px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .card {
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
            max-width: 250px;
            text-align: center;
        }
        .nome {
            color: #2c3e50;
            font-size: 1.4rem;
            margin: 10px 0 5px 0;
        }
        .cargo {
            color: #7f8c8d;
            font-size: 0.95rem;
            margin: 0 0 20px 0;
        }
        /* Estilo base do botão (fallback) */
        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background 0.3s;
        }
        button:hover {
            background-color: #2980b9;
        }
    </style>

    <div class="card">
        <h2 class="nome">Nome Padrão</h2>
        <p class="cargo">Cargo Padrão</p>
        
        <button part="btn-acao">Seguir Perfil</button>
    </div>
`;

export class ProfileCard extends HTMLElement {
    static get observedAttributes() {
        return ['nome','cargo']

    }
    constructor(){
        super()
        
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    attributeChangedCallBack(name, oldValue, newValue){
        if (oldValue === newValue) return;
        if(name === 'nome'){
            this.shadowRoot.querySelector('.nome').textContent = newValue || `Usuario Desconhecido`;
        }

        if(name == 'cargo'){
            this.shadowRoot.querySelector('.cargo').textContent = newValue || `Cargo não informado`;
        }

        connectedCallback(){
            const btn = this.shadowRoot.querySelector('button');

            btn.addEventListener{'click', () => {
        }
    }
}
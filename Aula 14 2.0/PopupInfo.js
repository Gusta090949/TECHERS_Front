class PopupInfo extends HTMLElement{
    constructor(){
        //Super configura para pegar partes especificas do HTMLelements
        //!
        super();

        this.shadow = this.attachShadow({mode:'open'})
        const template = document.getElementById('popup-template')

        this.shadow.appendChild(template.content.cloneNode(true))
    }

    //Faz com que a tag execute quando ela for inserida no HTML
    connectedCallback(){
        if(this.hasAttribute('img')){
            const img = this.shadowRoot.querySelector('img')

            img.src = this.getAttribute('img')
            
        }
    }
}

customElements.define("popup-info",PopupInfo);
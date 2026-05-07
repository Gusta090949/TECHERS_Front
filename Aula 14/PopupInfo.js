class PopupInfo extends HTMLElement{
    constructor(){
        //Super configura para pegar partes especificas do HTMLelements
        //!
        super();
    }

    //Faz com que a tag execute quando ela for inserida no HTML
    connectedCallback(){
        //span é um objeto vazio
        const wrapper = document.createElement('span');
        //que configuramos para ser da class wrapper
        wrapper.setAttribute("class","wrapper");

        const icon = document.createElement("span");
        icon.setAttribute("class","icon");
        icon.setAttribute("tabindex",0);

        const info = document.createElement("span");
        info.setAttribute("class","info");

        //Le informações do atributo(data-text)
        const text = this.getAttribute("data-text");
        info.textContent = text;

        //Logica imagem
        let imgUrl;
        if(this.hasAttribute("img")){
            imgUrl = this.getAttribute("img");
        }else{
            imgUrl = "suco.png";
        }

        const img = document.createElement('img');
        img.src = imgUrl;
        img.setAttribute("alt","Icone de informação");
        img.setAttribute("width","100px");

        //Montando a hierarquia(pais e filhos - Legiao urbana)
        icon.appendChild(img);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);

        this.appendChild(wrapper);
        
    }
}

customElements.define("popup-info",PopupInfo);
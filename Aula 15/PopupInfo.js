class PopupInfo extends HTMLElement{
    constructor(){
        //Super configura para pegar partes especificas do HTMLelements
        //!
        super();

        this.shadow = this.attachShadow({mode:'open'})
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

        const style = document.createElement("style")
        style.textContent = `
        .wrapper { position: realative; display: inline-block;}
        .info{
        visiblity: hidden; width: 200px; background-color: #333; color: #fff;
        text-align: center; padding: 10px; border-radius: 6px;
        position: absolute z-index: 1; botton: 125%: left 50%;
        margin-left: -100px; opacity: 0; transition: opacity 0.3s;
        }
        .icon: hover + .info {visibility: visable; opacity: 1;}
        `;
        

        //Montando a hierarquia(pais e filhos - Legiao urbana)
        icon.appendChild(img);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);

        this.shadow.appendChild(style);
        this.shadow.appendChild(wrapper);
    }
}

customElements.define("popup-info",PopupInfo);
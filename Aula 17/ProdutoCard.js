export class ProdutoCard extends HTMLElement {

    static get observedAttributes() {
        return ["titulo", "preco"];
    }

    constructor() {
        super();

        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = /*html*/ `
            <style>

                :host {
                    display: block;
                }

                .card {
                    background: var(--card-bg, white);
                    border: 1px solid #ddd;
                    border-radius: var(--card-radius, 10px);
                    padding: 16px;
                    width: 250px;
                    font-family: Arial, sans-serif;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                    transition: 0.3s;
                }

                .card:hover {
                    transform: translateY(-5px);
                }

                h3 {
                    margin-bottom: 10px;
                    color: #333;
                }

                p {
                    font-size: 18px;
                    font-weight: bold;
                    color: #27ae60;
                    margin-bottom: 15px;
                }

                button {
                    width: 100%;
                    padding: 10px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    background: var(--btn-color, #3498db);
                    color: white;
                    font-size: 15px;
                }

            </style>

            <div class="card">
                <h3 id="titulo"></h3>

                <p id="preco"></p>

                <button
                    id="comprar"
                    part="btn-comprar">
                    Adicionar ao Carrinho
                </button>
            </div>
        `;
    }

    connectedCallback() {

        this.atualizarInterface();

        this.shadowRoot
            .getElementById("comprar")
            .addEventListener("click", () => {

                this.dispatchEvent(
                    new CustomEvent(
                        "adicionado-ao-carrinho",
                        {
                            detail: {
                                titulo: this.getAttribute("titulo"),
                                preco: this.getAttribute("preco")
                            },
                            bubbles: true,
                            composed: true
                        }
                    )
                );

            });

    }

    attributeChangedCallback() {
        this.atualizarInterface();
    }

    atualizarInterface() {

        if (!this.shadowRoot) return;

        const titulo =
            this.getAttribute("titulo") || "";

        const preco =
            this.getAttribute("preco") || "";

        this.shadowRoot
            .getElementById("titulo")
            .textContent = titulo;

        this.shadowRoot
            .getElementById("preco")
            .textContent = preco;
    }
}

customElements.define(
    "produto-card",
    ProdutoCard
);
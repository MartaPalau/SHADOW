customElements.define('af-six', class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<slot></slot>
    <style>
    :host{
        @apply --six;
        }
    </style>`
    }
});


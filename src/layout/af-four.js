customElements.define('af-four', class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<slot></slot>
    <style>
    :host{
        @apply --four;
        }
    </style>`
    }
});


customElements.define('af-three', class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<slot></slot>
    <style>
    :host{
        @apply --three;
        }
    </style>`
    }
});


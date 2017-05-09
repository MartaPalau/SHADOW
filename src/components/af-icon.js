customElements.define('af-eight', class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<slot></slot>
        <style>
    :host{
        @apply --eight;
        }
    </style>`


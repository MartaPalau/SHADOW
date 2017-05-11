customElements.define('af-bed', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :host([bed]){
                max-width:203px;
                flex-basis: 17% !important;
                -webkit-flex-basis: 17% !important;
                font-size:var(--font14);
                box-shadow: 0 0 var(--shadow-medium-radius) 0 rgba(0,0,0, 0.3);
                font-family: var(--font-condensed),sans-serif;
                margin-right:var(--margin-medium);
                margin-bottom:var(--margin-medium);
                }
            .bed:hover{
                    background-color: var(--color-hover);
                    cursor:pointer;
                }
        </style>
            <div class="bed">

                <af-icon bed__bg__icon icon__female></af-icon>
                <slot></slot>

            </div>
	`;
    }
});



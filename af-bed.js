customElements.define('af-bed', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <af-bed>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :host([bed]){
                max-width:15%;
                flex-basis: 15% !important;
                -webkit-flex-basis: 15% !important;
                font-size:var(--font-tiny);
                box-shadow: 0 0 var(--shadow-medium-radius) 0 rgba(0,0,0, 0.3);
                font-family: var(--font-condensed),sans-serif;
                margin-right:var(--margin-large);
                margin-bottom:var(--margin-large);
                }
            .bed:hover{
                background-color: var(--color-hover);
                cursor:pointer;
                }
            /*.not__defined [bed__bg__icon]{
                    display:none;
                }*/
        </style>
            <div class="bed">

                <af-icon bed__bg__icon icon__female></af-icon>
                <slot></slot>

            </div>
	`;
    }
});



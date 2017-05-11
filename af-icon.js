customElements.define('af-icon', class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :host{
                font-family: 'icons' !important;
                font-style: normal;
                font-weight: normal;
                font-variant: normal;
                text-transform: none;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            :host([bed__bg__icon]) {
                    position: absolute;
                    z-index: 0;
                    opacity: 0.2;
                    font-size: 77px;
                    margin-left: 82px;
                    margin-top: 42px;
                    color: var(--color-lightgrey);
            }
            :host([icon__female]):before{
                content: var(--icon__female);
            }
            :host([icon__bed]):before {
                    content: var(--icon__bed);
                }
            :host([icon__allergies]):before {
                content: var(--icon__allergies);
            }
            :host([icon__intolerances]):before {
                content: var(--icon__intolerances);
            }
            :host([icon__join]):before {
                content: var(--icon__join);
            }
            :host([icon__chat]):before {
                content: var(--icon__chat);
            }
            :host([icon__xray]):before {
                content: var(--icon__xray);
            }
            :host([icon__lab]):before {
                content: var(--icon__lab);
            }
            :host([icon__treatment]):before {
                content: var(--icon__treatment);
            }
            :host([icon__medication]):before {
                content: var(--icon__medication);
            }
        </style>
        <slot></slot>`
    }
});


customElements.define('af-bed', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :host{
                @apply --bed;
            }
            .bed:hover{
                    background-color: var(--color-minor2-lighten);
                    cursor:pointer;
                }
            .bed--selected{
                    background-color: var(--color-lightgrey-soft);
                }
            .bed__icon__background {
                    position: absolute;
                    z-index: 0;
                    opacity: 0.2;
                    font-size: 77px;
                    margin-left: 82px;
                    margin-top: 42px;
                    color: var(--color-lightgrey);
                }
        </style>
            <div class="bed">
                <af-icon class="bed__icon__background bed__icon--background01"></af-icon>
                <slot></slot>
            </div>
	`;
    }
});



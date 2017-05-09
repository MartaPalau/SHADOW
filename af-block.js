customElements.define('af-block', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :host{
                @apply --basis;
            }
             /*@import url("src/style-guide/style-guide.css");*/
            /*should be imported*/
            [font14]{
                font-size:14px;
            }
            [shadow-medium]{
                box-shadow: 0 0 var(--shadow-medium-radius) 0 rgba(0,0,0, 0.3);
            }
            [condensed]{
                font-family: var(--font-condensed),sans-serif;
            }
            [margin__medium--right]{
                margin-right:var(--margin-medium-right);
            }
            [margin__medium--bottom]{
                margin-bottom:var(--margin-medium-bottom);
            }
           /**/
            .block{
                    min-height: 204px;
                    max-width:204px;
                }
            .block:hover{
                    background-color: var(--color-minor2-lighten);
                    cursor:pointer;
                }
            .block--selected{
                    background-color: var(--color-lightgrey-soft);
                }
            .block__icon__background {
                    position: absolute;
                    z-index: 0;
                    opacity: 0.2;
                    font-size: 77px;
                    margin-left: 82px;
                    margin-top: 42px;
                    color: var(--color-lightgrey);
                }
        </style>
            <slot></slot>
            <div shadow-medium font14 condensed margin__medium--bottom class="block">
                <af-icon class="block__icon__background icon--female"></af-icon>
                <af-header></af-header>
                <af-content></af-content>
                <af-footer></af-footer>
            </div>
	`;
    }
});



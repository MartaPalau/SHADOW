customElements.define('af-header', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            .header__top{
                    background-color:var(--color-lightgrey);
                    width:100%;
                    padding: 2px 0 2px 2px;
                }
            .header__top__name{
                margin-right:var(--margin-small-right);
                font-family: var(--font-bold-condensed),sans-serif;
                color: var(--color-white);
                font-size:var(--font14);
                }
            .header__bottom {
                    padding: 2px 6px;
                    font-family: var(--font-condensed),sans-serif;
                    font-size: 24px;
                    color: var(--color-lightgrey);
                    font-family: var(--font-condensed),sans-serif;
                }
        </style>
                    <div class="header__top">
                        <span class="header__top__name">
                            <slot name="header__top__name">119-A</slot>
                        <span>
                    </div>
                    <af-horizontal class="header__bottom">
                        <af-one></af-one>
                        <af-none>
                            <slot name="header__bottom"><af-icon icon__bed></af-icon></slot>
                        </af-none>
                    </af-horizontal>

	`;
    }
});



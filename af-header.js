customElements.define('af-header', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            .header__top{
                    background-color:var(--color-lightgrey);
                    padding:var(--pad-tiny);
                    color: var(--color-white);
                }
            .header__top--bold-condensed{
                font-family: var(--font-bold-condensed),sans-serif;
                }
            .header__bottom {
                    padding:var(--pad-tiny);
                }
            .header__bottom--icon{
                    font-size: 24px;
                    color: var(--color-lightgrey);
                    max-height: 22px;
                }
            </style>

                <div class="header__top">
                    <span class="header__top header__top--bold-condensed">119-A<span>
                </div>

                <af-horizontal class="header__bottom">
                    <af-one></af-one>
                    <af-none class="header__bottom header__bottom--icon">
                        <af-icon icon__bed></af-icon>
                    </af-none>
                </af-horizontal>

    `;}
});



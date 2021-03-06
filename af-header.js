customElements.define('af-header', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <af-header>.
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
            .header__bottom__icon{
                    font-size: var(--font-big);
                    color: var(--color-lightgrey);
                    max-height: var(--font-big);
                }
            </style>

            <div class="header">

                <div class="header__top">
                    <span class="header__top--bold-condensed">119-A</span>
                </div>

                <af-horizontal class="header__bottom">
                    <af-one></af-one>
                    <af-none class="header__bottom__icon">
                        <af-icon icon__bed></af-icon>
                    </af-none>
                </af-horizontal>

            </div>
    `;}
});



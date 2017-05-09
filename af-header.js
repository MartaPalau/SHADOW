customElements.define('af-header', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
             /*@import url("src/style-guide/style-guide.css");*/
            /*should be imported*/
            [margin__small--right]{
                margin-right:var(--margin-small-right);
            }
            [bold--condensed]{
                font-family: var(--font-bold-condensed),sans-serif;
            }
            [condensed]{
                font-family: var(--font-condensed),sans-serif;
            }
           /**/
            .header__name{
                    color: var(--color-white);
                    font-size:var(--font14);
                    background-color:var(--color-lightgrey);
                    width:100%;
                    padding: 2px 0 2px 2px;
                }
            .header__name{
                    color: var(--color-white);
                    font-size:var(--font14);
                    background-color:var(--color-lightgrey);
                    width:100%;
                    padding: 2px 0 2px 2px;
                }
            .header__status {
                    padding: 2px 6px;
                }
            .header__status__elem{
                    font-size: 24px;
                    color: var(--color-lightgrey);
                }
        </style>

                <af-vertical>
                    <af-none>
                        <div bold--condensed margin__small--right class="header__name"><slot name="header__name">119-A</slot></div>
                    </af-none>
                    <af-none>
                        <af-horizontal>
                            <af-one></af-one>
                            <af-none>
                                <div condensed class="header__status header__status__elem">
                                    <slot name="header__status__icon"><af-icon class="header__status--icon01"></af-icon></slot>
                                </div>
                            </af-none>
                        </af-horizontal>
                    </af-none>
                </af-vertical>
	`;
    }
});



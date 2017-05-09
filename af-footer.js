customElements.define('af-footer', class extends HTMLElement {
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
            [margin__small--left]{
                margin-left:var(--margin-small-left);
            }
            [margin__small--top]{
                margin-top:var(--margin-small-top);
            }
            [pad__small--top]{
                padding-top:var(--pad-small-top);
            }
            [margin__small--bottom]{
                margin-bottom:var(--margin-small-bottom);
            }
            [italic]{
                font-family: var(--font-italic),sans-serif;
            }
            [border__card--top]{
                border-top: var(--border-size) solid var(--border-color);
            }
            [condensed]{
                font-family: var(--font-condensed),sans-serif;
            }
           /**/
            .footer__left--professional{
                    margin-top: var(--margin-small);
                }
            .footer__right--icons{
                    width: 30px;
                    background-color: rgba(205, 205, 205, .3);
                    height: 100%;
                }

        </style>
        <slot></slot>
            <af-horizontal>
                <af-one>
                    <div border__card--top>
                        <af-horizontal>
                            <af-one>
                                <div margin__small--left margin__small--top>
                                    <af-vertical>
                                        <af-one>
                                            <div condensed>
                                                <slot name="footer__left--name">Dr.Juan Roca</slot>
                                            </div>
                                        </af-one>
                                        <af-one>
                                            <div italic>
                                                <slot name="footer__left--service">General</slot>
                                            </div>
                                        </af-one>
                                    </af-vertical>
                                </div>
                            </af-one>
                            <af-none>
                                <div margin__small--left class="footer__right--icons">
                                    <af-vertical>
                                        <div margin__small--left margin__small--bottom pad__small--top>
                                            <slot name="footer__right--icon01"><af-icon class="footer__right--icon01"></af-icon></slot>
                                        </div>
                                        <div margin__small--left margin__small--bottom>
                                            <slot name="footer__right--icon02"><af-icon class="footer__right--icon02"></af-icon></slot>
                                        </div>
                                    </af-vertical>
                                </div>
                            </af-none>
                        </af-horizontal>
                    </div>
                </af-one>
            </af-horizontal>
	`;
    }
});



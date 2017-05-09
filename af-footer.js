customElements.define('af-footer', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :host([border__top]){
                border-top: var(--border-size) solid var(--border-color);
            }
            .footer__left{
                margin-left:var(--margin-small-left);
                margin-top:var(--margin-small-top);
            }
            .footer__left__professional{
                margin-top: var(--margin-small);
                font-family: var(--font-condensed),sans-serif;
                }
            .footer__left__service{
                font-family: var(--font-italic),sans-serif;
                }
            .footer__right{
                width: 30px;
                background-color: rgba(205, 205, 205, .3);
                height: 100%;
                }
            .footer__right__top{
                padding-top:var(--pad-small-top);
                margin-bottom:var(--margin-small-bottom);
                margin-left:var(--margin-small-left);
                }
            .footer__right__bottom{
                margin-left:var(--margin-small-left);
            }
        </style>
        <slot></slot>
        <af-horizontal>
            <af-one class="footer__left">
                <div class="footer__left__professional">
                    <slot name="footer__left__professional">Dr.Juan Roca</slot>
                </div>
                <div class="footer__left__service">
                    <slot name="footer__left__service">General</slot>
                </div>
            </af-one>
            <af-none class="footer__right">
                <div class="footer__right__top">
                    <slot name="footer__right__top"><af-icon icon__treatment></af-icon></slot>
                </div>
                <div class="footer__right__bottom">
                    <slot name="footer__right__bottom"><af-icon icon__medication></af-icon></slot>
                </div>
            </af-none>
        </af-horizontal>
	`;
    }
});



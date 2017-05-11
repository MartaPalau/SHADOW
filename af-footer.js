customElements.define('af-footer', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :host([border__top])> .footer{
                border-top: var(--border-size) solid var(--border-color);
            }
            .footer__left{
                padding:var(--pad-small)
            }
            .footer__left--condensed{
                font-family: var(--font-condensed),sans-serif;
                }
            .footer__left--italic{
                font-family: var(--font-italic),sans-serif;
                }
            .footer__right{
                width: 14px;
                background-color: rgba(205, 205, 205, .3);
                padding:var(--pad-small);
                }
        </style>
        <slot></slot>

        <af-horizontal class="footer">

            <af-one class="footer__left">
                <div class="footer__left--condensed">Dr.Juan Roca</div>
                <div class="footer__left--italic">General</div>
            </af-one>

            <af-vertical class="footer__right">
                <af-one>
                    <af-icon icon__treatment></af-icon>
                </af-one>
                <af-one>
                    <af-icon icon__medication></af-icon>
                </af-one>
            </af-vertical>

        </af-horizontal>
	`;
    }
});



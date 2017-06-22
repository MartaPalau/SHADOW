customElements.define('af-footer', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <af-footer>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :host([border__top])> .footer{
                border-top: var(--border-small) solid var(--border-color);
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
           /* .not__defined .footer__right{
                    display:none;
                }
            .not__defined span{
                    display:none;
                }
            .not__defined .footer__left--condensed, .not__defined .footer__left--italic{
                    height:10px;
                    width:100px;
                    margin-bottom:var(--margin-small);
                    animation-duration: 1s;
                    animation-name: slidein;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
                }
             @keyframes slidein {
                from {
                    background-color:var(--color-lightgrey);
                }
                to {
                    background-color:var(--color-lightgrey-soft);
                }
             }*/
        </style>


            <af-horizontal class="footer">

                    <af-one class="footer__left">
                        <div class="footer__left--condensed"><span>Dr.Juan Roca</span></div>
                        <div class="footer__left--italic"><span>General<span></div>
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



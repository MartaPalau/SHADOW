customElements.define('af-patient-requests', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <af-patient-requests>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            .patient__requests{
                    width: 14px;
                    background-color: rgba(205, 205, 205, .3);
                    height: 100%;
                    color:var(--color-darkgrey);
                    padding: 0 var(--pad-small);
                }
            .patient__requests__icon {
                padding-bottom:var(--pad-small);
                padding-top:var(--pad-small);
            }
        </style>



                <af-vertical class="patient__requests">
    
                    <af-one class="patient__requests__icon">
                        <af-icon icon__chat></af-icon>
                    </af-one>
                    <af-one class="patient__requests__icon">
                        <af-icon icon__xray></af-icon>
                    </af-one>
                    <af-one class="patient__requests__icon">
                        <af-icon icon__lab></af-icon>
                    </af-one>

                </af-vertical>



	`;
    }
});



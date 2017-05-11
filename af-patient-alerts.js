customElements.define('af-patient-alerts', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            .patient__alerts{
                padding-top:var(--pad-small);
            }
            .patient__alerts__icon {
                background-color: var(--color-white);
                border-radius: 20px;
                border: 2px solid var(--color-lightgrey);
                padding: 3px;
                font-size: 12px;
                height: 12px;
            }
        </style>

                <af-horizontal class="patient__alerts">

                    <af-one>
                        <af-icon icon__intolerances class="patient__alerts__icon"></af-icon>
                    </af-one>

                    <af-one>
                        <af-icon icon__allergies class="patient__alerts__icon"></af-icon>
                    </af-one>

                    <af-one>
                        <af-icon icon__join class="patient__alerts__icon"></af-icon>
                    </af-one>

                    <af-one></af-one>

                </af-horizontal>

	`;
    }
});



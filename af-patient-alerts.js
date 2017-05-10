customElements.define('af-patient-alerts', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
        .patient__alerts {
            background-color: var(--color-white);
            border-radius: 20px;
            border: 2px solid var(--color-lightgrey);
            padding: 3px;
            font-size: 12px;
            height: 12px;
            margin-right:var(--margin-small);
            margin-top:var(--margin-small);
        }
        </style>
        <slot></slot>
        <af-horizontal>

            <af-none class="patient__alerts">
                <af-icon icon__intolerances></af-icon>
            </af-none>

            <af-none class="patient__alerts">
                <af-icon icon__allergies></af-icon>
            </af-none>

            <af-none class="patient__alerts">
                <af-icon icon__join></af-icon>
            </af-none>

        </af-horizontal>
	`;
    }
});



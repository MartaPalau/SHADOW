customElements.define('af-content', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <af-content>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            .content__left{
                padding: 0 var(--pad-tiny) var(--pad-small) var(--pad-small);
            }
        </style>

                <af-horizontal class="content">

                    <af-one class="content__left">
                        <af-patient></af-patient>
                        <af-patient-alerts></af-patient-alerts>
                    </af-one>

                    <af-none class="content__right">
                        <af-patient-requests></af-patient-requests>
                    </af-none>

                </af-horizontal>

	`;
    }
});



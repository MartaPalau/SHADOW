customElements.define('af-patient', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <fancy-tabs>.
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            .patient__name--bold-condensed{
                font-family: var(--font-bold-condensed),sans-serif;
            }
            .patient__name--valign{
                    height: 40px;
                    padding:0 var(--pad-small);
            }
            .patient__id{
                    padding:var(--pad-small) 0;
            }
            .patient__flag{
                    padding-right:var(--pad-small)
            }
            .patient__data--condensed{
                    font-family: var(--font-condensed),sans-serif;
            }
        </style>

            <af-horizontal>
                <af-none><img src="src/images/patient.svg"></af-none>
                <af-vertical class="patient__name patient__name--valign">
                    <af-one></af-one>
                    <af-none class="patient__name patient__name--bold-condensed">Marta Palau</af-none>
                    <af-one></af-one>
                </af-vertical>
            </af-horizontal>

            <af-one class="patient__id">NHC:78</af-one>

            <af-horizontal>
                <af-none class="patient__flag"><img src="src/images/flag.svg"> </af-none>
                <af-one class="patient__data patient__data--condensed"> 23 anos (26-09-1980)</af-one>
            </af-horizontal>

	`;
    }
});



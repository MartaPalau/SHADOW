customElements.define('af-patient', class extends HTMLElement {
    constructor() {
        super(); // always call super() first in the ctor.

        // Attach a shadow root to <af-patient>.
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
           /* .not__defined .patient__img img{
                    display:none;
            }
            .not__defined .patient__img{
                    border-radius:20px;
                    height:35px;
                    width:35px;
                    animation-duration: 1s;
                    animation-name: slidein;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
            }
            .not__defined .patient__name{
                    height:13px;
                    width:110px;
                    animation-duration: 1s;
                    animation-name: slidein;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
                }
            .not__defined .patient__id {
                    height:10px;
                    width:110px;
                    margin-bottom:var(--margin-small);
                    padding:var(--pad-none);
                    animation-duration: 1s;
                    animation-name: slidein;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
                }
            .not__defined .patient__data {
                    height:10px;
                    width:110px;
                    animation-duration: 1s;
                    animation-name: slidein;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
                }
            .not__defined .patient__flag {
                   display:none;
                }
            .not__defined span{
                    display:none;
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

            <div class="">

                <af-horizontal>
                    <af-none class="patient__img"><img src="src/images/patient.svg"></af-none>
                    <af-vertical class="patient__name--valign">
                        <af-one></af-one>
                        <af-none class="patient__name patient__name--bold-condensed"><span>Marta Palau</span></af-none>
                        <af-one></af-one>
                    </af-vertical>
                </af-horizontal>

                <af-horizontal>
                     <af-one class="patient__id"><span>NHC:78</span></af-one>
                </af-horizontal>

                <af-horizontal>
                    <af-none class="patient__flag"><img src="src/images/flag.svg"> </af-none>
                    <af-one class="patient__data patient__data--condensed"><span> 23 anos (26-09-1980)</span></af-one>
                </af-horizontal>

            </div>
	`;
    }
});



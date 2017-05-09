customElements.define('af-content', class extends HTMLElement {
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
            [pad__small--top]{
                padding-top:var(--pad-small-top);
            }
            [margin__small--bottom]{
                margin-bottom:var(--margin-small-bottom);
            }
            [bold--condensed]{
                font-family: var(--font-bold-condensed),sans-serif;
            }
            [condensed]{
                font-family: var(--font-condensed),sans-serif;
            }
           /**/
            .content__left--name{
                    height: 40px;
                    display: flex;
                    -webkit-flex-direction: column;
                    flex-direction: column;
                    -ms-flex-direction: column;
                }
            .content__left--icons {
                    background-color: var(--color-white);
                    border-radius: 20px;
                    border: 2px solid var(--color-lightgrey);
                    padding: 3px;
                    font-size: 12px;
                    height: 12px;
                }
            .content__right--icons{
                    width: 30px;
                    background-color: rgba(205, 205, 205, .3);
                    height: 100%;
                    color:var(--color-darkgrey);
                }

        </style>
        <slot></slot>
            <af-horizontal>
                <af-one>
                    <af-vertical>
                        <af-one>
                            <af-horizontal>
                                <af-none>
                                    <div margin__small--left margin__small--right>
                                        <slot name="content__left--img01"><img src="src/images/patient.svg"><slot>
                                    </div>
                                </af-none>
                                <af-one>
                                    <div margin__small--left margin__small--bottom class="content__left--name">
                                        <af-one></af-one>
                                        <af-none>
                                            <div bold--condensed><slot name="content__left--name">Marta Palau</slot></div>
                                        </af-none>
                                        <af-one></af-one>
                                    </div>
                                </af-one>
                            </af-horizontal>
                        </af-one>
                        <af-one>
                            <div margin__small--left condensed class="content__left--nhc"><slot name="content__left--nhc">NHC:78</slot></div>
                        </af-one>
                        <af-one>
                            <af-horizontal>
                                <af-none>
                                    <div margin__small--left margin__small--bottom>
                                        <slot name="content__left--img02"><img  margin__small--right src="src/images/flag.svg"></slot>
                                    </div>
                                </af-none>
                                <af-one>
                                    <div margin__small--bottom condensed class="content__left--birth">
                                        <slot name="content__left--birth">23 anos (26-09-1980)</slot>
                                    </div>
                                </af-one>
                            </af-horizontal>
                        </af-one>
                        <af-one>
                            <div margin__small--bottom>
                                <af-horizontal>
                                    <div margin__small--left margin__small--right class="content__left--icons">
                                        <slot name="content__left--icon01">
                                            <af-icon class="content__left--icon01"></af-icon>
                                        </slot>
                                    </div>
                                    <div margin__small--right class="content__left--icons">
                                        <slot name="content__left--icon02">
                                            <af-icon class="content__left--icon02"></af-icon>
                                        </slot>
                                    </div>
                                    <div margin__small--right class="content__left--icons">
                                        <slot name="content__left--icon03">
                                            <af-icon class="content__left--icon03"></af-icon>
                                        </slot>
                                    </div>
                                </af-horizontal>
                            </div>
                        </af-one>
                    </af-vertical>
                </af-one>
                <af-none>
                    <div class="content__right--icons">
                        <af-vertical>
                                <div margin__small--left margin__small--bottom pad__small--top>
                                    <slot name="content__right--icon01"><af-icon class="content__right--icon01"></af-icon></slot>
                                </div>
                                <div margin__small--left margin__small--bottom>
                                    <slot name="content__right--icon02"><af-icon class="content__right--icon02"></af-icon></slot>
                                </div>
                                <div margin__small--left margin__small--bottom>
                                    <slot name="content__right--icon03"><af-icon class="content__right--icon03"></af-icon></slot>
                                </div>
                        </af-vertical>
                    </div>
                </af-none>
            </af-horizontal>
	`;
    }
});



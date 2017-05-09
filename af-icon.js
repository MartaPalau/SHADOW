customElements.define('af-icon', class extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
        <style>
            :host{
                @apply --icons;
            }
            :host(.bed__icon--background01):before{
                content: var(--bed-icon-background01);
            }
            :host(.header__status--icon01):before {
                    content: var(--header-status-icon01);
                }
            :host(.content__left--icon01):before {
                content: var(--content-left-icon01);
            }
            :host(.content__left--icon02):before {
                content: var(--content-left-icon02);
            }
            :host(.content__left--icon03):before {
                content: var(--content-left-icon03);
            }
            :host(.content__right--icon01):before {
                content: var(--content-right-icon01);
            }
            :host(.content__right--icon02):before {
                content: var(--content-right-icon02);
            }
            :host(.content__right--icon03):before {
                content: var(--content-right-icon03);
            }
            :host(.footer__right--icon01):before {
                content: var(--content-right-icon01);
            }
            :host(.footer__right--icon02):before {
                content: var(--content-right-icon02);
            }
        </style>
        <slot></slot>`
    }
});


class MyButton extends HTMLElement {

    get color(){
        return this.getAttribute('color')
    }
    set color(value){
        this.setAttribute('color', value)
    }
    get bgcolor(){
        return this.getAttribute('bgcolor')
    }
    set bgcolor(value){
        this.setAttribute('bgcolor', value)
    }
    get raised(){
        return this.hasAttribute('raised')
    }
    set raised(value){
        if(value)
            this.setAttribute('raised', value);
        else
            this.removeAttribute('raised');
    }
    get disabled(){
        return this.hasAttribute('disabled')
    }
    set disabled(value){
        if(value)
            this.setAttribute('disabled', '');
        else
            this.removeAttribute('disabled');
        }

    get fullwidth(){
        return this.hasAttribute('fullwidth')
    }
    set fullwidth(value){
        if(value)
            this.setAttribute('fullwidth', '');
        else
            this.removeAttribute('fullwidth');
    }

	constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
        :host {
            box-sizing: border-box;
            margin: 0 0.29em;
            font: inherit;
            text-transform: uppercase;
            outline-width:0;
            border-radius: 3px;
            -moz-user-select: none;
            -ms-user-select:none;
            -webkit-user-select:none;
            user-select:none;
            cursor:pointer;
            padding: 0.57em 0.57em;
            transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-block;
            overflow:hidden;
            position:relative;
            contain: content;
            @apply --paper-font-common-base;
            contain: content;
            opacity: 0.7;
            text-align: center;
            @apply --layout-inline;
            @apply --layout-center-center;
        }
        
        :host([icon]){
            border-radius: 50%;
            outline:none;
            outline-style: none; 
        
        }
        :host(:hover){
            opacity:1;
        }
        :host([hidden]) {
            display: none !important;
        }
        :host([raised]:not([disabled])){
            @apply --shadow-elevation-2dp;
        }
        
        :host([disabled]) {
            background: #eaeaea;
            color: #a8a8a8;
            cursor: auto;
            pointer-events: none;
            box-shadow:none;
            @apply --paper-button-disabled;
        }
        
        :host([color]){
            color: var(--paper-button-color,'green');
        }
        
        :host:not([disabled]):focus{
            font-weight: 500;
        }
        :host([animated]) {
            @apply --shadow-transition;
        }
        #paper-button .ripple{
            position:absolute;
            transform: scale3d(0,0,0);
            opacity:1;
            transition: all 800ms cubic-bezier(0.4,0,0.2,1);
            border-radius: 50%;
            width:150px;
            height:150px;
            will-change: opacity transform;
            contain: content;
            z-index:-1;
        }
        
        #paper-button .ripple.run{
            opacity: 0;
            transform:none;
        }
        </style>
        <div id="paper-button">
            <slot>
                <span>My Paper Button</span>
            </slot>
        </div>
        `;
        this.$container = shadowRoot.querySelector('#paper-button');
		this.addListeners();
	}

	addListeners() {
		this.addEventListener('click', (e) => {
			if (this.disabled) {
				e.preventDefault();
				e.stopPropagation();
			} else {
				this.drawRipple(e.offsetX, e.offsetY);
			}
		});
	}

	render() {
		this.style.color = this.color;
		this.style.backgroundColor = this.bgcolor;
		this.style.width = (this.fullwidth) ? '100%' : 'auto';
	}

	drawRipple(x, y) {
		const div = document.createElement('div');
		div.classList.add('ripple');
		this.$container.appendChild(div);
		div.style.top = `${y - div.clientHeight / 2}px`;
		div.style.left = `${x - div.clientWidth / 2}px`;
		div.style.backgroundColor = getComputedStyle(this).color;
		div.classList.add('run');
		div.addEventListener('transitionend', (e) => div.remove());
	}
    attributeChangedCallback() {
		this.render();
	}
	static get observedAttributes() {
		return ['bgcolor', 'color', 'fullwidth', 'raised', 'disabled'];
	}

}

customElements.define('my-button', MyButton);
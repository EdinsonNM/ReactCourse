class MyComponent extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = `
			<style>
				div{ color:red;}
			</style>
            <div>
            my component
            <button>Hello World!!!</button>
            </div>
        `;
        shadowRoot.querySelector("button").addEventListener('click', this.saludar);
    }
    saludar(){
        alert("Hello World!!")
    }
	get color() {
		return this.getAttribute('color');
	}
	set color(value) {
		return this.setAttribute('color', value)
	}
	connectedCallback() {
		this.render();
	}
	render() {
		this.style.color = this.color;
	}
	static get observedAttributes() {
		return ['color'];
	}
	attributeChangedCallback() {
		this.render();
	}
}

customElements.define('my-component', MyComponent);
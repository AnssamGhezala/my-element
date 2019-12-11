class MyElement extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = `
            <style>
            :host { /* Selects a shadow root host,*/
              all: initial; /* Specifies that all the element's properties should be changed to their initial values. */
              display: flex;
              flex-direction: column;
              background: black;
              font-size: 2.5rem;
              margin: 10px;
            }

            </style>
            <div> 
            <label>Who's there?</label>
            </div>
          `;

		// onClick event listener to change the visibility of the element
		this.addEventListener('click', () => {
			this.isInvisible = !this.isInvisible;
			var myDiv = shadowRoot.querySelector('div').style;
			if (this.isInvisible) {
				myDiv.visibility = 'hidden';
			} else {
				myDiv.visibility = 'visible';
			}
		});
	}

	// isInvisible variable used to put element as visible or not visible
	isInvisible = false;

	// Lifecycle method called every time the custom element is appended to the main DOM
	connectedCallback() {
		console.log('Custom element added to the page :)');
		// Function to update style of custom element
		updateStyle(this);
	}
}

// Helper function to update the style of an element. For instance here we update the label's color
const updateStyle = (el) => {
	const shadow = el.shadowRoot;
	const myLabel = shadow.querySelector('label');
	myLabel.style.color = el.getAttribute('color');
	myLabel.innerHTML = el.getAttribute('text');
};

customElements.define('my-element', MyElement);

const root = document.querySelector('.root');

// Define instance #1 of MyElement named "element1"
var element1 = document.createElement('my-element');

// Set the color and text attributes of element1
element1.setAttribute('color', 'red');
element1.setAttribute('text', "Hey it's element1!");

// Attach it to the main DOM's root div
root.appendChild(element1);

// Define instance #2 of MyElement named "element2"
const element2 = new MyElement();

// Set the color and text attributes of element2
element2.setAttribute('color', 'white');
element2.setAttribute('text', "Hey it's element2!");

// Attach it to the main DOM's root div
root.appendChild(element2);

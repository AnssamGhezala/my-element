class MyElement extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = `
            <style>
            @import "styles.css"

            </style>
            
      <div class="cardContainer">
        <div class="cardHeader">
          <label class="name">Anssam Ghezala</label>
          <label class="job">Soft. Eng. Student</label>
        </div>
        <div class="tabs">
          <label class="tab">Email</label>
          <label class="tab">Phone</label>
          <div class="tabsContent">
            <label class="email">a@g.com</label>
            <label class="phone">+12345</label>
          </div>
        </div>
      </div>
          `;

		// onClick event listener to reveal the name of the clicked element
		this.addEventListener('click', () => {});
	}

	// Lifecycle method called every time the custom element is appended to the main DOM
	connectedCallback() {
		console.log('Custom element added to the page :)');
	}
}

// Helper function to update the style of an element. For instance here we update our label's color and text
// to the color and text attribute passed to the element
const updateStyle = (el) => {};

customElements.define('my-element', MyElement);

// Get the root of the main dom (to add to it our element)
const wrapper = document.querySelector('.wrapper');

// Define instance #1 of MyElement named "element1"
var element1 = document.createElement('my-element');

// Set the color and text attributes of element1
element1.setAttribute('color', 'red');
element1.setAttribute('text', "Hey it's element1!");

// Attach it to the main DOM's root div
wrapper.appendChild(element1);

// // Define instance #2 of MyElement named "element2"
// const element2 = new MyElement();

// // Set the color and text attributes of element2
// element2.setAttribute('color', 'yellow');
// element2.setAttribute('text', "Hey it's element2!");

// // Attach it to the main DOM's root div
// root.appendChild(element2);

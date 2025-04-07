const publicationYear = 2025;
const currentYear = 2028;

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<footer><p>© ${publicationYear}${
      currentYear != publicationYear ? ` - ${currentYear}` : ""
    } Lana Ramos. Todos los derechos reservados.</p></footer>`;
  }
}

customElements.define("custom-footer", CustomFooter);

class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer aria-label="footer menu">
      <div class="border"></div>
      <div class="nav-footer">
        <div>
          <h3 tabindex="0">WarkopBae</h3>
          <h4 tabindex="0">the best place to create new taste</h4>
        </div>
        <ul>
          <li><a tabindex="0" href="#/">Home</a></li>
          <li><a tabindex="0" href="#">Favorite</a></li>
          <li><a tabindex="0" href="https://know-me.me/" target="_blank">About Us</a></li>
        </ul>
      </div>
      <h5 tabindex="0">Copyright © 2022 - WarkopBae</h5>
    </footer>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);

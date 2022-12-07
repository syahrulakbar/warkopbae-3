class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav aria-label="navigation bar">
        <h1 tabindex="0">WarkopBae</h1>
        <button aria-label="navigation button" tabindex="0" id="hamburger-menu">
          <span></span>
          <span id="line"></span>
          <span></span>
        </button>
        <ul id="navbar" >
          <li><a href="#/home" id="navHome" class="active" >Home</a></li>
          <li><a href="#/favorite" id="navFavorite">Favorite</a></li>
          <li><a href="https://know-me.me/" target="_blank">About Us</a></li>
        </ul>
      </nav>`;
  }
}
customElements.define("custom-navbar", Navbar);

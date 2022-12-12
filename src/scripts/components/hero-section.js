class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section tabindex="0" class="hero-section" aria-label="Hero Section">
    <img tabindex="0" class="banner-image" src="./images/heros/hero-image_4.jpg" alt="banner-image" srcset="" />
    <div class="desc">
      <div class="desc-content">
        <h2 tabindex="0">Find <span>A Good Place,
        </span>Start Your <span>Good Taste</span></h2>
      </div>
    </div>
  </section>`;
  }
}
customElements.define("hero-section", HeroSection);

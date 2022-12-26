/* eslint-disable no-lone-blocks */
class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section tabindex="0" class="hero-section" aria-label="Hero Section">
    <picture>
        <source media="(min-width: 200px)" type="image/webp" srcset="./images/heros/hero-image_4.webp">
        <source type="image/jpeg" srcset="./images/heros/hero-image_4.jpg">
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-400.jpg" >
        <img tabindex="0" src="./images/heros/hero-image_4.jpg" 
        alt="banner-image" class="banner-image">
    </picture>
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

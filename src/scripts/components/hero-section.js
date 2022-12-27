/* eslint-disable no-lone-blocks */
class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section tabindex="0" class="hero-section" aria-label="Hero Section">
    <picture>
        <source type="image/webp" media="(max-width: 600px)" srcset="./images/heros/hero-image_4-400.webp" >
        <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/heros/hero-image_4-400.jpg" >
        <source type="image/webp" media="(max-width: 1000px)" srcset="./images/heros/hero-image_4-1000.webp" >
        <source type="image/jpeg" media="(max-width: 1000px)" srcset="./images/heros/hero-image_4-1000.jpg" >
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

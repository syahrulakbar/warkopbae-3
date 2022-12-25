import RestaurantSource from "../../data/restaurant-source";
import listResto from "../templates/list-resto";
import Spinner from "../templates/spinner";
import CustomFooter from "../templates/footer";
import { initSwalError } from "../../utils/alert-initiator";
import { createSkeletonRestoTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <div class="main-container">
      <div id="loading"></div>
      <div id="home-container">
        <hero-section></hero-section>
        <h2 tabindex="0" class="sub-title">Explore Restaurant</h2>
        <section tabindex="0" class="main-content" aria-label="list restaurant">
          <div class="item-resto">
          ${createSkeletonRestoTemplate(20)}
          </div>
        </section>
      </div>
      <footer id="footer-section" aria-label="footer menu"/>
    </div>
        `;
  },
  //   Fungsi ini akan dipanggil setelah render ()
  async afterRender() {
    // const heroContainer = document.querySelector("#hero-container");
    const mainContainer = document.querySelector(".main-container");
    const footer = document.querySelector("#footer-section");
    const loading = document.querySelector("#loading");
    const navFavorite = document.querySelector("#navFavorite");

    navFavorite.classList.remove("active");
    loading.innerHTML = Spinner();
    try {
      // heroContainer.innerHTML = `
      // <hero-section></hero-section>
      // `;
      const itemContainer = document.querySelector(".item-resto");
      itemContainer.innerHTML = "";

      const data = await RestaurantSource.getRestaurantList();
      data.forEach((restaurant) => {
        itemContainer.innerHTML += listResto(restaurant);
      });
      loading.style.display = "none";
      footer.innerHTML = CustomFooter();
    } catch (error) {
      console.log(error);
      loading.style.display = "none";
      mainContainer.innerHTML = `
      <div class="error-page">
        <img tabindex="0" class="error-image" src="./images/notfound.png" alt="error-image" srcset="" />
        <h5 tabindex="0" class="error-title">Sorry :(</h5>
        <p tabindex="0" class="error-desc">Error: ${error.message}</p>
      </div>`;
      initSwalError(error.message);
    }
  },
};
export default Home;

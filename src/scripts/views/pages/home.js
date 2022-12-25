import RestaurantSource from "../../data/restaurant-source";
import listResto from "../templates/list-resto";
import Spinner from "../templates/spinner";
import { initSwalError } from "../../utils/alert-initiator";

const Home = {
  async render() {
    return `
    <div class="main-container">
      <div id="loading"></div>
      <div id="home-container">
        <hero-section></hero-section>
        <h2 tabindex="0" class="sub-title">Explore Restaurant</h2>
        <section tabindex="0" class="main-content" aria-label="list restaurant">
        <div class="item-resto"></div>
        </section>
      </div>
    </div>
        `;
  },
  //   Fungsi ini akan dipanggil setelah render ()
  async afterRender() {
    const itemContainer = document.querySelector(".item-resto");
    const homeContainer = document.querySelector("#home-container");
    const mainContainer = document.querySelector(".main-container");
    const loading = document.querySelector("#loading");
    const navFavorite = document.querySelector("#navFavorite");

    navFavorite.classList.remove("active");
    homeContainer.style.display = "none";
    loading.innerHTML = Spinner();
    try {
      const data = await RestaurantSource.getRestaurantList();
      data.forEach((restaurant) => {
        itemContainer.innerHTML += listResto(restaurant);
      });
      setTimeout(() => {
        homeContainer.style.display = "block";
        loading.style.display = "none";
      }, 50);
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

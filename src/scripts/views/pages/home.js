import RestaurantSource from "../../data/restaurant-source";
import listResto from "../templates/list-resto";
import Spinner from "../templates/spinner";

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
    const loading = document.querySelector("#loading");
    const footer = document.querySelector("#footer-section");
    const navFavorite = document.querySelector("#navFavorite");

    navFavorite.classList.remove("active");
    homeContainer.style.display = "none";
    footer.style.display = "none";
    loading.innerHTML = Spinner();
    try {
      const data = await RestaurantSource.getRestaurantList();
      data.forEach((restaurant) => {
        itemContainer.innerHTML += listResto(restaurant);
      });
      setTimeout(() => {
        homeContainer.style.display = "block";
        footer.style.display = "block";
        loading.style.display = "none";
      }, 800);
    } catch (error) {
      console.log(error);
      loading.style.display = "none";
    }
  },
};
export default Home;

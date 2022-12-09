import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import listResto from "../templates/list-resto";
import Spinner from "../templates/spinner";
import { initSwalError } from "../../utils/alert-initiator";

const FavoritePage = {
  async render() {
    return `
    <div class="favorite-container">
      <div id="loading"></div>
      <div class="title-content">
        <h2 tabindex="0" class="title-page">Favorite Restaurant</h2>
      </div>    
      <section tabindex="0" class="main-content" aria-label="favorite restaurant">
    </div>
      `;
  },

  async afterRender() {
    const favoriteContent = document.querySelector(".main-content");
    const favoriteContainer = document.querySelector(".favorite-container");
    const loading = document.querySelector("#loading");
    loading.innerHTML = Spinner();
    try {
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
      restaurant.forEach((resto) => {
        favoriteContent.innerHTML += listResto(resto);
      });
      if (restaurant.length === 0) {
        favoriteContent.innerHTML = `
        <div class="empty-favorite">
          <img tabindex="0" class="empty-image" src="./images/empty_data.png" alt="empty data image" srcset="" />
          <h5 tabindex="0" class="empty-title">Add your favorite restaurant</h5>
          <p tabindex="0" class="empty-desc">add your favorite restaurant by pressing the heart button on the restaurant detail page</p>
        </div>`;
      }
      setTimeout(() => {
        loading.style.display = "none";
      }, 500);
    } catch (err) {
      console.error(err);
      loading.style.display = "none";
      favoriteContainer.innerHTML = `
      <div class="error-page">
        <img tabindex="0" class="error-image" src="./images/notfound.png" alt="error-image" srcset="" />
        <h5 tabindex="0" class="error-title">Sorry :(</h5>
        <p tabindex="0" class="error-desc">Error: ${err.message}</p>
      </div>`;
      initSwalError(err.message);
    }

    const navHome = document.querySelector("#navHome");
    const navFavorite = document.querySelector("#navFavorite");

    navHome.classList.remove("active");
    navFavorite.classList.add("active");
  },
};

export default FavoritePage;

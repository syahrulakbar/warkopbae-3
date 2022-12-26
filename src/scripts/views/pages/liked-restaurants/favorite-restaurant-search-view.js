/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
import { createRestaurantTemplate } from "../../templates/template-creator";

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <div class="content">
      <input id="query" type="text">
      <h2 class="content__heading">Your Liked Resto</h2>
     
        <div class="restaurant-result-container">
          <div id="restaurants" class="restaurants">
          </div>
       
      </div>
    </div>
      
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById("query").addEventListener("change", (event) => {
      callback(event.target.value);
    });
  }

  showFoundRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantTemplate(restaurant)), "");
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById("restaurants").innerHTML = html;

    document.getElementById("restaurants").dispatchEvent(new Event("restaurants:updated"));
  }

  _getEmptyRestaurantTemplate() {
    return "<div class='restaurant-item__not__found'>Tidak ada resto untuk ditampilkan</div>";
  }
}
export default FavoriteRestaurantSearchView;

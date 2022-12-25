/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestaurantContract";

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((resto) => resto.id === id);
  },

  getAllRestaurant() {
    return favoriteRestaurants;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty("id")) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus resto dengan meng-copy resto yang ada
    // kecuali resto dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },

  searchRestaurants(query) {
    return this.getAllRestaurant().filter((restaurant) => {
      const loweredCaseRestaurantTitle = (restaurant.title || "-").toLowerCase();
      const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(/\s/g, "");

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, "");

      return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe("Favorite Resto Array Contract Test Implementation", () => {
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestoModel(FavoriteRestaurantArray);
});

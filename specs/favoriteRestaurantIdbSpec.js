import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestaurantContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("favorite Resto Idb Contract Test Implementation", () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});

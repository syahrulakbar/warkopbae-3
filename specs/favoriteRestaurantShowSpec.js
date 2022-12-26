/* eslint-disable no-new */
import FavoriteRestaurantSearchView from "../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view";
import FavoriteRestaurantShowPresenter from "../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe("Showing all favorite resto", () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();

    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe("When favorite resto exist", () => {
    it("should show the resto", (done) => {
      document.getElementById("restaurants").addEventListener("restaurants:updated", () => {
        expect(document.querySelectorAll(".restaurant-item").length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      favoriteRestaurants.getAllRestaurant.and.returnValue([
        {
          id: 11,
          title: "A",
          vote_average: 3,
          overview: "Sebuah restaurant A",
        },
        {
          id: 22,
          title: "B",
          vote_average: 4,
          overview: "Sebuah restaurant B",
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe("When no resto have been liked", () => {
    it("should ask for the favorite resto", () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });

    it("should show the information that no resto have been liked", (done) => {
      document.getElementById("restaurants").addEventListener("restaurants:updated", () => {
        expect(document.querySelectorAll(".restaurant-item__not__found").length).toEqual(1);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurant.and.returnValue([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
    });
  });
});

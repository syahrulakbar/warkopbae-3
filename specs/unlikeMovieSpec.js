import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Unliking A Resto", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = "<div id='likeButtonContainer'></div>";
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector("[aria-label='unlike this resto']")).toBeTruthy();
  });

  it("should not display like widget when the resto has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector("[aria-label='like this resto']")).toBeFalsy();
  });

  it("should be able to remove liked resto from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector("[aria-label='unlike this resto']").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it("should not throw error if the unliked resto is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    // hapus dulu resto dari daftar resto yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai resto
    document.querySelector("[aria-label='unlike this resto']").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});

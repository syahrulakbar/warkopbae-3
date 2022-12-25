import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from "../views/templates/template-creator";
import { initSwalError, initSwalSuccess } from "./alert-initiator";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    try {
      const { id } = this._restaurant;

      if (await this._isRestaurantExist(id)) {
        this._renderLiked();
      } else {
        this._renderLike();
      }
    } catch (error) {
      console.error(error);
      initSwalError(error.message);

      throw new Error(error);
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      initSwalSuccess("Resto favorited!");
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      initSwalSuccess("Resto unfavorited!");
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;

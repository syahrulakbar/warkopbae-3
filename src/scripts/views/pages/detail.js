import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import RestoDetail from "../templates/resto-detail";
import Spinner from "../templates/spinner";
import AddReview from "../templates/review";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import PostReview from "../../utils/post-review";
import { initSwalError, initSwalSuccess } from "../../utils/alert-initiator";
import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import CustomFooter from "../templates/footer";

const Detail = {
  async render() {
    return `
  <div id="main-container">
    <div id="loading"></div>
    <div id="likeButtonContainer"></div>
    <section id="detail-resto"></section>
    
    <div class="add-review-container">
      
    </div>
    <footer id="footer-section" aria-label="footer menu"/>
  </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const mainContainer = document.querySelector("#main-container");
    const detailContainer = document.querySelector("#detail-resto");
    const review = document.querySelector(".add-review-container");
    const loading = document.querySelector("#loading");
    const footer = document.querySelector("#footer-section");

    detailContainer.style.display = "none";
    loading.innerHTML = Spinner();
    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: data.id,
          name: data.name,
          description: data.description,
          pictureId: data.pictureId,
          city: data.city,
          rating: data.rating,
        },
      });
      detailContainer.innerHTML += RestoDetail(data);
      setTimeout(() => {
        detailContainer.style.display = "block";
        loading.style.display = "none";
      }, 50);
      review.innerHTML = AddReview();
      footer.innerHTML = CustomFooter();
      const nameInput = document.querySelector("#input-name");
      const reviewInput = document.querySelector("#input-review");
      const buttonReview = document.querySelector("#button-review");

      buttonReview.addEventListener("click", async (e) => {
        e.preventDefault();
        if (nameInput.value === "" || reviewInput.value === "") {
          initSwalError("Review cannot empty!");
        } else {
          await PostReview(url, nameInput.value, reviewInput.value);
          initSwalSuccess("Succes add new review!");
        }
        nameInput.value = "";
        reviewInput.value = "";
      });
    } catch (error) {
      console.log(error);
      detailContainer.style.display = "block";
      loading.style.display = "none";
      mainContainer.innerHTML = `
      <div class="error-page">
        <img tabindex="0" class="error-image" src="./images/notfound.png" alt="error image" srcset="" />
        <h5 tabindex="0" class="error-title">Sorry :(</h5>
        <div class="error-desc">
        <p tabindex="0">Error: ${error.message}</p>
        </div>
      </div>`;
      initSwalError(error.message);
    }
  },
};

export default Detail;

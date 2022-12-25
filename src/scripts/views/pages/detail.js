import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import RestoDetail from "../templates/resto-detail";
import Spinner from "../templates/spinner";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import PostReview from "../../utils/post-review";
import { initSwalError, initSwalSuccess } from "../../utils/alert-initiator";

const Detail = {
  async render() {
    return `
  <div id="main-container">
    <div id="loading"></div>
    <div id="likeButtonContainer"></div>
    <section id="detail-resto"></section>
    
    <div class="add-review-container">
      <form class="review-form" autocomplete="on">
        <div class="name-container">
          <label for="input-name">Name</label>
          <input placeholder="Your Name"  id="input-name" type="text" required />
        </div>
        <div class="review-container">
          <label for="input-review">Review</label>
          <textarea placeholder="Your Review"  id="input-review" cols="30" rows="4" required ></textarea>
        </div>
        <button tabindex="0" id="button-review" type="submit">Add Review</button>
      </form>
    </div>
  </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const mainContainer = document.querySelector("#main-container");
    const detailContainer = document.querySelector("#detail-resto");
    const loading = document.querySelector("#loading");

    detailContainer.style.display = "none";
    loading.innerHTML = Spinner();
    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
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

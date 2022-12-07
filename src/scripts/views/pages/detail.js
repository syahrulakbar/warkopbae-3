import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import RestoDetail from "../templates/resto-detail";
import Spinner from "../templates/spinner";

const Detail = {
  async render() {
    return `
  <div id="main-container">
    <div id="loading"></div>
    <section id="detail-resto"></section>
    
    <div class="add-review-container">
      <form class="review-form" autocomplete="on">
        <div class="name-container">
          <label for="input-name">Name</label>
          <input placeholder="Your Name"  id="input-name" type="text" />
        </div>
        <div class="review-container">
          <label for="input-review">Review</label>
          <textarea placeholder="Your Review"  id="input-review" cols="30" rows="4"></textarea>
        </div>
        <button tabindex="0" id="button-review" type="submit">Add Review</button>
      </form>
    </div>
  </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector("#detail-resto");
    const loading = document.querySelector("#loading");
    detailContainer.style.display = "none";
    loading.innerHTML = Spinner();
    try {
      const data = await RestaurantSource.getRestaurantDetail(url.id);
      detailContainer.innerHTML += RestoDetail(data);
      setTimeout(() => {
        detailContainer.style.display = "block";
        loading.style.display = "none";
      }, 800);
    } catch (error) {
      console.log(error);
      loading.style.display = "none";
    }
  },
};

export default Detail;

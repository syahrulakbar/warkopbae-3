import RestaurantSource from "../data/restaurant-source";

const PostReview = async (url, name, review) => {
  const reviewInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector(".review-card-container");
  const date = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const newReview = `
    <div class="review-card">
        <div class="card-review">
            <h5 tabindex="0">${name}</h5>
            <p tabindex="0" class="review-user">${review}</p>
            <p tabindex="0" class="review-date">${date}</p>
        </div>
    </div>`;

  await RestaurantSource.postRestaurantReview(reviewInput);
  reviewContainer.innerHTML += newReview;
};

export default PostReview;

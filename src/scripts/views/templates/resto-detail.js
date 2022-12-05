/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from "../../globals/config";

const RestoDetail = (resto) => `
<section class="resto-detail-section">
<div class="resto-detail-content">
  <div class="image-detail-resto">
    <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name} restaurant image" />
  </div>
  <div class="desc-container">
    <div class="resto-detail-desc">
        <div class="resto-detail-title">
             <h3 tabindex="0" class="title-resto-detail">${resto.name}</h3>
             <p tabindex="0" class="rating-detail-resto">⭐${resto.rating}</p>
        </div>
        <h4 tabindex="0" class="resto-detail-address">${resto.address}, ${resto.city} City</h4>
        <h4 tabindex="0" class="desc-detail-resto">Description</h4>
        <p tabindex="0">
            ${resto.description}
        </p>
    </div>
  </div>
</div>
<section class="review-section">
    <h2 tabindex="0">
    Review Restaurant
    </h2>
    <div class="review-list">
            <div class="review-card-container">
                ${resto.customerReviews
                  .map(
                    (reviews) => `
                        <div class="review-card">
                            <div class="card-review">
                                <h5 tabindex="0">${reviews.name}</h5>
                                <p tabindex="0" class="review-user">${reviews.review}</p>
                                <p tabindex="0" class="review-date">${reviews.date}</p>
                            </div>
                        </div>`
                  )
                  .join("")}
            
            </div>
    </div>
</section>
</section>

`;
export default RestoDetail;

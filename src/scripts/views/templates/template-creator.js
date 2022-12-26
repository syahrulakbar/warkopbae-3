/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createSkeletonHeroTemplate = () => `
<section tabindex="0" class="hero-section" aria-label="Hero Section">
    <img src="./images/placeholder.png" width="100%" height="665px" alt="skeleton"  />
    <div class="desc">
    <div class="desc-content">
      <h2 tabindex="0">Find <span>A Good Place,
      </span>Start Your <span>Good Taste</span></h2>
    </div>
    </div>
</section>
<h2 tabindex="0" class="sub-title">Explore Restaurant</h2>
`;

const createSkeletonRestoTemplate = (count) => {
  let template = "";
  for (let i = 0; i < count; i += 1) {
    template += `
    <a href="#/" class="tag-card">
      <div  class="card">
        <div  class="resto-desc">
          <h3 tabindex="0" class="name-resto">Resto Title</h3>   
        </div>
        <img src="./images/placeholder.png" width="100%" height="350px" alt="skeleton"  />

        <div tabindex="0" class="place-resto" >
          <h3>Resto Place</h3>
        </div>
        <div class="rating-resto" tabindex="0" >
          <h3>Rating Resto</h3>     
        </div>
        </div>
    </a>`;
  }
  return template;
};

const createRestaurantTemplate = (resto) => `
      <a href="#/restaurant/${resto.id}" class="restaurant-item">
      <div id ="${resto.id}" class="card">
      <h3 tabindex="0" class="name-resto restaurant__title">${resto.title || "-"}</h3>   
      </div>
      <div tabindex="0" class="place-resto" >
      </div>
      <div class="rating-resto" tabindex="0" >
       <p>${resto.overview || "-"}</p>     
      </div>
      </div>
      </a>

`;
const createSkeletonRestoDetailTemplate = () => `
<section class="resto-detail-section">
<div class="resto-detail-content">
  <div class="image-detail-resto">
    <img tabindex="0" src="./images/placeholder.png" alt="skeleton restaurant image" />
  </div>
  <div class="desc-container">
    <div class="resto-detail-desc">
        <div class="resto-detail-title">
             <h3 tabindex="0" class="title-resto-detail">Resto Name</h3>
             <p tabindex="0" class="rating-detail-resto">Resto Rating</p>
        </div>
        <h4 tabindex="0" class="resto-detail-address">Address, Resto City</h4>
        <p tabindex="0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dolor cupiditate eum molestias ipsam, ullam accusantium impedit delectus aut dicta corrupti labore vel accusamus explicabo ducimus quo aliquid nam placeat!
            
        </p>
    </div>
  </div>
</div>
<section class="menu-section">
  <h2 tabindex="0">
  Menu List
  </h2>
 
  <div class ="menu-container">
    <div class="foods-container">
    <h3 tabindex="0">
    Foods
    </h3>
    <div class="food-list">
    <img tabindex="0" src="./images/placeholder.png" width="100%" height="200px"alt="skeleton restaurat menu" />
    </div>
    </div>
    <div class="drinks-container">
      <h3 tabindex="0">
      Drinks
      </h3>
      <div class="drink-list">
      <img tabindex="0" src="./images/placeholder.png" width="100%" height="200px"alt="skeleton restaurat menu" />
      </div>
    </div>

</section>
<section class="review-section">
    <h2 tabindex="0">
    Review Restaurant
    </h2>
    <div class="review-list">
            <div class="review-card-container">
            </div>
    </div>
</section>
</section>
`;

export { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate, createSkeletonRestoTemplate, createSkeletonHeroTemplate, createSkeletonRestoDetailTemplate, createRestaurantTemplate };

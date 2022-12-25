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

export { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate, createSkeletonRestoTemplate };

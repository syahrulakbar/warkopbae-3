import CONFIG from "../../globals/config";

const listResto = (resto) => ` 
      <a href="#/restaurant/${resto.id}" class="tag-card">
      <div id ="${resto.id}" class="card">
      <div aria-labelledby="name restaurant is ${resto.name}" class="resto-desc">
      <h3 tabindex="0" class="name-resto">${resto.name}</h3>   
      </div>
      <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name} restaurant image" srcset="" />
      <div tabindex="0" class="place-resto" aria-labelledby="place restaurant ${resto.name} in ${resto.city} City">
      <h3>${resto.city} City</h3>
      </div>
      <div class="rating-resto" tabindex="0" aria-labelledby="rating restaurant ${resto.name} is ${resto.rating}">
       <h3>⭐ ${resto.rating}</h3>     
      </div>
      </div>
      </a>
    `;

export default listResto;

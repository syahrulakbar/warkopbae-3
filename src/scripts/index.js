import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from "../DATA.json";
const buttonMenu = document.querySelector("#hamburger-menu");
const navbarMenu = document.querySelector("#navbar");

buttonMenu.addEventListener("click", (event) => {
  buttonMenu.classList.toggle("active");
  navbarMenu.classList.toggle("show");
  event.stopPropagation();
});

const listResto = (data) => {
  const restoList = document.querySelector(".item-resto");
  restoList.innerHTML = "";
  data.forEach((resto) => {
    const { id, name, pictureId, city, rating } = resto;
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = `${id}`;
    card.innerHTML = ` 
    <div aria-labelledby="name restaurant is ${name}" class="resto-desc">
      <h3 tabindex="0" class="name-resto">${name}</h3>   
    </div>
    <img tabindex="0" src="${pictureId}" alt="${name} restaurant image" srcset="" />
    <div tabindex="0" class="place-resto" aria-labelledby="place restaurant ${name} in ${city} City">
    <h3>${city} City</h3>
    </div>
    <div class="rating-resto" tabindex="0" aria-labelledby="rating restaurant ${name} is ${rating}">
    <h3>⭐ ${rating}</h3>     
    </div>
  `;
    restoList.appendChild(card);
  });
};
listResto(data.restaurants);

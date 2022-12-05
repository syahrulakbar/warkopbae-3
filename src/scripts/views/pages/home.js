import RestaurantSource from "../../data/restaurant-source";
import listResto from "../templates/list-resto";

const Home = {
  async render() {
    return `
        <hero-section></hero-section>
        <h2 tabindex="0" class="sub-title">Explore Restaurant</h2>
        <section tabindex="0" class="main-content" aria-label="list restaurant">
            <div class="item-resto"></div>
        </section>
        `;
  },

  //   Fungsi ini akan dipanggil setelah render ()
  async afterRender() {
    const itemContainer = document.querySelector(".item-resto");

    try {
      const data = await RestaurantSource.getRestaurantList();
      data.forEach((restaurant) => {
        itemContainer.innerHTML += listResto(restaurant);
      });
    } catch (error) {
      console.log(error);
    }
  },
};
export default Home;

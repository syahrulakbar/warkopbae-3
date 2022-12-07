const FavoritePage = {
  async render() {
    return `
        <h2 style="color: black">Favorite Page</h2>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const navHome = document.querySelector("#navHome");
    const navFavorite = document.querySelector("#navFavorite");

    navHome.classList.remove("active");
    navFavorite.classList.add("active");
  },
};

export default FavoritePage;

/* eslint-disable object-curly-newline */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(button, event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(button, event, drawer);
    });
  },

  _toggleDrawer(button, event, drawer) {
    event.stopPropagation();
    button.classList.toggle("active");
    drawer.classList.toggle("show");
  },

  _closeDrawer(button, event, drawer) {
    event.stopPropagation();
    button.classList.remove("active");
    drawer.classList.remove("show");
  },
};

export default DrawerInitiator;

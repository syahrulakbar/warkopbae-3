import Home from "../views/pages/home";
import FavoritePage from "../views/pages/favorite";
import Detail from "../views/pages/detail";

const routes = {
  "/": Home,
  "/home": Home,
  "/favorite": FavoritePage,
  "/restaurant/:id": Detail,
};

export default routes;

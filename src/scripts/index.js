/* eslint-disable import/no-named-as-default-member */
/* eslint-disable object-curly-newline */
import App from "./views/App";
import swRegister from "./utils/sw-register";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import "regenerator-runtime";
import "../styles/main.css";
import "../styles/resto-detail.css";
import "../styles/loading.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/resto-list.css";
import "../styles/responsive.css";
import "../styles/favorite.css";
import "./components/custom-footer";
import "./components/navbar";
import "./components/hero-section";

const app = new App({
  button: document.querySelector("#hamburger-menu"),
  drawer: document.querySelector("#navbar"),
  content: document.querySelector("#maincontent"),
});

window.addEventListener("hashchange", () => {
  document.querySelector("#maincontent").scrollIntoView();
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});

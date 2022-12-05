/* eslint-disable object-curly-newline */
import App from "./views/App";
import swRegister from "./utils/sw-register";

import "regenerator-runtime";
import "../styles/main.css";
import "../styles/detail.css";
import "./components/custom-footer";
import "./components/navbar";
import "./components/hero-section";

const app = new App({
  button: document.querySelector("#hamburger-menu"),
  drawer: document.querySelector("#navbar"),
  content: document.querySelector("#maincontent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});
window.addEventListener("load", () => {
  app.renderPage();
});
window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});

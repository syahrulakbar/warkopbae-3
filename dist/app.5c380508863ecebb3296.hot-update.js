"use strict";
self["webpackHotUpdatewarkopbae_restaurant_apps"]("app",{

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/App */ "./src/scripts/views/App.js");
/* harmony import */ var _utils_sw_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/sw-register */ "./src/scripts/utils/sw-register.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_detail_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/detail.css */ "./src/styles/detail.css");
/* harmony import */ var _styles_loading_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/loading.css */ "./src/styles/loading.css");
/* harmony import */ var _components_custom_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/custom-footer */ "./src/scripts/components/custom-footer.js");
/* harmony import */ var _components_custom_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_custom_footer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar */ "./src/scripts/components/navbar.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_navbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_hero_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hero-section */ "./src/scripts/components/hero-section.js");
/* harmony import */ var _components_hero_section__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_hero_section__WEBPACK_IMPORTED_MODULE_8__);
/* eslint-disable object-curly-newline */











const app = new _views_App__WEBPACK_IMPORTED_MODULE_0__["default"]({
  button: document.querySelector("#hamburger-menu"),
  drawer: document.querySelector("#navbar"),
  content: document.querySelector("#maincontent"),
});
const navbarTop = document.querySelector(".navTop");
navbarTop.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  (0,_utils_sw_register__WEBPACK_IMPORTED_MODULE_1__["default"])();
});


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjVjMzgwNTA4ODYzZWNlYmIzMjk2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QjtBQUNlOztBQUVoQjtBQUNEO0FBQ0U7QUFDQztBQUNLO0FBQ1A7QUFDTTs7QUFFbkMsZ0JBQWdCLGtEQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLDhEQUFVO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcmtvcGJhZS1yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuaW1wb3J0IEFwcCBmcm9tIFwiLi92aWV3cy9BcHBcIjtcbmltcG9ydCBzd1JlZ2lzdGVyIGZyb20gXCIuL3V0aWxzL3N3LXJlZ2lzdGVyXCI7XG5cbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9tYWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2RldGFpbC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9sb2FkaW5nLmNzc1wiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL2N1c3RvbS1mb290ZXJcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9oZXJvLXNlY3Rpb25cIjtcblxuY29uc3QgYXBwID0gbmV3IEFwcCh7XG4gIGJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoYW1idXJnZXItbWVudVwiKSxcbiAgZHJhd2VyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKSxcbiAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluY29udGVudFwiKSxcbn0pO1xuY29uc3QgbmF2YmFyVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZUb3BcIik7XG5uYXZiYXJUb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IHtcbiAgYXBwLnJlbmRlclBhZ2UoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBhcHAucmVuZGVyUGFnZSgpO1xuICBzd1JlZ2lzdGVyKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
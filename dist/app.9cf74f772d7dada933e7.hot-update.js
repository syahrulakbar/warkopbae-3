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
  navbarTop: document.querySelector(".navTop"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjljZjc0Zjc3MmQ3ZGFkYTkzM2U3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QjtBQUNlOztBQUVoQjtBQUNEO0FBQ0U7QUFDQztBQUNLO0FBQ1A7QUFDTTs7QUFFbkMsZ0JBQWdCLGtEQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSw4REFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJrb3BiYWUtcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cbmltcG9ydCBBcHAgZnJvbSBcIi4vdmlld3MvQXBwXCI7XG5pbXBvcnQgc3dSZWdpc3RlciBmcm9tIFwiLi91dGlscy9zdy1yZWdpc3RlclwiO1xuXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvbWFpbi5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9kZXRhaWwuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvbG9hZGluZy5jc3NcIjtcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jdXN0b20tZm9vdGVyXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvaGVyby1zZWN0aW9uXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoe1xuICBidXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGFtYnVyZ2VyLW1lbnVcIiksXG4gIGRyYXdlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIiksXG4gIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbmNvbnRlbnRcIiksXG4gIG5hdmJhclRvcDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZUb3BcIiksXG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IHtcbiAgYXBwLnJlbmRlclBhZ2UoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBhcHAucmVuZGVyUGFnZSgpO1xuICBzd1JlZ2lzdGVyKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
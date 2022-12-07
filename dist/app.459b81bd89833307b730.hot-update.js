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
  navbarTop.classList.toggle("active");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjQ1OWI4MWJkODk4MzMzMDdiNzMwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QjtBQUNlOztBQUVoQjtBQUNEO0FBQ0U7QUFDQztBQUNLO0FBQ1A7QUFDTTs7QUFFbkMsZ0JBQWdCLGtEQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsOERBQVU7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fya29wYmFlLXJlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG5pbXBvcnQgQXBwIGZyb20gXCIuL3ZpZXdzL0FwcFwiO1xuaW1wb3J0IHN3UmVnaXN0ZXIgZnJvbSBcIi4vdXRpbHMvc3ctcmVnaXN0ZXJcIjtcblxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZGV0YWlsLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2xvYWRpbmcuY3NzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvY3VzdG9tLWZvb3RlclwiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL2hlcm8tc2VjdGlvblwiO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKHtcbiAgYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhbWJ1cmdlci1tZW51XCIpLFxuICBkcmF3ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YmFyXCIpLFxuICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5jb250ZW50XCIpLFxufSk7XG5jb25zdCBuYXZiYXJUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlRvcFwiKTtcbm5hdmJhclRvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbmF2YmFyVG9wLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IHtcbiAgYXBwLnJlbmRlclBhZ2UoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBhcHAucmVuZGVyUGFnZSgpO1xuICBzd1JlZ2lzdGVyKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
self["webpackHotUpdatewarkopbae_restaurant_apps"]("app",{

/***/ "./src/scripts/views/pages/home.js":
/*!*****************************************!*\
  !*** ./src/scripts/views/pages/home.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/restaurant-source */ "./src/scripts/data/restaurant-source.js");
/* harmony import */ var _templates_list_resto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/list-resto */ "./src/scripts/views/templates/list-resto.js");
/* harmony import */ var _templates_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/spinner */ "./src/scripts/views/templates/spinner.js");
/* harmony import */ var _templates_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/footer */ "./src/scripts/views/templates/footer.js");
/* harmony import */ var _utils_alert_initiator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/alert-initiator */ "./src/scripts/utils/alert-initiator.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");







const Home = {
  async render() {
    return `
    <div class="main-container">
      <div id="loading"></div>
      <div id="home-container">
        <hero-section></hero-section>
        <h2 tabindex="0" class="sub-title">Explore Restaurant</h2>
        <section tabindex="0" class="main-content" aria-label="list restaurant">
          <div class="item-resto">
          ${(0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_5__.createSkeletonRestoTemplate)(20)}
          </div>
        </section>
      </div>
      <footer id="footer-section" aria-label="footer menu"/>
    </div>
        `;
  },
  //   Fungsi ini akan dipanggil setelah render ()
  async afterRender() {
    // const heroContainer = document.querySelector("#hero-container");
    const mainContainer = document.querySelector(".main-container");
    const footer = document.querySelector("#footer-section");
    const loading = document.querySelector("#loading");
    const navFavorite = document.querySelector("#navFavorite");

    navFavorite.classList.remove("active");
    loading.innerHTML = (0,_templates_spinner__WEBPACK_IMPORTED_MODULE_2__["default"])();
    try {
      // heroContainer.innerHTML = `
      // <hero-section></hero-section>
      // `;
      const itemContainer = document.querySelector(".item-resto");
      itemContainer.innerHTML = "";

      const data = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].getRestaurantList();
      data.forEach((restaurant) => {
        itemContainer.innerHTML += (0,_templates_list_resto__WEBPACK_IMPORTED_MODULE_1__["default"])(restaurant);
      });
      loading.style.display = "none";
      footer.innerHTML = (0,_templates_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } catch (error) {
      console.log(error);
      loading.style.display = "none";
      mainContainer.innerHTML = `
      <div class="error-page">
        <img tabindex="0" class="error-image" src="./images/notfound.png" alt="error-image" srcset="" />
        <h5 tabindex="0" class="error-title">Sorry :(</h5>
        <p tabindex="0" class="error-desc">Error: ${error.message}</p>
      </div>`;
      (0,_utils_alert_initiator__WEBPACK_IMPORTED_MODULE_4__.initSwalError)(error.message);
    }
  },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmZiOGFhNDhjOTM0YWI2MTI3ODRlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNaO0FBQ0w7QUFDSTtBQUNhO0FBQ2dCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdGQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlGQUFrQztBQUMzRDtBQUNBLG1DQUFtQyxpRUFBUztBQUM1QyxPQUFPO0FBQ1A7QUFDQSx5QkFBeUIsNkRBQVk7QUFDckMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0EsTUFBTSxxRUFBYTtBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcmtvcGJhZS1yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gXCIuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlXCI7XHJcbmltcG9ydCBsaXN0UmVzdG8gZnJvbSBcIi4uL3RlbXBsYXRlcy9saXN0LXJlc3RvXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvc3Bpbm5lclwiO1xyXG5pbXBvcnQgQ3VzdG9tRm9vdGVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvZm9vdGVyXCI7XHJcbmltcG9ydCB7IGluaXRTd2FsRXJyb3IgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYWxlcnQtaW5pdGlhdG9yXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNrZWxldG9uUmVzdG9UZW1wbGF0ZSB9IGZyb20gXCIuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvclwiO1xyXG5cclxuY29uc3QgSG9tZSA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJob21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoZXJvLXNlY3Rpb24+PC9oZXJvLXNlY3Rpb24+XHJcbiAgICAgICAgPGgyIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwic3ViLXRpdGxlXCI+RXhwbG9yZSBSZXN0YXVyYW50PC9oMj5cclxuICAgICAgICA8c2VjdGlvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cIm1haW4tY29udGVudFwiIGFyaWEtbGFiZWw9XCJsaXN0IHJlc3RhdXJhbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXJlc3RvXCI+XHJcbiAgICAgICAgICAke2NyZWF0ZVNrZWxldG9uUmVzdG9UZW1wbGF0ZSgyMCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9vdGVyIGlkPVwiZm9vdGVyLXNlY3Rpb25cIiBhcmlhLWxhYmVsPVwiZm9vdGVyIG1lbnVcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gIH0sXHJcbiAgLy8gICBGdW5nc2kgaW5pIGFrYW4gZGlwYW5nZ2lsIHNldGVsYWggcmVuZGVyICgpXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICAvLyBjb25zdCBoZXJvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItc2VjdGlvblwiKTtcclxuICAgIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdcIik7XHJcbiAgICBjb25zdCBuYXZGYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2RmF2b3JpdGVcIik7XHJcblxyXG4gICAgbmF2RmF2b3JpdGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGxvYWRpbmcuaW5uZXJIVE1MID0gU3Bpbm5lcigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gaGVyb0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXHJcbiAgICAgIC8vIDxoZXJvLXNlY3Rpb24+PC9oZXJvLXNlY3Rpb24+XHJcbiAgICAgIC8vIGA7XHJcbiAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tcmVzdG9cIik7XHJcbiAgICAgIGl0ZW1Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmdldFJlc3RhdXJhbnRMaXN0KCk7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgocmVzdGF1cmFudCkgPT4ge1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuaW5uZXJIVE1MICs9IGxpc3RSZXN0byhyZXN0YXVyYW50KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBmb290ZXIuaW5uZXJIVE1MID0gQ3VzdG9tRm9vdGVyKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yLXBhZ2VcIj5cclxuICAgICAgICA8aW1nIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZXJyb3ItaW1hZ2VcIiBzcmM9XCIuL2ltYWdlcy9ub3Rmb3VuZC5wbmdcIiBhbHQ9XCJlcnJvci1pbWFnZVwiIHNyY3NldD1cIlwiIC8+XHJcbiAgICAgICAgPGg1IHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZXJyb3ItdGl0bGVcIj5Tb3JyeSA6KDwvaDU+XHJcbiAgICAgICAgPHAgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJlcnJvci1kZXNjXCI+RXJyb3I6ICR7ZXJyb3IubWVzc2FnZX08L3A+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgIGluaXRTd2FsRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
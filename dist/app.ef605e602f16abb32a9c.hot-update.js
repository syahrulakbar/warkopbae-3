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




const Home = {
  async render() {
    return `
    <div class="main-container">
      <div id="loading"></div>
      <div id="home-container">
        <hero-section></hero-section>
        <h2 tabindex="0" class="sub-title">Explore Restaurant</h2>
        <section tabindex="0" class="main-content" aria-label="list restaurant">
        <div class="item-resto"></div>
        </section>
      </div>
    </div>
        `;
  },
  //   Fungsi ini akan dipanggil setelah render ()
  async afterRender() {
    const itemContainer = document.querySelector(".item-resto");
    const homeContainer = document.querySelector("#home-container");
    const loading = document.querySelector("#loading");
    const footer = document.querySelector("#footer-section");
    const navFavorite = document.querySelector("#navFavorite");

    navFavorite.classList.remove("active");
    homeContainer.style.display = "none";
    footer.style.display = "none";
    loading.innerHTML = (0,_templates_spinner__WEBPACK_IMPORTED_MODULE_2__["default"])();
    try {
      const data = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].getRestaurantList();
      data.forEach((restaurant) => {
        itemContainer.innerHTML += (0,_templates_list_resto__WEBPACK_IMPORTED_MODULE_1__["default"])(restaurant);
      });
      // setTimeout(() => {
      homeContainer.style.display = "block";
      footer.style.display = "block";
      loading.style.display = "none";
      // }, 800);
    } catch (error) {
      console.log(error);
      loading.style.display = "none";
    }
  },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmVmNjA1ZTYwMmYxNmFiYjMyYTljLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNaO0FBQ0w7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQU87QUFDL0I7QUFDQSx5QkFBeUIsaUZBQWtDO0FBQzNEO0FBQ0EsbUNBQW1DLGlFQUFTO0FBQzVDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fya29wYmFlLXJlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnRTb3VyY2UgZnJvbSBcIi4uLy4uL2RhdGEvcmVzdGF1cmFudC1zb3VyY2VcIjtcclxuaW1wb3J0IGxpc3RSZXN0byBmcm9tIFwiLi4vdGVtcGxhdGVzL2xpc3QtcmVzdG9cIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL3RlbXBsYXRlcy9zcGlubmVyXCI7XHJcblxyXG5jb25zdCBIb21lID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBpZD1cImxvYWRpbmdcIj48L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImhvbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGhlcm8tc2VjdGlvbj48L2hlcm8tc2VjdGlvbj5cclxuICAgICAgICA8aDIgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJzdWItdGl0bGVcIj5FeHBsb3JlIFJlc3RhdXJhbnQ8L2gyPlxyXG4gICAgICAgIDxzZWN0aW9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwibWFpbi1jb250ZW50XCIgYXJpYS1sYWJlbD1cImxpc3QgcmVzdGF1cmFudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXJlc3RvXCI+PC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgfSxcclxuICAvLyAgIEZ1bmdzaSBpbmkgYWthbiBkaXBhbmdnaWwgc2V0ZWxhaCByZW5kZXIgKClcclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tcmVzdG9cIik7XHJcbiAgICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdcIik7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3Rlci1zZWN0aW9uXCIpO1xyXG4gICAgY29uc3QgbmF2RmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdkZhdm9yaXRlXCIpO1xyXG5cclxuICAgIG5hdkZhdm9yaXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBob21lQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGZvb3Rlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBsb2FkaW5nLmlubmVySFRNTCA9IFNwaW5uZXIoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmdldFJlc3RhdXJhbnRMaXN0KCk7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgocmVzdGF1cmFudCkgPT4ge1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuaW5uZXJIVE1MICs9IGxpc3RSZXN0byhyZXN0YXVyYW50KTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBob21lQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGZvb3Rlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgLy8gfSwgODAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
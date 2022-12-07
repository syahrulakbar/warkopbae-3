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
    const navHome = document.querySelector("#navHome");
    const navFavorite = document.querySelector("#navFavorite");

    navHome.classList.add("active");
    navFavorite.classList.remove("active");
    homeContainer.style.display = "none";
    footer.style.display = "none";
    loading.innerHTML = (0,_templates_spinner__WEBPACK_IMPORTED_MODULE_2__["default"])();
    try {
      const data = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].getRestaurantList();
      data.forEach((restaurant) => {
        itemContainer.innerHTML += (0,_templates_list_resto__WEBPACK_IMPORTED_MODULE_1__["default"])(restaurant);
      });
      setTimeout(() => {
        homeContainer.style.display = "block";
        footer.style.display = "block";
        loading.style.display = "none";
      }, 800);
    } catch (error) {
      console.log(error);
      loading.style.display = "none";
    }
  },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNiM2Y4NzNjMTZhZThlMjQ1YzNkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUNaO0FBQ0w7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhEQUFPO0FBQy9CO0FBQ0EseUJBQXlCLGlGQUFrQztBQUMzRDtBQUNBLG1DQUFtQyxpRUFBUztBQUM1QyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcmtvcGJhZS1yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gXCIuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlXCI7XHJcbmltcG9ydCBsaXN0UmVzdG8gZnJvbSBcIi4uL3RlbXBsYXRlcy9saXN0LXJlc3RvXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi90ZW1wbGF0ZXMvc3Bpbm5lclwiO1xyXG5cclxuY29uc3QgSG9tZSA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJob21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoZXJvLXNlY3Rpb24+PC9oZXJvLXNlY3Rpb24+XHJcbiAgICAgICAgPGgyIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwic3ViLXRpdGxlXCI+RXhwbG9yZSBSZXN0YXVyYW50PC9oMj5cclxuICAgICAgICA8c2VjdGlvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cIm1haW4tY29udGVudFwiIGFyaWEtbGFiZWw9XCJsaXN0IHJlc3RhdXJhbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1yZXN0b1wiPjwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gIH0sXHJcbiAgLy8gICBGdW5nc2kgaW5pIGFrYW4gZGlwYW5nZ2lsIHNldGVsYWggcmVuZGVyICgpXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtLXJlc3RvXCIpO1xyXG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2FkaW5nXCIpO1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb290ZXItc2VjdGlvblwiKTtcclxuICAgIGNvbnN0IG5hdkhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdkhvbWVcIik7XHJcbiAgICBjb25zdCBuYXZGYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2RmF2b3JpdGVcIik7XHJcblxyXG4gICAgbmF2SG9tZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgbmF2RmF2b3JpdGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGhvbWVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZm9vdGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGxvYWRpbmcuaW5uZXJIVE1MID0gU3Bpbm5lcigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZ2V0UmVzdGF1cmFudExpc3QoKTtcclxuICAgICAgZGF0YS5mb3JFYWNoKChyZXN0YXVyYW50KSA9PiB7XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgKz0gbGlzdFJlc3RvKHJlc3RhdXJhbnQpO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaG9tZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGZvb3Rlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICB9LCA4MDApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
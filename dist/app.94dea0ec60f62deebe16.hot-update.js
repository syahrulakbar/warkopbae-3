"use strict";
self["webpackHotUpdatewarkopbae_restaurant_apps"]("app",{

/***/ "./src/scripts/views/pages/detail.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/pages/detail.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/restaurant-source */ "./src/scripts/data/restaurant-source.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _templates_resto_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/resto-detail */ "./src/scripts/views/templates/resto-detail.js");
/* harmony import */ var _templates_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/spinner */ "./src/scripts/views/templates/spinner.js");
/* harmony import */ var _templates_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/review */ "./src/scripts/views/templates/review.js");
/* harmony import */ var _utils_like_button_presenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/like-button-presenter */ "./src/scripts/utils/like-button-presenter.js");
/* harmony import */ var _utils_post_review__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/post-review */ "./src/scripts/utils/post-review.js");
/* harmony import */ var _utils_alert_initiator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/alert-initiator */ "./src/scripts/utils/alert-initiator.js");
/* harmony import */ var _data_favorite_restaurant_idb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/favorite-restaurant-idb */ "./src/scripts/data/favorite-restaurant-idb.js");
/* harmony import */ var _templates_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../templates/footer */ "./src/scripts/views/templates/footer.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");












const Detail = {
  async render() {
    return `
  <div id="main-container">
    <div id="loading"></div>
    <div id="likeButtonContainer"></div>
    <section id="detail-resto">
    ${(0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_10__.createSkeletonRestoDetailTemplate)()}
    </section>
    <div class="add-review-container">
    </div>
    
 
    <footer id="footer-section" aria-label="footer menu"/>
  </div>
        `;
  },

  async afterRender() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithoutCombiner();
    const mainContainer = document.querySelector("#main-container");
    const detailContainer = document.querySelector("#detail-resto");
    const review = document.querySelector(".add-review-container");
    const loading = document.querySelector("#loading");
    const footer = document.querySelector("#footer-section");

    loading.innerHTML = (0,_templates_spinner__WEBPACK_IMPORTED_MODULE_3__["default"])();
    try {
      detailContainer.style.display = "none";
      const data = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].getRestaurantDetail(url.id);

      _utils_like_button_presenter__WEBPACK_IMPORTED_MODULE_5__["default"].init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        favoriteRestaurants: _data_favorite_restaurant_idb__WEBPACK_IMPORTED_MODULE_8__["default"],
        restaurant: {
          id: data.id,
          name: data.name,
          description: data.description,
          pictureId: data.pictureId,
          city: data.city,
          rating: data.rating,
        },
      });
      detailContainer.innerHTML = (0,_templates_resto_detail__WEBPACK_IMPORTED_MODULE_2__["default"])(data);

      detailContainer.style.display = "block";
      loading.style.display = "none";

      review.innerHTML = (0,_templates_review__WEBPACK_IMPORTED_MODULE_4__["default"])();
      footer.innerHTML = (0,_templates_footer__WEBPACK_IMPORTED_MODULE_9__["default"])();
      const nameInput = document.querySelector("#input-name");
      const reviewInput = document.querySelector("#input-review");
      const buttonReview = document.querySelector("#button-review");

      buttonReview.addEventListener("click", async (e) => {
        e.preventDefault();
        if (nameInput.value === "" || reviewInput.value === "") {
          (0,_utils_alert_initiator__WEBPACK_IMPORTED_MODULE_7__.initSwalError)("Review cannot empty!");
        } else {
          await (0,_utils_post_review__WEBPACK_IMPORTED_MODULE_6__["default"])(url, nameInput.value, reviewInput.value);
          (0,_utils_alert_initiator__WEBPACK_IMPORTED_MODULE_7__.initSwalSuccess)("Succes add new review!");
        }
        nameInput.value = "";
        reviewInput.value = "";
      });
    } catch (error) {
      console.log(error);
      detailContainer.style.display = "block";
      loading.style.display = "none";
      mainContainer.innerHTML = `
      <div class="error-page">
        <img tabindex="0" class="error-image" src="./images/notfound.png" alt="error image" srcset="" />
        <h5 tabindex="0" class="error-title">Sorry :(</h5>
        <div class="error-desc">
        <p tabindex="0">Error: ${error.message}</p>
        </div>
      </div>`;
      (0,_utils_alert_initiator__WEBPACK_IMPORTED_MODULE_7__.initSwalError)(error.message);
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjk0ZGVhMGVjNjBmNjJkZWViZTE2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ1o7QUFDSTtBQUNUO0FBQ0M7QUFDd0I7QUFDbkI7QUFDNEI7QUFDTjtBQUN4QjtBQUNtQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrRkFBaUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCLHdGQUF1QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQU87QUFDL0I7QUFDQTtBQUNBLHlCQUF5QixtRkFBb0M7QUFDN0Q7QUFDQSxNQUFNLHlFQUF3QjtBQUM5QjtBQUNBLDZCQUE2QixxRUFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLGtDQUFrQyxtRUFBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2REFBUztBQUNsQyx5QkFBeUIsNkRBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHFFQUFhO0FBQ3ZCLFVBQVU7QUFDVixnQkFBZ0IsOERBQVU7QUFDMUIsVUFBVSx1RUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0EsTUFBTSxxRUFBYTtBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fya29wYmFlLXJlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2RldGFpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tIFwiLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZVwiO1xyXG5pbXBvcnQgVXJsUGFyc2VyIGZyb20gXCIuLi8uLi9yb3V0ZXMvdXJsLXBhcnNlclwiO1xyXG5pbXBvcnQgUmVzdG9EZXRhaWwgZnJvbSBcIi4uL3RlbXBsYXRlcy9yZXN0by1kZXRhaWxcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL3RlbXBsYXRlcy9zcGlubmVyXCI7XHJcbmltcG9ydCBBZGRSZXZpZXcgZnJvbSBcIi4uL3RlbXBsYXRlcy9yZXZpZXdcIjtcclxuaW1wb3J0IExpa2VCdXR0b25QcmVzZW50ZXIgZnJvbSBcIi4uLy4uL3V0aWxzL2xpa2UtYnV0dG9uLXByZXNlbnRlclwiO1xyXG5pbXBvcnQgUG9zdFJldmlldyBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdC1yZXZpZXdcIjtcclxuaW1wb3J0IHsgaW5pdFN3YWxFcnJvciwgaW5pdFN3YWxTdWNjZXNzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FsZXJ0LWluaXRpYXRvclwiO1xyXG5pbXBvcnQgRmF2b3JpdGVSZXN0YXVyYW50SWRiIGZyb20gXCIuLi8uLi9kYXRhL2Zhdm9yaXRlLXJlc3RhdXJhbnQtaWRiXCI7XHJcbmltcG9ydCBDdXN0b21Gb290ZXIgZnJvbSBcIi4uL3RlbXBsYXRlcy9mb290ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2tlbGV0b25SZXN0b0RldGFpbFRlbXBsYXRlIH0gZnJvbSBcIi4uL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yXCI7XHJcblxyXG5jb25zdCBEZXRhaWwgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICA8ZGl2IGlkPVwibWFpbi1jb250YWluZXJcIj5cclxuICAgIDxkaXYgaWQ9XCJsb2FkaW5nXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwibGlrZUJ1dHRvbkNvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgPHNlY3Rpb24gaWQ9XCJkZXRhaWwtcmVzdG9cIj5cclxuICAgICR7Y3JlYXRlU2tlbGV0b25SZXN0b0RldGFpbFRlbXBsYXRlKCl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWRkLXJldmlldy1jb250YWluZXJcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiBcclxuICAgIDxmb290ZXIgaWQ9XCJmb290ZXItc2VjdGlvblwiIGFyaWEtbGFiZWw9XCJmb290ZXIgbWVudVwiLz5cclxuICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXJsID0gVXJsUGFyc2VyLnBhcnNlQWN0aXZlVXJsV2l0aG91dENvbWJpbmVyKCk7XHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGRldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsLXJlc3RvXCIpO1xyXG4gICAgY29uc3QgcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcmV2aWV3LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdcIik7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb3Rlci1zZWN0aW9uXCIpO1xyXG5cclxuICAgIGxvYWRpbmcuaW5uZXJIVE1MID0gU3Bpbm5lcigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGV0YWlsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZ2V0UmVzdGF1cmFudERldGFpbCh1cmwuaWQpO1xyXG5cclxuICAgICAgTGlrZUJ1dHRvblByZXNlbnRlci5pbml0KHtcclxuICAgICAgICBsaWtlQnV0dG9uQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpa2VCdXR0b25Db250YWluZXJcIiksXHJcbiAgICAgICAgZmF2b3JpdGVSZXN0YXVyYW50czogRmF2b3JpdGVSZXN0YXVyYW50SWRiLFxyXG4gICAgICAgIHJlc3RhdXJhbnQ6IHtcclxuICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBwaWN0dXJlSWQ6IGRhdGEucGljdHVyZUlkLFxyXG4gICAgICAgICAgY2l0eTogZGF0YS5jaXR5LFxyXG4gICAgICAgICAgcmF0aW5nOiBkYXRhLnJhdGluZyxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgZGV0YWlsQ29udGFpbmVyLmlubmVySFRNTCA9IFJlc3RvRGV0YWlsKGRhdGEpO1xyXG5cclxuICAgICAgZGV0YWlsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgcmV2aWV3LmlubmVySFRNTCA9IEFkZFJldmlldygpO1xyXG4gICAgICBmb290ZXIuaW5uZXJIVE1MID0gQ3VzdG9tRm9vdGVyKCk7XHJcbiAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtbmFtZVwiKTtcclxuICAgICAgY29uc3QgcmV2aWV3SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXJldmlld1wiKTtcclxuICAgICAgY29uc3QgYnV0dG9uUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tcmV2aWV3XCIpO1xyXG5cclxuICAgICAgYnV0dG9uUmV2aWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlID09PSBcIlwiIHx8IHJldmlld0lucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICBpbml0U3dhbEVycm9yKFwiUmV2aWV3IGNhbm5vdCBlbXB0eSFcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGF3YWl0IFBvc3RSZXZpZXcodXJsLCBuYW1lSW5wdXQudmFsdWUsIHJldmlld0lucHV0LnZhbHVlKTtcclxuICAgICAgICAgIGluaXRTd2FsU3VjY2VzcyhcIlN1Y2NlcyBhZGQgbmV3IHJldmlldyFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgcmV2aWV3SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgZGV0YWlsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yLXBhZ2VcIj5cclxuICAgICAgICA8aW1nIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZXJyb3ItaW1hZ2VcIiBzcmM9XCIuL2ltYWdlcy9ub3Rmb3VuZC5wbmdcIiBhbHQ9XCJlcnJvciBpbWFnZVwiIHNyY3NldD1cIlwiIC8+XHJcbiAgICAgICAgPGg1IHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiZXJyb3ItdGl0bGVcIj5Tb3JyeSA6KDwvaDU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWRlc2NcIj5cclxuICAgICAgICA8cCB0YWJpbmRleD1cIjBcIj5FcnJvcjogJHtlcnJvci5tZXNzYWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgICAgaW5pdFN3YWxFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
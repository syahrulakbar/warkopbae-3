"use strict";
self["webpackHotUpdatewarkopbae_restaurant_apps"]("app",{

/***/ "./src/scripts/views/templates/list-resto.js":
/*!***************************************************!*\
  !*** ./src/scripts/views/templates/list-resto.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals/config */ "./src/scripts/globals/config.js");


const listResto = (resto) => ` 
      <div class="card-container">
      <a href="#/restaurant/${resto.id}" class="tag-card">
      <div id ="${resto.id}" class="card">
      <div aria-labelledby="name restaurant is ${resto.name}" class="resto-desc">
      <h3 tabindex="0" class="name-resto">${resto.name}</h3>   
      </div>
      <img tabindex="0" class="lazyload" data-src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name} restaurant image" />
      <div tabindex="0" class="place-resto" aria-labelledby="place restaurant ${resto.name} in ${resto.city} City">
      <h3>${resto.city} City</h3>
      </div>
      <div class="rating-resto" tabindex="0" aria-labelledby="rating restaurant ${resto.name} is ${resto.rating}">
       <h3>⭐ ${resto.rating}</h3>     
      </div>
      </div>
      </a>
      </div>

    `;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listResto);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjAxNGFlZTAxN2FlOWQ4MDE4YzM1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkMsa0JBQWtCLFNBQVM7QUFDM0IsaURBQWlELFdBQVc7QUFDNUQsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQSxxREFBcUQsc0VBQXFCLG1CQUFtQixTQUFTLFlBQVk7QUFDbEgsZ0ZBQWdGLFlBQVksS0FBSyxZQUFZO0FBQzdHLFlBQVksWUFBWTtBQUN4QjtBQUNBLGtGQUFrRixZQUFZLEtBQUssYUFBYTtBQUNoSCxlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJrb3BiYWUtcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvdGVtcGxhdGVzL2xpc3QtcmVzdG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vZ2xvYmFscy9jb25maWdcIjtcclxuXHJcbmNvbnN0IGxpc3RSZXN0byA9IChyZXN0bykgPT4gYCBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgIDxhIGhyZWY9XCIjL3Jlc3RhdXJhbnQvJHtyZXN0by5pZH1cIiBjbGFzcz1cInRhZy1jYXJkXCI+XHJcbiAgICAgIDxkaXYgaWQgPVwiJHtyZXN0by5pZH1cIiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGRpdiBhcmlhLWxhYmVsbGVkYnk9XCJuYW1lIHJlc3RhdXJhbnQgaXMgJHtyZXN0by5uYW1lfVwiIGNsYXNzPVwicmVzdG8tZGVzY1wiPlxyXG4gICAgICA8aDMgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJuYW1lLXJlc3RvXCI+JHtyZXN0by5uYW1lfTwvaDM+ICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW1nIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwibGF6eWxvYWRcIiBkYXRhLXNyYz1cIiR7Q09ORklHLkJBU0VfSU1BR0VfVVJMICsgcmVzdG8ucGljdHVyZUlkfVwiIGFsdD1cIiR7cmVzdG8ubmFtZX0gcmVzdGF1cmFudCBpbWFnZVwiIC8+XHJcbiAgICAgIDxkaXYgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJwbGFjZS1yZXN0b1wiIGFyaWEtbGFiZWxsZWRieT1cInBsYWNlIHJlc3RhdXJhbnQgJHtyZXN0by5uYW1lfSBpbiAke3Jlc3RvLmNpdHl9IENpdHlcIj5cclxuICAgICAgPGgzPiR7cmVzdG8uY2l0eX0gQ2l0eTwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nLXJlc3RvXCIgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbGxlZGJ5PVwicmF0aW5nIHJlc3RhdXJhbnQgJHtyZXN0by5uYW1lfSBpcyAke3Jlc3RvLnJhdGluZ31cIj5cclxuICAgICAgIDxoMz7irZAgJHtyZXN0by5yYXRpbmd9PC9oMz4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxpc3RSZXN0bztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
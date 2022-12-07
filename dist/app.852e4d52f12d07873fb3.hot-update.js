"use strict";
self["webpackHotUpdatewarkopbae_restaurant_apps"]("app",{

/***/ "./src/scripts/views/pages/favorite.js":
/*!*********************************************!*\
  !*** ./src/scripts/views/pages/favorite.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const FavoritePage = {
  async render() {
    return `
        <h2 style="color: black">Favorite Page</h2>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const navHome = document.querySelector("#navHome");
    const navFavorite = document.querySelector("#navFavorite");

    navHome.classList.remove("active");
    navFavorite.classList.add("active");
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoritePage);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjg1MmU0ZDUyZjEyZDA3ODczZmIzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fya29wYmFlLXJlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2Zhdm9yaXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZhdm9yaXRlUGFnZSA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiBibGFja1wiPkZhdm9yaXRlIFBhZ2U8L2gyPlxyXG4gICAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgLy8gRnVuZ3NpIGluaSBha2FuIGRpcGFuZ2dpbCBzZXRlbGFoIHJlbmRlcigpXHJcbiAgICBjb25zdCBuYXZIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZIb21lXCIpO1xyXG4gICAgY29uc3QgbmF2RmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdkZhdm9yaXRlXCIpO1xyXG5cclxuICAgIG5hdkhvbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIG5hdkZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlUGFnZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
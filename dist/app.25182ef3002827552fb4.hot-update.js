"use strict";
self["webpackHotUpdatewarkopbae_restaurant_apps"]("app",{

/***/ "./src/scripts/utils/drawer-initiator.js":
/*!***********************************************!*\
  !*** ./src/scripts/utils/drawer-initiator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DrawerInitiator = {
  init({ button, drawer, content, navbarTop }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(button, event, drawer, navbarTop);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(button, event, drawer, navbarTop);
    });
  },

  _toggleDrawer(button, event, drawer, navbarTop) {
    event.stopPropagation();
    button.classList.toggle("active");
    navbarTop.classList.toggle("active");
    drawer.classList.toggle("show");
  },

  _closeDrawer(button, event, drawer, navbarTop) {
    event.stopPropagation();
    button.classList.remove("active");
    navbarTop.classList.remove("active");
    drawer.classList.remove("show");
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjI1MTgyZWYzMDAyODI3NTUyZmI0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsU0FBUyxvQ0FBb0M7QUFDN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcmtvcGJhZS1yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy91dGlscy9kcmF3ZXItaW5pdGlhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERyYXdlckluaXRpYXRvciA9IHtcclxuICBpbml0KHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQsIG5hdmJhclRvcCB9KSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl90b2dnbGVEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyLCBuYXZiYXJUb3ApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2Nsb3NlRHJhd2VyKGJ1dHRvbiwgZXZlbnQsIGRyYXdlciwgbmF2YmFyVG9wKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF90b2dnbGVEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyLCBuYXZiYXJUb3ApIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBuYXZiYXJUb3AuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIGRyYXdlci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICB9LFxyXG5cclxuICBfY2xvc2VEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyLCBuYXZiYXJUb3ApIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBuYXZiYXJUb3AuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGRyYXdlci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VySW5pdGlhdG9yO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
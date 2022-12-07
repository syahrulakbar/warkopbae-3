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
/* eslint-disable object-curly-newline */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmQ0MmI3ODgwOThiZjZjNzUxYmQ0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxTQUFTLG9DQUFvQztBQUM3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fya29wYmFlLXJlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3V0aWxzL2RyYXdlci1pbml0aWF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgb2JqZWN0LWN1cmx5LW5ld2xpbmUgKi9cclxuY29uc3QgRHJhd2VySW5pdGlhdG9yID0ge1xyXG4gIGluaXQoeyBidXR0b24sIGRyYXdlciwgY29udGVudCwgbmF2YmFyVG9wIH0pIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX3RvZ2dsZURyYXdlcihidXR0b24sIGV2ZW50LCBkcmF3ZXIsIG5hdmJhclRvcCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5fY2xvc2VEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyLCBuYXZiYXJUb3ApO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX3RvZ2dsZURyYXdlcihidXR0b24sIGV2ZW50LCBkcmF3ZXIsIG5hdmJhclRvcCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIG5hdmJhclRvcC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgZHJhd2VyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xyXG4gIH0sXHJcblxyXG4gIF9jbG9zZURyYXdlcihidXR0b24sIGV2ZW50LCBkcmF3ZXIsIG5hdmJhclRvcCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIG5hdmJhclRvcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZHJhd2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJJbml0aWF0b3I7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
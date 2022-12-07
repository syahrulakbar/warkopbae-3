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
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(button, event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(button, event, drawer);
    });
  },

  _toggleDrawer(button, event, drawer) {
    event.stopPropagation();
    button.classList.toggle("active");
    drawer.classList.toggle("show");
  },

  _closeDrawer(button, event, drawer) {
    event.stopPropagation();
    button.classList.remove("active");
    drawer.classList.remove("show");
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmVlNjM2MzU2YmVjM2Y5ZWNiMDgwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxTQUFTLHlCQUF5QjtBQUNsQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXJrb3BiYWUtcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdXRpbHMvZHJhd2VyLWluaXRpYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xyXG5jb25zdCBEcmF3ZXJJbml0aWF0b3IgPSB7XHJcbiAgaW5pdCh7IGJ1dHRvbiwgZHJhd2VyLCBjb250ZW50IH0pIHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX3RvZ2dsZURyYXdlcihidXR0b24sIGV2ZW50LCBkcmF3ZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2Nsb3NlRHJhd2VyKGJ1dHRvbiwgZXZlbnQsIGRyYXdlcik7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBfdG9nZ2xlRHJhd2VyKGJ1dHRvbiwgZXZlbnQsIGRyYXdlcikge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIGRyYXdlci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuICB9LFxyXG5cclxuICBfY2xvc2VEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZHJhd2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJJbml0aWF0b3I7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
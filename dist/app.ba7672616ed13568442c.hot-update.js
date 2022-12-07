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
  init({ button, drawer, content, navTop }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(button, event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(button, event, drawer);
    });
    navTop.addEventListener("click", (event) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJhNzY3MjYxNmVkMTM1Njg0NDJjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxTQUFTLGlDQUFpQztBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhcmtvcGJhZS1yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy91dGlscy9kcmF3ZXItaW5pdGlhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXHJcbmNvbnN0IERyYXdlckluaXRpYXRvciA9IHtcclxuICBpbml0KHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQsIG5hdlRvcCB9KSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl90b2dnbGVEcmF3ZXIoYnV0dG9uLCBldmVudCwgZHJhd2VyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9jbG9zZURyYXdlcihidXR0b24sIGV2ZW50LCBkcmF3ZXIpO1xyXG4gICAgfSk7XHJcbiAgICBuYXZUb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9jbG9zZURyYXdlcihidXR0b24sIGV2ZW50LCBkcmF3ZXIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgX3RvZ2dsZURyYXdlcihidXR0b24sIGV2ZW50LCBkcmF3ZXIpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICBkcmF3ZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XHJcbiAgfSxcclxuXHJcbiAgX2Nsb3NlRHJhd2VyKGJ1dHRvbiwgZXZlbnQsIGRyYXdlcikge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGRyYXdlci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VySW5pdGlhdG9yO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
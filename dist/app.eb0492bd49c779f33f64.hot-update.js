self["webpackHotUpdatewarkopbae_restaurant_apps"]("app",{

/***/ "./src/scripts/components/navbar.js":
/*!******************************************!*\
  !*** ./src/scripts/components/navbar.js ***!
  \******************************************/
/***/ (() => {

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav aria-label="navigation bar">
        <h1 tabindex="0">WarkopBae</h1>
        <button aria-label="navigation button" tabindex="0" id="hamburger-menu">
          <span></span>
          <span id="line"></span>
          <span></span>
        </button>
        <ul id="navbar" >
          <li><a href="/" id="navHome" class="active" >Home</a></li>
          <li><a href="#/favorite" id="navFavorite">Favorite</a></li>
          <li><a href="https://know-me.me/" target="_blank">About Us</a></li>
        </ul>
      </nav>`;
  }
}
customElements.define("custom-navbar", Navbar);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmViMDQ5MmJkNDljNzc5ZjMzZjY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Fya29wYmFlLXJlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5hdmJhciBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgIDxuYXYgYXJpYS1sYWJlbD1cIm5hdmlnYXRpb24gYmFyXCI+XHJcbiAgICAgICAgPGgxIHRhYmluZGV4PVwiMFwiPldhcmtvcEJhZTwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwibmF2aWdhdGlvbiBidXR0b25cIiB0YWJpbmRleD1cIjBcIiBpZD1cImhhbWJ1cmdlci1tZW51XCI+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBpZD1cImxpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHVsIGlkPVwibmF2YmFyXCIgPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCIgaWQ9XCJuYXZIb21lXCIgY2xhc3M9XCJhY3RpdmVcIiA+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjL2Zhdm9yaXRlXCIgaWQ9XCJuYXZGYXZvcml0ZVwiPkZhdm9yaXRlPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8va25vdy1tZS5tZS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BYm91dCBVczwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PmA7XHJcbiAgfVxyXG59XHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImN1c3RvbS1uYXZiYXJcIiwgTmF2YmFyKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
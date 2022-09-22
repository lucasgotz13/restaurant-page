/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/aboutPage.js":
/*!*************************************!*\
  !*** ./src/components/aboutPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function aboutPage() {
    const aboutDiv = document.createElement('div')
    aboutDiv.classList.add("about-div")

    const aboutImg = document.createElement('img')
    aboutImg.setAttribute("src", "../src/assets/about-la-guitarrita.jpg")
    aboutImg.classList.add("about-img")
    aboutDiv.appendChild(aboutImg)

    return aboutDiv
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);

/***/ }),

/***/ "./src/components/homePage.js":
/*!************************************!*\
  !*** ./src/components/homePage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homePage() {
    const homeDiv = document.createElement('div')

    const heroDiv = document.createElement('div')
    heroDiv.classList.add("home-div")
    homeDiv.appendChild(heroDiv)

    const heroTitle = document.createElement('h1')
    heroTitle.textContent = "A pizza originated in Buenos Aires you must try"
    heroTitle.classList.add("hero-title")
    heroDiv.appendChild(heroTitle)  

    const pizzeriaImg = document.createElement('img')
    pizzeriaImg.setAttribute("src","../src/assets/pizzeria-2.jpg")
    pizzeriaImg.setAttribute("alt", "pizza-img")
    pizzeriaImg.classList.add("home-page-pizza")
    heroDiv.appendChild(pizzeriaImg)

    const welcomeDiv = document.createElement('div')
    welcomeDiv.classList.add("welcome-div")
    heroDiv.appendChild(welcomeDiv)

    const welcomeMsg = document.createElement('h3')
    welcomeMsg.textContent = "Welcome to La Guitarrita"
    welcomeDiv.appendChild(welcomeMsg)

    const welcomeDesc = document.createElement('p')
    welcomeDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor imperdiet porta. Nullam placerat malesuada mauris non mattis. Fusce bibendum ante quis leo eleifend ultricies. In elit elit, interdum sit amet ultrices gravida, commodo vitae elit. Nam orci felis, faucibus et est vel, bibendum semper massa. Vivamus convallis, leo quis molestie feugiat, eros quam euismod ex, faucibus mattis nisi massa eu felis. Donec dapibus viverra nisl, ut aliquet lectus dapibus luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    welcomeDiv.appendChild(welcomeDesc)
    return homeDiv
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);

/***/ }),

/***/ "./src/components/initialPage.js":
/*!***************************************!*\
  !*** ./src/components/initialPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initialPageLoad() {
    const div = document.createElement('div')

    const title = document.createElement('h1')
    title.id = "title"
    title.textContent = "La Guitarrita"
    div.appendChild(title)
    return div
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_initialPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/initialPage.js */ "./src/components/initialPage.js");
/* harmony import */ var _components_homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homePage.js */ "./src/components/homePage.js");
/* harmony import */ var _components_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/aboutPage.js */ "./src/components/aboutPage.js");



const staticContent = document.getElementById('static-content')
const dynamicContent = document.getElementById('dynamic-content')
staticContent.appendChild((0,_components_initialPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])())

const buttonDiv = document.createElement('div')
buttonDiv.classList.add('button-div')
staticContent.appendChild(buttonDiv)

const homeButton = document.createElement('button')
homeButton.textContent = "Home"
homeButton.classList.add('button-24')
homeButton.addEventListener('click', () => {
    dynamicContent.innerHTML = ""
    dynamicContent.appendChild((0,_components_homePage_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
}) 
buttonDiv.appendChild(homeButton)

const aboutButton = document.createElement('button')
aboutButton.textContent = "About"
aboutButton.classList.add('button-24')
aboutButton.addEventListener('click', () => {
    dynamicContent.innerHTML = ""
    dynamicContent.appendChild((0,_components_aboutPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])())
})
buttonDiv.appendChild(aboutButton)

const contactButton = document.createElement('button')
contactButton.classList.add('button-24')
contactButton.textContent = "Contact"
buttonDiv.appendChild(contactButton)

dynamicContent.appendChild((0,_components_homePage_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDWmY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDaENmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZTs7Ozs7O1VDWGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlEO0FBQ1Y7QUFDRTtBQUNqRDtBQUNBO0FBQ0EsMEJBQTBCLHNFQUFlOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtRUFBUTtBQUN2QyxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvRUFBUztBQUN4QyxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLG1FQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9hYm91dFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaW5pdGlhbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFib3V0UGFnZSgpIHtcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZChcImFib3V0LWRpdlwiKVxuXG4gICAgY29uc3QgYWJvdXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGFib3V0SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9hc3NldHMvYWJvdXQtbGEtZ3VpdGFycml0YS5qcGdcIilcbiAgICBhYm91dEltZy5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtaW1nXCIpXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpXG5cbiAgICByZXR1cm4gYWJvdXREaXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRQYWdlIiwiZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZXJvRGl2LmNsYXNzTGlzdC5hZGQoXCJob21lLWRpdlwiKVxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaGVyb0RpdilcblxuICAgIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoZXJvVGl0bGUudGV4dENvbnRlbnQgPSBcIkEgcGl6emEgb3JpZ2luYXRlZCBpbiBCdWVub3MgQWlyZXMgeW91IG11c3QgdHJ5XCJcbiAgICBoZXJvVGl0bGUuY2xhc3NMaXN0LmFkZChcImhlcm8tdGl0bGVcIilcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9UaXRsZSkgIFxuXG4gICAgY29uc3QgcGl6emVyaWFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIHBpenplcmlhSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiLi4vc3JjL2Fzc2V0cy9waXp6ZXJpYS0yLmpwZ1wiKVxuICAgIHBpenplcmlhSW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcInBpenphLWltZ1wiKVxuICAgIHBpenplcmlhSW1nLmNsYXNzTGlzdC5hZGQoXCJob21lLXBhZ2UtcGl6emFcIilcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKHBpenplcmlhSW1nKVxuXG4gICAgY29uc3Qgd2VsY29tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgd2VsY29tZURpdi5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS1kaXZcIilcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKHdlbGNvbWVEaXYpXG5cbiAgICBjb25zdCB3ZWxjb21lTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIHdlbGNvbWVNc2cudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gTGEgR3VpdGFycml0YVwiXG4gICAgd2VsY29tZURpdi5hcHBlbmRDaGlsZCh3ZWxjb21lTXNnKVxuXG4gICAgY29uc3Qgd2VsY29tZURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB3ZWxjb21lRGVzYy50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW50ZWdlciBhdWN0b3IgaW1wZXJkaWV0IHBvcnRhLiBOdWxsYW0gcGxhY2VyYXQgbWFsZXN1YWRhIG1hdXJpcyBub24gbWF0dGlzLiBGdXNjZSBiaWJlbmR1bSBhbnRlIHF1aXMgbGVvIGVsZWlmZW5kIHVsdHJpY2llcy4gSW4gZWxpdCBlbGl0LCBpbnRlcmR1bSBzaXQgYW1ldCB1bHRyaWNlcyBncmF2aWRhLCBjb21tb2RvIHZpdGFlIGVsaXQuIE5hbSBvcmNpIGZlbGlzLCBmYXVjaWJ1cyBldCBlc3QgdmVsLCBiaWJlbmR1bSBzZW1wZXIgbWFzc2EuIFZpdmFtdXMgY29udmFsbGlzLCBsZW8gcXVpcyBtb2xlc3RpZSBmZXVnaWF0LCBlcm9zIHF1YW0gZXVpc21vZCBleCwgZmF1Y2lidXMgbWF0dGlzIG5pc2kgbWFzc2EgZXUgZmVsaXMuIERvbmVjIGRhcGlidXMgdml2ZXJyYSBuaXNsLCB1dCBhbGlxdWV0IGxlY3R1cyBkYXBpYnVzIGx1Y3R1cy4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLlwiXG4gICAgd2VsY29tZURpdi5hcHBlbmRDaGlsZCh3ZWxjb21lRGVzYylcbiAgICByZXR1cm4gaG9tZURpdlxufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZSIsImZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGl0bGUuaWQgPSBcInRpdGxlXCJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTGEgR3VpdGFycml0YVwiXG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIHJldHVybiBkaXZcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsUGFnZUxvYWQiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSAnLi9jb21wb25lbnRzL2luaXRpYWxQYWdlLmpzJ1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9ob21lUGFnZS5qcydcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2Fib3V0UGFnZS5qcydcbmNvbnN0IHN0YXRpY0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGljLWNvbnRlbnQnKVxuY29uc3QgZHluYW1pY0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1jb250ZW50JylcbnN0YXRpY0NvbnRlbnQuYXBwZW5kQ2hpbGQoaW5pdGlhbFBhZ2VMb2FkKCkpXG5cbmNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5idXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWRpdicpXG5zdGF0aWNDb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkRpdilcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5ob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCJcbmhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLTI0JylcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZHluYW1pY0NvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxuICAgIGR5bmFtaWNDb250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpXG59KSBcbmJ1dHRvbkRpdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKVxuXG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5hYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIlxuYWJvdXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLTI0JylcbmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGR5bmFtaWNDb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICBkeW5hbWljQ29udGVudC5hcHBlbmRDaGlsZChhYm91dFBhZ2UoKSlcbn0pXG5idXR0b25EaXYuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pXG5cbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tMjQnKVxuY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXG5idXR0b25EaXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbilcblxuZHluYW1pY0NvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
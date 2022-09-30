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
/* harmony import */ var _assets_about_house_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/about-house.jpg */ "./src/assets/about-house.jpg");


function aboutPage() {
    const aboutDiv = document.createElement('div')
    aboutDiv.classList.add("about-div")

    const aboutImg = document.createElement('img')
    aboutImg.setAttribute("src", _assets_about_house_jpg__WEBPACK_IMPORTED_MODULE_0__)
    aboutImg.classList.add("about-img")
    aboutDiv.appendChild(aboutImg)

    const whoDiv = document.createElement('div')
    whoDiv.classList.add("who-div")
    aboutDiv.appendChild(whoDiv)

    const whoTitle = document.createElement("h1")
    whoTitle.textContent = "About us"
    whoTitle.classList.add("who-title")
    whoDiv.appendChild(whoTitle)

    const whoDesc = document.createElement("p")
    whoDesc.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolor id quisquam assumenda consequuntur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolor id quisquam assumenda consequuntur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolor id quisquam assumenda consequuntur."
    whoDesc.id = "who-desc"
    whoDiv.appendChild(whoDesc)

    return aboutDiv
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);

/***/ }),

/***/ "./src/components/contactPage.js":
/*!***************************************!*\
  !*** ./src/components/contactPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_guitarrita_maps_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/guitarrita-maps.png */ "./src/assets/guitarrita-maps.png");


function contactPage() {
    const contactDiv = document.createElement('div')
    contactDiv.classList.add("contact-div")

    const contactTitle = document.createElement('h1')
    contactTitle.textContent = "Contact us"
    contactTitle.id = "contact-title"
    contactDiv.appendChild(contactTitle)

    const infoDiv = document.createElement("div")
    infoDiv.classList.add("info-div")
    contactDiv.appendChild(infoDiv)

    const contactAddress = document.createElement('p')
    contactAddress.innerHTML = "<span class='info-title'>Address</span>: Libertador Av. 3201"
    contactAddress.classList.add("contact-address")
    infoDiv.appendChild(contactAddress)

    const contactNumber = document.createElement('p')
    contactNumber.innerHTML = "<span class='info-title'>Contact number:</span> +54 223 910-5830"
    contactNumber.classList.add("contact-address")
    contactNumber.classList.add("contact-number")
    infoDiv.appendChild(contactNumber)

    const contactMail = document.createElement('p')
    contactMail.innerHTML = "<span class='info-title'>E-mail:</span> la.guitarrita@email.com"
    contactMail.classList.add('contact-address')
    contactMail.classList.add('contact-mail')
    infoDiv.appendChild(contactMail)

    const contactMedia = document.createElement('p')
    contactMedia.innerHTML = "<i class='fa-brands fa-twitter twitter-color'></i><i class='fa-brands fa-facebook facebook-color'></i><i class='fa-brands fa-instagram instagram-color'></i> @laguitarrita"
    contactMedia.classList.add('contact-address')
    contactMedia.classList.add('contact-media')
    infoDiv.appendChild(contactMedia)

    const contactMap = document.createElement('img')
    contactMap.src = _assets_guitarrita_maps_png__WEBPACK_IMPORTED_MODULE_0__
    contactMap.classList.add('contact-map')
    infoDiv.appendChild(contactMap)
    return contactDiv
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

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
/* harmony import */ var _assets_pizzeria_2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pizzeria-2.jpg */ "./src/assets/pizzeria-2.jpg");


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
    pizzeriaImg.setAttribute("src", _assets_pizzeria_2_jpg__WEBPACK_IMPORTED_MODULE_0__)
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

/***/ }),

/***/ "./src/assets/about-house.jpg":
/*!************************************!*\
  !*** ./src/assets/about-house.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cb3099816c377c46e89.jpg";

/***/ }),

/***/ "./src/assets/guitarrita-maps.png":
/*!****************************************!*\
  !*** ./src/assets/guitarrita-maps.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc1c768617e4bd7a030e.png";

/***/ }),

/***/ "./src/assets/pizzeria-2.jpg":
/*!***********************************!*\
  !*** ./src/assets/pizzeria-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f69131c325c60afb56fc.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _components_contactPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contactPage.js */ "./src/components/contactPage.js");




const staticContent = document.getElementById('static-content')
const dynamicContent = document.getElementById('dynamic-content')
staticContent.appendChild((0,_components_initialPage_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
staticContent.classList.add("static-div")

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
contactButton.addEventListener('click', () => {
    dynamicContent.innerHTML = ""
    dynamicContent.appendChild((0,_components_contactPage_js__WEBPACK_IMPORTED_MODULE_3__["default"])())
})
buttonDiv.appendChild(contactButton)

dynamicContent.appendChild((0,_components_homePage_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE2Qzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLG9EQUFLO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzVCNEM7O0FBRTNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsd0RBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzdDaUM7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLG1EQUFTO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDbENmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5RDtBQUNWO0FBQ0U7QUFDSTtBQUNyRDtBQUNBO0FBQ0EsMEJBQTBCLHNFQUFlO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1FQUFRO0FBQ3ZDLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9FQUFTO0FBQ3hDLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNFQUFXO0FBQzFDLENBQUM7QUFDRDs7QUFFQSwyQkFBMkIsbUVBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Fib3V0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9pbml0aWFsUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWFnZSBmcm9tIFwiLi4vYXNzZXRzL2Fib3V0LWhvdXNlLmpwZ1wiXG5cbmZ1bmN0aW9uIGFib3V0UGFnZSgpIHtcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZChcImFib3V0LWRpdlwiKVxuXG4gICAgY29uc3QgYWJvdXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGFib3V0SW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZSlcbiAgICBhYm91dEltZy5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtaW1nXCIpXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpXG5cbiAgICBjb25zdCB3aG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdob0Rpdi5jbGFzc0xpc3QuYWRkKFwid2hvLWRpdlwiKVxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKHdob0RpdilcblxuICAgIGNvbnN0IHdob1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgd2hvVGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0IHVzXCJcbiAgICB3aG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwid2hvLXRpdGxlXCIpXG4gICAgd2hvRGl2LmFwcGVuZENoaWxkKHdob1RpdGxlKVxuXG4gICAgY29uc3Qgd2hvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgd2hvRGVzYy50ZXh0Q29udGVudCA9IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF1dGVtIGRvbG9yIGlkIHF1aXNxdWFtIGFzc3VtZW5kYSBjb25zZXF1dW50dXIuTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF1dGVtIGRvbG9yIGlkIHF1aXNxdWFtIGFzc3VtZW5kYSBjb25zZXF1dW50dXIuTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF1dGVtIGRvbG9yIGlkIHF1aXNxdWFtIGFzc3VtZW5kYSBjb25zZXF1dW50dXIuXCJcbiAgICB3aG9EZXNjLmlkID0gXCJ3aG8tZGVzY1wiXG4gICAgd2hvRGl2LmFwcGVuZENoaWxkKHdob0Rlc2MpXG5cbiAgICByZXR1cm4gYWJvdXREaXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXRQYWdlIiwiaW1wb3J0IGNvbnRhY3RNYXBJbWFnZSBmcm9tICcuLi9hc3NldHMvZ3VpdGFycml0YS1tYXBzLnBuZydcblxuZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1kaXZcIilcblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIlxuICAgIGNvbnRhY3RUaXRsZS5pZCA9IFwiY29udGFjdC10aXRsZVwiXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpXG5cbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImluZm8tZGl2XCIpXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChpbmZvRGl2KVxuXG4gICAgY29uc3QgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb250YWN0QWRkcmVzcy5pbm5lckhUTUwgPSBcIjxzcGFuIGNsYXNzPSdpbmZvLXRpdGxlJz5BZGRyZXNzPC9zcGFuPjogTGliZXJ0YWRvciBBdi4gMzIwMVwiXG4gICAgY29udGFjdEFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYWRkcmVzc1wiKVxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpXG5cbiAgICBjb25zdCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29udGFjdE51bWJlci5pbm5lckhUTUwgPSBcIjxzcGFuIGNsYXNzPSdpbmZvLXRpdGxlJz5Db250YWN0IG51bWJlcjo8L3NwYW4+ICs1NCAyMjMgOTEwLTU4MzBcIlxuICAgIGNvbnRhY3ROdW1iZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYWRkcmVzc1wiKVxuICAgIGNvbnRhY3ROdW1iZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbnVtYmVyXCIpXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChjb250YWN0TnVtYmVyKVxuXG4gICAgY29uc3QgY29udGFjdE1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb250YWN0TWFpbC5pbm5lckhUTUwgPSBcIjxzcGFuIGNsYXNzPSdpbmZvLXRpdGxlJz5FLW1haWw6PC9zcGFuPiBsYS5ndWl0YXJyaXRhQGVtYWlsLmNvbVwiXG4gICAgY29udGFjdE1haWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1hZGRyZXNzJylcbiAgICBjb250YWN0TWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW1haWwnKVxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoY29udGFjdE1haWwpXG5cbiAgICBjb25zdCBjb250YWN0TWVkaWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb250YWN0TWVkaWEuaW5uZXJIVE1MID0gXCI8aSBjbGFzcz0nZmEtYnJhbmRzIGZhLXR3aXR0ZXIgdHdpdHRlci1jb2xvcic+PC9pPjxpIGNsYXNzPSdmYS1icmFuZHMgZmEtZmFjZWJvb2sgZmFjZWJvb2stY29sb3InPjwvaT48aSBjbGFzcz0nZmEtYnJhbmRzIGZhLWluc3RhZ3JhbSBpbnN0YWdyYW0tY29sb3InPjwvaT4gQGxhZ3VpdGFycml0YVwiXG4gICAgY29udGFjdE1lZGlhLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYWRkcmVzcycpXG4gICAgY29udGFjdE1lZGlhLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbWVkaWEnKVxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoY29udGFjdE1lZGlhKVxuXG4gICAgY29uc3QgY29udGFjdE1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY29udGFjdE1hcC5zcmMgPSBjb250YWN0TWFwSW1hZ2VcbiAgICBjb250YWN0TWFwLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbWFwJylcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGNvbnRhY3RNYXApXG4gICAgcmV0dXJuIGNvbnRhY3REaXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2UiLCJpbXBvcnQgaG9tZUltYWdlIGZyb20gXCIuLi9hc3NldHMvcGl6emVyaWEtMi5qcGdcIlxuXG5mdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGhlcm9EaXYuY2xhc3NMaXN0LmFkZChcImhvbWUtZGl2XCIpXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChoZXJvRGl2KVxuXG4gICAgY29uc3QgaGVyb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9IFwiQSBwaXp6YSBvcmlnaW5hdGVkIGluIEJ1ZW5vcyBBaXJlcyB5b3UgbXVzdCB0cnlcIlxuICAgIGhlcm9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVyby10aXRsZVwiKVxuICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKSAgXG5cbiAgICBjb25zdCBwaXp6ZXJpYUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgcGl6emVyaWFJbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGhvbWVJbWFnZSlcbiAgICBwaXp6ZXJpYUltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJwaXp6YS1pbWdcIilcbiAgICBwaXp6ZXJpYUltZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1wYWdlLXBpenphXCIpXG4gICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChwaXp6ZXJpYUltZylcblxuICAgIGNvbnN0IHdlbGNvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHdlbGNvbWVEaXYuY2xhc3NMaXN0LmFkZChcIndlbGNvbWUtZGl2XCIpXG4gICAgaGVyb0Rpdi5hcHBlbmRDaGlsZCh3ZWxjb21lRGl2KVxuXG4gICAgY29uc3Qgd2VsY29tZU1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB3ZWxjb21lTXNnLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIExhIEd1aXRhcnJpdGFcIlxuICAgIHdlbGNvbWVEaXYuYXBwZW5kQ2hpbGQod2VsY29tZU1zZylcblxuICAgIGNvbnN0IHdlbGNvbWVEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgd2VsY29tZURlc2MudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgYXVjdG9yIGltcGVyZGlldCBwb3J0YS4gTnVsbGFtIHBsYWNlcmF0IG1hbGVzdWFkYSBtYXVyaXMgbm9uIG1hdHRpcy4gRnVzY2UgYmliZW5kdW0gYW50ZSBxdWlzIGxlbyBlbGVpZmVuZCB1bHRyaWNpZXMuIEluIGVsaXQgZWxpdCwgaW50ZXJkdW0gc2l0IGFtZXQgdWx0cmljZXMgZ3JhdmlkYSwgY29tbW9kbyB2aXRhZSBlbGl0LiBOYW0gb3JjaSBmZWxpcywgZmF1Y2lidXMgZXQgZXN0IHZlbCwgYmliZW5kdW0gc2VtcGVyIG1hc3NhLiBWaXZhbXVzIGNvbnZhbGxpcywgbGVvIHF1aXMgbW9sZXN0aWUgZmV1Z2lhdCwgZXJvcyBxdWFtIGV1aXNtb2QgZXgsIGZhdWNpYnVzIG1hdHRpcyBuaXNpIG1hc3NhIGV1IGZlbGlzLiBEb25lYyBkYXBpYnVzIHZpdmVycmEgbmlzbCwgdXQgYWxpcXVldCBsZWN0dXMgZGFwaWJ1cyBsdWN0dXMuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy5cIlxuICAgIHdlbGNvbWVEaXYuYXBwZW5kQ2hpbGQod2VsY29tZURlc2MpXG4gICAgcmV0dXJuIGhvbWVEaXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2UiLCJmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHRpdGxlLmlkID0gXCJ0aXRsZVwiXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkxhIEd1aXRhcnJpdGFcIlxuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICByZXR1cm4gZGl2XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tICcuL2NvbXBvbmVudHMvaW5pdGlhbFBhZ2UuanMnXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2hvbWVQYWdlLmpzJ1xuaW1wb3J0IGFib3V0UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXRQYWdlLmpzJ1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29tcG9uZW50cy9jb250YWN0UGFnZS5qcydcbmNvbnN0IHN0YXRpY0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGljLWNvbnRlbnQnKVxuY29uc3QgZHluYW1pY0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1jb250ZW50JylcbnN0YXRpY0NvbnRlbnQuYXBwZW5kQ2hpbGQoaW5pdGlhbFBhZ2VMb2FkKCkpXG5zdGF0aWNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzdGF0aWMtZGl2XCIpXG5cbmNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5idXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWRpdicpXG5zdGF0aWNDb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkRpdilcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5ob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCJcbmhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLTI0JylcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZHluYW1pY0NvbnRlbnQuaW5uZXJIVE1MID0gXCJcIlxuICAgIGR5bmFtaWNDb250ZW50LmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpXG59KSBcbmJ1dHRvbkRpdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKVxuXG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5hYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIlxuYWJvdXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLTI0JylcbmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGR5bmFtaWNDb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICBkeW5hbWljQ29udGVudC5hcHBlbmRDaGlsZChhYm91dFBhZ2UoKSlcbn0pXG5idXR0b25EaXYuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pXG5cbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tMjQnKVxuY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGR5bmFtaWNDb250ZW50LmlubmVySFRNTCA9IFwiXCJcbiAgICBkeW5hbWljQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0UGFnZSgpKVxufSlcbmJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKVxuXG5keW5hbWljQ29udGVudC5hcHBlbmRDaGlsZChob21lUGFnZSgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
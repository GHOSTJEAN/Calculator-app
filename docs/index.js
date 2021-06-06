/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }\n\nfunction _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError(\"Private static access of wrong provenance\"); } }\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, null, [{\n    key: \"changeTheme\",\n    value:\n    /**\n     * The objective of this function is to change the differents \n     * themes of application by listerning change event of the body\n     * element.\n     * @param {Array} theme associated array that have theme name \n     * as key and as value the class that activated the theme \n     * @param {string} app represent the id of app \n     */\n    function changeTheme(theme, app) {\n      var i = 0;\n      var d = document.getElementById(app);\n      var r;\n      document.body.addEventListener(\"change\", function (e) {\n        theme.forEach(function (element, index, theme) {\n          if (e.target.id === element[0]) {\n            for (var _i = 0; _i < theme.length; _i++) {\n              var el = theme[_i];\n\n              if (element[1] !== el && d.classList.contains(el[1])) {\n                d.classList.remove(el[1]);\n              }\n            }\n\n            d.classList.add(element[1]);\n          }\n        });\n      });\n    }\n  }, {\n    key: \"print\",\n    value: function print() {\n      var _this = this;\n\n      document.body.addEventListener('click', function (event) {\n        var data = _this.screen.textContent;\n        var e = event.target.textContent;\n\n        switch (e) {\n          case \"0\":\n            if (!(data.length == 1 && data === '0') && !(data[data.length - 1] === '/') && !(data[data.length - 1] === '+') && !(data[data.length - 1] === '-') && !(data[data.length - 1] === 'x') && !(data[data.length - 1] === '.')) {\n              _this.screen.textContent += e;\n            }\n\n            break;\n\n          case \"1\":\n            _classStaticPrivateMethodGet(_this, App, _test).call(_this, _this.screen, data, e);\n\n            break;\n\n          case \"2\":\n            _classStaticPrivateMethodGet(_this, App, _test).call(_this, _this.screen, data, e);\n\n            break;\n\n          case \"3\":\n            _classStaticPrivateMethodGet(_this, App, _test).call(_this, _this.screen, data, e);\n\n            break;\n\n          case \"4\":\n            _classStaticPrivateMethodGet(_this, App, _test).call(_this, _this.screen, data, e);\n\n            break;\n\n          case \"5\":\n            _classStaticPrivateMethodGet(_this, App, _test).call(_this, _this.screen, data, e);\n\n            break;\n\n          case \"6\":\n            _classStaticPrivateMethodGet(_this, App, _test).call(_this, _this.screen, data, e);\n\n            break;\n\n          case \"7\":\n            _classStaticPrivateMethodGet(_this, App, _test).call(_this, _this.screen, data, e);\n\n            break;\n\n          case \"8\":\n            _classStaticPrivateMethodGet(_this, App, _test).call(_this, _this.screen, data, e);\n\n            break;\n\n          case \"9\":\n            _classStaticPrivateMethodGet(_this, App, _test).call(_this, _this.screen, data, e);\n\n            break;\n\n          case \"x\":\n            if (!(data[data.length - 1] === '/') && !(data[data.length - 1] === '+') && !(data[data.length - 1] === '-') && !(data[data.length - 1] === 'x') && !(data[data.length - 1] === '.')) {\n              _this.screen.textContent += e;\n            }\n\n            break;\n\n          case \".\":\n            if (/^\\d+((\\.\\d+){0,1}[-\\+\\/x]{1}\\d*)*$/.test(data)) {\n              _this.screen.textContent += e;\n            }\n\n            break;\n\n          case \"-\":\n            if (!(data[data.length - 1] === '-') && !(data[data.length - 1] === '.')) {\n              _this.screen.textContent += e;\n            }\n\n            if (data.length == 1 && data === '0') {\n              _this.screen.textContent = e;\n            }\n\n            break;\n\n          case \"+\":\n            if (!(data[data.length - 1] === '+') && !(data[data.length - 1] === '-') && !(data[data.length - 1] === '/') && !(data[data.length - 1] === 'x') && !(data[data.length - 1] === '.')) {\n              _this.screen.textContent += e;\n            }\n\n            break;\n\n          case \"/\":\n            if (!(data[data.length - 1] === '/') && !(data[data.length - 1] === '+') && !(data[data.length - 1] === '-') && !(data[data.length - 1] === 'x') && !(data[data.length - 1] === '.')) {\n              _this.screen.textContent += e;\n            }\n\n            break;\n\n          case \"del\":\n            data = data.substring(0, data.length - 1);\n            if (data.length == 0) data = 0;\n            _this.screen.textContent = data;\n            break;\n\n          case \"=\":\n            if (!(data[data.length - 1] === '/') && !(data[data.length - 1] === '+') && !(data[data.length - 1] === '-') && !(data[data.length - 1] === 'x') && !(data[data.length - 1] === '.')) {\n              _this.screen.textContent = _classStaticPrivateMethodGet(_this, App, _calculate).call(_this, _this.screen.textContent);\n            }\n\n            break;\n\n          case \"reset\":\n            _this.screen.textContent = '0';\n            break;\n\n          default:\n            break;\n        }\n      });\n    }\n  }]);\n\n  return App;\n}();\n\nfunction _test(screen, data, e) {\n  if (data.length == 1 && data === '0') {\n    screen.textContent = e;\n  } else {\n    screen.textContent += e;\n  }\n}\n\nfunction _calculate(op) {\n  if (op.includes('x')) {\n    op = op.replaceAll('x', '*');\n  }\n\n  return eval(op);\n}\n\n_defineProperty(App, \"screen\", void 0);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://my-webpack-project/./src/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar theme = [[\"theme-1\", \"calc--theme-1\"], [\"theme-2\", \"calc--theme-2\"], [\"theme-3\", \"calc--theme-3\"]];\n_App__WEBPACK_IMPORTED_MODULE_0__.default.changeTheme(theme, \"app\");\n_App__WEBPACK_IMPORTED_MODULE_0__.default.screen = document.getElementById('screen');\n_App__WEBPACK_IMPORTED_MODULE_0__.default.print();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/style.scss");
/******/ 	
/******/ })()
;
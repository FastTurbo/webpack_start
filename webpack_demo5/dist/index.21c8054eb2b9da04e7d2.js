webpackJsonp([1],{

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print_js__ = __webpack_require__("./src/print.js");



function component(){
    var div = document.createElement('div')
    div.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello','world!'],' ')
    div.onclick = __WEBPACK_IMPORTED_MODULE_1__print_js__["a" /* default */].bind(null,'Hello webpack!')

    return div
}
document.body.appendChild(component())

/***/ }),

/***/ "./src/print.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
function print(text){
    console.log(text)
}

/***/ })

},["./src/index.js"]);
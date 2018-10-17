webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Eventos.js":
/*!*******************************!*\
  !*** ./components/Eventos.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Evento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Evento */ "./components/Evento.js");
var _jsxFileName = "C:\\Users\\Pedro\\Desktop\\Curso Reactjs 16\\bitcoinapp\\components\\Eventos.js";



var Eventos = function Eventos(props) {
  var eventoId = Object.keys(props.eventos);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, eventoId.map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Evento__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      evento: props.eventos[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.fbd54414ee85250d4c70.hot-update.js.map
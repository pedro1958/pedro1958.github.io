webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Evento.js":
/*!******************************!*\
  !*** ./components/Evento.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Pedro\\Desktop\\Curso Reactjs 16\\bitcoinapp\\components\\Evento.js";


var Evento = function Evento(props) {
  var _props$evento = props.evento,
      url = _props$evento.url,
      name = _props$evento.name,
      description = _props$evento.description;
  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 250) + ' ...';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    className: "list-group-item active text-light mb-1",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, name.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, desc));
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.b29e2bdd62d89a99493c.hot-update.js.map
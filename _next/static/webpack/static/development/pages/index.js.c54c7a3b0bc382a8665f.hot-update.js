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
      description = _props$evento.description,
      logo = _props$evento.logo;
  var imagen = '';

  if (logo.url !== '') {
    imagen = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: logo.url,
      alt: name.text,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, imagen), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, name.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, description.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: url,
    className: "btn btn-info btn-lg btn-block",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Leer Evento"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.c54c7a3b0bc382a8665f.hot-update.js.map
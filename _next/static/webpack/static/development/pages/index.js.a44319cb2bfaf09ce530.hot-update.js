webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Evento.js":
/*!******************************!*\
  !*** ./components/Evento.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Pedro\\Desktop\\Curso Reactjs 16\\bitcoinapp\\components\\Evento.js";



var Evento = function Evento(props) {
  var _props$evento = props.evento,
      url = _props$evento.url,
      name = _props$evento.name,
      description = _props$evento.description;
  var titulo = name.text;

  if (titulo.length > 150) {
    titulo = titulo.substr(0, 150) + '...';
  }

  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 250) + ' ...';
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3595381221",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: url,
    target: "_blank",
    className: "jsx-3595381221" + " " + "list-group-item active text-light mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3595381221" + " " + "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, titulo), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3595381221" + " " + "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, desc)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3595381221",
    css: ".list-group-item.active.jsx-3595381221{background-color:#009CDC;border-color:#009CDC;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUGVkcm9cXERlc2t0b3BcXEN1cnNvIFJlYWN0anMgMTZcXGJpdGNvaW5hcHBcXGNvbXBvbmVudHNcXEV2ZW50by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQndCLEFBRzhDLHlCQUNKLHFCQUN6QiIsImZpbGUiOiJDOlxcVXNlcnNcXFBlZHJvXFxEZXNrdG9wXFxDdXJzbyBSZWFjdGpzIDE2XFxiaXRjb2luYXBwXFxjb21wb25lbnRzXFxFdmVudG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFdmVudG8gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHt1cmwsIG5hbWUsIGRlc2NyaXB0aW9ufSA9IHByb3BzLmV2ZW50bztcclxuXHJcbiAgICBsZXQgdGl0dWxvID0gbmFtZS50ZXh0O1xyXG4gICAgaWYodGl0dWxvLmxlbmd0aCA+IDE1MCl7XHJcbiAgICAgICAgdGl0dWxvID0gdGl0dWxvLnN1YnN0cigwLCAxNTApICsgJy4uLic7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlc2MgPSBkZXNjcmlwdGlvbi50ZXh0O1xyXG4gICAgaWYoZGVzYyl7XHJcbiAgICAgICAgZGVzYyA9IGRlc2Muc3Vic3RyKDAsIDI1MCkgKyAnIC4uLic7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e3VybH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGFjdGl2ZSB0ZXh0LWxpZ2h0IG1iLTFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0zXCI+e3RpdHVsb308L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMVwiPntkZXNjfTwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOUNEQztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDlDREM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRvOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Pedro\\Desktop\\Curso Reactjs 16\\bitcoinapp\\components\\Evento.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Evento);

/***/ })

})
//# sourceMappingURL=index.js.a44319cb2bfaf09ce530.hot-update.js.map
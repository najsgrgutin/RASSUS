webpackHotUpdate("static/development/pages/mail.js",{

/***/ "./pages/mail.js":
/*!***********************!*\
  !*** ./pages/mail.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Mail.module.css */ "./styles/Mail.module.css");
/* harmony import */ var _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/matejjuric/Desktop/Frontend/pages/mail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Mail = function Mail() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      to = _useState2[0],
      setTo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      mailBody = _useState3[0],
      setMailBody = _useState3[1];

  var onSubmit = function onSubmit() {
    var mail = {
      title: title,
      to: to,
      mailBody: mailBody
    };
    console.log(mail);
    fetch("http://localhost:3000/micic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "JWT " + localStorage.getItem("token")
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(mail)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return console.log(res);
    });
  };

  var handleChange = function handleChange(setterFunction) {
    return function (event) {
      setterFunction(event.target.value);
    };
  };

  var onLogout = function onLogout() {
    localStorage.removeItem("token");
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/login");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Title"), __jsx("input", {
    value: title,
    onChange: handleChange(setTitle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "To"), __jsx("input", {
    value: to,
    onChange: handleChange(setTo),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Body"), __jsx("textarea", {
    value: mailBody,
    onChange: handleChange(setMailBody),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("button", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonStyle,
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Submit"), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("button", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonStyle,
    onClick: onLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Logout"));
};

/* harmony default export */ __webpack_exports__["default"] = (Mail);

/***/ })

})
//# sourceMappingURL=mail.js.8a6d76a2e227049df72c.hot-update.js.map
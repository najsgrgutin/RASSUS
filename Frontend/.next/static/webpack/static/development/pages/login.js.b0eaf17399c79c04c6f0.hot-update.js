webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Login.module.css */ "./styles/Login.module.css");
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/matejjuric/Desktop/Frontend/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var publicKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhdrwpRXz5RKiqClu9IzbGjuLYKnZmsloTd/IAEVpUFbKIRgw6GiTWClxv4d7EMCNx3Kcze9urtrbmd2U0uYLMd1fV6LPqN+uHpZwxa1OviEC95Al2yBt3kLNhbhUr7dx5GrUgaWn7ohFqiH1TvD3XuieP0pyhKMfJExyxAMoZDa4zao4RpWTziLLyHatqM/88IVMvgwmzhp5xlHmSyR7dnHbxfPheO7wwb28wFJAbsKlm94Dl+SB9OduCT12645Gs5byhnMwdboR03lyzzyXeaXCvd3F/a6fmwpjbQxXJek5USh+wVnLLxoNxm48ZCwbXO/9xrkzjXaSqkFcOl6dEwIDAQAB-----END PUBLIC KEY-----";

var Login = function Login() {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showError = _useState[0],
      setShowError = _useState[1];

  function handleLoginClick(data) {
    setShowError(false);
    var params = {
      client_secret: "489eedf0-1ad8-4ebd-bf60-426709339e66",
      username: data.username,
      password: data.password,
      grant_type: "password",
      client_id: "frontend"
    };
    axios__WEBPACK_IMPORTED_MODULE_4___default()({
      method: "post",
      url: "http://localhost:8080/auth/realms/govanj/protocol/openid-connect/token",
      data: querystring__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params),
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    }).then(function (res) {
      if (res.request.status === 200) {
        jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default.a.verify(res.data.access_token, publicKey, function (err, decoded) {
          if (err) {
            console.log("Token couldn't be verified");
          } else {
            console.log(decoded);
            localStorage.setItem("token", res.data.access_token);
            next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/mail");
          }
        });
      } else {
        console.log("Something went wrong");
      }
    })["catch"](function (error) {
      setShowError(true);
      console.error(error);
    });
  }

  return __jsx("form", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginContainer,
    onSubmit: handleSubmit(handleLoginClick),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h1", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Login"), __jsx("input", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginInput,
    placeholder: "Username",
    name: "username",
    ref: register({
      required: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("div", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mailErrorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, errors["username"] && errors["username"].message), __jsx("input", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginInput,
    placeholder: "Password",
    name: "password",
    type: "password",
    ref: register({
      required: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("button", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginButton,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Login"), showError ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: "Wrong username or password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.b0eaf17399c79c04c6f0.hot-update.js.map
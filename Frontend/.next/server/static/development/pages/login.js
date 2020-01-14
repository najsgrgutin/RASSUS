module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ErrorMessage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ErrorMessage.module.css */ "./styles/ErrorMessage.module.css");
/* harmony import */ var _styles_ErrorMessage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ErrorMessage_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/matejjuric/Desktop/Frontend/components/ErrorMessage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ErrorMessage({
  message
}) {
  return __jsx("div", {
    className: _styles_ErrorMessage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, message);
}

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Login.module.css */ "./styles/Login.module.css");
/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/matejjuric/Desktop/Frontend/pages/login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const publicKey = "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhdrwpRXz5RKiqClu9IzbGjuLYKnZmsloTd/IAEVpUFbKIRgw6GiTWClxv4d7EMCNx3Kcze9urtrbmd2U0uYLMd1fV6LPqN+uHpZwxa1OviEC95Al2yBt3kLNhbhUr7dx5GrUgaWn7ohFqiH1TvD3XuieP0pyhKMfJExyxAMoZDa4zao4RpWTziLLyHatqM/88IVMvgwmzhp5xlHmSyR7dnHbxfPheO7wwb28wFJAbsKlm94Dl+SB9OduCT12645Gs5byhnMwdboR03lyzzyXeaXCvd3F/a6fmwpjbQxXJek5USh+wVnLLxoNxm48ZCwbXO/9xrkzjXaSqkFcOl6dEwIDAQAB-----END PUBLIC KEY-----";
const clientSecret = "489eedf0-1ad8-4ebd-bf60-426709339e66";
const grantType = "password";
const clientId = "frontend";

const Login = () => {
  const {
    register,
    handleSubmit,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();
  const {
    0: showError,
    1: setShowError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function handleLoginClick(data) {
    const params = {
      client_secret: clientSecret,
      username: data.username,
      password: data.password,
      grant_type: grantType,
      client_id: clientId
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
    }).then(res => {
      if (res.request.status === 200) {
        jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default.a.verify(res.data.access_token, publicKey, (err, decoded) => {
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
    }).catch(error => {
      setShowError(true);
      console.error(error);
    });
  }

  return __jsx("form", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginContainer,
    onSubmit: handleSubmit(handleLoginClick),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("h1", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Login"), __jsx("input", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginInput,
    placeholder: "Username",
    name: "username",
    ref: register({
      required: true
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx("div", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.mailErrorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
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
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("button", {
    className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.loginButton,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "Login"), showError ? __jsx(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    message: "Wrong username or password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./styles/ErrorMessage.module.css":
/*!****************************************!*\
  !*** ./styles/ErrorMessage.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"error": "YQqSosz8h7VO0DZqvDXB8"
};

/***/ }),

/***/ "./styles/Login.module.css":
/*!*********************************!*\
  !*** ./styles/Login.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"loginContainer": "_1muBAfzldds12y8yc_UVCL",
	"loginButton": "AzacSsz2ASaiSuEjGhcgk",
	"mailErrorMessage": "_3vESEExEu7uKYX2iyRZl4p",
	"registerHereButton": "_3-cIPxZzX7vGvfpKCjqi6q",
	"loginTitle": "atBeQW_EUq-2YL0LLvzan",
	"loginInput": "_2-1Q8iQhCuf-F09fKSpBea",
	"rememberMeText": "_2S_cIg9U3WiMeAXNUit9Nl",
	"rememberMeContainer": "_1hLd29_sqvur9ABRPB8aQe",
	"noAccountText": "_1TcHzJlkBkKrIU7HKuPhZ4"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matejjuric/Desktop/Frontend/pages/login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Modal.module.css */ "./styles/Modal.module.css");
/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Dorijan\\Documents\\RASSUS\\Frontend\\components\\Modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Modal = ({
  showModal,
  setShowModal
}) => {
  const onCloseModal = () => {
    setShowModal(false);
  };

  const stopPropagation = event => {
    event.stopPropagation();
  };

  if (showModal) {
    return __jsx("div", {
      className: _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modalContainer,
      onClick: onCloseModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, __jsx("div", {
      className: _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
      onClick: stopPropagation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, showModal), __jsx("button", {
      className: _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,
      onClick: onCloseModal,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, "Ok")));
  } else return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Mail.module.css */ "./styles/Mail.module.css");
/* harmony import */ var _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Dorijan\\Documents\\RASSUS\\Frontend\\pages\\mail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Mail = () => {
  const {
    0: subject,
    1: setSubject
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: to,
    1: setTo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: body,
    1: setbody
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: showSpinner,
    1: setShowSpinner
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const onSubmit = () => {
    setShowSpinner(true);

    if (subject === "" || to === "" || body === "") {
      setShowModal("Please fill out all fields");
      return;
    }

    const mail = {
      subject,
      to,
      body
    };
    console.log(mail);
    fetch("http://localhost:9000/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(mail)
    }).then(res => {
      setShowSpinner(false);
      if (res.status === 200) setShowModal("Mail sent");else setShowModal("Mail could not be sent");
      return res.json();
    }).then(res => console.log(res)).catch(err => console.log(err));
  };

  const handleChange = setterFunction => event => {
    setterFunction(event.target.value);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!localStorage.getItem("token")) next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Subject"), __jsx("input", {
    value: subject,
    onChange: handleChange(setSubject),
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.subjectInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "To"), __jsx("input", {
    value: to,
    onChange: handleChange(setTo),
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.toInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Body"), __jsx("textarea", {
    value: body,
    onChange: handleChange(setbody),
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bodyInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  })), __jsx("div", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("button", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.submitButton,
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Submit"), __jsx("button", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logoutButton,
    onClick: onLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Logout")), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), !showSpinner ? null : __jsx("div", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spinnerContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5___default.a, {
    type: "ThreeDots",
    color: "#2B6AF0",
    height: 100,
    width: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Mail);

/***/ }),

/***/ "./styles/Mail.module.css":
/*!********************************!*\
  !*** ./styles/Mail.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"containerStyle": "_3smd55eYL7fgYzBY-3YQ5H",
	"submitButton": "_3nkacP5qh20OrYJJoxFMg1",
	"logoutButton": "_2IbotUaTRvnE9S5xNwR_VY",
	"buttonContainer": "_2NKHJ-sFA0mr8ngf49TQiA",
	"subjectInput": "_2QYNulPVfA1Zy78ssLSPiX",
	"toInput": "_13MAS2jxyLldrdyCsyPT4b",
	"bodyInput": "_1tBpTVtnHQ8Lhbjg6GzPig",
	"spinnerContainer": "_2vtKWEIDn39i2_V8rMWPLY"
};

/***/ }),

/***/ "./styles/Modal.module.css":
/*!*********************************!*\
  !*** ./styles/Modal.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"modalContainer": "AO-xuBsQI7h2x9c75rKoe",
	"modal": "Do-2lRcQg_L_WUgzexjJD",
	"button": "_1qAvYDGKslBE7kjuWqJGgf"
};

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/mail.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dorijan\Documents\RASSUS\Frontend\pages\mail.js */"./pages/mail.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ })

/******/ });
//# sourceMappingURL=mail.js.map
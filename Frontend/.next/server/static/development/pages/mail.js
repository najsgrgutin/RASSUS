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
var _jsxFileName = "/Users/matejjuric/Desktop/RassusLabosProfila/RASSUS/Frontend/components/Modal.js";

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

/***/ "./pages/mail.js":
/*!***********************!*\
  !*** ./pages/mail.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
/* harmony import */ var _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Mail.module.css */ "./styles/Mail.module.css");
/* harmony import */ var _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/matejjuric/Desktop/RassusLabosProfila/RASSUS/Frontend/pages/mail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Mail = () => {
  const {
    0: subject,
    1: setSubject
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: to,
    1: setTo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: body,
    1: setbody
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const onSubmit = () => {
    const mail = {
      subject,
      to,
      body
    };
    setShowModal("Mail sent");
    console.log(mail);
    /* fetch("http://localhost:3000/micic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "JWT " + localStorage.getItem("token")
      },
      body: JSON.stringify(mail)
    })
      .then(res => res.json())
      .then(res => console.log(res)); */
  };

  const handleChange = setterFunction => event => {
    setterFunction(event.target.value);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!localStorage.getItem("token")) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Subject"), __jsx("input", {
    value: subject,
    onChange: handleChange(setSubject),
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.subjectInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "To"), __jsx("input", {
    value: to,
    onChange: handleChange(setTo),
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.toInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Body"), __jsx("textarea", {
    value: body,
    onChange: handleChange(setbody),
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bodyInput,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })), __jsx("div", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("button", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonStyle,
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Submit"), __jsx("button", {
    className: _styles_Mail_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonStyle,
    onClick: onLogout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Logout")), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showModal: showModal,
    setShowModal: setShowModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }));
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
	"containerStyle": "_2cdzWfKvnxUnXMw00MXBUW",
	"buttonStyle": "_12xDjEma_yn5PYyILmVvIp",
	"buttonContainer": "wDp_LhnuJTfdkmhfOcq8T",
	"subjectInput": "pRO-URZ1XNwueQbMQUx5x",
	"toInput": "b9L3mjPTfJicL7GBDH4FV",
	"bodyInput": "_3QftMMsmVAbu4xKTmvRpDd"
};

/***/ }),

/***/ "./styles/Modal.module.css":
/*!*********************************!*\
  !*** ./styles/Modal.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"modalContainer": "_2LUrJGV08bWZDjNEV3k1mn",
	"modal": "pefRx-uT_et28aovO0Gh8"
};

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/mail.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matejjuric/Desktop/RassusLabosProfila/RASSUS/Frontend/pages/mail.js */"./pages/mail.js");


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

/***/ })

/******/ });
//# sourceMappingURL=mail.js.map
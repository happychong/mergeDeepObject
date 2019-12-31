(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mergeDeepObject"] = factory();
	else
		root["mergeDeepObject"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mergeDeepObject; });\nfunction deepCopy(parent, c) {\r\n  let child = c || {};\r\n  for (var key in parent) {\r\n    let current = parent[key];\r\n    if (Object.prototype.toString.call(current) === '[object Object]'\r\n        || Object.prototype.toString.call(current) === '[object Array]') {\r\n      let temp = child[key];\r\n      child[key] = Object.prototype.toString.call(current) === '[object Array]'\r\n        ? []\r\n        : {};\r\n      // 仅针对object类型，延伸处理\r\n      if (temp && Object.prototype.toString.call(temp) === '[object Object]'\r\n        && Object.prototype.toString.call(parent[key]) === '[object Object]') {\r\n        // temp存在，并且temp是对象类型，并且parent[key]也是对象类型\r\n        deepCopy(temp, child[key]);\r\n      }\r\n      deepCopy(parent[key], child[key])\r\n    } else {\r\n      child[key] = parent[key];\r\n    }\r\n  }\r\n  return child;\r\n}\r\n\r\nfunction mergeDeepObject(...rest) {\r\n  let resoult = null;\r\n  if (rest.length > 1) {\r\n    resoult = rest[0]\r\n  } else {\r\n    if (Object.prototype.toString.call(rest[0]) === '[object Array]') {\r\n      // 参数为一个数组，则返回也是一个数组\r\n      resoult = [];\r\n    } else if (Object.prototype.toString.call(rest[0]) === '[object Object]') {\r\n      // 参数为一个对象，那么返回也是一个{}\r\n      resoult = {};\r\n    }\r\n  }\r\n  for (let i = rest.length > 1 ?\r\n      1 :\r\n      0; i < rest.length; i++) {\r\n    resoult = deepCopy(rest[i], resoult);\r\n  }\r\n  return resoult;\r\n}\r\n\n\n//# sourceURL=webpack://mergeDeepObject/./src/index.js?");

/***/ })

/******/ });
});
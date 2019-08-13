(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = mergeDeepObject;
function deepCopy(parent, c) {
  let child = c || {};
  for (var key in parent) {
    let current = parent[key];
    if (Object.prototype.toString.call(current) === '[object Object]'
        || Object.prototype.toString.call(current) === '[object Array]') {
      let temp = child[key];
      child[key] = Object.prototype.toString.call(current) === '[object Array]'
        ? []
        : {};
      // 仅针对object类型，延伸处理
      if (temp && Object.prototype.toString.call(temp) === '[object Object]'
        && Object.prototype.toString.call(parent[key]) === '[object Object]') {
        // temp存在，并且temp是对象类型，并且parent[key]也是对象类型
        deepCopy(temp, child[key]);
      }
      deepCopy(parent[key], child[key])
    } else {
      child[key] = parent[key];
    }
  }
  return child;
}

function mergeDeepObject(...rest) {
    debugger;
  let resoult = null;
  if (rest.length > 1) {
    resoult = rest[0]
  } else {
    if (Object.prototype.toString.call(rest[0]) === '[object Array]') {
      // 参数为一个数组，则返回也是一个数组
      resoult = [];
    } else if (Object.prototype.toString.call(rest[0]) === '[object Object]') {
      // 参数为一个对象，那么返回也是一个{}
      resoult = {};
    }
  }
  for (let i = rest.length > 1 ?
      1 :
      0; i < rest.length; i++) {
    resoult = deepCopy(rest[i], resoult);
  }
  return resoult;
}


/***/ })
/******/ ]);
});

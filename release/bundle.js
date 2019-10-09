/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function decodeValue(val) {
    return decodeURIComponent(val);
}

function encodeValue(val) {
    return encodeURIComponent(val);
}

function parseToStr(param) {
    var strArr = [];
    if (param) {
        if (param instanceof Object && !Array.isArray(param)) {
            Object.keys(param).forEach(function (key) {
                var val = param[key];
                if (typeof val === 'undefined') {
                    val = '';
                }
                // if( typeof val === 'string' ){
                //     val = val.replace(/^\s*|\s*$/g,""); //去掉字符串两边的空白符
                // }
                strArr.push([key, encodeValue(val)].join('='));
            });
        }
    }

    return strArr.join('&');
}

function parseToJson(url) {
    var theRequest = new Object();
    if (url) {
        var index = url.indexOf("?");
        if (index != -1) {
            var str = url.substr(index + 1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeValue(strs[i].split("=")[1]);
            }
        }
    }

    return theRequest;
}

// 测试代码
var strUrl = window.location.search;
console.log(parseToStr([1, 2, 34]));
console.log(parseToStr(null));
console.log(parseToStr({ 'a': 1, 'b': ' ', 'c': ' 张三 ' }));
console.log(parseToJson(strUrl));

exports.getSearchParamsToObj = parseToJson;
exports.getSearchParamsToStr = parseToStr;

/***/ })
/******/ ]);
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(array) {\n    this.array = array;\n  }\n}\n\nDOMNodeCollection.prototype.html = function(str) {\n  if (str !== undefined) {\n    this.forEach( (el) => {\n      el.innerHTML = str;\n    });\n  } else {\n    return this.array[0].innerHTML;\n  }\n};\n\nDOMNodeCollection.prototype.empty = function () {\n  this.html(\"\");\n};\n\nDOMNodeCollection.prototype.append = function (input) {\n    this.forEach(el => el.innerHTML += input);\n};\n\nDOMNodeCollection.prototype.addClass = function (newClass) {\n  this.forEach( el => el.classList.add(newClass));\n};\n\nDOMNodeCollection.prototype.removeClass = function (oldClass) {\n  this.forEach( el => el.classList.remove(oldClass));\n};\n\nDOMNodeCollection.prototype.attr = function (attrName, attrValue) {\n  this.forEach( el => el.setAttribute(attrName, attrValue));\n};\n\nDOMNodeCollection.prototype.children = function () {\n  let children = [];\n  this.forEach( el => {\n    let childs = Array.from(el.children);\n    children = children.concat(childs);\n  });\n  return new DOMNodeCollection(children);\n};\n\nDOMNodeCollection.prototype.parent = function () {\n  let parents = [];\n  this.forEach( el => {\n    let parent = el.parentNode;\n    if (!parents.includes(parent)) parents.push(parent);\n  });\n  return new DOMNodeCollection(parents);\n};\n\nDOMNodeCollection.prototype.find = function (selector) {\n  let results = [];\n  this.forEach( (el) => {\n    let filtered = Array.from(el.querySelectorAll(selector));\n    filtered = filtered.filter(node => !results.includes(node));\n    results = results.concat(filtered);\n  });\n  return results;\n};\n\nDOMNodeCollection.prototype.remove = function () {\n  this.forEach( el => el.remove());\n};\n\n\nDOMNodeCollection.prototype.forEach = function (callback) {\n  this.array.forEach(el=> callback(el));\n};\n\nDOMNodeCollection.prototype.on = function (eventtype, callback) {\n  this.forEach( el => {\n    el[`my${eventtype}`] = el[`my${eventtype}`] || [];\n    el[`my${eventtype}`].push(callback);\n    el.addEventListener(eventtype, callback);\n  });\n};\n\nDOMNodeCollection.prototype.off = function (eventtype) {\n  this.forEach( el => {\n    el[`my${eventtype}`].forEach( func => {\n      el.removeEventListener(eventtype, func);\n    });\n  });\n};\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\n\nwindow.$l = function(selector) {\n  if (selector instanceof Function) {  \n    setInterval( function () {\n    if ( document.readyState !== 'complete' ) return;\n    clearInterval( tid );       \n    // do your work\n    }, 100 );\n  }\nlet selections;\nif (selector instanceof HTMLElement) {\n  selections = selector;\n  // selections = Array.from(selector);\n} else {\n  selections = Array.from(document.querySelectorAll(selector));\n}\nreturn new DOMNodeCollection(selections);\n};\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });
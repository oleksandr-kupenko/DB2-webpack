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

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts */ \"./src/app/scripts.js\");\n/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar init = function init() {\n  console.log('completed');\n};\n\n\n\n//# sourceURL=webpack:///./src/app/main.js?");

/***/ }),

/***/ "./src/app/scripts.js":
/*!****************************!*\
  !*** ./src/app/scripts.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (document.getElementById('datepicker')) {\n  var picker = new Lightpick({\n    field: document.getElementById('datepicker'),\n    singleDate: false,\n    onSelect: function onSelect(start, end) {\n      var str = '';\n      str += start ? start.format('Do MMMM YYYY') + ' to ' : '';\n      str += end ? end.format('Do MMMM YYYY') : '...';\n    }\n  });\n}\n\nif (document.querySelector('.select-with-img')) {\n  document.querySelector('.lang-select').addEventListener('click', function () {\n    if (b.style.display === 'block') {\n      document.querySelector('.btn-select').style.borderBottom = 'none';\n      document.querySelector('.b').style.borderTop = 'none';\n    }\n  });\n  var langArray = [];\n  $('.select-with-img option').each(function () {\n    var img = $(this).attr('data-thumbnail');\n    var text = this.innerText;\n    var value = $(this).val();\n    var item = '<li><img src=\"' + img + '\" alt=\"\" value=\"' + value + '\"/><span>' + text + '</span></li>';\n    langArray.push(item);\n  });\n  $('#a').html(langArray); //Set the button value to the first el of the array\n\n  $('.btn-select').html(langArray[0]);\n  $('.btn-select').attr('value', 'en'); //change button stuff on click\n\n  $('#a li').click(function () {\n    var img = $(this).find('img').attr('src');\n    var value = $(this).find('img').attr('value');\n    var text = this.innerText;\n    var item = '<li><img src=\"' + img + '\" alt=\"\" /><span>' + text + '</span></li>';\n    $('.btn-select').html(item);\n    $('.btn-select').attr('value', value);\n    $('.b').toggle();\n  });\n  $('.btn-select').click(function () {\n    $('.b').toggle();\n  }); //check local storage for the lang\n\n  var sessionLang = localStorage.getItem('lang');\n\n  if (sessionLang) {\n    //find an item with value of sessionLang\n    var langIndex = langArray.indexOf(sessionLang);\n    $('.btn-select').html(langArray[langIndex]);\n    $('.btn-select').attr('value', sessionLang);\n  } else {\n    var langIndex = langArray.indexOf('ch');\n    $('.btn-select').html(langArray[langIndex]); //$('.btn-select').attr('value', 'en');\n  }\n}\n\nif (document.querySelector('#map')) {\n  var initMap = function initMap() {\n    var uluru = {\n      lat: 40.71424,\n      lng: -74.00594\n    };\n    var map = new google.maps.Map(document.getElementById('map'), {\n      zoom: 9,\n      center: uluru\n    });\n    var marker = new google.maps.Marker({\n      position: uluru,\n      map: map\n    });\n  };\n\n  initMap();\n} //code for select from w3scool\n\n\nvar x, i, j, l, ll, selElmnt, a, b, c;\n/*look for any elements with the class \"custom-select\":*/\n\nx = document.getElementsByClassName('custom-select');\nl = x.length;\n\nfor (i = 0; i < l; i++) {\n  selElmnt = x[i].getElementsByTagName('select')[0];\n  ll = selElmnt.length;\n  /*for each element, create a new DIV that will act as the selected item:*/\n\n  a = document.createElement('DIV');\n  a.setAttribute('class', 'select-selected');\n  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;\n  x[i].appendChild(a);\n  /*for each element, create a new DIV that will contain the option list:*/\n\n  b = document.createElement('DIV');\n  b.setAttribute('class', 'select-items select-hide');\n\n  for (j = 1; j < ll; j++) {\n    /*for each option in the original select element,\r\n    create a new DIV that will act as an option item:*/\n    c = document.createElement('DIV');\n    c.innerHTML = selElmnt.options[j].innerHTML;\n    c.addEventListener('click', function (e) {\n      /*when an item is clicked, update the original select box,\r\n        and the selected item:*/\n      var y, i, k, s, h, sl, yl;\n      s = this.parentNode.parentNode.getElementsByTagName('select')[0];\n      sl = s.length;\n      h = this.parentNode.previousSibling;\n\n      for (i = 0; i < sl; i++) {\n        if (s.options[i].innerHTML == this.innerHTML) {\n          s.selectedIndex = i;\n          h.innerHTML = this.innerHTML;\n          y = this.parentNode.getElementsByClassName('same-as-selected');\n          yl = y.length;\n\n          for (k = 0; k < yl; k++) {\n            y[k].removeAttribute('class');\n          }\n\n          this.setAttribute('class', 'same-as-selected');\n          break;\n        }\n      }\n\n      h.click();\n    });\n    b.appendChild(c);\n  }\n\n  x[i].appendChild(b);\n  a.addEventListener('click', function (e) {\n    /*when the select box is clicked, close any other select boxes,\r\n      and open/close the current select box:*/\n    e.stopPropagation();\n    closeAllSelect(this);\n    this.nextSibling.classList.toggle('select-hide');\n    this.classList.toggle('select-arrow-active');\n  });\n}\n\nfunction closeAllSelect(elmnt) {\n  /*a function that will close all select boxes in the document,\r\n  except the current select box:*/\n  var x,\n      y,\n      i,\n      xl,\n      yl,\n      arrNo = [];\n  x = document.getElementsByClassName('select-items');\n  y = document.getElementsByClassName('select-selected');\n  xl = x.length;\n  yl = y.length;\n\n  for (i = 0; i < yl; i++) {\n    if (elmnt == y[i]) {\n      arrNo.push(i);\n    } else {\n      y[i].classList.remove('select-arrow-active');\n    }\n  }\n\n  for (i = 0; i < xl; i++) {\n    if (arrNo.indexOf(i)) {\n      x[i].classList.add('select-hide');\n    }\n  }\n}\n/*if the user clicks anywhere outside the select box,\r\nthen close all select boxes:*/\n\n\ndocument.addEventListener('click', closeAllSelect);\n\n//# sourceURL=webpack:///./src/app/scripts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/main */ \"./src/app/main.js\");\n\n\n\nObject(_app_main__WEBPACK_IMPORTED_MODULE_0__[\"init\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });
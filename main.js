/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  padding: 0;\r\n  margin: 0;\r\n  text-wrap: auto;\r\n}\r\n\r\nbutton {\r\n  width: 12em;\r\n  height: 4em;\r\n  margin: 1em 2em;\r\n  background-color: blueviolet;\r\n  border-radius: 4em;\r\n  border: none;\r\n  font-weight: 600;\r\n  color: white;\r\n  font: 500;\r\n}\r\n\r\np {\r\n  padding: 0px 8px;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\np,\r\nli {\r\n  font-size: clamp(1rem, 2vw, 2rem);\r\n}\r\n\r\nh2 {\r\n  font-size: clamp(1.2rem, 2.5vw, 2.4rem);\r\n}\r\n\r\nh3 {\r\n  line-height: 2em;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding-left: 24px;\r\n}\r\n\r\n#container {\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: rgb(4, 65, 70);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  min-width: 100vw;\r\n  overflow-y: auto;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.inner-card {\r\n}\r\n\r\n.inner-card p {\r\n}\r\n\r\n.inner-card h2 {\r\n}\r\n\r\n.inner-card {\r\n  width: clamp(60%, 25rem, 88%);\r\n  height: 80%;\r\n  border-radius: 2em;\r\n  padding: 16px;\r\n}\r\n\r\n.inner-card p {\r\n  padding-left: 32px;\r\n}\r\n\r\n.outer-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 30em;\r\n  margin: 1em;\r\n  border-radius: 2em;\r\n}\r\n\r\n.outer-card div {\r\n  margin: 1em;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\n\r\n\r\nfunction createAbout(){\r\n    let employeeCardInfo = [\r\n        createAboutEmployeeCard(\"Bob Bossy\", \"Store Manager\",\"(123) 456-7890\",\"bbossy@skyscoops.com\"),\r\n        createAboutEmployeeCard(\"Scott Scotter\", \"Lead Scooper\",\"(123) 456-7891\",\"sscotter@skyscoops.com\"),\r\n        createAboutEmployeeCard(\"Jackson Weller\", \"Scoop Associate\",\"(123) 456-7892\",\"jweller@skyscoops.com\"),\r\n    ];\r\n    return employeeCardInfo; \r\n}\r\n\r\nfunction createAboutEmployeeCard(employee_name,position,phone, email){\r\n    const employeeDiv = document.createElement(\"div\");\r\n    employeeDiv.setAttribute(\"id\",\"#employee-card\");\r\n    const nameHeader = document.createElement(\"h2\");\r\n    nameHeader.textContent=employee_name;\r\n    \r\n    for (let i=0;i<3;i++){\r\n        const p = document.createElement(\"p\");\r\n        const infoDiv = document.createElement(\"div\");\r\n\r\n        switch (i){\r\n            case 0:\r\n                p.textContent=position;\r\n                break;\r\n            case 1:\r\n                p.textContent=phone;\r\n                break;\r\n            case 2:\r\n                p.textContent=email;\r\n                break;\r\n        }\r\n        infoDiv.appendChild(p);\r\n        nameHeader.appendChild(infoDiv);\r\n    }\r\n    return employeeDiv.appendChild(nameHeader);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCards: () => (/* binding */ createCards)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createCard(cardInfo){\r\n\r\n    const outerDiv  = document.createElement(\"div\");\r\n    outerDiv.classList.add(\"outer-card\")\r\n    outerDiv.style.backgroundColor=\"lightblue\";\r\n\r\n    const innerDiv = document.createElement(\"div\");\r\n    innerDiv.classList.add(\"inner-card\");\r\n    innerDiv.style.backgroundColor=\"turquoise\";\r\n    outerDiv.appendChild(innerDiv);\r\n    innerDiv.appendChild(cardInfo);\r\n\r\n    return outerDiv;\r\n}\r\n\r\nfunction createCards(index, cardsNeeded){\r\n    let cardArray = [cardsNeeded];\r\n    for(let i=0;i<cardsNeeded;i++){\r\n        if(index ===1){ //menu\r\n            const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\r\n            for(let i=0;i<cardsNeeded;i++){\r\n                cardArray[i] = createCard(menu[i]);\r\n            }\r\n        } else if (index ===2){ //about\r\n            const about = (0,_about__WEBPACK_IMPORTED_MODULE_2__.createAbout)();\r\n            for(let i=0;i<cardsNeeded;i++){\r\n                cardArray[i] = createCard(about[i]);\r\n            }\r\n        } else {//default home page\r\n            const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\r\n            cardArray [0]=createCard(home[0]);\r\n            cardArray [1]=createCard(home[1]);\r\n            cardArray [2]=createCard(home[2]);\r\n        }\r\n    }\r\n\r\n    return cardArray;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/card.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\n\r\n\r\nfunction createHome(){\r\n    let array= [addReviewToContent(),addHoursToContent(), addLocationToContent()];\r\n    return array;\r\n}\r\n\r\nfunction addReviewToContent(){\r\n    const reviewDiv = document.createElement(\"div\");\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = \"Sky Scoops is a fantabulous restaurant for getting any kind of ice cream for all ages\";\r\n    const h3 = document.createElement(\"h3\");\r\n    h3.textContent=\"-Aquaman\";\r\n    p.appendChild(h3);\r\n    reviewDiv.appendChild(p);\r\n    return reviewDiv;\r\n}\r\n\r\nfunction addHoursToContent(){\r\n    const hoursDiv = document.createElement(\"div\");\r\n    const hoursH2 = document.createElement(\"h2\");\r\n    hoursH2.textContent = \"Hours\";\r\n    const ulist = document.createElement(\"ul\");\r\n    for(let i=0;i<7;i++){\r\n        const listItem = document.createElement(\"li\");\r\n        switch(i){\r\n            //Sunday -> Saturday\r\n            case 0:\r\n                listItem.textContent= \"Sunday: 8am - 8pm\";\r\n                break;\r\n            case 1:\r\n                listItem.textContent= \"Monday: 7am - 10pm\";\r\n                break;\r\n            case 2:\r\n                listItem.textContent= \"Tuesday: 7am - 10pm\";\r\n                break;\r\n            case 3:\r\n                listItem.textContent= \"Wednesday: 7am - 10pm\";\r\n                break;\r\n            case 4:\r\n                listItem.textContent= \"Thursday: 7am - 10pm\";\r\n                break;\r\n            case 5:\r\n                listItem.textContent= \"Friday: 7am - 10pm\";\r\n                break;\r\n            case 6:\r\n                listItem.textContent= \"Saturday: 7am - 10pm\";\r\n                break;\r\n        }\r\n        ulist.appendChild(listItem);\r\n    }\r\n    hoursH2.appendChild(ulist);\r\n    return hoursDiv.appendChild(hoursH2);\r\n}\r\n\r\nfunction addLocationToContent(){\r\n    const locationDiv = document.createElement(\"div\");\r\n    const locationH2 = document.createElement(\"h2\");\r\n    locationH2.textContent=\"Location\";\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = \"345 Atlantis, Bermuda Triangle, Pacific Ocean\";\r\n    locationH2.appendChild(p);\r\n    return locationDiv.appendChild(locationH2);\r\n}   \n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Hello Customer\");\r\n\r\nconst container = document.querySelector(\"#container\");\r\nconst contentDiv = document.querySelector(\"#content\");\r\n\r\nconst homeBtn = document.querySelector(\"#home\");\r\nconst menuBtn = document.querySelector(\"#menu\");\r\nconst aboutBtn = document.querySelector(\"#about\");\r\n\r\nfunction displayContent(btn){\r\n    let page = [];\r\n    switch(btn){\r\n        case homeBtn:\r\n            console.log(\"home button clicked\");\r\n            clearContentDiv();\r\n            page = (0,_card__WEBPACK_IMPORTED_MODULE_1__.createCards)(0,3);\r\n            for(let i=0;i<3;i++){\r\n                contentDiv.appendChild(page[i]);\r\n            }\r\n            break;\r\n        case menuBtn:\r\n            console.log(\"menu button clicked\");\r\n            clearContentDiv();\r\n            const cardCount = 8;\r\n            page = (0,_card__WEBPACK_IMPORTED_MODULE_1__.createCards)(1,cardCount);\r\n            for(let i=0;i<cardCount;i++){\r\n                contentDiv.appendChild(page[i]);\r\n            }\r\n            break;\r\n        case aboutBtn:\r\n            console.log(\"about button clicked\");\r\n            clearContentDiv();\r\n            page = (0,_card__WEBPACK_IMPORTED_MODULE_1__.createCards)(2,3);\r\n            for(let i=0;i<3;i++){\r\n                contentDiv.appendChild(page[i]);\r\n            }\r\n            break;\r\n        default:\r\n            console.log(\"hello world\");\r\n            page = (0,_card__WEBPACK_IMPORTED_MODULE_1__.createCards)(0,3);\r\n            for(let i=0;i<3;i++){\r\n                contentDiv.appendChild(page[i]);\r\n            }\r\n            break;\r\n    }\r\n}\r\n\r\nhomeBtn.addEventListener(\"click\", () =>displayContent(homeBtn));\r\nmenuBtn.addEventListener(\"click\", () =>displayContent(menuBtn));\r\naboutBtn.addEventListener(\"click\", () =>displayContent(aboutBtn));\r\n\r\n\r\nfunction clearContentDiv(){\r\n    while(contentDiv.firstChild){\r\n        contentDiv.removeChild(contentDiv.firstChild);\r\n    }\r\n}\r\n\r\n\r\ndisplayContent();\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n\r\n\r\nfunction createMenu(){\r\n    const menuItems = [\r\n        createMenuItem(\"Taco Supreme\",\"A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream\",1,\"\"),\r\n        createMenuItem(\"Taco Supreme\",\"A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream\",2,\"\"),\r\n        createMenuItem(\"Taco Supreme\",\"A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream\",3,\"\"),\r\n        createMenuItem(\"Taco Supreme\",\"A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream\",4,\"\"),\r\n        createMenuItem(\"Taco Supreme\",\"A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream\",5,\"\"),\r\n        createMenuItem(\"Taco Supreme\",\"A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream\",6,\"\"),\r\n        createMenuItem(\"Taco Supreme\",\"A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream\",7,\"\"),\r\n        createMenuItem(\"Taco Supreme\",\"A corn shell loaded with beef, cheese, lettuce, tomatoes, and a littlesour cream\",8,\"\"),\r\n    ];\r\n    return menuItems;\r\n}\r\n\r\nfunction createMenuItem(foodName,description,cost,imagePath){\r\n    const menuItemDiv = document.createElement(\"div\");\r\n    const foodNameHeader = document.createElement(\"h2\");\r\n    foodNameHeader.textContent = foodName;\r\n    menuItemDiv.appendChild(foodNameHeader);\r\n\r\n    const descriptPara = document.createElement(\"p\");\r\n    descriptPara.textContent = description;\r\n    foodNameHeader.appendChild(descriptPara);\r\n\r\n    const costPara = document.createElement(\"p\");\r\n    costPara.textContent = \"$\"+cost;\r\n    descriptPara.appendChild(costPara);\r\n\r\n    const foodImage = document.createElement(\"image\");\r\n    descriptPara.appendChild(foodImage);\r\n\r\n    return menuItemDiv;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: gainsboro;\\n}\\n\\nmain {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\nul > h2 {\\n  display: flex;\\n  justify-content: space-between;\\n  align-self: center;\\n  padding-left: 10px;\\n}\\n\\nul > * {\\n  border-bottom: 1px solid gray;\\n  width: 100%;\\n}\\n\\nul {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  width: 60vw;\\n  list-style-type: none;\\n  box-shadow: 5px 5px 5px 5px;\\n  background: #fff;\\n  padding: 0 10px 0 10px;\\n  overflow: hidden;\\n}\\n\\ninput::-webkit-input-placeholder {\\n  font-style: italic;\\n}\\n\\ninput::-moz-placeholder {\\n  font-style: italic;\\n}\\n\\ninput:-moz-placeholder {\\n  /* Older versions of Firefox */\\n  font-style: italic;\\n}\\n\\ninput:-ms-input-placeholder {\\n  font-style: italic;\\n}\\n\\ninput:focus {\\n  outline: none;\\n}\\n\\n.task {\\n  flex-grow: 1;\\n  font-size: 18px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  word-wrap: break-word;\\n  word-break: break-all;\\n}\\n\\nh2::after {\\n  content : '\\\\1F5D8'\\n}\\n\\n#addItem {\\n  width: 100%;\\n  padding: 10px;\\n  border: none;\\n}\\n.addItem {\\n  display: flex;\\n}\\n\\n.addItem::after {\\n  content:' \\\\23CE';\\n  font-size: 20px;\\n}\\n\\n.lItem {\\n  display: flex;\\n  align-items: baseline;\\n  justify-content: flex-start;\\n  padding: 10px;\\n}\\n\\na {\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\ninput:disabled {\\n  outline: none;\\n  border: none;\\n}\\n\\n#clrCompleted {\\n  order: 1300;\\n  text-align: center;\\n  line-height: 1.5;\\n  background-color: gainsboro;\\n  width: 100%;\\n  border-bottom: none;\\n}\\n\\n.editIcon::after {\\n  content: '\\\\2807';\\n  font-size: 20px;\\n}\\n\\n.icnCont {\\n  width: 50px;\\n}\\n\\n.editIcon {\\n  margin-left: 20px;\\n  width: 50px;\\n}\\n\\n.editIcon:hover {\\n  cursor: all-scroll;\\n}\\n\\n.trashCont {\\n  width: 50px;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.trash {\\n  background: #ff6873;\\n  width: 16px;\\n  height: 18px;\\n  display: inline-block;\\n  margin: 0 auto;\\n  position: relative;\\n  -webkit-border-bottom-right-radius: 6px;\\n  -webkit-border-bottom-left-radius: 6px;\\n  -moz-border-radius-bottomright: 6px;\\n  -moz-border-radius-bottomleft: 6px;\\n  border-bottom-right-radius: 6px;\\n  border-bottom-left-radius: 6px;\\n}\\n\\n.trash::after {\\n  content: '';\\n  position: absolute;\\n  left: -99px;\\n  right: 0;\\n  bottom: -50px;\\n  width: 300px;\\n}\\n\\n.trash span {\\n  position: absolute;\\n  height: 3px;\\n  background: #ff6873;\\n  top: -4px;\\n  left: -2px;\\n  right: -2px;\\n  border-top-left-radius: 10px;\\n  border-top-right-radius: 10px;\\n  transform: rotate(0deg);\\n  transition: transform 250ms;\\n  transform-origin: 19% 100%;\\n}\\n\\n.trash span::after {\\n  content: '';\\n  position: absolute;\\n  width: 7px;\\n  height: 2px;\\n  background: #ff6873;\\n  top: -2px;\\n  border-top-left-radius: 10px;\\n  border-top-right-radius: 10px;\\n  transform: rotate(0deg);\\n  transition: transform 250ms;\\n  transform-origin: 19% 100%;\\n  left: 6px;\\n}\\n\\n.trash i {\\n  position: relative;\\n  top: -8px;\\n  width: 2px;\\n  height: 8px;\\n  background: #fff;\\n  display: block;\\n  margin: 14px auto;\\n  border-radius: 5px;\\n}\\n\\n.trash i::after {\\n  content: '';\\n  width: 2px;\\n  height: 8px;\\n  background: #fff;\\n  position: absolute;\\n  left: -4px;\\n  border-radius: 5px;\\n}\\n\\n.trash i::before {\\n  content: '';\\n  width: 2px;\\n  height: 8px;\\n  background: #fff;\\n  position: absolute;\\n  right: -4px;\\n  border-radius: 5px;\\n}\\n\\n.trash:hover span {\\n  transform: rotate(-45deg);\\n  transition: transform 250ms;\\n}\\n\\n.hide {\\n  visibility: hidden;\\n  display: none !important;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked + input {\\n  text-decoration: line-through;\\n  font-style: italic;\\n  background-color: rgb(151, 228, 151);\\n  color: rgb(53, 51, 51);\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked {\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  -o-appearance: none;\\n  width: 20px;\\n  height: 20px;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked::after {\\n  content : '\\\\2713';\\n  font-size: 24px;\\n  color: green;\\n}\\n/* dragable input*/\\n\\n.draggable {\\n  background-color: white;\\n  cursor: move;\\n}\\n\\n.draggable.dragging {\\n  border: 1px solid black;\\n  opacity: .5;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(desc, index, completed = false) {\n    this.description = desc;\n    this.completed = completed;\n    this.index = index;\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/Task.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ activateDrag)\n/* harmony export */ });\nfunction activateDrag() {\n  const draggables = document.querySelectorAll('.lItem');\n  const container = document.querySelector('.dragContainer')\n  draggables.forEach(task => task.draggable = true);\n\n  draggables.forEach(draggable => {\n    draggable.addEventListener('dragstart', () => {\n      draggable.classList.add('dragging')\n    })\n    draggable.addEventListener('dragend', () => {\n      draggable.classList.remove('dragging');\n      const tasks = JSON.parse( localStorage.getItem('ToDoTasks'));\n      const draggableElements = [...container.querySelectorAll('.draggable')]\n      for (let i=0; i<draggableElements.length; i++) {\n        let index = parseInt(draggableElements[i].querySelector('.task').id,10);\n        tasks[index].index = i;\n        draggableElements[i].querySelector('.task').id = i;\n      }\n      tasks.sort((a,b) => a.index > b.index ? 1 :-1);\n      localStorage.setItem('ToDoTasks', JSON.stringify(tasks))\n    })\n  });\n\n  container.addEventListener('dragover', e => {\n    e.preventDefault()\n    const afterElement = getDragAfterElement(container, e.clientY)\n    const draggable = document.querySelector('.dragging')\n    if (afterElement == null) {\n      container.appendChild(draggable)\n    } else {\n      container.insertBefore(draggable, afterElement)\n    }\n  })\n\n  function getDragAfterElement(container, y) {\n    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]\n    return draggableElements.reduce((closest, child) => {\n      const box = child.getBoundingClientRect()\n      const offset = y - box.top - box.height / 2\n      if (offset < 0 && offset > closest.offset) {\n        return { offset: offset, element: child }\n      } else {\n        return closest\n      }\n    }, { offset: Number.NEGATIVE_INFINITY }).element\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pageFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageFunc.js */ \"./src/pageFunc.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n//import _ from 'lodash';\n\n\n\n\n\n\nlet tasks = [\n]\n\nfunction addTaskToPage(task) {\n  const iTag = document.createElement('i');\n  const span1 = document.createElement('span');\n  const span2 = document.createElement('span');\n  span2.className = 'trash';\n  span2.append(span1, iTag);\n  const a1 = document.createElement('a');\n  a1.className = 'trashCont hide';\n  a1.appendChild(span2);\n  a1.onmousedown = preventDef;\n  a1.onclick = _pageFunc_js__WEBPACK_IMPORTED_MODULE_1__.removeTask;\n  const a2 = document.createElement('a');\n  a2.className = 'editIcon';\n  a2.onclick = _pageFunc_js__WEBPACK_IMPORTED_MODULE_1__.enableEdit;\n  const icnCont = document.createElement('div');\n  icnCont.className = 'icnCont';\n  icnCont.append(a1, a2);\n\n\n  const chckbx = document.createElement('input');\n  const desc = document.createElement('input');\n  desc.id = task.index;\n  desc.value = task.description;\n  desc.className = 'task';\n  desc.disabled = true;\n  desc.onchange = _pageFunc_js__WEBPACK_IMPORTED_MODULE_1__.editTask;\n  desc.onblur = _pageFunc_js__WEBPACK_IMPORTED_MODULE_1__.editTask;\n  chckbx.type = 'checkbox';\n  chckbx.checked = task.completed;\n  chckbx.onchange = _status_js__WEBPACK_IMPORTED_MODULE_2__.updateStatus;\n  const litem = document.createElement('li');\n  litem.className = \"lItem draggable\";\n  litem.append(chckbx, desc, icnCont);\n  const ulist = document.querySelector('.dragContainer');\n  ulist.appendChild(litem);\n}\n\nconst preventDef = (e) => {\n  e.preventDefault();\n}\n\nconst updateList = (tasks) => {\n  for (let task of tasks) {\n    addTaskToPage(task);\n  }\n}\n\ndocument.getElementById('addItem').addEventListener('keyup', (e) => {\n  if (e.key === 'Enter') {\n    addTaskToPage((0,_pageFunc_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(tasks, e.target.value));\n    e.target.value = '';\n    (0,_drag_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  }\n})\n\ndocument.getElementById('clrCompleted').onclick = _status_js__WEBPACK_IMPORTED_MODULE_2__.clearAllCompleted;\nwindow.addEventListener('load', () => {\n  if (localStorage.getItem('ToDoTasks')) tasks = JSON.parse(localStorage.getItem('ToDoTasks'));\n  updateList(tasks);\n  document.getElementById('addItem').focus();\n  (0,_drag_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/pageFunc.js":
/*!*************************!*\
  !*** ./src/pageFunc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"enableEdit\": () => (/* binding */ enableEdit),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"updateLocalStorage\": () => (/* binding */ updateLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n\n\nfunction enableEdit(){\n  this.parentNode.parentNode.querySelector('.task').disabled = false;\n  this.parentNode.parentNode.querySelector('.task').focus();\n  this.classList.add('hide');\n  this.parentNode.querySelector('.trashCont').classList.remove('hide');\n}\n\nfunction editTask(){\n  const index = parseInt(this.parentNode.querySelector('.task').id,10);\n  this.disabled = true;\n  this.parentNode.querySelector('.icnCont').querySelector('.trashCont').classList.add('hide');\n  this.parentNode.querySelector('.icnCont').querySelector('.editIcon').classList.remove('hide');\n  this.parentNode.querySelector('.task').focus();\n  const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));\n  tasks[index].description = this.parentNode.querySelector('.task').value;\n  updateLocalStorage(tasks);\n}\n\nfunction addTask(tasks,desc){\n  const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](desc, tasks.length);\n  tasks.push(newTask);\n  updateLocalStorage(tasks);\n  return newTask;\n}\n\nfunction updateLocalStorage(tasks){\n  localStorage.setItem('ToDoTasks',JSON.stringify(tasks));\n}\n\nfunction removeTask(){\n  const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));\n  const index = parseInt(this.parentNode.parentNode.querySelector('.task').id);\n  console.log(`removeFun ${index}`)\n  tasks.splice(index, 1);\n  for (let i = 0; i < tasks.length; i++) tasks[i].index = i;\n  updateLocalStorage(tasks);\n  document.location.reload();\n}\n\n//# sourceURL=webpack://to-do-list/./src/pageFunc.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted),\n/* harmony export */   \"updateStatus\": () => (/* binding */ updateStatus)\n/* harmony export */ });\n/* harmony import */ var _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageFunc.js */ \"./src/pageFunc.js\");\n\n\nlet tasks = JSON.parse( localStorage.getItem('ToDoTasks'));\n\nfunction updateStatus(){\n  const index = parseInt(this.parentNode.querySelector('.task').id,10);\n  const status = this.checked;\n  tasks[index].completed = status;\n  (0,_pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\n}\n\nconst clearAllCompleted = () => {\n  tasks = JSON.parse( localStorage.getItem('ToDoTasks'));\n  console.log(tasks);\n  tasks = tasks.filter((task) => !task.completed);\n  console.log(tasks);\n  (0,_pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\n  \n  window.location.reload();\n}\n\n//# sourceURL=webpack://to-do-list/./src/status.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
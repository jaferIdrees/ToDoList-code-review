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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: gainsboro;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nul > h2 {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-self: center;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\nul > * {\\r\\n  border-bottom: 1px solid gray;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nul {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  width: 60vw;\\r\\n  list-style-type: none;\\r\\n  box-shadow: 5px 5px 5px 5px;\\r\\n  background: #fff;\\r\\n  padding: 0 10px 0 10px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\ninput::-webkit-input-placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\ninput::-moz-placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\ninput:-moz-placeholder {\\r\\n  /* Older versions of Firefox */\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\ninput:-ms-input-placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  flex-grow: 1;\\r\\n  font-size: 18px;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  word-wrap: break-word;\\r\\n  word-break: break-all;\\r\\n}\\r\\n\\r\\nh2::after {\\r\\n  content : '\\\\1F5D8'\\r\\n}\\r\\n\\r\\n#addItem {\\r\\n  width: 100%;\\r\\n  padding: 10px;\\r\\n  border: none;\\r\\n}\\r\\n.addItem {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.addItem::after {\\r\\n  content:' \\\\23CE';\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.lItem {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n  justify-content: flex-start;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput:disabled {\\r\\n  outline: none;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n#clrCompleted {\\r\\n  order: 1300;\\r\\n  text-align: center;\\r\\n  line-height: 1.5;\\r\\n  background-color: gainsboro;\\r\\n  width: 100%;\\r\\n  border-bottom: none;\\r\\n}\\r\\n\\r\\n.editIcon::after {\\r\\n  content: '\\\\2807';\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.icnCont {\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\n.editIcon {\\r\\n  margin-left: 20px;\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\n.editIcon:hover {\\r\\n  cursor: all-scroll;\\r\\n}\\r\\n\\r\\n.trashCont {\\r\\n  width: 50px;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.trash {\\r\\n  background: #ff6873;\\r\\n  width: 16px;\\r\\n  height: 18px;\\r\\n  display: inline-block;\\r\\n  margin: 0 auto;\\r\\n  position: relative;\\r\\n  -webkit-border-bottom-right-radius: 6px;\\r\\n  -webkit-border-bottom-left-radius: 6px;\\r\\n  -moz-border-radius-bottomright: 6px;\\r\\n  -moz-border-radius-bottomleft: 6px;\\r\\n  border-bottom-right-radius: 6px;\\r\\n  border-bottom-left-radius: 6px;\\r\\n}\\r\\n\\r\\n.trash::after {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  left: -99px;\\r\\n  right: 0;\\r\\n  bottom: -50px;\\r\\n  width: 300px;\\r\\n}\\r\\n\\r\\n.trash span {\\r\\n  position: absolute;\\r\\n  height: 3px;\\r\\n  background: #ff6873;\\r\\n  top: -4px;\\r\\n  left: -2px;\\r\\n  right: -2px;\\r\\n  border-top-left-radius: 10px;\\r\\n  border-top-right-radius: 10px;\\r\\n  transform: rotate(0deg);\\r\\n  transition: transform 250ms;\\r\\n  transform-origin: 19% 100%;\\r\\n}\\r\\n\\r\\n.trash span::after {\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  width: 7px;\\r\\n  height: 2px;\\r\\n  background: #ff6873;\\r\\n  top: -2px;\\r\\n  border-top-left-radius: 10px;\\r\\n  border-top-right-radius: 10px;\\r\\n  transform: rotate(0deg);\\r\\n  transition: transform 250ms;\\r\\n  transform-origin: 19% 100%;\\r\\n  left: 6px;\\r\\n}\\r\\n\\r\\n.trash i {\\r\\n  position: relative;\\r\\n  top: -8px;\\r\\n  width: 2px;\\r\\n  height: 8px;\\r\\n  background: #fff;\\r\\n  display: block;\\r\\n  margin: 14px auto;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.trash i::after {\\r\\n  content: '';\\r\\n  width: 2px;\\r\\n  height: 8px;\\r\\n  background: #fff;\\r\\n  position: absolute;\\r\\n  left: -4px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.trash i::before {\\r\\n  content: '';\\r\\n  width: 2px;\\r\\n  height: 8px;\\r\\n  background: #fff;\\r\\n  position: absolute;\\r\\n  right: -4px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.trash:hover span {\\r\\n  transform: rotate(-45deg);\\r\\n  transition: transform 250ms;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  visibility: hidden;\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]:checked + input {\\r\\n  text-decoration: line-through;\\r\\n  font-style: italic;\\r\\n  background-color: rgb(151, 228, 151);\\r\\n  color: rgb(53, 51, 51);\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]:checked {\\r\\n  -webkit-appearance: none;\\r\\n  -moz-appearance: none;\\r\\n  -o-appearance: none;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"]:checked::after {\\r\\n  content : '\\\\2713';\\r\\n  font-size: 24px;\\r\\n  color: green;\\r\\n}\\r\\n/* dragable input*/\\r\\n\\r\\n.draggable {\\r\\n  background-color: white;\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.draggable.dragging {\\r\\n  border: 1px solid black;\\r\\n  opacity: .5;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(desc, index, completed = false) {\r\n    this.description = desc;\r\n    this.completed = completed;\r\n    this.index = index;\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/Task.js?");

/***/ }),

/***/ "./src/addTaskToPage.js":
/*!******************************!*\
  !*** ./src/addTaskToPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTaskToPage\": () => (/* binding */ addTaskToPage)\n/* harmony export */ });\n/* harmony import */ var _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageFunc.js */ \"./src/pageFunc.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n\r\n\r\n\r\nfunction addTaskToPage(task) {\r\n  const iTag = document.createElement('i');\r\n  const span1 = document.createElement('span');\r\n  const span2 = document.createElement('span');\r\n  const a1 = document.createElement('a');\r\n  const chckbx = document.createElement('input');\r\n  const desc = document.createElement('input');\r\n  const a2 = document.createElement('a');\r\n  const icnCont = document.createElement('div');\r\n  const litem = document.createElement('li');\r\n\r\n  span2.className = 'trash';\r\n  span2.append(span1, iTag);\r\n  a1.className = 'trashCont hide';\r\n  a1.appendChild(span2);\r\n  a1.onmousedown = ((e)=>  e.preventDefault());\r\n  a1.onclick = _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.removeTask;\r\n  a2.className = 'editIcon';\r\n  a2.onclick = _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.enableEdit;\r\n  icnCont.className = 'icnCont';\r\n  icnCont.append(a1, a2);\r\n\r\n\r\n  desc.id = task.index;\r\n  desc.value = task.description;\r\n  desc.className = 'task';\r\n  desc.disabled = true;\r\n  desc.onchange = _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.editTask;\r\n  desc.onblur = _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.editTask;\r\n  chckbx.type = 'checkbox';\r\n  chckbx.checked = task.completed;\r\n  chckbx.onchange = _status_js__WEBPACK_IMPORTED_MODULE_1__.updateStatus;\r\n  litem.className = \"lItem draggable\";\r\n  litem.append(chckbx, desc, icnCont);\r\n  const ulist = document.querySelector('.dragContainer');\r\n  ulist.appendChild(litem);\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/addTaskToPage.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ activateDrag)\n/* harmony export */ });\nfunction activateDrag() {\r\n  const draggables = document.querySelectorAll('.lItem');\r\n  const container = document.querySelector('.dragContainer')\r\n  draggables.forEach(task => task.draggable = true);\r\n\r\n  draggables.forEach(draggable => {\r\n    draggable.addEventListener('dragstart', () => {\r\n      draggable.classList.add('dragging')\r\n    })\r\n    draggable.addEventListener('dragend', () => {\r\n      draggable.classList.remove('dragging');\r\n      const tasks = JSON.parse( localStorage.getItem('ToDoTasks'));\r\n      const draggableElements = [...container.querySelectorAll('.draggable')]\r\n      for (let i=0; i<draggableElements.length; i++) {\r\n        let index = parseInt(draggableElements[i].querySelector('.task').id,10);\r\n        tasks[index].index = i;\r\n        draggableElements[i].querySelector('.task').id = i;\r\n      }\r\n      tasks.sort((a,b) => a.index > b.index ? 1 :-1);\r\n      localStorage.setItem('ToDoTasks', JSON.stringify(tasks))\r\n    })\r\n  });\r\n\r\n  container.addEventListener('dragover', e => {\r\n    e.preventDefault()\r\n    const afterElement = getDragAfterElement(container, e.clientY)\r\n    const draggable = document.querySelector('.dragging')\r\n    if (afterElement == null) {\r\n      container.appendChild(draggable)\r\n    } else {\r\n      container.insertBefore(draggable, afterElement)\r\n    }\r\n  })\r\n\r\n  function getDragAfterElement(container, y) {\r\n    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]\r\n    return draggableElements.reduce((closest, child) => {\r\n      const box = child.getBoundingClientRect()\r\n      const offset = y - box.top - box.height / 2\r\n      if (offset < 0 && offset > closest.offset) {\r\n        return { offset: offset, element: child }\r\n      } else {\r\n        return closest\r\n      }\r\n    }, { offset: Number.NEGATIVE_INFINITY }).element\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pageFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageFunc.js */ \"./src/pageFunc.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n/* harmony import */ var _addTaskToPage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTaskToPage.js */ \"./src/addTaskToPage.js\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n//import _ from 'lodash';\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet tasks = [\r\n]\r\n\r\nconst updateList = (tasks) => {\r\n  for (let task of tasks) {\r\n    ;(0,_addTaskToPage_js__WEBPACK_IMPORTED_MODULE_3__.addTaskToPage)(task);\r\n  }\r\n}\r\n\r\ndocument.getElementById('addItem').addEventListener('keyup', (e) => {\r\n  if (e.key === 'Enter') {\r\n    (0,_addTaskToPage_js__WEBPACK_IMPORTED_MODULE_3__.addTaskToPage)((0,_pageFunc_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(tasks, e.target.value));\r\n    e.target.value = '';\r\n    (0,_drag_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  }\r\n})\r\n\r\ndocument.getElementById('clrCompleted').onclick = _status_js__WEBPACK_IMPORTED_MODULE_2__.clearAllCompleted;\r\nwindow.addEventListener('load', () => {\r\n  if (localStorage.getItem('ToDoTasks')) tasks = JSON.parse(localStorage.getItem('ToDoTasks'));\r\n  updateList(tasks);\r\n  document.getElementById('addItem').focus();\r\n  (0,_drag_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/pageFunc.js":
/*!*************************!*\
  !*** ./src/pageFunc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"editTask\": () => (/* binding */ editTask),\n/* harmony export */   \"enableEdit\": () => (/* binding */ enableEdit),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"updateLocalStorage\": () => (/* binding */ updateLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n\r\n\r\nfunction enableEdit(){\r\n  this.parentNode.parentNode.querySelector('.task').disabled = false;\r\n  this.parentNode.parentNode.querySelector('.task').focus();\r\n  this.classList.add('hide');\r\n  this.parentNode.querySelector('.trashCont').classList.remove('hide');\r\n}\r\n\r\nfunction editTask(){\r\n  const index = parseInt(this.parentNode.querySelector('.task').id,10);\r\n  this.disabled = true;\r\n  this.parentNode.querySelector('.icnCont').querySelector('.trashCont').classList.add('hide');\r\n  this.parentNode.querySelector('.icnCont').querySelector('.editIcon').classList.remove('hide');\r\n  this.parentNode.querySelector('.task').focus();\r\n  const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));\r\n  tasks[index].description = this.parentNode.querySelector('.task').value;\r\n  updateLocalStorage(tasks);\r\n}\r\n\r\nfunction addTask(tasks,desc){\r\n  const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](desc, tasks.length);\r\n  tasks.push(newTask);\r\n  updateLocalStorage(tasks);\r\n  return newTask;\r\n}\r\n\r\nfunction updateLocalStorage(tasks){\r\n  localStorage.setItem('ToDoTasks',JSON.stringify(tasks));\r\n}\r\n\r\nfunction removeTask(){\r\n  const tasks = JSON.parse(localStorage.getItem('ToDoTasks'));\r\n  const index = parseInt(this.parentNode.parentNode.querySelector('.task').id);\r\n  console.log(`removeFun ${index}`)\r\n  tasks.splice(index, 1);\r\n  for (let i = 0; i < tasks.length; i++) tasks[i].index = i;\r\n  updateLocalStorage(tasks);\r\n  this.parentElement.parentElement.remove();\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/pageFunc.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted),\n/* harmony export */   \"updateStatus\": () => (/* binding */ updateStatus)\n/* harmony export */ });\n/* harmony import */ var _pageFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageFunc.js */ \"./src/pageFunc.js\");\n\r\n\r\nlet tasks = JSON.parse( localStorage.getItem('ToDoTasks'));\r\n\r\nfunction updateStatus(){\r\n  const index = parseInt(this.parentNode.querySelector('.task').id,10);\r\n  const status = this.checked;\r\n  tasks[index].completed = status;\r\n  (0,_pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\r\n}\r\n\r\nconst clearAllCompleted = () => {\r\n  tasks = JSON.parse( localStorage.getItem('ToDoTasks'));\r\n  console.log(tasks);\r\n  tasks = tasks.filter((task) => !task.completed);\r\n  console.log(tasks);\r\n  (0,_pageFunc_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(tasks);\r\n  \r\n  window.location.reload();\r\n}\n\n//# sourceURL=webpack://to-do-list/./src/status.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
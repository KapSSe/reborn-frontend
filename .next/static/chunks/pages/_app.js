(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; }
/* harmony export */ });
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */

function getStrapiURL() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(path);
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}

function _fetchAPI() {
  _fetchAPI = (0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(path) {
    var urlParamsObject,
        options,
        mergedOptions,
        queryString,
        requestUrl,
        response,
        data,
        _args = arguments;
    return C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlParamsObject = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            // Merge default and user options
            mergedOptions = _objectSpread({
              headers: {
                "Content-Type": "application/json"
              }
            }, options); // Build request URL

            queryString = qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(urlParamsObject);
            requestUrl = "".concat(getStrapiURL("/api".concat(path).concat(queryString ? "?".concat(queryString) : ""))); // Trigger API call

            _context.next = 7;
            return fetch(requestUrl, mergedOptions);

          case 7:
            response = _context.sent;

            if (response.ok) {
              _context.next = 11;
              break;
            }

            console.error(response.statusText);
            throw new Error("An error occured please try again");

          case 11:
            _context.next = 13;
            return response.json();

          case 13:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./lib/api.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function getStrapiMedia(media) {
  var url = media.data.attributes.url;
  var imageUrl = url.startsWith("/") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(url) : url;
  return imageUrl;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            _context.next = 3;
            return (0, _utils.loadGetInitialProps)(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appGetInitialProps.apply(this, arguments);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/_react["default"].createElement(Component, pageProps);
    }
  }]);

  return App;
}(_react["default"].Component);

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; }
/* harmony export */ });
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/css/style.css */ "./assets/css/style.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/media */ "./lib/media.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // Store Strapi Global object in context

var GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_7__.createContext)({});

var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var global = pageProps.global;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(global.attributes.favicon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(GlobalContext.Provider, {
      value: global.attributes,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {
    var appProps, globalRes;
    return C_Users_stask_work_reborn_ukraine_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next_app__WEBPACK_IMPORTED_MODULE_4___default().getInitialProps(ctx);

          case 2:
            appProps = _context.sent;
            _context.next = 5;
            return (0,_lib_api__WEBPACK_IMPORTED_MODULE_8__.fetchAPI)("/global", {
              populate: {
                favicon: "*",
                defaultSeo: {
                  populate: "*"
                }
              }
            });

          case 5:
            globalRes = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
              pageProps: {
                global: globalRes.data
              }
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./style.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./style.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/style.css",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./style.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/about.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/about.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".about {\r\n    background: #015BBB;\r\n}\r\n\r\n.about .about__content {\r\n    padding-top: 65px;\r\n    padding-bottom: 79px;\r\n}\r\n\r\n.about .about__title {\r\n    margin-bottom: 45px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 82px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    color:#FFD401;\r\n}\r\n\r\n.about .about__description {\r\n    font-family: MontserratRegular;\r\n    font-size: 20px;\r\n    line-height: 26px;\r\n    text-align: left;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .about .about__content{\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .about .about__title {\r\n        margin-bottom: 20px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .about .about__description{\r\n        font-size: 18px;\r\n        line-height: 24px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .about .about__title {\r\n        margin-bottom: 16px;\r\n        font-size: 30px;\r\n        line-height: normal;\r\n        line-height: initial;\r\n    }\r\n    .about .about__description {\r\n        font-size: 14px;\r\n        line-height: 20px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/about.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI;QACI,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,mBAAmB;QACnB,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,eAAe;QACf,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,mBAAmB;QACnB,eAAe;QACf,mBAAoB;QAApB,oBAAoB;IACxB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;AACJ","sourcesContent":[".about {\r\n    background: #015BBB;\r\n}\r\n\r\n.about .about__content {\r\n    padding-top: 65px;\r\n    padding-bottom: 79px;\r\n}\r\n\r\n.about .about__title {\r\n    margin-bottom: 45px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 82px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    color:#FFD401;\r\n}\r\n\r\n.about .about__description {\r\n    font-family: MontserratRegular;\r\n    font-size: 20px;\r\n    line-height: 26px;\r\n    text-align: left;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .about .about__content{\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .about .about__title {\r\n        margin-bottom: 20px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .about .about__description{\r\n        font-size: 18px;\r\n        line-height: 24px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .about .about__title {\r\n        margin-bottom: 16px;\r\n        font-size: 30px;\r\n        line-height: initial;\r\n    }\r\n    .about .about__description {\r\n        font-size: 14px;\r\n        line-height: 20px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/articles.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/articles.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".articles {\r\n}\r\n\r\n.articles .articles__title {\r\n    margin-bottom: 0px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 81px;\r\n    color: black;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.articles .articles__content {\r\n    padding-top: 65px;\r\n    padding-bottom: 74px;\r\n}\r\n\r\n.articles .articles__header {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.articles .articles__statuses {\r\n    display: flex;\r\n    list-style: none;\r\n    margin: 0;\r\n    margin-left: 49px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.articles .articles__statuses li {\r\n    margin-left: 24px;\r\n}\r\n\r\n.articles .articles__statuses :first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.articles .articles__statuses-item button {\r\n    cursor: pointer;\r\n    border: 0px;\r\n    padding: 0px;\r\n    background: none;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n    color: #0E0E0E;\r\n    padding-bottom: 3px;\r\n    border-bottom: none;\r\n    opacity: 0.5;\r\n}\r\n\r\n.articles .articles__statuses-item_active button {\r\n    border-bottom: 1px dashed #000000;\r\n    opacity: 1;\r\n}\r\n\r\n.articles .articles__types {\r\n    display: flex;\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.articles .articles__types li {\r\n    margin-left: 18px;\r\n}\r\n\r\n.articles .articles__types :first-child {\r\n}\r\n\r\n.articles .types__button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: none;\r\n    padding: 10px 32px;\r\n    color: black;\r\n    background: white;\r\n    border: 2px solid black;\r\n    border-radius: 92px;\r\n    font-family: 'MontserratBold';\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n}\r\n\r\n.articles .types__button > div {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.articles .types__button > span {\r\n    margin-left: 5px;\r\n}\r\n\r\n.articles .articles__types-item_active .types__button {\r\n    color:white;\r\n    background: #000000;\r\n    -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.articles .articles__projects {\r\n    margin-top:50px;\r\n    list-style: none;\r\n    margin-bottom: -40px;\r\n}\r\n\r\n.articles .articles__projects-item {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.articles .projects-item__wrapper {\r\n    position: relative;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n\r\n.articles .projects-item__wrapper, .articles .projects-item__bg > div {\r\n    border-radius: 20px;\r\n}\r\n\r\n.articles .projects-item__bg {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.articles .projects-item__bg > div {\r\n    height: 340px;\r\n}\r\n\r\n.articles .projects-item__bg > div > img {\r\n    -webkit-object-fit: cover !important;\r\n            object-fit: cover !important;\r\n}\r\n\r\n.articles .projects-item__filter {\r\n    position: absolute;\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(#000000));\r\n    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, #000000 100%);\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);\r\n}\r\n\r\n.articles .projects-item__labels {\r\n    position: absolute;\r\n    z-index: 3;\r\n    top:23px;\r\n    padding: 0 35px;\r\n    width: calc(100% - 70px);\r\n    display: flex;\r\n    list-style: none;\r\n}\r\n\r\n.articles .projects-item-label:last-child {\r\n    margin-right: 0px;\r\n}\r\n\r\n.articles .projects-item-label {\r\n    display: flex;\r\n    align-items:center;\r\n    margin-right: 11px;\r\n    padding: 10px 16px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    border-radius: 54px;\r\n}\r\n\r\n.articles .projects-item-label > div {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.articles .projects-item-label__text {\r\n    margin-left: 8px;\r\n    font-family: 'MontserratBold';\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.articles .project-item__next {\r\n    position: absolute;\r\n    z-index: 3;\r\n    right: 45px;\r\n    bottom: 32px;\r\n    width: 10px;\r\n    height: 10px;\r\n    -webkit-transform: translate(100%, -100%);\r\n            transform: translate(100%, -100%);\r\n}\r\n\r\n.articles .projects-item__content {\r\n    position: absolute;\r\n    z-index: 3;\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n    padding: 32px 35px;\r\n    width: calc(100% - 70px);\r\n}\r\n\r\n.articles .projects-item__title {\r\n    font-family: 'KyivTypeSans';\r\n    font-size: 33px;\r\n    line-height: 41px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.articles .projects-item__desc {\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.articles .articles__pagination {\r\n    margin: 0 auto;\r\n    margin-top: 60px;\r\n    padding: 20px 40px;\r\n    display: block;\r\n    font-family: 'MontserratBold';\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n    border: none;\r\n    color: white;\r\n    background: black;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .articles .articles__header{\r\n        margin-bottom: 25px;\r\n    }\r\n\r\n    .articles .articles__content {\r\n        padding-bottom: 65px;\r\n    }\r\n\r\n    .articles .articles__projects {\r\n        margin-top: 35px;\r\n    }\r\n\r\n    .articles .articles__projects-item {\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n    .articles .articles__title {\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .articles .articles__statuses-item button {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .articles .types__button {\r\n        padding: 8px 32px;\r\n        font-size: 18px;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .articles .types__button > div {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n\r\n    .articles .projects-item__title {\r\n        font-size: 22px;\r\n        line-height: 10px;\r\n    }\r\n\r\n    .articles .projects-item__desc{\r\n        font-size: 15px;\r\n        line-height: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .articles .articles__header {\r\n        margin-bottom: 16px;\r\n    }\r\n    .articles .articles__title {\r\n        line-height: 30px;\r\n        font-size: 30px;\r\n    }\r\n    .articles .articles__statuses {\r\n        padding: 0px;\r\n    }\r\n    .articles .articles__statuses-item button {\r\n        font-size: 16px;\r\n        padding-bottom: 0;\r\n    }\r\n    .articles .articles__content{\r\n        padding-top: 40px;\r\n        padding-bottom: 50px;\r\n    }\r\n    .articles .types__button {\r\n        padding: 6px 20px;\r\n        font-size: 14px;\r\n        line-height: 16px;\r\n    }\r\n    .articles .types__button > div {\r\n        width: 24px;\r\n        height: 24px\r\n    }\r\n    .articles .articles__projects {\r\n        margin-top: 24px;\r\n    }\r\n    .articles .projects-item__labels {\r\n        top: 15px;\r\n        padding: 0 25px;\r\n    }\r\n    .articles .projects-item__title {\r\n        font-size: 18px;\r\n        margin-bottom: 15px;\r\n    }\r\n    .articles .projects-item__content {\r\n        padding: 32px 25px;\r\n    }\r\n    .articles .projects-item__desc {\r\n        font-size: 14px;\r\n    }\r\n    .articles .project-item__next {\r\n        right: 30px;\r\n        bottom: 30px;\r\n        width: 8px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .articles .articles__header {\r\n        flex-wrap: wrap;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        margin-bottom: 0px;\r\n    }\r\n    .articles .articles__statuses {\r\n        margin-top: 10px;\r\n        margin-left: 0px;\r\n    }\r\n    .articles__projects-item {\r\n        width: 100%;\r\n    }\r\n    .articles__types {\r\n        flex-wrap: wrap;\r\n    }\r\n    .articles .articles__types li {\r\n        margin-top:15px;\r\n        margin-left: 0px;\r\n        margin-right: 15px;\r\n    }\r\n    .articles .projects-item__labels {\r\n        flex-wrap: wrap;\r\n    }\r\n    .articles .projects-item-label {\r\n        margin-top: 10px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/articles.css"],"names":[],"mappings":"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","sourcesContent":[".articles {\r\n}\r\n\r\n.articles .articles__title {\r\n    margin-bottom: 0px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 81px;\r\n    color: black;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.articles .articles__content {\r\n    padding-top: 65px;\r\n    padding-bottom: 74px;\r\n}\r\n\r\n.articles .articles__header {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.articles .articles__statuses {\r\n    display: flex;\r\n    list-style: none;\r\n    margin: 0;\r\n    margin-left: 49px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.articles .articles__statuses li {\r\n    margin-left: 24px;\r\n}\r\n\r\n.articles .articles__statuses :first-child {\r\n    margin-left: 0;\r\n}\r\n\r\n.articles .articles__statuses-item button {\r\n    cursor: pointer;\r\n    border: 0px;\r\n    padding: 0px;\r\n    background: none;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n    color: #0E0E0E;\r\n    padding-bottom: 3px;\r\n    border-bottom: none;\r\n    opacity: 0.5;\r\n}\r\n\r\n.articles .articles__statuses-item_active button {\r\n    border-bottom: 1px dashed #000000;\r\n    opacity: 1;\r\n}\r\n\r\n.articles .articles__types {\r\n    display: flex;\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n\r\n.articles .articles__types li {\r\n    margin-left: 18px;\r\n}\r\n\r\n.articles .articles__types :first-child {\r\n}\r\n\r\n.articles .types__button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: none;\r\n    padding: 10px 32px;\r\n    color: black;\r\n    background: white;\r\n    border: 2px solid black;\r\n    border-radius: 92px;\r\n    font-family: 'MontserratBold';\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n}\r\n\r\n.articles .types__button > div {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.articles .types__button > span {\r\n    margin-left: 5px;\r\n}\r\n\r\n.articles .articles__types-item_active .types__button {\r\n    color:white;\r\n    background: #000000;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.articles .articles__projects {\r\n    margin-top:50px;\r\n    list-style: none;\r\n    margin-bottom: -40px;\r\n}\r\n\r\n.articles .articles__projects-item {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.articles .projects-item__wrapper {\r\n    position: relative;\r\n    z-index: 2;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n}\r\n\r\n.articles .projects-item__wrapper, .articles .projects-item__bg > div {\r\n    border-radius: 20px;\r\n}\r\n\r\n.articles .projects-item__bg {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.articles .projects-item__bg > div {\r\n    height: 340px;\r\n}\r\n\r\n.articles .projects-item__bg > div > img {\r\n    object-fit: cover !important;\r\n}\r\n\r\n.articles .projects-item__filter {\r\n    position: absolute;\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);\r\n}\r\n\r\n.articles .projects-item__labels {\r\n    position: absolute;\r\n    z-index: 3;\r\n    top:23px;\r\n    padding: 0 35px;\r\n    width: calc(100% - 70px);\r\n    display: flex;\r\n    list-style: none;\r\n}\r\n\r\n.articles .projects-item-label:last-child {\r\n    margin-right: 0px;\r\n}\r\n\r\n.articles .projects-item-label {\r\n    display: flex;\r\n    align-items:center;\r\n    margin-right: 11px;\r\n    padding: 10px 16px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    border-radius: 54px;\r\n}\r\n\r\n.articles .projects-item-label > div {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.articles .projects-item-label__text {\r\n    margin-left: 8px;\r\n    font-family: 'MontserratBold';\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.articles .project-item__next {\r\n    position: absolute;\r\n    z-index: 3;\r\n    right: 45px;\r\n    bottom: 32px;\r\n    width: 10px;\r\n    height: 10px;\r\n    transform: translate(100%, -100%);\r\n}\r\n\r\n.articles .projects-item__content {\r\n    position: absolute;\r\n    z-index: 3;\r\n    transform: translateY(-100%);\r\n    padding: 32px 35px;\r\n    width: calc(100% - 70px);\r\n}\r\n\r\n.articles .projects-item__title {\r\n    font-family: 'KyivTypeSans';\r\n    font-size: 33px;\r\n    line-height: 41px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.articles .projects-item__desc {\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.articles .articles__pagination {\r\n    margin: 0 auto;\r\n    margin-top: 60px;\r\n    padding: 20px 40px;\r\n    display: block;\r\n    font-family: 'MontserratBold';\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n    border: none;\r\n    color: white;\r\n    background: black;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .articles .articles__header{\r\n        margin-bottom: 25px;\r\n    }\r\n\r\n    .articles .articles__content {\r\n        padding-bottom: 65px;\r\n    }\r\n\r\n    .articles .articles__projects {\r\n        margin-top: 35px;\r\n    }\r\n\r\n    .articles .articles__projects-item {\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n    .articles .articles__title {\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .articles .articles__statuses-item button {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .articles .types__button {\r\n        padding: 8px 32px;\r\n        font-size: 18px;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .articles .types__button > div {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n\r\n    .articles .projects-item__title {\r\n        font-size: 22px;\r\n        line-height: 10px;\r\n    }\r\n\r\n    .articles .projects-item__desc{\r\n        font-size: 15px;\r\n        line-height: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .articles .articles__header {\r\n        margin-bottom: 16px;\r\n    }\r\n    .articles .articles__title {\r\n        line-height: 30px;\r\n        font-size: 30px;\r\n    }\r\n    .articles .articles__statuses {\r\n        padding: 0px;\r\n    }\r\n    .articles .articles__statuses-item button {\r\n        font-size: 16px;\r\n        padding-bottom: 0;\r\n    }\r\n    .articles .articles__content{\r\n        padding-top: 40px;\r\n        padding-bottom: 50px;\r\n    }\r\n    .articles .types__button {\r\n        padding: 6px 20px;\r\n        font-size: 14px;\r\n        line-height: 16px;\r\n    }\r\n    .articles .types__button > div {\r\n        width: 24px;\r\n        height: 24px\r\n    }\r\n    .articles .articles__projects {\r\n        margin-top: 24px;\r\n    }\r\n    .articles .projects-item__labels {\r\n        top: 15px;\r\n        padding: 0 25px;\r\n    }\r\n    .articles .projects-item__title {\r\n        font-size: 18px;\r\n        margin-bottom: 15px;\r\n    }\r\n    .articles .projects-item__content {\r\n        padding: 32px 25px;\r\n    }\r\n    .articles .projects-item__desc {\r\n        font-size: 14px;\r\n    }\r\n    .articles .project-item__next {\r\n        right: 30px;\r\n        bottom: 30px;\r\n        width: 8px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .articles .articles__header {\r\n        flex-wrap: wrap;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        margin-bottom: 0px;\r\n    }\r\n    .articles .articles__statuses {\r\n        margin-top: 10px;\r\n        margin-left: 0px;\r\n    }\r\n    .articles__projects-item {\r\n        width: 100%;\r\n    }\r\n    .articles__types {\r\n        flex-wrap: wrap;\r\n    }\r\n    .articles .articles__types li {\r\n        margin-top:15px;\r\n        margin-left: 0px;\r\n        margin-right: 15px;\r\n    }\r\n    .articles .projects-item__labels {\r\n        flex-wrap: wrap;\r\n    }\r\n    .articles .projects-item-label {\r\n        margin-top: 10px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/contacts.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/contacts.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contacts {\r\n    \r\n}\r\n\r\n.contacts .contacts__content {\r\n    padding: 74px 0px;\r\n}\r\n\r\n.contacts .contacts__heading {\r\n    margin-bottom: 36px;\r\n    font-family: 'KyivTypeSans';\r\n    text-transform: uppercase;\r\n    font-size: 68px;\r\n    line-height: 82px;\r\n    text-align: left;\r\n    color:black;\r\n}\r\n\r\n.contacts .contacts__address-block {\r\n    padding: 62px 29px;\r\n    display: flex;\r\n    align-items: center;\r\n    background: #F8F8F8;\r\n    -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 20px;\r\n    overflow-wrap: anywhere;\r\n}\r\n\r\n.contacts .address-block__text {\r\n    font-family: 'MontserratRegular';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    line-height: 37px;\r\n    color: #000000;\r\n}\r\n\r\n.contacts .address-block__copy {\r\n    margin-left: 31px;\r\n    width: 30px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n\r\n.contacts .contacts__button-block {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/* .contacts .button-block__button {\r\n    padding: 24px 55px;\r\n    background: #FFD401;\r\n    box-shadow: 0px 0px 22px #FFE30A;\r\n    border-radius: 114px;\r\n    font-family: 'MontserratBold';\r\n    font-size: 23px;\r\n    line-height: 29px;\r\n    color: #0E0E0E;\r\n    text-decoration: none;\r\n} */\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .contacts .contacts__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .contacts .contacts__heading {\r\n        margin-bottom: 25px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .contacts .contacts__address-block {\r\n        padding: 32px 20px;\r\n    }\r\n\r\n    .contacts .address-block__text {\r\n        font-size: 26px;\r\n        line-height: 30px;\r\n    }\r\n\r\n    .contacts .address-block__copy{\r\n        margin-left: 25px;\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n\r\n    /* .contacts .button-block__button{\r\n        font-size: 18px;\r\n    } */\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .contacts .contacts__content {\r\n        padding-top: 30px;\r\n        padding-bottom: 50px;\r\n    }\r\n    .contacts .contacts__heading {\r\n        margin-bottom: 30px;\r\n        font-size: 30px;\r\n        line-height: 30px;\r\n        text-align: center;\r\n    }\r\n    .contacts .contacts__address-block {\r\n        padding: 20px;\r\n        width: 50%;\r\n        margin: 0 auto;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    .contacts .address-block__text {\r\n        font-size: 16px;\r\n        line-height: 16px;\r\n    }\r\n    .contacts .address-block__copy {\r\n        margin-left: 10px;\r\n        width: 18px;\r\n        height: 18px;\r\n    }\r\n    .contacts .button-block__button {\r\n        width: 200px;\r\n    }\r\n    .contacts .contacts__grid {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .contacts .contacts__grid_text {\r\n        width: 100%;\r\n    }\r\n    .contacts .contacts__grid_button {\r\n        width: 100%;\r\n    }\r\n    .contacts .contacts__button-block {\r\n        margin-top: 25px;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    .contacts .contacts__address-block {\r\n        width: auto;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/contacts.css"],"names":[],"mappings":"AAAA;;AAEA;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,2BAA2B;IAC3B,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,mDAA2C;YAA3C,2CAA2C;IAC3C,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;;;;;;;;;;GAUG;;AAEH;IACI;QACI,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,mBAAmB;QACnB,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;QACjB,WAAW;QACX,YAAY;IAChB;;IAEA;;OAEG;AACP;;AAEA;IACI;QACI,iBAAiB;QACjB,oBAAoB;IACxB;IACA;QACI,mBAAmB;QACnB,eAAe;QACf,iBAAiB;QACjB,kBAAkB;IACtB;IACA;QACI,aAAa;QACb,UAAU;QACV,cAAc;QACd,aAAa;QACb,uBAAuB;IAC3B;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,iBAAiB;QACjB,WAAW;QACX,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;QACb,sBAAsB;IAC1B;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;IACA;QACI,gBAAgB;QAChB,uBAAuB;IAC3B;AACJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ","sourcesContent":[".contacts {\r\n    \r\n}\r\n\r\n.contacts .contacts__content {\r\n    padding: 74px 0px;\r\n}\r\n\r\n.contacts .contacts__heading {\r\n    margin-bottom: 36px;\r\n    font-family: 'KyivTypeSans';\r\n    text-transform: uppercase;\r\n    font-size: 68px;\r\n    line-height: 82px;\r\n    text-align: left;\r\n    color:black;\r\n}\r\n\r\n.contacts .contacts__address-block {\r\n    padding: 62px 29px;\r\n    display: flex;\r\n    align-items: center;\r\n    background: #F8F8F8;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 20px;\r\n    overflow-wrap: anywhere;\r\n}\r\n\r\n.contacts .address-block__text {\r\n    font-family: 'MontserratRegular';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    line-height: 37px;\r\n    color: #000000;\r\n}\r\n\r\n.contacts .address-block__copy {\r\n    margin-left: 31px;\r\n    width: 30px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n\r\n.contacts .contacts__button-block {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/* .contacts .button-block__button {\r\n    padding: 24px 55px;\r\n    background: #FFD401;\r\n    box-shadow: 0px 0px 22px #FFE30A;\r\n    border-radius: 114px;\r\n    font-family: 'MontserratBold';\r\n    font-size: 23px;\r\n    line-height: 29px;\r\n    color: #0E0E0E;\r\n    text-decoration: none;\r\n} */\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .contacts .contacts__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .contacts .contacts__heading {\r\n        margin-bottom: 25px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .contacts .contacts__address-block {\r\n        padding: 32px 20px;\r\n    }\r\n\r\n    .contacts .address-block__text {\r\n        font-size: 26px;\r\n        line-height: 30px;\r\n    }\r\n\r\n    .contacts .address-block__copy{\r\n        margin-left: 25px;\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n\r\n    /* .contacts .button-block__button{\r\n        font-size: 18px;\r\n    } */\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .contacts .contacts__content {\r\n        padding-top: 30px;\r\n        padding-bottom: 50px;\r\n    }\r\n    .contacts .contacts__heading {\r\n        margin-bottom: 30px;\r\n        font-size: 30px;\r\n        line-height: 30px;\r\n        text-align: center;\r\n    }\r\n    .contacts .contacts__address-block {\r\n        padding: 20px;\r\n        width: 50%;\r\n        margin: 0 auto;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    .contacts .address-block__text {\r\n        font-size: 16px;\r\n        line-height: 16px;\r\n    }\r\n    .contacts .address-block__copy {\r\n        margin-left: 10px;\r\n        width: 18px;\r\n        height: 18px;\r\n    }\r\n    .contacts .button-block__button {\r\n        width: 200px;\r\n    }\r\n    .contacts .contacts__grid {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .contacts .contacts__grid_text {\r\n        width: 100%;\r\n    }\r\n    .contacts .contacts__grid_button {\r\n        width: 100%;\r\n    }\r\n    .contacts .contacts__button-block {\r\n        margin-top: 25px;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    .contacts .contacts__address-block {\r\n        width: auto;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/donations.css":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/donations.css ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".donations {\r\n}\r\n\r\n.donations .donations__copy {\r\n    margin-left: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n\r\n.donations .donations__title {\r\n    margin-bottom: 46px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 81px;\r\n    color: black;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.donations .donations__content {\r\n    padding: 74px 0px;\r\n}\r\n\r\n.donations .donations__menu, .donations .donations__submenu{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.donations .donations__menu-item, .donations .donations__submenu-item{\r\n    margin-left: 40px;\r\n}\r\n\r\n.donations .donations__menu-item button{\r\n    cursor: pointer;\r\n    background: white;\r\n    border-radius: 92px;\r\n    border-color: #000000;\r\n    padding: 18px 26px;\r\n    color: black;\r\n    font-family: 'MontserratBold';\r\n    font-style: normal;\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n}\r\n\r\n.donations .donations__menu-item_active button {\r\n    background: #000000;\r\n    color: white;\r\n    -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);\r\n            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.donations .donations__submenu-item button{\r\n    cursor: pointer;\r\n    background: white;\r\n    border-radius: 92px;\r\n    border-color: #000000;\r\n    padding: 18px 26px;\r\n    color: black;\r\n    font-family: 'MontserratBold';\r\n    font-style: normal;\r\n    font-size: 22.2364px;\r\n    line-height: 27px;\r\n}\r\n\r\n.donations .donations__submenu-item_active button {\r\n    background: #FFD401;\r\n}\r\n\r\n.donations__menu :first-child, .donations__submenu :first-child{\r\n    margin-left: 0px;\r\n}\r\n\r\n.donations .donations__desc {\r\n    margin-top: 36px;\r\n    -webkit-transition: height 0.15s ease-out;\r\n    transition: height 0.15s ease-out;\r\n}\r\n\r\n.donations .donations__mobilepay {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.donations .donations__mobilepay-desc {\r\n    max-width: 700px;\r\n    margin: 0px;\r\n    padding: 30px;\r\n    background: #F8F8F8;\r\n    -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 20px;\r\n    text-align: left;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n\r\n.donations .donations__button {\r\n    margin-left: 96px;\r\n    padding: 24px 105px;\r\n    background: #FFD401;\r\n    border-radius: 114px;\r\n    font-family: 'MontserratBold';\r\n    font-size: 23px;\r\n    line-height: 29px;\r\n    color: #0E0E0E;\r\n    text-decoration: none;\r\n}\r\n\r\n.donations .donations__banks-desc {\r\n    margin-top:28px;\r\n    font-family: 'MontserratRegular';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 32px;\r\n    color:#000000;\r\n    overflow-wrap: anywhere;\r\n}\r\n\r\n.donations .donations__banks-guide {\r\n    max-width: 700px;\r\n    margin: 0px;\r\n    padding: 28px 47px;\r\n    margin-top: 27px;\r\n    background: #F8F8F8;\r\n    -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 20px;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 32px;\r\n}\r\n\r\n.donations .donations__crypto {\r\n\r\n}\r\n\r\n.donations .donations__crypto-desc {\r\n    max-width: 700px;\r\n    margin: 0px;\r\n    padding: 28px 47px;\r\n    margin-top: 27px;\r\n    background: #F8F8F8;\r\n    color: #0E0E0E;\r\n    -webkit-box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 20px;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 32px;\r\n    overflow-wrap: anywhere;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .donations .donations__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .donations .donations__title {\r\n        margin-bottom: 25px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .donations .donations__menu-item button {\r\n        padding: 10px 35px;\r\n        font-size: 18px;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .donations .donations__submenu-item button {\r\n        padding: 10px 35px;\r\n        font-size: 18px;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .donations .donations__desc {\r\n        margin-top: 25px;\r\n    }\r\n\r\n    .donations .donations__mobilepay-desc {\r\n        padding: 25px;\r\n        font-size: 18px;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .donations .button.donations__button {\r\n        margin-left: 56px;\r\n        padding: 20px 85px;\r\n        font-size: 18px;\r\n        line-height: 30px;\r\n    }\r\n\r\n    .donations .donations__menu-item, .donations .donations__submenu-item {\r\n        margin-left: 18px;\r\n    }\r\n\r\n    .donations__menu :first-child, .donations__submenu :first-child {\r\n        margin-left: 0px;\r\n    }\r\n\r\n    .donations .donations__banks-desc {\r\n        margin-top: 25px;\r\n    }\r\n\r\n    .donations .donations__banks-desc {\r\n        font-size: 18px;\r\n        line-height: 28px;\r\n    }\r\n\r\n    .donations .donations__banks-guide {\r\n        margin-top: 25px;\r\n        padding: 25px;\r\n        font-size: 18px;\r\n        line-height: 28px;\r\n    }\r\n\r\n    .donations .donations__crypto-desc {\r\n        margin-top: 25px;\r\n        padding: 25px;\r\n        font-size: 18px;\r\n        line-height: 26px;\r\n    }\r\n\r\n    .donations .donations__copy {\r\n        width: 18px;\r\n        height: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .donations .donations__title {\r\n        margin-bottom: 16px;\r\n        font-size: 30px;\r\n        line-height: 30px;\r\n    }\r\n    .donations .donations__menu-item button {\r\n        padding: 10px 20px;\r\n        font-size: 14px;\r\n        line-height: 16px;\r\n    }\r\n    .donations .donations__desc {\r\n        margin-top: 14px;\r\n    }\r\n    .donations .donations__mobilepay-desc {\r\n        padding: 20px;\r\n        font-size: 14px;\r\n        line-height: 18px;\r\n    }\r\n    .donations .button.donations__button {\r\n        margin-left: 50px;\r\n        padding: 9px 60px;\r\n        font-size: 16px;\r\n        line-height: 30px;\r\n    }\r\n    .donations .donations__mobilepay {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n    .donations .button.donations__button {\r\n        margin-left: 0px;\r\n        margin-top:25px;\r\n    }\r\n    .donations .donations__submenu-item button {\r\n        padding: 8px 18px;\r\n        font-size: 14px;\r\n        line-height: 14px;\r\n    }\r\n    .donations .donations__banks-desc {\r\n        font-size: 14px;\r\n        line-height: 22px;\r\n    }\r\n    .donations .donations__banks-desc {\r\n        margin-top: 18px;\r\n    }\r\n\r\n    .donations .donations__banks-guide {\r\n        margin-top: 16px;\r\n        padding: 20px;\r\n        font-size: 14px;\r\n        line-height: 20px;\r\n    }\r\n    .donations .donations__content {\r\n        padding-top: 30px;\r\n        padding-bottom: 50px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\r\n    .donations .donations__title {\r\n        margin-bottom: 0px;\r\n    }\r\n    .donations .donations__menu, .donations .donations__submenu {\r\n        flex-wrap: wrap;\r\n    }\r\n    .donations .donations__menu-item, .donations .donations__submenu-item {\r\n        margin-top: 15px;\r\n        margin-left: 0px;\r\n        margin-right: 15px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/donations.css"],"names":[],"mappings":"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","sourcesContent":[".donations {\r\n}\r\n\r\n.donations .donations__copy {\r\n    margin-left: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n\r\n.donations .donations__title {\r\n    margin-bottom: 46px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 81px;\r\n    color: black;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.donations .donations__content {\r\n    padding: 74px 0px;\r\n}\r\n\r\n.donations .donations__menu, .donations .donations__submenu{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.donations .donations__menu-item, .donations .donations__submenu-item{\r\n    margin-left: 40px;\r\n}\r\n\r\n.donations .donations__menu-item button{\r\n    cursor: pointer;\r\n    background: white;\r\n    border-radius: 92px;\r\n    border-color: #000000;\r\n    padding: 18px 26px;\r\n    color: black;\r\n    font-family: 'MontserratBold';\r\n    font-style: normal;\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n}\r\n\r\n.donations .donations__menu-item_active button {\r\n    background: #000000;\r\n    color: white;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.donations .donations__submenu-item button{\r\n    cursor: pointer;\r\n    background: white;\r\n    border-radius: 92px;\r\n    border-color: #000000;\r\n    padding: 18px 26px;\r\n    color: black;\r\n    font-family: 'MontserratBold';\r\n    font-style: normal;\r\n    font-size: 22.2364px;\r\n    line-height: 27px;\r\n}\r\n\r\n.donations .donations__submenu-item_active button {\r\n    background: #FFD401;\r\n}\r\n\r\n.donations__menu :first-child, .donations__submenu :first-child{\r\n    margin-left: 0px;\r\n}\r\n\r\n.donations .donations__desc {\r\n    margin-top: 36px;\r\n    transition: height 0.15s ease-out;\r\n}\r\n\r\n.donations .donations__mobilepay {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.donations .donations__mobilepay-desc {\r\n    max-width: 700px;\r\n    margin: 0px;\r\n    padding: 30px;\r\n    background: #F8F8F8;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 20px;\r\n    text-align: left;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n\r\n.donations .donations__button {\r\n    margin-left: 96px;\r\n    padding: 24px 105px;\r\n    background: #FFD401;\r\n    border-radius: 114px;\r\n    font-family: 'MontserratBold';\r\n    font-size: 23px;\r\n    line-height: 29px;\r\n    color: #0E0E0E;\r\n    text-decoration: none;\r\n}\r\n\r\n.donations .donations__banks-desc {\r\n    margin-top:28px;\r\n    font-family: 'MontserratRegular';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 32px;\r\n    color:#000000;\r\n    overflow-wrap: anywhere;\r\n}\r\n\r\n.donations .donations__banks-guide {\r\n    max-width: 700px;\r\n    margin: 0px;\r\n    padding: 28px 47px;\r\n    margin-top: 27px;\r\n    background: #F8F8F8;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 20px;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 32px;\r\n}\r\n\r\n.donations .donations__crypto {\r\n\r\n}\r\n\r\n.donations .donations__crypto-desc {\r\n    max-width: 700px;\r\n    margin: 0px;\r\n    padding: 28px 47px;\r\n    margin-top: 27px;\r\n    background: #F8F8F8;\r\n    color: #0E0E0E;\r\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 20px;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 32px;\r\n    overflow-wrap: anywhere;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .donations .donations__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .donations .donations__title {\r\n        margin-bottom: 25px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .donations .donations__menu-item button {\r\n        padding: 10px 35px;\r\n        font-size: 18px;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .donations .donations__submenu-item button {\r\n        padding: 10px 35px;\r\n        font-size: 18px;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .donations .donations__desc {\r\n        margin-top: 25px;\r\n    }\r\n\r\n    .donations .donations__mobilepay-desc {\r\n        padding: 25px;\r\n        font-size: 18px;\r\n        line-height: 25px;\r\n    }\r\n\r\n    .donations .button.donations__button {\r\n        margin-left: 56px;\r\n        padding: 20px 85px;\r\n        font-size: 18px;\r\n        line-height: 30px;\r\n    }\r\n\r\n    .donations .donations__menu-item, .donations .donations__submenu-item {\r\n        margin-left: 18px;\r\n    }\r\n\r\n    .donations__menu :first-child, .donations__submenu :first-child {\r\n        margin-left: 0px;\r\n    }\r\n\r\n    .donations .donations__banks-desc {\r\n        margin-top: 25px;\r\n    }\r\n\r\n    .donations .donations__banks-desc {\r\n        font-size: 18px;\r\n        line-height: 28px;\r\n    }\r\n\r\n    .donations .donations__banks-guide {\r\n        margin-top: 25px;\r\n        padding: 25px;\r\n        font-size: 18px;\r\n        line-height: 28px;\r\n    }\r\n\r\n    .donations .donations__crypto-desc {\r\n        margin-top: 25px;\r\n        padding: 25px;\r\n        font-size: 18px;\r\n        line-height: 26px;\r\n    }\r\n\r\n    .donations .donations__copy {\r\n        width: 18px;\r\n        height: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .donations .donations__title {\r\n        margin-bottom: 16px;\r\n        font-size: 30px;\r\n        line-height: 30px;\r\n    }\r\n    .donations .donations__menu-item button {\r\n        padding: 10px 20px;\r\n        font-size: 14px;\r\n        line-height: 16px;\r\n    }\r\n    .donations .donations__desc {\r\n        margin-top: 14px;\r\n    }\r\n    .donations .donations__mobilepay-desc {\r\n        padding: 20px;\r\n        font-size: 14px;\r\n        line-height: 18px;\r\n    }\r\n    .donations .button.donations__button {\r\n        margin-left: 50px;\r\n        padding: 9px 60px;\r\n        font-size: 16px;\r\n        line-height: 30px;\r\n    }\r\n    .donations .donations__mobilepay {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n    .donations .button.donations__button {\r\n        margin-left: 0px;\r\n        margin-top:25px;\r\n    }\r\n    .donations .donations__submenu-item button {\r\n        padding: 8px 18px;\r\n        font-size: 14px;\r\n        line-height: 14px;\r\n    }\r\n    .donations .donations__banks-desc {\r\n        font-size: 14px;\r\n        line-height: 22px;\r\n    }\r\n    .donations .donations__banks-desc {\r\n        margin-top: 18px;\r\n    }\r\n\r\n    .donations .donations__banks-guide {\r\n        margin-top: 16px;\r\n        padding: 20px;\r\n        font-size: 14px;\r\n        line-height: 20px;\r\n    }\r\n    .donations .donations__content {\r\n        padding-top: 30px;\r\n        padding-bottom: 50px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\r\n    .donations .donations__title {\r\n        margin-bottom: 0px;\r\n    }\r\n    .donations .donations__menu, .donations .donations__submenu {\r\n        flex-wrap: wrap;\r\n    }\r\n    .donations .donations__menu-item, .donations .donations__submenu-item {\r\n        margin-top: 15px;\r\n        margin-left: 0px;\r\n        margin-right: 15px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/fonts.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/fonts.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_KyivTypeSans_Heavy_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/KyivTypeSans-Heavy.woff2 */ "./assets/fonts/KyivTypeSans-Heavy.woff2");
/* harmony import */ var _fonts_KyivTypeSans_Heavy_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/KyivTypeSans-Heavy.woff */ "./assets/fonts/KyivTypeSans-Heavy.woff");
/* harmony import */ var _fonts_Montserrat_regular_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/Montserrat-regular.woff2 */ "./assets/fonts/Montserrat-regular.woff2");
/* harmony import */ var _fonts_Montserrat_regular_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/Montserrat-regular.woff */ "./assets/fonts/Montserrat-regular.woff");
/* harmony import */ var _fonts_Montserrat_Bold_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fonts/Montserrat-Bold.woff */ "./assets/fonts/Montserrat-Bold.woff");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KyivTypeSans_Heavy_woff2__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KyivTypeSans_Heavy_woff__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_regular_woff2__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_regular_woff__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_Montserrat_Bold_woff__WEBPACK_IMPORTED_MODULE_6__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: KyivTypeSans;\r\n    font-weight: 800;\r\n    font-style: normal;\r\n    text-rendering: optimizeLegibility;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n }\r\n\r\n @font-face {\r\n    font-family: MontserratRegular;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    text-rendering: optimizeLegibility;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\r\n }\r\n\r\n @font-face {\r\n    font-family: MontserratBold;\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    text-rendering: optimizeLegibility;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\");\r\n }\r\n\r\n @media screen and (max-width: 768px) {  \r\n   .footer .footer__navigation-footer {\r\n      flex-wrap: wrap;\r\n  }\r\n }", "",{"version":3,"sources":["webpack://assets/css/fonts.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,kCAAkC;IAClC,oHAAqH;CACxH;;CAEA;IACG,8BAA8B;IAC9B,gBAAgB;IAChB,kBAAkB;IAClB,kCAAkC;IAClC,oHAAqH;CACxH;;CAEA;IACG,2BAA2B;IAC3B,gBAAgB;IAChB,kBAAkB;IAClB,kCAAkC;IAClC,oHAA8G;CACjH;;CAEA;GACE;MACG,eAAe;EACnB;CACD","sourcesContent":["@font-face {\r\n    font-family: KyivTypeSans;\r\n    font-weight: 800;\r\n    font-style: normal;\r\n    text-rendering: optimizeLegibility;\r\n    src: url(\"../fonts/KyivTypeSans-Heavy.woff2\") format(\"woff2\"), url(\"../fonts/KyivTypeSans-Heavy.woff\") format(\"woff\");\r\n }\r\n\r\n @font-face {\r\n    font-family: MontserratRegular;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    text-rendering: optimizeLegibility;\r\n    src: url(\"../fonts/Montserrat-regular.woff2\") format(\"woff2\"), url(\"../fonts/Montserrat-regular.woff\") format(\"woff\");\r\n }\r\n\r\n @font-face {\r\n    font-family: MontserratBold;\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    text-rendering: optimizeLegibility;\r\n    src: url(\"../fonts/Montserrat-Bold.woff\") format(\"woff2\"), url(\"../fonts/Montserrat-Bold.woff\") format(\"woff\");\r\n }\r\n\r\n @media screen and (max-width: 768px) {  \r\n   .footer .footer__navigation-footer {\r\n      flex-wrap: wrap;\r\n  }\r\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/footer.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/footer.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\r\n    background: #015BBB;\r\n}\r\n\r\n.footer .footer__content {\r\n    padding: 67px 0px;\r\n}\r\n\r\n.footer .footer__navigation-footer {\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.footer .navigation-footer__item {\r\n    margin-right: 44px;\r\n    color: #FFFFFF;\r\n    opacity: 0.6;\r\n    -webkit-transition: opacity .478s ease;\r\n    transition: opacity .478s ease;\r\n}\r\n\r\n.footer .navigation-footer__item:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.footer .navigation-footer__link {\r\n    font-family: 'MontserratRegular';\r\n    font-size: 22px;\r\n    line-height: 26px;\r\n}\r\n\r\n.footer .footer__social-footer {\r\n    margin-top: 52px;\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.footer .social-footer__item {\r\n    margin-left: 55px;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.footer .social-footer__item:first-child {\r\n    margin-left: 0px;\r\n}\r\n\r\n.footer .social-footer__item div {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.footer .social-footer__icon {\r\n    cursor: pointer;\r\n}\r\n\r\n.footer .footer__description {\r\n    margin-top: 52px;\r\n    display: block;\r\n    text-align: center;\r\n    font-family: MontserratRegular;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .footer .footer__content {\r\n        padding: 50px 0px;\r\n    }\r\n\r\n    .footer .navigation-footer__item {\r\n        margin-right: 35px;\r\n    }\r\n\r\n    .footer .uk-link-reset.navigation-footer__link{\r\n        font-size: 18px;\r\n    }\r\n\r\n    .footer .footer__social-footer {\r\n        margin-top: 35px;\r\n    }\r\n\r\n    .footer .social-footer__item {\r\n        margin-left: 32px;\r\n    }\r\n\r\n    .footer .footer__description {\r\n        margin-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .footer .footer__navigation-footer {\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 0 20px;\r\n    }\r\n    .footer .footer__content {\r\n        padding: 30px 0px;\r\n    }\r\n    .footer .footer__social-footer {\r\n        margin-top: 20px;\r\n    }\r\n    .footer .footer__description {\r\n        margin-top: 20px;\r\n        font-size: 14px;\r\n    }\r\n    .footer .navigation-footer__item {\r\n        margin: 0px 10px;\r\n    }\r\n    .footer .uk-link-reset.navigation-footer__link {\r\n        font-size: 16px;\r\n        line-height: 35px;\r\n    }\r\n    .footer .social-footer__item {\r\n        margin-left: 20px;\r\n    }\r\n    .footer .social-footer__item div {\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/footer.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,sCAA8B;IAA9B,8BAA8B;AAClC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI;QACI,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,gBAAgB;QAChB,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,uBAAuB;QACvB,mBAAmB;QACnB,cAAc;IAClB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":[".footer {\r\n    background: #015BBB;\r\n}\r\n\r\n.footer .footer__content {\r\n    padding: 67px 0px;\r\n}\r\n\r\n.footer .footer__navigation-footer {\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.footer .navigation-footer__item {\r\n    margin-right: 44px;\r\n    color: #FFFFFF;\r\n    opacity: 0.6;\r\n    transition: opacity .478s ease;\r\n}\r\n\r\n.footer .navigation-footer__item:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.footer .navigation-footer__link {\r\n    font-family: 'MontserratRegular';\r\n    font-size: 22px;\r\n    line-height: 26px;\r\n}\r\n\r\n.footer .footer__social-footer {\r\n    margin-top: 52px;\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.footer .social-footer__item {\r\n    margin-left: 55px;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.footer .social-footer__item:first-child {\r\n    margin-left: 0px;\r\n}\r\n\r\n.footer .social-footer__item div {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.footer .social-footer__icon {\r\n    cursor: pointer;\r\n}\r\n\r\n.footer .footer__description {\r\n    margin-top: 52px;\r\n    display: block;\r\n    text-align: center;\r\n    font-family: MontserratRegular;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .footer .footer__content {\r\n        padding: 50px 0px;\r\n    }\r\n\r\n    .footer .navigation-footer__item {\r\n        margin-right: 35px;\r\n    }\r\n\r\n    .footer .uk-link-reset.navigation-footer__link{\r\n        font-size: 18px;\r\n    }\r\n\r\n    .footer .footer__social-footer {\r\n        margin-top: 35px;\r\n    }\r\n\r\n    .footer .social-footer__item {\r\n        margin-left: 32px;\r\n    }\r\n\r\n    .footer .footer__description {\r\n        margin-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .footer .footer__navigation-footer {\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 0 20px;\r\n    }\r\n    .footer .footer__content {\r\n        padding: 30px 0px;\r\n    }\r\n    .footer .footer__social-footer {\r\n        margin-top: 20px;\r\n    }\r\n    .footer .footer__description {\r\n        margin-top: 20px;\r\n        font-size: 14px;\r\n    }\r\n    .footer .navigation-footer__item {\r\n        margin: 0px 10px;\r\n    }\r\n    .footer .uk-link-reset.navigation-footer__link {\r\n        font-size: 16px;\r\n        line-height: 35px;\r\n    }\r\n    .footer .social-footer__item {\r\n        margin-left: 20px;\r\n    }\r\n    .footer .social-footer__item div {\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/globals.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button {\r\n    position: relative;\r\n    width: 306px;\r\n    height: 81px;\r\n    border-radius: 120px;\r\n    background: #FFD401;\r\n    border: 0px transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.button::after{\r\n    position: absolute;\r\n    top:0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    content: \"\";\r\n    -webkit-box-shadow: 0px 0px 24px 0px rgb(255 227 0);\r\n            box-shadow: 0px 0px 24px 0px rgb(255 227 0);\r\n    border-radius: 120px;\r\n    opacity: 0;\r\n    -webkit-transition: opacity 0.3s ease-in-out;\r\n    transition: opacity 0.3s ease-in-out;         \r\n}\r\n\r\nbutton:hover::after {\r\n    opacity: 1;\r\n}\r\n\r\n.button a {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-decoration: none;\r\n    font-family: 'MontserratBold';\r\n    color: #0E0E0E;\r\n    font-size: 28px;\r\n    line-height: 35px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .button {\r\n        width: 256px;\r\n        height: 71px;\r\n    }\r\n\r\n    .button a {\r\n        font-size: 22px;\r\n        line-height: 30px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/globals.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,WAAW;IACX,YAAY;IACZ,WAAW;IACX,mDAA2C;YAA3C,2CAA2C;IAC3C,oBAAoB;IACpB,UAAU;IACV,4CAAoC;IAApC,oCAAoC;AACxC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;IACrB,6BAA6B;IAC7B,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI;QACI,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,eAAe;QACf,iBAAiB;IACrB;AACJ","sourcesContent":[".button {\r\n    position: relative;\r\n    width: 306px;\r\n    height: 81px;\r\n    border-radius: 120px;\r\n    background: #FFD401;\r\n    border: 0px transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n.button::after{\r\n    position: absolute;\r\n    top:0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    content: \"\";\r\n    box-shadow: 0px 0px 24px 0px rgb(255 227 0);\r\n    border-radius: 120px;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease-in-out;         \r\n}\r\n\r\nbutton:hover::after {\r\n    opacity: 1;\r\n}\r\n\r\n.button a {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-decoration: none;\r\n    font-family: 'MontserratBold';\r\n    color: #0E0E0E;\r\n    font-size: 28px;\r\n    line-height: 35px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .button {\r\n        width: 256px;\r\n        height: 71px;\r\n    }\r\n\r\n    .button a {\r\n        font-size: 22px;\r\n        line-height: 30px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/mission.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/mission.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mission .mission__content {\r\n    padding-top: 74px;\r\n    padding-bottom: 72px;\r\n}\r\n\r\n.mission .mission__title {\r\n    margin-bottom: 74px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 81px;\r\n}\r\n\r\n.mission-card {\r\n    height: 100%;\r\n    background: #F8F8F8;\r\n    border-radius: 20px;\r\n    -webkit-box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\r\n            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.mission-card .mission-card__image {\r\n    padding-top:45px;\r\n    margin: 0 auto;\r\n    width: 88px;\r\n    height: 88px;\r\n}\r\n\r\n.mission-card .mission-card__title {\r\n    font-family: KyivTypeSans;\r\n    font-size: 25px;\r\n    line-height: 30px;\r\n    margin-top: 22px;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.mission-card .mission-card__description {\r\n    padding: 0 50px;\r\n    padding-bottom: 40px;\r\n    font-family: MontserratRegular;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: left;\r\n}\r\n\r\n.mission__slider {\r\n    cursor: -webkit-grab;\r\n    cursor: grab;\r\n}\r\n\r\n.mission__slider .uk-slidenav-position, .mission__slider .uk-slidenav {\r\n    display: block;\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5);\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .mission .mission__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .mission .mission__title { \r\n        margin-bottom: 10px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .mission-card .mission-card__image {\r\n        width: 68px;\r\n        height: 68px;\r\n    }\r\n\r\n    .mission-card .mission-card__title {\r\n        font-size: 22px;\r\n        line-height: 24px;\r\n        margin-bottom: 0px\r\n    }\r\n\r\n    .mission-card .mission-card__description {\r\n        margin-top: 25px;\r\n        margin-bottom: 40px;\r\n        padding: 0 40px;\r\n        font-size: 18px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .mission-grid > .mission-grid__item {\r\n        padding-top: 30px;\r\n    }\r\n\r\n    .mission-grid__item {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .mission .mission__title {\r\n        margin-bottom: 0px;\r\n        font-size: 30px;\r\n        line-height: normal;\r\n        line-height: initial;\r\n        /* text-align: center; */\r\n    }\r\n    .mission-card .mission-card__title {\r\n        font-size: 18px;\r\n        line-height: 18px;\r\n    }\r\n    .mission-card .mission-card__description {\r\n        margin-top: 14px;\r\n        margin-bottom: 40px;\r\n        padding: 0 30px;\r\n        font-size: 14px;\r\n        line-height: 18px;\r\n    }\r\n    .mission .mission__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n    .mission__slider .uk-slidenav-position, .mission__slider .uk-slidenav {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .mission .mission__title {\r\n        text-align: center;\r\n    }\r\n    .mission-grid__item {\r\n        width: 100%;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://assets/css/mission.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,mDAA2C;YAA3C,2CAA2C;AAC/C;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,oBAAoB;IACpB,8BAA8B;IAC9B,eAAe;IACf,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,oBAAY;IAAZ,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,6BAAqB;YAArB,qBAAqB;AACzB;;AAEA;IACI;QACI,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,mBAAmB;QACnB,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,eAAe;QACf,iBAAiB;QACjB;IACJ;;IAEA;QACI,gBAAgB;QAChB,mBAAmB;QACnB,eAAe;QACf,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,kBAAkB;QAClB,eAAe;QACf,mBAAoB;QAApB,oBAAoB;QACpB,wBAAwB;IAC5B;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,gBAAgB;QAChB,mBAAmB;QACnB,eAAe;QACf,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,iBAAiB;QACjB,oBAAoB;IACxB;IACA;QACI,2BAAmB;gBAAnB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,kBAAkB;IACtB;IACA;QACI,WAAW;IACf;;AAEJ","sourcesContent":[".mission .mission__content {\r\n    padding-top: 74px;\r\n    padding-bottom: 72px;\r\n}\r\n\r\n.mission .mission__title {\r\n    margin-bottom: 74px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 81px;\r\n}\r\n\r\n.mission-card {\r\n    height: 100%;\r\n    background: #F8F8F8;\r\n    border-radius: 20px;\r\n    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.mission-card .mission-card__image {\r\n    padding-top:45px;\r\n    margin: 0 auto;\r\n    width: 88px;\r\n    height: 88px;\r\n}\r\n\r\n.mission-card .mission-card__title {\r\n    font-family: KyivTypeSans;\r\n    font-size: 25px;\r\n    line-height: 30px;\r\n    margin-top: 22px;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.mission-card .mission-card__description {\r\n    padding: 0 50px;\r\n    padding-bottom: 40px;\r\n    font-family: MontserratRegular;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: left;\r\n}\r\n\r\n.mission__slider {\r\n    cursor: grab;\r\n}\r\n\r\n.mission__slider .uk-slidenav-position, .mission__slider .uk-slidenav {\r\n    display: block;\r\n    transform: scale(1.5);\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .mission .mission__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .mission .mission__title { \r\n        margin-bottom: 10px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n\r\n    .mission-card .mission-card__image {\r\n        width: 68px;\r\n        height: 68px;\r\n    }\r\n\r\n    .mission-card .mission-card__title {\r\n        font-size: 22px;\r\n        line-height: 24px;\r\n        margin-bottom: 0px\r\n    }\r\n\r\n    .mission-card .mission-card__description {\r\n        margin-top: 25px;\r\n        margin-bottom: 40px;\r\n        padding: 0 40px;\r\n        font-size: 18px;\r\n        line-height: 24px;\r\n    }\r\n\r\n    .mission-grid > .mission-grid__item {\r\n        padding-top: 30px;\r\n    }\r\n\r\n    .mission-grid__item {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .mission .mission__title {\r\n        margin-bottom: 0px;\r\n        font-size: 30px;\r\n        line-height: initial;\r\n        /* text-align: center; */\r\n    }\r\n    .mission-card .mission-card__title {\r\n        font-size: 18px;\r\n        line-height: 18px;\r\n    }\r\n    .mission-card .mission-card__description {\r\n        margin-top: 14px;\r\n        margin-bottom: 40px;\r\n        padding: 0 30px;\r\n        font-size: 14px;\r\n        line-height: 18px;\r\n    }\r\n    .mission .mission__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n    .mission__slider .uk-slidenav-position, .mission__slider .uk-slidenav {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .mission .mission__title {\r\n        text-align: center;\r\n    }\r\n    .mission-grid__item {\r\n        width: 100%;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/navbar.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/navbar.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navbar {\r\n    margin: 51px 40px;\r\n }\r\n \r\n.navbar .navbar__logo {\r\n    display: block;\r\n    width: 105px;\r\n    height: 105px;\r\n    padding-right: 45px;\r\n}\r\n\r\n.navbar .navbar__menu-item {\r\n    position: relative;\r\n    padding: 22px;\r\n    text-transform: none;\r\n    font-family: 'MontserratRegular';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 22px;\r\n    line-height: 7px;\r\n    opacity: 0.6;\r\n    -webkit-transition: opacity .478s ease;\r\n    transition: opacity .478s ease;\r\n}\r\n\r\n.navbar .navbar__menu-item:hover {\r\n    opacity: 1;\r\n    -webkit-transition: opacity .775s ease;\r\n    transition: opacity .775s ease;\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar .navbar__menu-item_active {\r\n    cursor: default;\r\n    opacity: 1;\r\n}\r\n\r\n.navbar .navbar__logo {\r\n    display: block;\r\n    width: 105px;\r\n    height: 105px;\r\n    padding-right: 45px;\r\n}\r\n\r\n.navbar .navbar__right {\r\n    list-style: none;\r\n}\r\n\r\n.navbar .navbar__right button {\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n}\r\n\r\n.navbar__mobile {\r\n    display: none;\r\n}\r\n\r\n.navbar__mobile-wrap {\r\n    background: black;\r\n}\r\n\r\n.navbar__mobile-menu {\r\n    margin-top: 60px;\r\n    list-style: none;\r\n}\r\n\r\n.navbar__mobile-menu li {\r\n    margin-top: 16px;\r\n}\r\n\r\n.navbar__mobile-lang-swither {\r\n    margin-top: 30px;\r\n    list-style: none;\r\n    display: flex;\r\n}\r\n\r\n@media screen and (max-width: 1200px) { \r\n    .navbar {\r\n        margin: 40px;\r\n    }\r\n    .navbar .navbar__logo {\r\n        width: 80px;\r\n        height: 80px;\r\n    }\r\n    .navbar .navbar__menu-item {\r\n        padding: 15px;\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .navbar .navbar__menu-item {\r\n        padding: 10px;\r\n        font-size: 20px;\r\n    }\r\n    .navbar__desktop {\r\n        display: none;\r\n    }\r\n    .navbar__mobile {\r\n        display: block;\r\n    }\r\n    .navbar .navbar__logo {\r\n        width: 60px;\r\n        height: 60px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    .uk-navbar-right.navbar__mobile .uk-navbar-toggle {\r\n        -webkit-transform: scale(0.8);\r\n                transform: scale(0.8);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .navbar {\r\n        margin: 20px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/navbar.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;CACpB;;AAED;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,oBAAoB;IACpB,gCAAgC;IAChC,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,sCAA8B;IAA9B,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,sCAA8B;IAA9B,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,gCAAgC;IAChC,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,aAAa;QACb,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,aAAa;QACb,eAAe;IACnB;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,WAAW;QACX,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,6BAAqB;gBAArB,qBAAqB;IACzB;AACJ;;AAEA;IACI;QACI,YAAY;IAChB;AACJ","sourcesContent":[".navbar {\r\n    margin: 51px 40px;\r\n }\r\n \r\n.navbar .navbar__logo {\r\n    display: block;\r\n    width: 105px;\r\n    height: 105px;\r\n    padding-right: 45px;\r\n}\r\n\r\n.navbar .navbar__menu-item {\r\n    position: relative;\r\n    padding: 22px;\r\n    text-transform: none;\r\n    font-family: 'MontserratRegular';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 22px;\r\n    line-height: 7px;\r\n    opacity: 0.6;\r\n    transition: opacity .478s ease;\r\n}\r\n\r\n.navbar .navbar__menu-item:hover {\r\n    opacity: 1;\r\n    transition: opacity .775s ease;\r\n    text-decoration: none;\r\n}\r\n\r\n.navbar .navbar__menu-item_active {\r\n    cursor: default;\r\n    opacity: 1;\r\n}\r\n\r\n.navbar .navbar__logo {\r\n    display: block;\r\n    width: 105px;\r\n    height: 105px;\r\n    padding-right: 45px;\r\n}\r\n\r\n.navbar .navbar__right {\r\n    list-style: none;\r\n}\r\n\r\n.navbar .navbar__right button {\r\n    background: none;\r\n    border: none;\r\n    color: white;\r\n    cursor: pointer;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n}\r\n\r\n.navbar__mobile {\r\n    display: none;\r\n}\r\n\r\n.navbar__mobile-wrap {\r\n    background: black;\r\n}\r\n\r\n.navbar__mobile-menu {\r\n    margin-top: 60px;\r\n    list-style: none;\r\n}\r\n\r\n.navbar__mobile-menu li {\r\n    margin-top: 16px;\r\n}\r\n\r\n.navbar__mobile-lang-swither {\r\n    margin-top: 30px;\r\n    list-style: none;\r\n    display: flex;\r\n}\r\n\r\n@media screen and (max-width: 1200px) { \r\n    .navbar {\r\n        margin: 40px;\r\n    }\r\n    .navbar .navbar__logo {\r\n        width: 80px;\r\n        height: 80px;\r\n    }\r\n    .navbar .navbar__menu-item {\r\n        padding: 15px;\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .navbar .navbar__menu-item {\r\n        padding: 10px;\r\n        font-size: 20px;\r\n    }\r\n    .navbar__desktop {\r\n        display: none;\r\n    }\r\n    .navbar__mobile {\r\n        display: block;\r\n    }\r\n    .navbar .navbar__logo {\r\n        width: 60px;\r\n        height: 60px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    .uk-navbar-right.navbar__mobile .uk-navbar-toggle {\r\n        transform: scale(0.8);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .navbar {\r\n        margin: 20px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/pages/article-page.css":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/pages/article-page.css ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".article-page .donations .donations__content {\r\n    padding-top: 23px;\r\n}\r\n\r\n.article-page .navbar__center, .article-page .navbar__right, .article-page .navbar__menu-item {\r\n    color: black;\r\n}\r\n\r\n.article-page .navbar .navbar__menu-item_active { \r\n    background: black;\r\n    color: white;\r\n}\r\n\r\n.article-page .article-page__content {\r\n    margin-top:37px;\r\n    position: relative;\r\n}\r\n\r\n.article-page .article-page-item__wrapper {\r\n    position: relative;\r\n    z-index: 2;\r\n    overflow: hidden;\r\n}\r\n\r\n.article-page .article-page-item__wrapper, .article-page-item__bg > div {\r\n    border-radius: 20px;\r\n}\r\n\r\n.article-page .article-page-item__bg > div {\r\n    height: 700px;\r\n}\r\n\r\n.article-page .article-page-item__bg > div > img {\r\n    -webkit-object-fit: cover !important;\r\n            object-fit: cover !important;\r\n}\r\n\r\n.article-page .article-page-item__filter {\r\n    position: absolute;\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(#000000));\r\n    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, #000000 100%);\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);\r\n}\r\n\r\n.article-page .article-page-item__content {\r\n    position: absolute;\r\n    z-index: 3;\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n    padding: 58px 53px;\r\n    width: calc(100% - 106px);\r\n}\r\n\r\n.article-page .article-page-item__title {\r\n    margin-bottom: 10px;\r\n    font-family: 'KyivTypeSans';\r\n    font-size: 68px;\r\n    line-height: 82px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.article-page .article-page-item__desc {\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    color: #FFFFFF; \r\n}\r\n\r\n.article-page-article {\r\n    margin-top: 51px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.article-page-article p {\r\n    margin: 0px;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 28px;\r\n    color: #0E0E0E;\r\n    margin-bottom: 28px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .article-page .article-page-item__title {\r\n        font-size: 55px;\r\n        line-height: 55px;\r\n    }\r\n    .article-page .article-page-item__desc {\r\n        font-size: 18px;\r\n        line-height: 18px;\r\n    }\r\n    .article-page .article-page-item__content {\r\n        padding: 35px;\r\n    }\r\n    .article-page-article {\r\n        margin-top: 51px;\r\n        margin-left: unset;\r\n        margin-right: unset;\r\n        width: 100%;\r\n    }\r\n    .article-page-article p {\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        margin-bottom: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .article-page .article-page-item__title {\r\n        font-size: 45px;\r\n        line-height: 45px;\r\n    }\r\n    .article-page-article {\r\n        margin-top: 40px;\r\n        margin-bottom: -10px;\r\n    }\r\n    .article-page-article p {\r\n        font-size: 16px;\r\n        margin-bottom: 16px;\r\n    }\r\n    .article-page .navbar__mobile .uk-navbar-toggle { \r\n        background: black;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    .article-page .article-page-item__content {\r\n        padding: 30px 0px;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .article-page .article-page-item__title {\r\n        font-size: 35px;\r\n        line-height: 35px;\r\n    }\r\n    .article-page .article-page-item__desc {\r\n        font-size: 16px;\r\n        line-height: 16px;\r\n    }\r\n    .article-page-article {\r\n        margin-top: 30px;\r\n    }\r\n    .article-page .article-page-item__content {\r\n        padding: 25px 0px;\r\n    }\r\n    .article-page-article p {\r\n        font-size: 14px;\r\n        margin-bottom: 14px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/pages/article-page.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oCAA4B;YAA5B,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,gGAAsE;IAAtE,2EAAsE;IAAtE,sEAAsE;AAC1E;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,oCAA4B;YAA5B,4BAA4B;IAC5B,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,2BAA2B;IAC3B,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gCAAgC;IAChC,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,aAAa;IACjB;IACA;QACI,gBAAgB;QAChB,kBAAkB;QAClB,mBAAmB;QACnB,WAAW;IACf;IACA;QACI,eAAe;QACf,iBAAiB;QACjB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,gBAAgB;QAChB,oBAAoB;IACxB;IACA;QACI,eAAe;QACf,mBAAmB;IACvB;IACA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,iBAAiB;QACjB,WAAW;QACX,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;QACf,mBAAmB;IACvB;AACJ","sourcesContent":[".article-page .donations .donations__content {\r\n    padding-top: 23px;\r\n}\r\n\r\n.article-page .navbar__center, .article-page .navbar__right, .article-page .navbar__menu-item {\r\n    color: black;\r\n}\r\n\r\n.article-page .navbar .navbar__menu-item_active { \r\n    background: black;\r\n    color: white;\r\n}\r\n\r\n.article-page .article-page__content {\r\n    margin-top:37px;\r\n    position: relative;\r\n}\r\n\r\n.article-page .article-page-item__wrapper {\r\n    position: relative;\r\n    z-index: 2;\r\n    overflow: hidden;\r\n}\r\n\r\n.article-page .article-page-item__wrapper, .article-page-item__bg > div {\r\n    border-radius: 20px;\r\n}\r\n\r\n.article-page .article-page-item__bg > div {\r\n    height: 700px;\r\n}\r\n\r\n.article-page .article-page-item__bg > div > img {\r\n    object-fit: cover !important;\r\n}\r\n\r\n.article-page .article-page-item__filter {\r\n    position: absolute;\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);\r\n}\r\n\r\n.article-page .article-page-item__content {\r\n    position: absolute;\r\n    z-index: 3;\r\n    transform: translateY(-100%);\r\n    padding: 58px 53px;\r\n    width: calc(100% - 106px);\r\n}\r\n\r\n.article-page .article-page-item__title {\r\n    margin-bottom: 10px;\r\n    font-family: 'KyivTypeSans';\r\n    font-size: 68px;\r\n    line-height: 82px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.article-page .article-page-item__desc {\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    color: #FFFFFF; \r\n}\r\n\r\n.article-page-article {\r\n    margin-top: 51px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.article-page-article p {\r\n    margin: 0px;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 28px;\r\n    color: #0E0E0E;\r\n    margin-bottom: 28px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .article-page .article-page-item__title {\r\n        font-size: 55px;\r\n        line-height: 55px;\r\n    }\r\n    .article-page .article-page-item__desc {\r\n        font-size: 18px;\r\n        line-height: 18px;\r\n    }\r\n    .article-page .article-page-item__content {\r\n        padding: 35px;\r\n    }\r\n    .article-page-article {\r\n        margin-top: 51px;\r\n        margin-left: unset;\r\n        margin-right: unset;\r\n        width: 100%;\r\n    }\r\n    .article-page-article p {\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        margin-bottom: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .article-page .article-page-item__title {\r\n        font-size: 45px;\r\n        line-height: 45px;\r\n    }\r\n    .article-page-article {\r\n        margin-top: 40px;\r\n        margin-bottom: -10px;\r\n    }\r\n    .article-page-article p {\r\n        font-size: 16px;\r\n        margin-bottom: 16px;\r\n    }\r\n    .article-page .navbar__mobile .uk-navbar-toggle { \r\n        background: black;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    .article-page .article-page-item__content {\r\n        padding: 30px 0px;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .article-page .article-page-item__title {\r\n        font-size: 35px;\r\n        line-height: 35px;\r\n    }\r\n    .article-page .article-page-item__desc {\r\n        font-size: 16px;\r\n        line-height: 16px;\r\n    }\r\n    .article-page-article {\r\n        margin-top: 30px;\r\n    }\r\n    .article-page .article-page-item__content {\r\n        padding: 25px 0px;\r\n    }\r\n    .article-page-article p {\r\n        font-size: 14px;\r\n        margin-bottom: 14px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/pages/home-page.css":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/pages/home-page.css ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".home-page .navbar__center, .home-page .navbar__right, .home-page .navbar__menu-item {\r\n    color: white;\r\n}\r\n\r\n.home-page  .navbar .navbar__menu-item_active { \r\n    background: white;\r\n    color: black;\r\n}\r\n\r\n.navbar .navbar__menu-item_active {\r\n    cursor: default;\r\n    opacity: 1;\r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .home-page .navbar__mobile { \r\n        background: none;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/pages/home-page.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI;QACI,gBAAgB;IACpB;AACJ","sourcesContent":[".home-page .navbar__center, .home-page .navbar__right, .home-page .navbar__menu-item {\r\n    color: white;\r\n}\r\n\r\n.home-page  .navbar .navbar__menu-item_active { \r\n    background: white;\r\n    color: black;\r\n}\r\n\r\n.navbar .navbar__menu-item_active {\r\n    cursor: default;\r\n    opacity: 1;\r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .home-page .navbar__mobile { \r\n        background: none;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/pages/team-page.css":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/pages/team-page.css ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".team-page .navbar__center, .article-page .navbar__right, .article-page .navbar__menu-item {\r\n    color: black;\r\n}\r\n\r\n.team-page .navbar .navbar__menu-item_active { \r\n    background: black;\r\n    color: white;\r\n}\r\n\r\n.team-page .team .team__content {\r\n    margin-bottom: 78px;\r\n}\r\n\r\n.team-page .team .team-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    margin-left: -35px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.team-page .team .team-header__heading {\r\n    margin: 0px;\r\n    margin-left: 35px;\r\n    font-family: KyivTypeSans;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 65px;\r\n    line-height: 78px;\r\n    text-transform: uppercase;\r\n    color: #727272;\r\n    border-bottom: 1px dashed black;\r\n    padding-bottom: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.team-page .team .team-header__heading_active {\r\n    border: none;\r\n    order: 1;\r\n    color: black;\r\n} \r\n\r\n.team-page .team .team-structure .team-structure__scheme {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.team-page .team .team-structure .team-structure__desc {\r\n    margin-bottom: 82px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 80%;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    color: black;\r\n}\r\n\r\n.team-page .team .team-member {\r\n    margin-bottom: 38px;\r\n}\r\n\r\n.team-page .team .team-member__wrapper {\r\n    margin: 0 auto;\r\n    max-width: 258px;\r\n}\r\n\r\n.team-page .team  .team-member__image {\r\n    margin-bottom: 38px;\r\n}\r\n\r\n.team-page .team  .team-member__image > div > img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.team-page .team .team-member__title {\r\n    margin: 0px;\r\n    margin-bottom: 17px;\r\n    font-family: KyivTypeSans;\r\n    font-weight: 900;\r\n    font-size: 25px;\r\n    line-height: 30px;\r\n    color: black;\r\n}\r\n\r\n.team-page .team .team-member__description {\r\n    margin: 0px;\r\n    font-family: 'MontserratRegular';\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) { \r\n    .team-page .team .team-header__heading {\r\n        font-size: 50px;\r\n        line-height: 50px;\r\n    }\r\n    .team-page .team .team-member {\r\n        margin-bottom: 38px;\r\n        width: 33%;\r\n    }\r\n    .team-page .team .team-member__image {\r\n        margin-bottom: 25px;\r\n    }\r\n    .team-page .team .team-member__title {\r\n        margin-bottom: 14px;\r\n        font-size: 20px;\r\n        line-height: 20px;\r\n    }\r\n    .team-page .team .team-member__description {\r\n        font-size: 16px;\r\n        line-height: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .team-page .team .team-header__heading {\r\n        font-size: 30px;\r\n        line-height: 30px;\r\n        margin-left: 20px;\r\n    }\r\n    .team-page .team .team-member {\r\n        margin-bottom: 38px;\r\n    }\r\n    .team-page .team .team-structure .team-structure__desc {\r\n        width: 100%;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        margin-bottom: 50px;\r\n        font-size: 16px;\r\n        line-height: 22px;\r\n    }\r\n    \r\n    .team-page .navbar__mobile .uk-navbar-toggle { \r\n        background: black;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    .team-page .team .team-member {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .team-page .team .team-header__heading {\r\n        text-align: center;\r\n    }\r\n    .team-page .team .team-member {\r\n        width: 100%;\r\n    }\r\n    .team-page .team .team-structure .team-structure__desc {\r\n        font-size: 14px;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://assets/css/pages/team-page.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,cAAc;IACd,+BAA+B;IAC/B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,gCAAgC;IAChC,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,mBAAmB;QACnB,UAAU;IACd;IACA;QACI,mBAAmB;IACvB;IACA;QACI,mBAAmB;QACnB,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;QACjB,iBAAiB;IACrB;IACA;QACI,mBAAmB;IACvB;IACA;QACI,WAAW;QACX,kBAAkB;QAClB,iBAAiB;QACjB,mBAAmB;QACnB,eAAe;QACf,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,kBAAkB;IACtB;IACA;QACI,WAAW;IACf;IACA;QACI,eAAe;IACnB;AACJ","sourcesContent":[".team-page .navbar__center, .article-page .navbar__right, .article-page .navbar__menu-item {\r\n    color: black;\r\n}\r\n\r\n.team-page .navbar .navbar__menu-item_active { \r\n    background: black;\r\n    color: white;\r\n}\r\n\r\n.team-page .team .team__content {\r\n    margin-bottom: 78px;\r\n}\r\n\r\n.team-page .team .team-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    margin-left: -35px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.team-page .team .team-header__heading {\r\n    margin: 0px;\r\n    margin-left: 35px;\r\n    font-family: KyivTypeSans;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 65px;\r\n    line-height: 78px;\r\n    text-transform: uppercase;\r\n    color: #727272;\r\n    border-bottom: 1px dashed black;\r\n    padding-bottom: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.team-page .team .team-header__heading_active {\r\n    border: none;\r\n    order: 1;\r\n    color: black;\r\n} \r\n\r\n.team-page .team .team-structure .team-structure__scheme {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.team-page .team .team-structure .team-structure__desc {\r\n    margin-bottom: 82px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 80%;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    color: black;\r\n}\r\n\r\n.team-page .team .team-member {\r\n    margin-bottom: 38px;\r\n}\r\n\r\n.team-page .team .team-member__wrapper {\r\n    margin: 0 auto;\r\n    max-width: 258px;\r\n}\r\n\r\n.team-page .team  .team-member__image {\r\n    margin-bottom: 38px;\r\n}\r\n\r\n.team-page .team  .team-member__image > div > img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.team-page .team .team-member__title {\r\n    margin: 0px;\r\n    margin-bottom: 17px;\r\n    font-family: KyivTypeSans;\r\n    font-weight: 900;\r\n    font-size: 25px;\r\n    line-height: 30px;\r\n    color: black;\r\n}\r\n\r\n.team-page .team .team-member__description {\r\n    margin: 0px;\r\n    font-family: 'MontserratRegular';\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) { \r\n    .team-page .team .team-header__heading {\r\n        font-size: 50px;\r\n        line-height: 50px;\r\n    }\r\n    .team-page .team .team-member {\r\n        margin-bottom: 38px;\r\n        width: 33%;\r\n    }\r\n    .team-page .team .team-member__image {\r\n        margin-bottom: 25px;\r\n    }\r\n    .team-page .team .team-member__title {\r\n        margin-bottom: 14px;\r\n        font-size: 20px;\r\n        line-height: 20px;\r\n    }\r\n    .team-page .team .team-member__description {\r\n        font-size: 16px;\r\n        line-height: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .team-page .team .team-header__heading {\r\n        font-size: 30px;\r\n        line-height: 30px;\r\n        margin-left: 20px;\r\n    }\r\n    .team-page .team .team-member {\r\n        margin-bottom: 38px;\r\n    }\r\n    .team-page .team .team-structure .team-structure__desc {\r\n        width: 100%;\r\n        text-align: center;\r\n        margin-top: -20px;\r\n        margin-bottom: 50px;\r\n        font-size: 16px;\r\n        line-height: 22px;\r\n    }\r\n    \r\n    .team-page .navbar__mobile .uk-navbar-toggle { \r\n        background: black;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) { \r\n    .team-page .team .team-member {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .team-page .team .team-header__heading {\r\n        text-align: center;\r\n    }\r\n    .team-page .team .team-member {\r\n        width: 100%;\r\n    }\r\n    .team-page .team .team-structure .team-structure__desc {\r\n        font-size: 14px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/partners.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/partners.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".partners {\r\n    background: #000000;\r\n}\r\n\r\n.partners .partners__content {\r\n    padding-top: 64px;\r\n    padding-bottom: 87px;\r\n}\r\n\r\n.partners .partners__title {\r\n    margin-bottom: 46px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 81px;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .partners .partners__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .partners .partners__title {\r\n        margin-bottom: 25px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .partners .partners__title {\r\n        margin-bottom: 30px;\r\n        line-height: 30px;\r\n        font-size: 30px;\r\n    }\r\n    .partners .partners__content {\r\n        padding-top: 30px;\r\n        padding-bottom: 50px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .partners .partners__grid {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .partners__grid-item {\r\n        width: 75%;\r\n        margin-bottom: 30px;\r\n    }\r\n    .partners .partners__title{\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .partners__grid-item{\r\n        width: 100%;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/partners.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI;QACI,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;QACI,mBAAmB;QACnB,eAAe;QACf,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,mBAAmB;QACnB,iBAAiB;QACjB,eAAe;IACnB;IACA;QACI,iBAAiB;QACjB,oBAAoB;IACxB;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,mBAAmB;IACvB;IACA;QACI,UAAU;QACV,mBAAmB;IACvB;IACA;QACI,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,WAAW;IACf;AACJ","sourcesContent":[".partners {\r\n    background: #000000;\r\n}\r\n\r\n.partners .partners__content {\r\n    padding-top: 64px;\r\n    padding-bottom: 87px;\r\n}\r\n\r\n.partners .partners__title {\r\n    margin-bottom: 46px;\r\n    font-family: KyivTypeSans;\r\n    font-size: 68px;\r\n    line-height: 81px;\r\n    color: white;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .partners .partners__content {\r\n        padding-top: 40px;\r\n        padding-bottom: 60px;\r\n    }\r\n\r\n    .partners .partners__title {\r\n        margin-bottom: 25px;\r\n        font-size: 50px;\r\n        line-height: 62px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .partners .partners__title {\r\n        margin-bottom: 30px;\r\n        line-height: 30px;\r\n        font-size: 30px;\r\n    }\r\n    .partners .partners__content {\r\n        padding-top: 30px;\r\n        padding-bottom: 50px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .partners .partners__grid {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .partners__grid-item {\r\n        width: 75%;\r\n        margin-bottom: 30px;\r\n    }\r\n    .partners .partners__title{\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .partners__grid-item{\r\n        width: 100%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/reset.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/reset.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nol, ul {\r\n    margin:0px;\r\n    padding:0px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://assets/css/reset.css"],"names":[],"mappings":"AAAA;IACI,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["html {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nol, ul {\r\n    margin:0px;\r\n    padding:0px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/style.css":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/style.css ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./reset.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/reset.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./globals.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/globals.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./fonts.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/fonts.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_navbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./navbar.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/navbar.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_welcome_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./welcome.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/welcome.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./about.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/about.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_mission_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./mission.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/mission.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_articles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./articles.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/articles.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_donations_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./donations.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/donations.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_partners_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./partners.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/partners.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_win_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./win.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/win.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_contacts_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./contacts.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/contacts.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_footer_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./footer.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/footer.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_pages_home_page_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/home-page.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/pages/home-page.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_pages_article_page_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/article-page.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/pages/article-page.css");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_pages_team_page_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! -!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./pages/team-page.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/pages/team-page.css");
// Imports

















var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_reset_css__WEBPACK_IMPORTED_MODULE_1__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_globals_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_fonts_css__WEBPACK_IMPORTED_MODULE_3__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_navbar_css__WEBPACK_IMPORTED_MODULE_4__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_welcome_css__WEBPACK_IMPORTED_MODULE_5__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_about_css__WEBPACK_IMPORTED_MODULE_6__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_mission_css__WEBPACK_IMPORTED_MODULE_7__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_articles_css__WEBPACK_IMPORTED_MODULE_8__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_donations_css__WEBPACK_IMPORTED_MODULE_9__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_partners_css__WEBPACK_IMPORTED_MODULE_10__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_win_css__WEBPACK_IMPORTED_MODULE_11__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_contacts_css__WEBPACK_IMPORTED_MODULE_12__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_footer_css__WEBPACK_IMPORTED_MODULE_13__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_pages_home_page_css__WEBPACK_IMPORTED_MODULE_14__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_pages_article_page_css__WEBPACK_IMPORTED_MODULE_15__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_next_dist_compiled_css_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_1_node_modules_next_dist_compiled_postcss_loader_cjs_js_ruleSet_1_rules_2_oneOf_6_use_2_pages_team_page_css__WEBPACK_IMPORTED_MODULE_16__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#title {\n    letter-spacing: 0.4px;\n    font-size: 22px;\n    font-size: 1.375rem;\n    line-height: 1.13636;\n}\n\n#banner {\n    margin: 20px;\n    height: 800px;\n}\n\n#editor {\n    font-size: 16px;\n    font-size: 1rem;\n    line-height: 1.75;\n}\n\n.uk-navbar-container {\n    background: transparent !important;\n    font-family: Staatliches;\n}\n\nimg:hover {\n    opacity: 1;\n    -webkit-transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);\n    transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);\n}\n\n.scroll-top {\n    position: fixed;\n    right: 30px;\n    bottom: 30px;\n    display: flex;\n    width: 70px;\n    height: 70px;\n    margin: 0;\n    padding: 20px;\n    background: none;\n    border: none;\n    cursor: pointer;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    background: black;\n}\n\n.scroll-top  > div {\n    width: 100%;\n    height: 100%;\n}\n\n@media screen and (max-width: 1024px) {\n    .scroll-top {\n        position: fixed;\n        right: 30px;\n        bottom: 30px;\n        display: flex;\n        width: 50px;\n        height: 50px;\n        margin: 0;\n        z-index: 2;\n        padding: 15px;\n        background: none;\n        border: none;\n        cursor: pointer;\n        -webkit-transform: rotate(-90deg);\n        transform: rotate(-90deg);\n        background: black;\n    }\n}", "",{"version":3,"sources":["webpack://assets/css/style.css"],"names":[],"mappings":"AAkBA;IACI,qBAAqB;IACrB,eAAe;IACf,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kCAAkC;IAClC,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,qEAA6D;IAA7D,6DAA6D;AACjE;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,aAAa;IACb,WAAW;IACX,YAAY;IACZ,SAAS;IACT,aAAa;IACb,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,iCAAyB;YAAzB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI;QACI,eAAe;QACf,WAAW;QACX,YAAY;QACZ,aAAa;QACb,WAAW;QACX,YAAY;QACZ,SAAS;QACT,UAAU;QACV,aAAa;QACb,gBAAgB;QAChB,YAAY;QACZ,eAAe;QACf,iCAAiC;QACjC,yBAAyB;QACzB,iBAAiB;IACrB;AACJ","sourcesContent":["@import url('./reset.css');\n@import url(./globals.css);\n@import url('./fonts.css');\n@import url(./navbar.css);\n@import url(./welcome.css);\n@import url(./about.css);\n@import url(./mission.css);\n@import url(./articles.css);\n@import url('./donations.css');\n@import url(./partners.css);\n@import url(./win.css);\n@import url(./contacts.css);\n@import url(./footer.css);\n@import url(pages/home-page.css);\n@import url(pages/article-page.css);\n@import url(pages/team-page.css);\n\n\n#title {\n    letter-spacing: 0.4px;\n    font-size: 22px;\n    font-size: 1.375rem;\n    line-height: 1.13636;\n}\n\n#banner {\n    margin: 20px;\n    height: 800px;\n}\n\n#editor {\n    font-size: 16px;\n    font-size: 1rem;\n    line-height: 1.75;\n}\n\n.uk-navbar-container {\n    background: transparent !important;\n    font-family: Staatliches;\n}\n\nimg:hover {\n    opacity: 1;\n    transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);\n}\n\n.scroll-top {\n    position: fixed;\n    right: 30px;\n    bottom: 30px;\n    display: flex;\n    width: 70px;\n    height: 70px;\n    margin: 0;\n    padding: 20px;\n    background: none;\n    border: none;\n    cursor: pointer;\n    transform: rotate(-90deg);\n    background: black;\n}\n\n.scroll-top  > div {\n    width: 100%;\n    height: 100%;\n}\n\n@media screen and (max-width: 1024px) {\n    .scroll-top {\n        position: fixed;\n        right: 30px;\n        bottom: 30px;\n        display: flex;\n        width: 50px;\n        height: 50px;\n        margin: 0;\n        z-index: 2;\n        padding: 15px;\n        background: none;\n        border: none;\n        cursor: pointer;\n        -webkit-transform: rotate(-90deg);\n        transform: rotate(-90deg);\n        background: black;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/welcome.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/welcome.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n.welcome {\r\n    position: relative;\r\n    overflow: hidden;\r\n    min-height: 100vh;\r\n}\r\n\r\n.welcome .background {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    pointer-events: none;\r\n    z-index: -1;\r\n}\r\n\r\n.welcome .background, .welcome .background > div {\r\n    height: 100%;\r\n    width: 100%;    \r\n}\r\n\r\n.welcome .background > div > img {\r\n    -webkit-object-fit: cover !important;\r\n            object-fit: cover !important;\r\n}\r\n\r\n.welcome .welcome__heading {\r\n    margin: 0px;\r\n    font-family: 'KyivTypeSans';\r\n    font-size: 78px;\r\n    text-align: left;\r\n    color:white;\r\n}\r\n\r\n.welcome .welcome__block {\r\n    margin-top: 15vh;\r\n}\r\n\r\n.welcome .welcome__headingType {\r\n    font-family: 'MontserratRegular';\r\n    font-size: 48px;\r\n    color:white;\r\n}\r\n\r\n.welcome .welcome__desription {\r\n    max-width: 508px;\r\n    margin-top: 36px;\r\n    margin-bottom: 0px;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 24px;\r\n    text-align: left;\r\n    color:white;\r\n}\r\n\r\n.welcome .welcome__desription b {\r\n    color: #FFD401;\r\n}\r\n\r\n.welcome .welcome__button {\r\n    margin-top: 75px;\r\n    margin-bottom: 135px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .welcome {\r\n        min-height: unset;\r\n    }\r\n    .welcome .welcome__block {\r\n        margin-top: 5vh;\r\n    }\r\n\r\n    .welcome .welcome__heading {\r\n        font-size: 50px;\r\n    }\r\n\r\n    .welcome .welcome__headingType {\r\n        font-size: 34px;\r\n    }\r\n\r\n    .welcome .welcome__desription {\r\n        font-size: 20px;\r\n    }\r\n    .button a {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .welcome .welcome__block {\r\n        margin-top: 100px;\r\n        margin-bottom: 100px;\r\n    }\r\n    .welcome .welcome__heading {\r\n        font-size: 30px;\r\n    }\r\n    .welcome .welcome__headingType {\r\n        font-size: 24px;\r\n    }\r\n    .welcome .welcome__desription {\r\n        font-size: 16px;\r\n    }\r\n    .button {\r\n        width: 150px;\r\n        height: 50px;\r\n    }\r\n    .button a {\r\n        font-size: 16px;\r\n    }\r\n    .welcome .welcome__button {\r\n        margin-top: 15px;\r\n        margin-bottom: 70px;\r\n    }\r\n    .welcome .background, .welcome .background > div {\r\n        filter: brightness(0.7);\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/welcome.css"],"names":[],"mappings":";AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,OAAO;IACP,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,oCAA4B;YAA5B,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,eAAe;IACf,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,gCAAgC;IAChC,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI;QACI,iBAAiB;IACrB;IACA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,iBAAiB;QACjB,oBAAoB;IACxB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,YAAY;QACZ,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,uBAAuB;IAC3B;AACJ","sourcesContent":["\r\n.welcome {\r\n    position: relative;\r\n    overflow: hidden;\r\n    min-height: 100vh;\r\n}\r\n\r\n.welcome .background {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    pointer-events: none;\r\n    z-index: -1;\r\n}\r\n\r\n.welcome .background, .welcome .background > div {\r\n    height: 100%;\r\n    width: 100%;    \r\n}\r\n\r\n.welcome .background > div > img {\r\n    object-fit: cover !important;\r\n}\r\n\r\n.welcome .welcome__heading {\r\n    margin: 0px;\r\n    font-family: 'KyivTypeSans';\r\n    font-size: 78px;\r\n    text-align: left;\r\n    color:white;\r\n}\r\n\r\n.welcome .welcome__block {\r\n    margin-top: 15vh;\r\n}\r\n\r\n.welcome .welcome__headingType {\r\n    font-family: 'MontserratRegular';\r\n    font-size: 48px;\r\n    color:white;\r\n}\r\n\r\n.welcome .welcome__desription {\r\n    max-width: 508px;\r\n    margin-top: 36px;\r\n    margin-bottom: 0px;\r\n    font-family: 'MontserratRegular';\r\n    font-size: 24px;\r\n    text-align: left;\r\n    color:white;\r\n}\r\n\r\n.welcome .welcome__desription b {\r\n    color: #FFD401;\r\n}\r\n\r\n.welcome .welcome__button {\r\n    margin-top: 75px;\r\n    margin-bottom: 135px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .welcome {\r\n        min-height: unset;\r\n    }\r\n    .welcome .welcome__block {\r\n        margin-top: 5vh;\r\n    }\r\n\r\n    .welcome .welcome__heading {\r\n        font-size: 50px;\r\n    }\r\n\r\n    .welcome .welcome__headingType {\r\n        font-size: 34px;\r\n    }\r\n\r\n    .welcome .welcome__desription {\r\n        font-size: 20px;\r\n    }\r\n    .button a {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .welcome .welcome__block {\r\n        margin-top: 100px;\r\n        margin-bottom: 100px;\r\n    }\r\n    .welcome .welcome__heading {\r\n        font-size: 30px;\r\n    }\r\n    .welcome .welcome__headingType {\r\n        font-size: 24px;\r\n    }\r\n    .welcome .welcome__desription {\r\n        font-size: 16px;\r\n    }\r\n    .button {\r\n        width: 150px;\r\n        height: 50px;\r\n    }\r\n    .button a {\r\n        font-size: 16px;\r\n    }\r\n    .welcome .welcome__button {\r\n        margin-top: 15px;\r\n        margin-bottom: 70px;\r\n    }\r\n    .welcome .background, .welcome .background > div {\r\n        filter: brightness(0.7);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/win.css":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./assets/css/win.css ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n.win {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.win .win__heading {\r\n    margin: 0px;\r\n    font-family: 'KyivTypeSans';\r\n    text-transform: uppercase;\r\n    font-size: 135px;\r\n    line-height: 162px;\r\n    color:white;\r\n}\r\n\r\n.win .win__block {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .win .win__heading {\r\n        font-size: 86px;\r\n        line-height: 90px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .win .win__heading {\r\n        font-size: 60px;\r\n        line-height: 60px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .win .win__heading {\r\n        font-size: 45px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .win .win__heading {\r\n        font-size: 34px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://assets/css/win.css"],"names":[],"mappings":";AACA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,2BAA2B;IAC3B,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,wCAAgC;YAAhC,gCAAgC;IAChC,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,eAAe;QACf,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;AACJ","sourcesContent":["\r\n.win {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.win .win__heading {\r\n    margin: 0px;\r\n    font-family: 'KyivTypeSans';\r\n    text-transform: uppercase;\r\n    font-size: 135px;\r\n    line-height: 162px;\r\n    color:white;\r\n}\r\n\r\n.win .win__block {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n    .win .win__heading {\r\n        font-size: 86px;\r\n        line-height: 90px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1024px) { \r\n    .win .win__heading {\r\n        font-size: 60px;\r\n        line-height: 60px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .win .win__heading {\r\n        font-size: 45px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n    .win .win__heading {\r\n        font-size: 34px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/getUrl.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/getUrl.js ***!
  \**************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var e={91:function(e){e.exports=function(e,r){if(!r){r={}}e=e&&e.__esModule?e.default:e;if(typeof e!=="string"){return e}if(/^['"].*['"]$/.test(e)){e=e.slice(1,-1)}if(r.hash){e+=r.hash}if(/["'() \t\n]/.test(e)||r.needQuotes){return'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"')}return e}}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var n=true;try{e[t](_,_.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(91)}();

/***/ }),

/***/ "./assets/fonts/KyivTypeSans-Heavy.woff":
/*!**********************************************!*\
  !*** ./assets/fonts/KyivTypeSans-Heavy.woff ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/KyivTypeSans-Heavy.0d62f9993833f932ba18610f25496466.woff");

/***/ }),

/***/ "./assets/fonts/KyivTypeSans-Heavy.woff2":
/*!***********************************************!*\
  !*** ./assets/fonts/KyivTypeSans-Heavy.woff2 ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/KyivTypeSans-Heavy.a60648cee383eb2d6539590cfbd7b643.woff2");

/***/ }),

/***/ "./assets/fonts/Montserrat-Bold.woff":
/*!*******************************************!*\
  !*** ./assets/fonts/Montserrat-Bold.woff ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Montserrat-Bold.180ba33d8de7dcfe80a0077be8708630.woff");

/***/ }),

/***/ "./assets/fonts/Montserrat-regular.woff":
/*!**********************************************!*\
  !*** ./assets/fonts/Montserrat-regular.woff ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Montserrat-regular.e01d048caf7e291dbc7a1e96d2364616.woff");

/***/ }),

/***/ "./assets/fonts/Montserrat-regular.woff2":
/*!***********************************************!*\
  !*** ./assets/fonts/Montserrat-regular.woff2 ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Montserrat-regular.06bb8016397fac883e13082691846136.woff2");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

var inspectCustom = __webpack_require__(/*! ./util.inspect */ "?4f7e").custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag !== 'undefined' ? Symbol.toStringTag : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? String(obj).replace(/^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + [].concat(stringTag || [], protoTag || []).join(': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ "./node_modules/side-channel/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + (commaRoundTrip && isArray(obj) && valuesArray.length === 1 ? '[]' : '') + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.0
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/side-channel/index.js":
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL21lZGlhLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvYW1wLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9zaWRlLWVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2FsbC1iaW5kL2NhbGxCb3VuZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NhbGwtYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9mdW5jdGlvbi1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZ2V0LWludHJpbnNpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hhcy1zeW1ib2xzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvc2hhbXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9oYXMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzP2ZhNWYiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvY3NzL2Fib3V0LmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2Nzcy9hcnRpY2xlcy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3MvY29udGFjdHMuY3NzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvY3NzL2RvbmF0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3MvZm9udHMuY3NzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3MvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3MvbWlzc2lvbi5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3MvbmF2YmFyLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2Nzcy9wYWdlcy9hcnRpY2xlLXBhZ2UuY3NzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvY3NzL3BhZ2VzL2hvbWUtcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3MvcGFnZXMvdGVhbS1wYWdlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2Nzcy9wYXJ0bmVycy5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2Nzcy93ZWxjb21lLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2Nzcy93aW4uY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvZm9udHMvS3lpdlR5cGVTYW5zLUhlYXZ5LndvZmYiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9mb250cy9LeWl2VHlwZVNhbnMtSGVhdnkud29mZjIiLCJ3ZWJwYWNrOi8vX05fRS8uL2Fzc2V0cy9mb250cy9Nb250c2VycmF0LUJvbGQud29mZiIsIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2ZvbnRzL01vbnRzZXJyYXQtcmVndWxhci53b2ZmIiwid2VicGFjazovL19OX0UvLi9hc3NldHMvZm9udHMvTW9udHNlcnJhdC1yZWd1bGFyLndvZmYyIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pbnNwZWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NpZGUtY2hhbm5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FL2lnbm9yZWR8QzpcXFVzZXJzXFxzdGFza1xcd29ya1xccmVib3JuLXVrcmFpbmVcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG9iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Il0sIm5hbWVzIjpbImdldFN0cmFwaVVSTCIsInBhdGgiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwiLCJmZXRjaEFQSSIsInVybFBhcmFtc09iamVjdCIsIm9wdGlvbnMiLCJtZXJnZWRPcHRpb25zIiwiaGVhZGVycyIsInF1ZXJ5U3RyaW5nIiwicXMiLCJyZXF1ZXN0VXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsIkVycm9yIiwianNvbiIsImRhdGEiLCJnZXRTdHJhcGlNZWRpYSIsIm1lZGlhIiwidXJsIiwiYXR0cmlidXRlcyIsImltYWdlVXJsIiwic3RhcnRzV2l0aCIsImV4cG9ydHMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJBbXBTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJpc0luQW1wTW9kZSIsInVzZUFtcCIsIl9hbXBDb250ZXh0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsInVzZUNvbnRleHQiLCJkZWZhdWx0SGVhZCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NpZGVFZmZlY3QiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2FtcCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsImluQW1wTW9kZSIsImhlYWQiLCJjcmVhdGVFbGVtZW50IiwiY2hhclNldCIsInB1c2giLCJuYW1lIiwiY29udGVudCIsIm9ubHlSZWFjdEVsZW1lbnQiLCJsaXN0IiwiY2hpbGQiLCJ0eXBlIiwiRnJhZ21lbnQiLCJjb25jYXQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJwcm9wcyIsImNoaWxkcmVuIiwicmVkdWNlIiwiZnJhZ21lbnRMaXN0IiwiZnJhZ21lbnRDaGlsZCIsIk1FVEFUWVBFUyIsInVuaXF1ZSIsImtleXMiLCJTZXQiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJpbmRleE9mIiwic2xpY2UiLCJhZGQiLCJpIiwibGVuIiwibGVuZ3RoIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJyZWR1Y2VDb21wb25lbnRzIiwiaGVhZEVsZW1lbnRzIiwiaGVhZEVsZW1lbnQiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwicmV2ZXJzZSIsImZpbHRlciIsIm1hcCIsImMiLCJjbG9uZUVsZW1lbnQiLCJIZWFkIiwiYW1wU3RhdGUiLCJoZWFkTWFuYWdlciIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInJlZHVjZUNvbXBvbmVudHNUb1N0YXRlIiwiX2RlZmF1bHQiLCJpc1NlcnZlciIsIl9oYXNIZWFkTWFuYWdlciIsImVtaXRDaGFuZ2UiLCJ1cGRhdGVIZWFkIiwibW91bnRlZEluc3RhbmNlcyIsIkNvbXBvbmVudCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicGFnZVByb3BzIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIkdsb2JhbENvbnRleHQiLCJNeUFwcCIsImdsb2JhbCIsImZhdmljb24iLCJhcHBQcm9wcyIsInBvcHVsYXRlIiwiZGVmYXVsdFNlbyIsImdsb2JhbFJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNBLFlBQVQsR0FBaUM7QUFBQSxNQUFYQyxJQUFXLHVFQUFKLEVBQUk7QUFDdEMsbUJBQ0VDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywwQkFBWixJQUEwQyx1QkFENUMsU0FFR0gsSUFGSDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBZUksUUFBdEI7QUFBQTtBQUFBOzs7MFVBQU8saUJBQXdCSixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QkssMkJBQTlCLDJEQUFnRCxFQUFoRDtBQUFvREMsbUJBQXBELDJEQUE4RCxFQUE5RDtBQUNMO0FBQ01DLHlCQUZEO0FBR0hDLHFCQUFPLEVBQUU7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LFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFP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VyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFB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Ozs7Ozs7Ozs7OztBQ25kQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLDJEQUEyRCxTQUFTO0FBQ3BFLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsckNhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsdUpBQXNFO0FBQ3hFOzs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyw0REFBZTtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyxrRUFBcUI7QUFDN0MsY0FBYyxtQkFBTyxDQUFDLDhEQUFnQjs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0hBLGUiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gXCJxc1wiXG5cbi8qKlxuICogR2V0IGZ1bGwgU3RyYXBpIFVSTCBmcm9tIHBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gRnVsbCBTdHJhcGkgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCA9IFwiXCIpIHtcbiAgcmV0dXJuIGAke1xuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcbiAgfSR7cGF0aH1gXG59XG5cbi8qKlxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cmxQYXJhbXNPYmplY3QgVVJMIHBhcmFtcyBvYmplY3QsIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXG4gKiBAcmV0dXJucyBQYXJzZWQgQVBJIGNhbGwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgLy8gTWVyZ2UgZGVmYXVsdCBhbmQgdXNlciBvcHRpb25zXG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICAuLi5vcHRpb25zLFxuICB9XG5cbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KVxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxuICApfWBcblxuICAvLyBUcmlnZ2VyIEFQSSBjYWxsXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwgbWVyZ2VkT3B0aW9ucylcblxuICAvLyBIYW5kbGUgcmVzcG9uc2VcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgcGxlYXNlIHRyeSBhZ2FpbmApXG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHJldHVybiBkYXRhXG59XG4iLCJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcbiAgY29uc3QgeyB1cmwgfSA9IG1lZGlhLmRhdGEuYXR0cmlidXRlc1xuICBjb25zdCBpbWFnZVVybCA9IHVybC5zdGFydHNXaXRoKFwiL1wiKSA/IGdldFN0cmFwaVVSTCh1cmwpIDogdXJsXG4gIHJldHVybiBpbWFnZVVybFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5BbXBTdGF0ZUNvbnRleHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Y29uc3QgQW1wU3RhdGVDb250ZXh0PS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHt9KTtleHBvcnRzLkFtcFN0YXRlQ29udGV4dD1BbXBTdGF0ZUNvbnRleHQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe0FtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZT0nQW1wU3RhdGVDb250ZXh0Jzt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAtY29udGV4dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzSW5BbXBNb2RlPWlzSW5BbXBNb2RlO2V4cG9ydHMudXNlQW1wPXVzZUFtcDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2FtcENvbnRleHQ9cmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBpc0luQW1wTW9kZSh7YW1wRmlyc3Q9ZmFsc2UsaHlicmlkPWZhbHNlLGhhc1F1ZXJ5PWZhbHNlfT17fSl7cmV0dXJuIGFtcEZpcnN0fHxoeWJyaWQmJmhhc1F1ZXJ5O31mdW5jdGlvbiB1c2VBbXAoKXsvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG5yZXR1cm4gaXNJbkFtcE1vZGUoX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfYW1wQ29udGV4dC5BbXBTdGF0ZUNvbnRleHQpKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0SGVhZD1kZWZhdWx0SGVhZDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3NpZGVFZmZlY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaWRlLWVmZmVjdFwiKSk7dmFyIF9hbXBDb250ZXh0PXJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO3ZhciBfaGVhZE1hbmFnZXJDb250ZXh0PXJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO3ZhciBfYW1wPXJlcXVpcmUoXCIuL2FtcFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9ZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlPWZhbHNlKXtjb25zdCBoZWFkPVsvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7Y2hhclNldDpcInV0Zi04XCJ9KV07aWYoIWluQW1wTW9kZSl7aGVhZC5wdXNoKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwidmlld3BvcnRcIixjb250ZW50Olwid2lkdGg9ZGV2aWNlLXdpZHRoXCJ9KSk7fXJldHVybiBoZWFkO31mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KGxpc3QsY2hpbGQpey8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG5pZih0eXBlb2YgY2hpbGQ9PT0nc3RyaW5nJ3x8dHlwZW9mIGNoaWxkPT09J251bWJlcicpe3JldHVybiBsaXN0O30vLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG5pZihjaGlsZC50eXBlPT09X3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQpe3JldHVybiBsaXN0LmNvbmNhdChfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoKGZyYWdtZW50TGlzdCxmcmFnbWVudENoaWxkKT0+e2lmKHR5cGVvZiBmcmFnbWVudENoaWxkPT09J3N0cmluZyd8fHR5cGVvZiBmcmFnbWVudENoaWxkPT09J251bWJlcicpe3JldHVybiBmcmFnbWVudExpc3Q7fXJldHVybiBmcmFnbWVudExpc3QuY29uY2F0KGZyYWdtZW50Q2hpbGQpO30sW10pKTt9cmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKTt9Y29uc3QgTUVUQVRZUEVTPVsnbmFtZScsJ2h0dHBFcXVpdicsJ2NoYXJTZXQnLCdpdGVtUHJvcCddOy8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL2Z1bmN0aW9uIHVuaXF1ZSgpe2NvbnN0IGtleXM9bmV3IFNldCgpO2NvbnN0IHRhZ3M9bmV3IFNldCgpO2NvbnN0IG1ldGFUeXBlcz1uZXcgU2V0KCk7Y29uc3QgbWV0YUNhdGVnb3JpZXM9e307cmV0dXJuIGg9PntsZXQgaXNVbmlxdWU9dHJ1ZTtsZXQgaGFzS2V5PWZhbHNlO2lmKGgua2V5JiZ0eXBlb2YgaC5rZXkhPT0nbnVtYmVyJyYmaC5rZXkuaW5kZXhPZignJCcpPjApe2hhc0tleT10cnVlO2NvbnN0IGtleT1oLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykrMSk7aWYoa2V5cy5oYXMoa2V5KSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7a2V5cy5hZGQoa2V5KTt9fS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbnN3aXRjaChoLnR5cGUpe2Nhc2UndGl0bGUnOmNhc2UnYmFzZSc6aWYodGFncy5oYXMoaC50eXBlKSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7dGFncy5hZGQoaC50eXBlKTt9YnJlYWs7Y2FzZSdtZXRhJzpmb3IobGV0IGk9MCxsZW49TUVUQVRZUEVTLmxlbmd0aDtpPGxlbjtpKyspe2NvbnN0IG1ldGF0eXBlPU1FVEFUWVBFU1tpXTtpZighaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpY29udGludWU7aWYobWV0YXR5cGU9PT0nY2hhclNldCcpe2lmKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXttZXRhVHlwZXMuYWRkKG1ldGF0eXBlKTt9fWVsc2V7Y29uc3QgY2F0ZWdvcnk9aC5wcm9wc1ttZXRhdHlwZV07Y29uc3QgY2F0ZWdvcmllcz1tZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV18fG5ldyBTZXQoKTtpZigobWV0YXR5cGUhPT0nbmFtZSd8fCFoYXNLZXkpJiZjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle2NhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KTttZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV09Y2F0ZWdvcmllczt9fX1icmVhazt9cmV0dXJuIGlzVW5pcXVlO307fS8qKlxuICpcbiAqIEBwYXJhbSBoZWFkRWxlbWVudHMgTGlzdCBvZiBtdWx0aXBsZSA8SGVhZD4gaW5zdGFuY2VzXG4gKi9mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKGhlYWRFbGVtZW50cyxwcm9wcyl7cmV0dXJuIGhlYWRFbGVtZW50cy5yZWR1Y2UoKGxpc3QsaGVhZEVsZW1lbnQpPT57Y29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbj1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGhlYWRFbGVtZW50LnByb3BzLmNoaWxkcmVuKTtyZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbik7fSxbXSkucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsW10pLnJldmVyc2UoKS5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSkuZmlsdGVyKHVuaXF1ZSgpKS5yZXZlcnNlKCkubWFwKChjLGkpPT57Y29uc3Qga2V5PWMua2V5fHxpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J2RldmVsb3BtZW50JyYmcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTJiYhcHJvcHMuaW5BbXBNb2RlKXtpZihjLnR5cGU9PT0nbGluaycmJmMucHJvcHNbJ2hyZWYnXSYmLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG5bJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJywnaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvJ10uc29tZSh1cmw9PmMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpKXtjb25zdCBuZXdQcm9wcz17Li4uKGMucHJvcHN8fHt9KX07bmV3UHJvcHNbJ2RhdGEtaHJlZiddPW5ld1Byb3BzWydocmVmJ107bmV3UHJvcHNbJ2hyZWYnXT11bmRlZmluZWQ7Ly8gQWRkIHRoaXMgYXR0cmlidXRlIHRvIG1ha2UgaXQgZWFzeSB0byBpZGVudGlmeSBvcHRpbWl6ZWQgdGFnc1xubmV3UHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ109dHJ1ZTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsbmV3UHJvcHMpO319cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLHtrZXl9KTt9KTt9LyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqL2Z1bmN0aW9uIEhlYWQoe2NoaWxkcmVufSl7Y29uc3QgYW1wU3RhdGU9KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCk7Y29uc3QgaGVhZE1hbmFnZXI9KDAsX3JlYWN0LnVzZUNvbnRleHQpKF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfc2lkZUVmZmVjdC5kZWZhdWx0LHtyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTpyZWR1Y2VDb21wb25lbnRzLGhlYWRNYW5hZ2VyOmhlYWRNYW5hZ2VyLGluQW1wTW9kZTooMCxfYW1wLmlzSW5BbXBNb2RlKShhbXBTdGF0ZSl9LGNoaWxkcmVuKTt9dmFyIF9kZWZhdWx0PUhlYWQ7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO2NvbnN0IGlzU2VydmVyPXR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJztjbGFzcyBfZGVmYXVsdCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLl9oYXNIZWFkTWFuYWdlcj12b2lkIDA7dGhpcy5lbWl0Q2hhbmdlPSgpPT57aWYodGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIudXBkYXRlSGVhZCh0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFsuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNdLHRoaXMucHJvcHMpKTt9fTt0aGlzLl9oYXNIZWFkTWFuYWdlcj10aGlzLnByb3BzLmhlYWRNYW5hZ2VyJiZ0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXM7aWYoaXNTZXJ2ZXImJnRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO3RoaXMuZW1pdENoYW5nZSgpO319Y29tcG9uZW50RGlkTW91bnQoKXtpZih0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKTt9dGhpcy5lbWl0Q2hhbmdlKCk7fWNvbXBvbmVudERpZFVwZGF0ZSgpe3RoaXMuZW1pdENoYW5nZSgpO31jb21wb25lbnRXaWxsVW5tb3VudCgpe2lmKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpO310aGlzLmVtaXRDaGFuZ2UoKTt9cmVuZGVyKCl7cmV0dXJuIG51bGw7fX1leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWRlLWVmZmVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wcztleHBvcnRzLk5leHRXZWJWaXRhbHNNZXRyaWM9X3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LGN0eH0pe2NvbnN0IHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe2NvbnN0e0NvbXBvbmVudCxwYWdlUHJvcHN9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LHBhZ2VQcm9wcyk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgXCIuLi9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcblxuLy8gU3RvcmUgU3RyYXBpIEdsb2JhbCBvYmplY3QgaW4gY29udGV4dFxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgeyBnbG9iYWwgfSA9IHBhZ2VQcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGdsb2JhbC5hdHRyaWJ1dGVzLmZhdmljb24pfVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2dsb2JhbC5hdHRyaWJ1dGVzfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gYXJ0aWNsZSwgY2F0ZWdvcnkgYW5kIGhvbWUgcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIC8vIENhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgLy8gRmV0Y2ggZ2xvYmFsIHNpdGUgc2V0dGluZ3MgZnJvbSBTdHJhcGlcbiAgY29uc3QgZ2xvYmFsUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvZ2xvYmFsXCIsIHtcbiAgICBwb3B1bGF0ZToge1xuICAgICAgZmF2aWNvbjogXCIqXCIsXG4gICAgICBkZWZhdWx0U2VvOiB7XG4gICAgICAgIHBvcHVsYXRlOiBcIipcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgLy8gUGFzcyB0aGUgZGF0YSB0byBvdXIgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMsIHBhZ2VQcm9wczogeyBnbG9iYWw6IGdsb2JhbFJlcy5kYXRhIH0gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgY2FsbEJpbmQgPSByZXF1aXJlKCcuLycpO1xuXG52YXIgJGluZGV4T2YgPSBjYWxsQmluZChHZXRJbnRyaW5zaWMoJ1N0cmluZy5wcm90b3R5cGUuaW5kZXhPZicpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsQm91bmRJbnRyaW5zaWMobmFtZSwgYWxsb3dNaXNzaW5nKSB7XG5cdHZhciBpbnRyaW5zaWMgPSBHZXRJbnRyaW5zaWMobmFtZSwgISFhbGxvd01pc3NpbmcpO1xuXHRpZiAodHlwZW9mIGludHJpbnNpYyA9PT0gJ2Z1bmN0aW9uJyAmJiAkaW5kZXhPZihuYW1lLCAnLnByb3RvdHlwZS4nKSA+IC0xKSB7XG5cdFx0cmV0dXJuIGNhbGxCaW5kKGludHJpbnNpYyk7XG5cdH1cblx0cmV0dXJuIGludHJpbnNpYztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRhcHBseSA9IEdldEludHJpbnNpYygnJUZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseSUnKTtcbnZhciAkY2FsbCA9IEdldEludHJpbnNpYygnJUZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsJScpO1xudmFyICRyZWZsZWN0QXBwbHkgPSBHZXRJbnRyaW5zaWMoJyVSZWZsZWN0LmFwcGx5JScsIHRydWUpIHx8IGJpbmQuY2FsbCgkY2FsbCwgJGFwcGx5KTtcblxudmFyICRnT1BEID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciUnLCB0cnVlKTtcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZGVmaW5lUHJvcGVydHklJywgdHJ1ZSk7XG52YXIgJG1heCA9IEdldEludHJpbnNpYygnJU1hdGgubWF4JScpO1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdHRyeSB7XG5cdFx0JGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgdmFsdWU6IDEgfSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBkZWZpbmVQcm9wZXJ0eVxuXHRcdCRkZWZpbmVQcm9wZXJ0eSA9IG51bGw7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYWxsQmluZChvcmlnaW5hbEZ1bmN0aW9uKSB7XG5cdHZhciBmdW5jID0gJHJlZmxlY3RBcHBseShiaW5kLCAkY2FsbCwgYXJndW1lbnRzKTtcblx0aWYgKCRnT1BEICYmICRkZWZpbmVQcm9wZXJ0eSkge1xuXHRcdHZhciBkZXNjID0gJGdPUEQoZnVuYywgJ2xlbmd0aCcpO1xuXHRcdGlmIChkZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0Ly8gb3JpZ2luYWwgbGVuZ3RoLCBwbHVzIHRoZSByZWNlaXZlciwgbWludXMgYW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIChhZnRlciB0aGUgcmVjZWl2ZXIpXG5cdFx0XHQkZGVmaW5lUHJvcGVydHkoXG5cdFx0XHRcdGZ1bmMsXG5cdFx0XHRcdCdsZW5ndGgnLFxuXHRcdFx0XHR7IHZhbHVlOiAxICsgJG1heCgwLCBvcmlnaW5hbEZ1bmN0aW9uLmxlbmd0aCAtIChhcmd1bWVudHMubGVuZ3RoIC0gMSkpIH1cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmdW5jO1xufTtcblxudmFyIGFwcGx5QmluZCA9IGZ1bmN0aW9uIGFwcGx5QmluZCgpIHtcblx0cmV0dXJuICRyZWZsZWN0QXBwbHkoYmluZCwgJGFwcGx5LCBhcmd1bWVudHMpO1xufTtcblxuaWYgKCRkZWZpbmVQcm9wZXJ0eSkge1xuXHQkZGVmaW5lUHJvcGVydHkobW9kdWxlLmV4cG9ydHMsICdhcHBseScsIHsgdmFsdWU6IGFwcGx5QmluZCB9KTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzLmFwcGx5ID0gYXBwbHlCaW5kO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbm8taW52YWxpZC10aGlzOiAxICovXG5cbnZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQodGhhdCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBib3VuZExlbmd0aCA9IE1hdGgubWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3MucHVzaCgnJCcgKyBpKTtcbiAgICB9XG5cbiAgICBib3VuZCA9IEZ1bmN0aW9uKCdiaW5kZXInLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYm91bmRBcmdzLmpvaW4oJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1bmRlZmluZWQ7XG5cbnZhciAkU3ludGF4RXJyb3IgPSBTeW50YXhFcnJvcjtcbnZhciAkRnVuY3Rpb24gPSBGdW5jdGlvbjtcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbnZhciBnZXRFdmFsbGVkQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoZXhwcmVzc2lvblN5bnRheCkge1xuXHR0cnkge1xuXHRcdHJldHVybiAkRnVuY3Rpb24oJ1widXNlIHN0cmljdFwiOyByZXR1cm4gKCcgKyBleHByZXNzaW9uU3ludGF4ICsgJykuY29uc3RydWN0b3I7JykoKTtcblx0fSBjYXRjaCAoZSkge31cbn07XG5cbnZhciAkZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5pZiAoJGdPUEQpIHtcblx0dHJ5IHtcblx0XHQkZ09QRCh7fSwgJycpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0JGdPUEQgPSBudWxsOyAvLyB0aGlzIGlzIElFIDgsIHdoaWNoIGhhcyBhIGJyb2tlbiBnT1BEXG5cdH1cbn1cblxudmFyIHRocm93VHlwZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgJFR5cGVFcnJvcigpO1xufTtcbnZhciBUaHJvd1R5cGVFcnJvciA9ICRnT1BEXG5cdD8gKGZ1bmN0aW9uICgpIHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9ucywgbm8tY2FsbGVyLCBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcblx0XHRcdGFyZ3VtZW50cy5jYWxsZWU7IC8vIElFIDggZG9lcyBub3QgdGhyb3cgaGVyZVxuXHRcdFx0cmV0dXJuIHRocm93VHlwZUVycm9yO1xuXHRcdH0gY2F0Y2ggKGNhbGxlZVRocm93cykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gSUUgOCB0aHJvd3Mgb24gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhcmd1bWVudHMsICcnKVxuXHRcdFx0XHRyZXR1cm4gJGdPUEQoYXJndW1lbnRzLCAnY2FsbGVlJykuZ2V0O1xuXHRcdFx0fSBjYXRjaCAoZ09QRHRocm93cykge1xuXHRcdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KCkpXG5cdDogdGhyb3dUeXBlRXJyb3I7XG5cbnZhciBoYXNTeW1ib2xzID0gcmVxdWlyZSgnaGFzLXN5bWJvbHMnKSgpO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguX19wcm90b19fOyB9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG5cbnZhciBuZWVkc0V2YWwgPSB7fTtcblxudmFyIFR5cGVkQXJyYXkgPSB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBnZXRQcm90byhVaW50OEFycmF5KTtcblxudmFyIElOVFJJTlNJQ1MgPSB7XG5cdCclQWdncmVnYXRlRXJyb3IlJzogdHlwZW9mIEFnZ3JlZ2F0ZUVycm9yID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEFnZ3JlZ2F0ZUVycm9yLFxuXHQnJUFycmF5JSc6IEFycmF5LFxuXHQnJUFycmF5QnVmZmVyJSc6IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBcnJheUJ1ZmZlcixcblx0JyVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJUFzeW5jRnJvbVN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiB1bmRlZmluZWQsXG5cdCclQXN5bmNGdW5jdGlvbiUnOiBuZWVkc0V2YWwsXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogbmVlZHNFdmFsLFxuXHQnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUFzeW5jSXRlcmF0b3JQcm90b3R5cGUlJzogbmVlZHNFdmFsLFxuXHQnJUF0b21pY3MlJzogdHlwZW9mIEF0b21pY3MgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQXRvbWljcyxcblx0JyVCaWdJbnQlJzogdHlwZW9mIEJpZ0ludCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBCaWdJbnQsXG5cdCclQm9vbGVhbiUnOiBCb29sZWFuLFxuXHQnJURhdGFWaWV3JSc6IHR5cGVvZiBEYXRhVmlldyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBEYXRhVmlldyxcblx0JyVEYXRlJSc6IERhdGUsXG5cdCclZGVjb2RlVVJJJSc6IGRlY29kZVVSSSxcblx0JyVkZWNvZGVVUklDb21wb25lbnQlJzogZGVjb2RlVVJJQ29tcG9uZW50LFxuXHQnJWVuY29kZVVSSSUnOiBlbmNvZGVVUkksXG5cdCclZW5jb2RlVVJJQ29tcG9uZW50JSc6IGVuY29kZVVSSUNvbXBvbmVudCxcblx0JyVFcnJvciUnOiBFcnJvcixcblx0JyVldmFsJSc6IGV2YWwsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXZhbFxuXHQnJUV2YWxFcnJvciUnOiBFdmFsRXJyb3IsXG5cdCclRmxvYXQzMkFycmF5JSc6IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQzMkFycmF5LFxuXHQnJUZsb2F0NjRBcnJheSUnOiB0eXBlb2YgRmxvYXQ2NEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEZsb2F0NjRBcnJheSxcblx0JyVGaW5hbGl6YXRpb25SZWdpc3RyeSUnOiB0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmluYWxpemF0aW9uUmVnaXN0cnksXG5cdCclRnVuY3Rpb24lJzogJEZ1bmN0aW9uLFxuXHQnJUdlbmVyYXRvckZ1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVJbnQ4QXJyYXklJzogdHlwZW9mIEludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQ4QXJyYXksXG5cdCclSW50MTZBcnJheSUnOiB0eXBlb2YgSW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQxNkFycmF5LFxuXHQnJUludDMyQXJyYXklJzogdHlwZW9mIEludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogSW50MzJBcnJheSxcblx0JyVpc0Zpbml0ZSUnOiBpc0Zpbml0ZSxcblx0JyVpc05hTiUnOiBpc05hTixcblx0JyVJdGVyYXRvclByb3RvdHlwZSUnOiBoYXNTeW1ib2xzID8gZ2V0UHJvdG8oZ2V0UHJvdG8oW11bU3ltYm9sLml0ZXJhdG9yXSgpKSkgOiB1bmRlZmluZWQsXG5cdCclSlNPTiUnOiB0eXBlb2YgSlNPTiA9PT0gJ29iamVjdCcgPyBKU09OIDogdW5kZWZpbmVkLFxuXHQnJU1hcCUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IE1hcCxcblx0JyVNYXBJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgTWFwID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBNYXAoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJU1hdGglJzogTWF0aCxcblx0JyVOdW1iZXIlJzogTnVtYmVyLFxuXHQnJU9iamVjdCUnOiBPYmplY3QsXG5cdCclcGFyc2VGbG9hdCUnOiBwYXJzZUZsb2F0LFxuXHQnJXBhcnNlSW50JSc6IHBhcnNlSW50LFxuXHQnJVByb21pc2UlJzogdHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJvbWlzZSxcblx0JyVQcm94eSUnOiB0eXBlb2YgUHJveHkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUHJveHksXG5cdCclUmFuZ2VFcnJvciUnOiBSYW5nZUVycm9yLFxuXHQnJVJlZmVyZW5jZUVycm9yJSc6IFJlZmVyZW5jZUVycm9yLFxuXHQnJVJlZmxlY3QlJzogdHlwZW9mIFJlZmxlY3QgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogUmVmbGVjdCxcblx0JyVSZWdFeHAlJzogUmVnRXhwLFxuXHQnJVNldCUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNldCxcblx0JyVTZXRJdGVyYXRvclByb3RvdHlwZSUnOiB0eXBlb2YgU2V0ID09PSAndW5kZWZpbmVkJyB8fCAhaGFzU3ltYm9scyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKG5ldyBTZXQoKVtTeW1ib2wuaXRlcmF0b3JdKCkpLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyJSc6IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBTaGFyZWRBcnJheUJ1ZmZlcixcblx0JyVTdHJpbmclJzogU3RyaW5nLFxuXHQnJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90bygnJ1tTeW1ib2wuaXRlcmF0b3JdKCkpIDogdW5kZWZpbmVkLFxuXHQnJVN5bWJvbCUnOiBoYXNTeW1ib2xzID8gU3ltYm9sIDogdW5kZWZpbmVkLFxuXHQnJVN5bnRheEVycm9yJSc6ICRTeW50YXhFcnJvcixcblx0JyVUaHJvd1R5cGVFcnJvciUnOiBUaHJvd1R5cGVFcnJvcixcblx0JyVUeXBlZEFycmF5JSc6IFR5cGVkQXJyYXksXG5cdCclVHlwZUVycm9yJSc6ICRUeXBlRXJyb3IsXG5cdCclVWludDhBcnJheSUnOiB0eXBlb2YgVWludDhBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OEFycmF5LFxuXHQnJVVpbnQ4Q2xhbXBlZEFycmF5JSc6IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50OENsYW1wZWRBcnJheSxcblx0JyVVaW50MTZBcnJheSUnOiB0eXBlb2YgVWludDE2QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDE2QXJyYXksXG5cdCclVWludDMyQXJyYXklJzogdHlwZW9mIFVpbnQzMkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQzMkFycmF5LFxuXHQnJVVSSUVycm9yJSc6IFVSSUVycm9yLFxuXHQnJVdlYWtNYXAlJzogdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha01hcCxcblx0JyVXZWFrUmVmJSc6IHR5cGVvZiBXZWFrUmVmID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtSZWYsXG5cdCclV2Vha1NldCUnOiB0eXBlb2YgV2Vha1NldCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrU2V0XG59O1xuXG52YXIgZG9FdmFsID0gZnVuY3Rpb24gZG9FdmFsKG5hbWUpIHtcblx0dmFyIHZhbHVlO1xuXHRpZiAobmFtZSA9PT0gJyVBc3luY0Z1bmN0aW9uJScpIHtcblx0XHR2YWx1ZSA9IGdldEV2YWxsZWRDb25zdHJ1Y3RvcignYXN5bmMgZnVuY3Rpb24gKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUdlbmVyYXRvckZ1bmN0aW9uJScpIHtcblx0XHR2YWx1ZSA9IGdldEV2YWxsZWRDb25zdHJ1Y3RvcignZnVuY3Rpb24qICgpIHt9Jyk7XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJScpIHtcblx0XHR2YWx1ZSA9IGdldEV2YWxsZWRDb25zdHJ1Y3RvcignYXN5bmMgZnVuY3Rpb24qICgpIHt9Jyk7XG5cdH0gZWxzZSBpZiAobmFtZSA9PT0gJyVBc3luY0dlbmVyYXRvciUnKSB7XG5cdFx0dmFyIGZuID0gZG9FdmFsKCclQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnKTtcblx0XHRpZiAoZm4pIHtcblx0XHRcdHZhbHVlID0gZm4ucHJvdG90eXBlO1xuXHRcdH1cblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jSXRlcmF0b3JQcm90b3R5cGUlJykge1xuXHRcdHZhciBnZW4gPSBkb0V2YWwoJyVBc3luY0dlbmVyYXRvciUnKTtcblx0XHRpZiAoZ2VuKSB7XG5cdFx0XHR2YWx1ZSA9IGdldFByb3RvKGdlbi5wcm90b3R5cGUpO1xuXHRcdH1cblx0fVxuXG5cdElOVFJJTlNJQ1NbbmFtZV0gPSB2YWx1ZTtcblxuXHRyZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgTEVHQUNZX0FMSUFTRVMgPSB7XG5cdCclQXJyYXlCdWZmZXJQcm90b3R5cGUlJzogWydBcnJheUJ1ZmZlcicsICdwcm90b3R5cGUnXSxcblx0JyVBcnJheVByb3RvdHlwZSUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG9fZW50cmllcyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdlbnRyaWVzJ10sXG5cdCclQXJyYXlQcm90b19mb3JFYWNoJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2ZvckVhY2gnXSxcblx0JyVBcnJheVByb3RvX2tleXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAna2V5cyddLFxuXHQnJUFycmF5UHJvdG9fdmFsdWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ3ZhbHVlcyddLFxuXHQnJUFzeW5jRnVuY3Rpb25Qcm90b3R5cGUlJzogWydBc3luY0Z1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnXSxcblx0JyVBc3luY0dlbmVyYXRvclByb3RvdHlwZSUnOiBbJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUJvb2xlYW5Qcm90b3R5cGUlJzogWydCb29sZWFuJywgJ3Byb3RvdHlwZSddLFxuXHQnJURhdGFWaWV3UHJvdG90eXBlJSc6IFsnRGF0YVZpZXcnLCAncHJvdG90eXBlJ10sXG5cdCclRGF0ZVByb3RvdHlwZSUnOiBbJ0RhdGUnLCAncHJvdG90eXBlJ10sXG5cdCclRXJyb3JQcm90b3R5cGUlJzogWydFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVFdmFsRXJyb3JQcm90b3R5cGUlJzogWydFdmFsRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQzMkFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQzMkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZsb2F0NjRBcnJheVByb3RvdHlwZSUnOiBbJ0Zsb2F0NjRBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0Z1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUdlbmVyYXRvciUnOiBbJ0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUdlbmVyYXRvclByb3RvdHlwZSUnOiBbJ0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQ4QXJyYXlQcm90b3R5cGUlJzogWydJbnQ4QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclSW50MTZBcnJheVByb3RvdHlwZSUnOiBbJ0ludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclSW50MzJBcnJheVByb3RvdHlwZSUnOiBbJ0ludDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclSlNPTlBhcnNlJSc6IFsnSlNPTicsICdwYXJzZSddLFxuXHQnJUpTT05TdHJpbmdpZnklJzogWydKU09OJywgJ3N0cmluZ2lmeSddLFxuXHQnJU1hcFByb3RvdHlwZSUnOiBbJ01hcCcsICdwcm90b3R5cGUnXSxcblx0JyVOdW1iZXJQcm90b3R5cGUlJzogWydOdW1iZXInLCAncHJvdG90eXBlJ10sXG5cdCclT2JqZWN0UHJvdG90eXBlJSc6IFsnT2JqZWN0JywgJ3Byb3RvdHlwZSddLFxuXHQnJU9ialByb3RvX3RvU3RyaW5nJSc6IFsnT2JqZWN0JywgJ3Byb3RvdHlwZScsICd0b1N0cmluZyddLFxuXHQnJU9ialByb3RvX3ZhbHVlT2YlJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3ZhbHVlT2YnXSxcblx0JyVQcm9taXNlUHJvdG90eXBlJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnXSxcblx0JyVQcm9taXNlUHJvdG9fdGhlbiUnOiBbJ1Byb21pc2UnLCAncHJvdG90eXBlJywgJ3RoZW4nXSxcblx0JyVQcm9taXNlX2FsbCUnOiBbJ1Byb21pc2UnLCAnYWxsJ10sXG5cdCclUHJvbWlzZV9yZWplY3QlJzogWydQcm9taXNlJywgJ3JlamVjdCddLFxuXHQnJVByb21pc2VfcmVzb2x2ZSUnOiBbJ1Byb21pc2UnLCAncmVzb2x2ZSddLFxuXHQnJVJhbmdlRXJyb3JQcm90b3R5cGUlJzogWydSYW5nZUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVJlZmVyZW5jZUVycm9yUHJvdG90eXBlJSc6IFsnUmVmZXJlbmNlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVnRXhwUHJvdG90eXBlJSc6IFsnUmVnRXhwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVNldFByb3RvdHlwZSUnOiBbJ1NldCcsICdwcm90b3R5cGUnXSxcblx0JyVTaGFyZWRBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ1NoYXJlZEFycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN0cmluZ1Byb3RvdHlwZSUnOiBbJ1N0cmluZycsICdwcm90b3R5cGUnXSxcblx0JyVTeW1ib2xQcm90b3R5cGUlJzogWydTeW1ib2wnLCAncHJvdG90eXBlJ10sXG5cdCclU3ludGF4RXJyb3JQcm90b3R5cGUlJzogWydTeW50YXhFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVUeXBlZEFycmF5UHJvdG90eXBlJSc6IFsnVHlwZWRBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVUeXBlRXJyb3JQcm90b3R5cGUlJzogWydUeXBlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclVWludDhBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDhDbGFtcGVkQXJyYXlQcm90b3R5cGUlJzogWydVaW50OENsYW1wZWRBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50MTZBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQxNkFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnVWludDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVVJJRXJyb3JQcm90b3R5cGUlJzogWydVUklFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVXZWFrTWFwUHJvdG90eXBlJSc6IFsnV2Vha01hcCcsICdwcm90b3R5cGUnXSxcblx0JyVXZWFrU2V0UHJvdG90eXBlJSc6IFsnV2Vha1NldCcsICdwcm90b3R5cGUnXVxufTtcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgJGNvbmNhdCA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBBcnJheS5wcm90b3R5cGUuY29uY2F0KTtcbnZhciAkc3BsaWNlQXBwbHkgPSBiaW5kLmNhbGwoRnVuY3Rpb24uYXBwbHksIEFycmF5LnByb3RvdHlwZS5zcGxpY2UpO1xudmFyICRyZXBsYWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSk7XG52YXIgJHN0clNsaWNlID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIFN0cmluZy5wcm90b3R5cGUuc2xpY2UpO1xuXG4vKiBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi80LjE3LjE1L2Rpc3QvbG9kYXNoLmpzI0w2NzM1LUw2NzQ0ICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXiUuW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JSQpKS9nO1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nOyAvKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBmdW5jdGlvbiBzdHJpbmdUb1BhdGgoc3RyaW5nKSB7XG5cdHZhciBmaXJzdCA9ICRzdHJTbGljZShzdHJpbmcsIDAsIDEpO1xuXHR2YXIgbGFzdCA9ICRzdHJTbGljZShzdHJpbmcsIC0xKTtcblx0aWYgKGZpcnN0ID09PSAnJScgJiYgbGFzdCAhPT0gJyUnKSB7XG5cdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW52YWxpZCBpbnRyaW5zaWMgc3ludGF4LCBleHBlY3RlZCBjbG9zaW5nIGAlYCcpO1xuXHR9IGVsc2UgaWYgKGxhc3QgPT09ICclJyAmJiBmaXJzdCAhPT0gJyUnKSB7XG5cdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignaW52YWxpZCBpbnRyaW5zaWMgc3ludGF4LCBleHBlY3RlZCBvcGVuaW5nIGAlYCcpO1xuXHR9XG5cdHZhciByZXN1bHQgPSBbXTtcblx0JHJlcGxhY2Uoc3RyaW5nLCByZVByb3BOYW1lLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuXHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHF1b3RlID8gJHJlcGxhY2Uoc3ViU3RyaW5nLCByZUVzY2FwZUNoYXIsICckMScpIDogbnVtYmVyIHx8IG1hdGNoO1xuXHR9KTtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG4vKiBlbmQgYWRhcHRhdGlvbiAqL1xuXG52YXIgZ2V0QmFzZUludHJpbnNpYyA9IGZ1bmN0aW9uIGdldEJhc2VJbnRyaW5zaWMobmFtZSwgYWxsb3dNaXNzaW5nKSB7XG5cdHZhciBpbnRyaW5zaWNOYW1lID0gbmFtZTtcblx0dmFyIGFsaWFzO1xuXHRpZiAoaGFzT3duKExFR0FDWV9BTElBU0VTLCBpbnRyaW5zaWNOYW1lKSkge1xuXHRcdGFsaWFzID0gTEVHQUNZX0FMSUFTRVNbaW50cmluc2ljTmFtZV07XG5cdFx0aW50cmluc2ljTmFtZSA9ICclJyArIGFsaWFzWzBdICsgJyUnO1xuXHR9XG5cblx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNOYW1lKSkge1xuXHRcdHZhciB2YWx1ZSA9IElOVFJJTlNJQ1NbaW50cmluc2ljTmFtZV07XG5cdFx0aWYgKHZhbHVlID09PSBuZWVkc0V2YWwpIHtcblx0XHRcdHZhbHVlID0gZG9FdmFsKGludHJpbnNpY05hbWUpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyAmJiAhYWxsb3dNaXNzaW5nKSB7XG5cdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaW50cmluc2ljICcgKyBuYW1lICsgJyBleGlzdHMsIGJ1dCBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgZmlsZSBhbiBpc3N1ZSEnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YWxpYXM6IGFsaWFzLFxuXHRcdFx0bmFtZTogaW50cmluc2ljTmFtZSxcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH07XG5cdH1cblxuXHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGRvZXMgbm90IGV4aXN0IScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBHZXRJbnRyaW5zaWMobmFtZSwgYWxsb3dNaXNzaW5nKSB7XG5cdGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignaW50cmluc2ljIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFsbG93TWlzc2luZyAhPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1wiYWxsb3dNaXNzaW5nXCIgYXJndW1lbnQgbXVzdCBiZSBhIGJvb2xlYW4nKTtcblx0fVxuXG5cdHZhciBwYXJ0cyA9IHN0cmluZ1RvUGF0aChuYW1lKTtcblx0dmFyIGludHJpbnNpY0Jhc2VOYW1lID0gcGFydHMubGVuZ3RoID4gMCA/IHBhcnRzWzBdIDogJyc7XG5cblx0dmFyIGludHJpbnNpYyA9IGdldEJhc2VJbnRyaW5zaWMoJyUnICsgaW50cmluc2ljQmFzZU5hbWUgKyAnJScsIGFsbG93TWlzc2luZyk7XG5cdHZhciBpbnRyaW5zaWNSZWFsTmFtZSA9IGludHJpbnNpYy5uYW1lO1xuXHR2YXIgdmFsdWUgPSBpbnRyaW5zaWMudmFsdWU7XG5cdHZhciBza2lwRnVydGhlckNhY2hpbmcgPSBmYWxzZTtcblxuXHR2YXIgYWxpYXMgPSBpbnRyaW5zaWMuYWxpYXM7XG5cdGlmIChhbGlhcykge1xuXHRcdGludHJpbnNpY0Jhc2VOYW1lID0gYWxpYXNbMF07XG5cdFx0JHNwbGljZUFwcGx5KHBhcnRzLCAkY29uY2F0KFswLCAxXSwgYWxpYXMpKTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAxLCBpc093biA9IHRydWU7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdHZhciBwYXJ0ID0gcGFydHNbaV07XG5cdFx0dmFyIGZpcnN0ID0gJHN0clNsaWNlKHBhcnQsIDAsIDEpO1xuXHRcdHZhciBsYXN0ID0gJHN0clNsaWNlKHBhcnQsIC0xKTtcblx0XHRpZiAoXG5cdFx0XHQoXG5cdFx0XHRcdChmaXJzdCA9PT0gJ1wiJyB8fCBmaXJzdCA9PT0gXCInXCIgfHwgZmlyc3QgPT09ICdgJylcblx0XHRcdFx0fHwgKGxhc3QgPT09ICdcIicgfHwgbGFzdCA9PT0gXCInXCIgfHwgbGFzdCA9PT0gJ2AnKVxuXHRcdFx0KVxuXHRcdFx0JiYgZmlyc3QgIT09IGxhc3Rcblx0XHQpIHtcblx0XHRcdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ3Byb3BlcnR5IG5hbWVzIHdpdGggcXVvdGVzIG11c3QgaGF2ZSBtYXRjaGluZyBxdW90ZXMnKTtcblx0XHR9XG5cdFx0aWYgKHBhcnQgPT09ICdjb25zdHJ1Y3RvcicgfHwgIWlzT3duKSB7XG5cdFx0XHRza2lwRnVydGhlckNhY2hpbmcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGludHJpbnNpY0Jhc2VOYW1lICs9ICcuJyArIHBhcnQ7XG5cdFx0aW50cmluc2ljUmVhbE5hbWUgPSAnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJztcblxuXHRcdGlmIChoYXNPd24oSU5UUklOU0lDUywgaW50cmluc2ljUmVhbE5hbWUpKSB7XG5cdFx0XHR2YWx1ZSA9IElOVFJJTlNJQ1NbaW50cmluc2ljUmVhbE5hbWVdO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0aWYgKCEocGFydCBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0aWYgKCFhbGxvd01pc3NpbmcpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYmFzZSBpbnRyaW5zaWMgZm9yICcgKyBuYW1lICsgJyBleGlzdHMsIGJ1dCB0aGUgcHJvcGVydHkgaXMgbm90IGF2YWlsYWJsZS4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdm9pZCB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJGdPUEQgJiYgKGkgKyAxKSA+PSBwYXJ0cy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGRlc2MgPSAkZ09QRCh2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdGlzT3duID0gISFkZXNjO1xuXG5cdFx0XHRcdC8vIEJ5IGNvbnZlbnRpb24sIHdoZW4gYSBkYXRhIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB0byBhbiBhY2Nlc3NvclxuXHRcdFx0XHQvLyBwcm9wZXJ0eSB0byBlbXVsYXRlIGEgZGF0YSBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IHN1ZmZlciBmcm9tXG5cdFx0XHRcdC8vIHRoZSBvdmVycmlkZSBtaXN0YWtlLCB0aGF0IGFjY2Vzc29yJ3MgZ2V0dGVyIGlzIG1hcmtlZCB3aXRoXG5cdFx0XHRcdC8vIGFuIGBvcmlnaW5hbFZhbHVlYCBwcm9wZXJ0eS4gSGVyZSwgd2hlbiB3ZSBkZXRlY3QgdGhpcywgd2Vcblx0XHRcdFx0Ly8gdXBob2xkIHRoZSBpbGx1c2lvbiBieSBwcmV0ZW5kaW5nIHRvIHNlZSB0aGF0IG9yaWdpbmFsIGRhdGFcblx0XHRcdFx0Ly8gcHJvcGVydHksIGkuZS4sIHJldHVybmluZyB0aGUgdmFsdWUgcmF0aGVyIHRoYW4gdGhlIGdldHRlclxuXHRcdFx0XHQvLyBpdHNlbGYuXG5cdFx0XHRcdGlmIChpc093biAmJiAnZ2V0JyBpbiBkZXNjICYmICEoJ29yaWdpbmFsVmFsdWUnIGluIGRlc2MuZ2V0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gZGVzYy5nZXQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZVtwYXJ0XTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aXNPd24gPSBoYXNPd24odmFsdWUsIHBhcnQpO1xuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNPd24gJiYgIXNraXBGdXJ0aGVyQ2FjaGluZykge1xuXHRcdFx0XHRJTlRSSU5TSUNTW2ludHJpbnNpY1JlYWxOYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3JpZ1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbDtcbnZhciBoYXNTeW1ib2xTaGFtID0gcmVxdWlyZSgnLi9zaGFtcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhhc05hdGl2ZVN5bWJvbHMoKSB7XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2Ygb3JpZ1N5bWJvbCgnZm9vJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCgnYmFyJykgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHJldHVybiBoYXNTeW1ib2xTaGFtKCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgY29tcGxleGl0eTogWzIsIDE4XSwgbWF4LXN0YXRlbWVudHM6IFsyLCAzM10gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXG5cdHZhciBvYmogPSB7fTtcblx0dmFyIHN5bSA9IFN5bWJvbCgndGVzdCcpO1xuXHR2YXIgc3ltT2JqID0gT2JqZWN0KHN5bSk7XG5cdGlmICh0eXBlb2Ygc3ltID09PSAnc3RyaW5nJykgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bU9iaikgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8vIHRlbXAgZGlzYWJsZWQgcGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvb2JqZWN0LmFzc2lnbi9pc3N1ZXMvMTdcblx0Ly8gaWYgKHN5bSBpbnN0YW5jZW9mIFN5bWJvbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzL2lzc3Vlcy80XG5cdC8vIGlmICghKHN5bU9iaiBpbnN0YW5jZW9mIFN5bWJvbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gaWYgKHR5cGVvZiBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyBpZiAoU3RyaW5nKHN5bSkgIT09IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdHZhciBzeW1WYWwgPSA0Mjtcblx0b2JqW3N5bV0gPSBzeW1WYWw7XG5cdGZvciAoc3ltIGluIG9iaikgeyByZXR1cm4gZmFsc2U7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tdW5yZWFjaGFibGUtbG9vcFxuXHRpZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoICE9PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iaik7XG5cdGlmIChzeW1zLmxlbmd0aCAhPT0gMSB8fCBzeW1zWzBdICE9PSBzeW0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqLCBzeW0pKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHN5bSk7XG5cdFx0aWYgKGRlc2NyaXB0b3IudmFsdWUgIT09IHN5bVZhbCB8fCBkZXNjcmlwdG9yLmVudW1lcmFibGUgIT09IHRydWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vc3R5bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFib3V0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAxNUJCQjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IC5hYm91dF9fY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA2NXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNzlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IC5hYm91dF9fdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xcclxcbiAgICBmb250LWZhbWlseTogS3lpdlR5cGVTYW5zO1xcclxcbiAgICBmb250LXNpemU6IDY4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA4MnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjojRkZENDAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgLmFib3V0X19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0UmVndWxhcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLmFib3V0IC5hYm91dF9fY29udGVudHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0IC5hYm91dF9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hYm91dCAuYWJvdXRfX2Rlc2NyaXB0aW9ue1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgIC5hYm91dCAuYWJvdXRfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0IC5hYm91dF9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Fzc2V0cy9jc3MvYWJvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFvQjtRQUFwQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYWJvdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDE1QkJCO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgLmFib3V0X19jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDY1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA3OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgLmFib3V0X190aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLeWl2VHlwZVNhbnM7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDgycHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiNGRkQ0MDE7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCAuYWJvdXRfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXRSZWd1bGFyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAuYWJvdXQgLmFib3V0X19jb250ZW50e1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWJvdXQgLmFib3V0X190aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0IC5hYm91dF9fZGVzY3JpcHRpb257XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLmFib3V0IC5hYm91dF9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xcclxcbiAgICB9XFxyXFxuICAgIC5hYm91dCAuYWJvdXRfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXJ0aWNsZXMge1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLmFydGljbGVzX190aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEt5aXZUeXBlU2FucztcXHJcXG4gICAgZm9udC1zaXplOiA2OHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogODFweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLmFydGljbGVzX19jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDY1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA3NHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLmFydGljbGVzX19oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3N0YXR1c2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNDlweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3N0YXR1c2VzIGxpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3N0YXR1c2VzIDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLmFydGljbGVzX19zdGF0dXNlcy1pdGVtIGJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxyXFxuICAgIGNvbG9yOiAjMEUwRTBFO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3N0YXR1c2VzLWl0ZW1fYWN0aXZlIGJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzAwMDAwMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5hcnRpY2xlc19fdHlwZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3R5cGVzIGxpIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3R5cGVzIDpmaXJzdC1jaGlsZCB7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAudHlwZXNfX2J1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDMycHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA5MnB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRCb2xkJztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC50eXBlc19fYnV0dG9uID4gZGl2IHtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC50eXBlc19fYnV0dG9uID4gc3BhbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3R5cGVzLWl0ZW1fYWN0aXZlIC50eXBlc19fYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLmFydGljbGVzX19wcm9qZWN0cyB7XFxyXFxuICAgIG1hcmdpbi10b3A6NTBweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3Byb2plY3RzLWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX3dyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX193cmFwcGVyLCAuYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX2JnID4gZGl2IHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19iZyA+IGRpdiB7XFxyXFxuICAgIGhlaWdodDogMzQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fYmcgPiBkaXYgPiBpbWcge1xcclxcbiAgICAtd2Via2l0LW9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19maWx0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20ocmdiYSgwLCAwLCAwLCAwKSksIHRvKCMwMDAwMDApKTtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApIDAlLCAjMDAwMDAwIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDApIDAlLCAjMDAwMDAwIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX2xhYmVscyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG4gICAgdG9wOjIzcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzVweDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW0tbGFiZWw6bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW0tbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTFweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDU0cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbS1sYWJlbCA+IGRpdiB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbS1sYWJlbF9fdGV4dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdEJvbGQnO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0LWl0ZW1fX25leHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxuICAgIHJpZ2h0OiA0NXB4O1xcclxcbiAgICBib3R0b206IDMycHg7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTEwMCUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC0xMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gICAgcGFkZGluZzogMzJweCAzNXB4O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0t5aXZUeXBlU2Fucyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzNweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX2Rlc2Mge1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRSZWd1bGFyJztcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3BhZ2luYXRpb24ge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Qm9sZCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLmFydGljbGVzIC5hcnRpY2xlc19faGVhZGVye1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXJ0aWNsZXMgLmFydGljbGVzX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3Byb2plY3RzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFydGljbGVzIC5hcnRpY2xlc19fcHJvamVjdHMtaXRlbSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3N0YXR1c2VzLWl0ZW0gYnV0dG9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXJ0aWNsZXMgLnR5cGVzX19idXR0b24ge1xcclxcbiAgICAgICAgcGFkZGluZzogOHB4IDMycHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXJ0aWNsZXMgLnR5cGVzX19idXR0b24gPiBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX190aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX2Rlc2N7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLmFydGljbGVzIC5hcnRpY2xlc19faGVhZGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGVzIC5hcnRpY2xlc19fdGl0bGUge1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGVzIC5hcnRpY2xlc19fc3RhdHVzZXMge1xcclxcbiAgICAgICAgcGFkZGluZzogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3N0YXR1c2VzLWl0ZW0gYnV0dG9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX2NvbnRlbnR7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAudHlwZXNfX2J1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA2cHggMjBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAudHlwZXNfX2J1dHRvbiA+IGRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjRweFxcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3Byb2plY3RzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19sYWJlbHMge1xcclxcbiAgICAgICAgdG9wOiAxNXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX2NvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZzogMzJweCAyNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fZGVzYyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGVzIC5wcm9qZWN0LWl0ZW1fX25leHQge1xcclxcbiAgICAgICAgcmlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBib3R0b206IDMwcHg7XFxyXFxuICAgICAgICB3aWR0aDogOHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX2hlYWRlciB7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGVzIC5hcnRpY2xlc19fc3RhdHVzZXMge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGVzX19wcm9qZWN0cy1pdGVtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlc19fdHlwZXMge1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3R5cGVzIGxpIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19sYWJlbHMge1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAucHJvamVjdHMtaXRlbS1sYWJlbCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hc3NldHMvY3NzL2FydGljbGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtB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O0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hcnRpY2xlcyB7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3RpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogS3lpdlR5cGVTYW5zO1xcclxcbiAgICBmb250LXNpemU6IDY4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA4MXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX2NvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNjVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDc0cHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX2hlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5hcnRpY2xlc19fc3RhdHVzZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0OXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5hcnRpY2xlc19fc3RhdHVzZXMgbGkge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5hcnRpY2xlc19fc3RhdHVzZXMgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAuYXJ0aWNsZXNfX3N0YXR1c2VzLWl0ZW0gYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRSZWd1bGFyJztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjdweDtcXHJcXG4gICAgY29sb3I6ICMwRTBFMEU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5hcnRpY2xlc19fc3RhdHVzZXMtaXRlbV9hY3RpdmUgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMDAwMDAwO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLmFydGljbGVzX190eXBlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5hcnRpY2xlc19fdHlwZXMgbGkge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5hcnRpY2xlc19fdHlwZXMgOmZpcnN0LWNoaWxkIHtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC50eXBlc19fYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMzJweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDkycHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdEJvbGQnO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnR5cGVzX19idXR0b24gPiBkaXYge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnR5cGVzX19idXR0b24gPiBzcGFuIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5hcnRpY2xlc19fdHlwZXMtaXRlbV9hY3RpdmUgLnR5cGVzX19idXR0b24ge1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5hcnRpY2xlc19fcHJvamVjdHMge1xcclxcbiAgICBtYXJnaW4tdG9wOjUwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLmFydGljbGVzX19wcm9qZWN0cy1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX193cmFwcGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fd3JhcHBlciwgLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19iZyA+IGRpdiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fYmcge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fYmcgPiBkaXYge1xcclxcbiAgICBoZWlnaHQ6IDM0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX2JnID4gZGl2ID4gaW1nIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19maWx0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMCUsICMwMDAwMDAgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fbGFiZWxzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICB0b3A6MjNweDtcXHJcXG4gICAgcGFkZGluZzogMCAzNXB4O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbS1sYWJlbDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlcyAucHJvamVjdHMtaXRlbS1sYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtLWxhYmVsID4gZGl2IHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtLWxhYmVsX190ZXh0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Qm9sZCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnByb2plY3QtaXRlbV9fbmV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG4gICAgcmlnaHQ6IDQ1cHg7XFxyXFxuICAgIGJvdHRvbTogMzJweDtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgLTEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX2NvbnRlbnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxuICAgIHBhZGRpbmc6IDMycHggMzVweDtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX3RpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdLeWl2VHlwZVNhbnMnO1xcclxcbiAgICBmb250LXNpemU6IDMzcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19kZXNjIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZXMgLmFydGljbGVzX19wYWdpbmF0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdEJvbGQnO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX2hlYWRlcntcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFydGljbGVzIC5hcnRpY2xlc19fY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXJ0aWNsZXMgLmFydGljbGVzX19wcm9qZWN0cyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3Byb2plY3RzLWl0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXJ0aWNsZXMgLmFydGljbGVzX190aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNjJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXJ0aWNsZXMgLmFydGljbGVzX19zdGF0dXNlcy1pdGVtIGJ1dHRvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFydGljbGVzIC50eXBlc19fYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDhweCAzMnB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFydGljbGVzIC50eXBlc19fYnV0dG9uID4gZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19kZXNje1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX2hlYWRlciB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3RpdGxlIHtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3N0YXR1c2VzIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLmFydGljbGVzX19zdGF0dXNlcy1pdGVtIGJ1dHRvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLmFydGljbGVzX19jb250ZW50e1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLnR5cGVzX19idXR0b24ge1xcclxcbiAgICAgICAgcGFkZGluZzogNnB4IDIwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLnR5cGVzX19idXR0b24gPiBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI0cHhcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLmFydGljbGVzX19wcm9qZWN0cyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fbGFiZWxzIHtcXHJcXG4gICAgICAgIHRvcDogMTVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGVzIC5wcm9qZWN0cy1pdGVtX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMycHggMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW1fX2Rlc2Mge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAucHJvamVjdC1pdGVtX19uZXh0IHtcXHJcXG4gICAgICAgIHJpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgYm90dG9tOiAzMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDhweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuYXJ0aWNsZXMgLmFydGljbGVzX19oZWFkZXIge1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAuYXJ0aWNsZXNfX3N0YXR1c2VzIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlc19fcHJvamVjdHMtaXRlbSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXNfX3R5cGVzIHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLmFydGljbGVzX190eXBlcyBsaSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlcyAucHJvamVjdHMtaXRlbV9fbGFiZWxzIHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZXMgLnByb2plY3RzLWl0ZW0tbGFiZWwge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhY3RzIHtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cyAuY29udGFjdHNfX2NvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiA3NHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIC5jb250YWN0c19faGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnS3lpdlR5cGVTYW5zJztcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiA2OHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogODJweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cyAuY29udGFjdHNfX2FkZHJlc3MtYmxvY2sge1xcclxcbiAgICBwYWRkaW5nOiA2MnB4IDI5cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIC5hZGRyZXNzLWJsb2NrX190ZXh0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzdweDtcXHJcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cyAuYWRkcmVzcy1ibG9ja19fY29weSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMXB4O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cyAuY29udGFjdHNfX2J1dHRvbi1ibG9jayB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIC5jb250YWN0cyAuYnV0dG9uLWJsb2NrX19idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDU1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkQ0MDE7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjJweCAjRkZFMzBBO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMTRweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Qm9sZCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGNvbG9yOiAjMEUwRTBFO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufSAqL1xcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAuY29udGFjdHMgLmNvbnRhY3RzX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzIC5jb250YWN0c19faGVhZGluZyB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzIC5jb250YWN0c19fYWRkcmVzcy1ibG9jayB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzMnB4IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3RzIC5hZGRyZXNzLWJsb2NrX190ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cyAuYWRkcmVzcy1ibG9ja19fY29weXtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogLmNvbnRhY3RzIC5idXR0b24tYmxvY2tfX2J1dHRvbntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfSAqL1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLmNvbnRhY3RzIC5jb250YWN0c19fY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0cyAuY29udGFjdHNfX2hlYWRpbmcge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0cyAuY29udGFjdHNfX2FkZHJlc3MtYmxvY2sge1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdHMgLmFkZHJlc3MtYmxvY2tfX3RleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3RzIC5hZGRyZXNzLWJsb2NrX19jb3B5IHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDE4cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3RzIC5idXR0b24tYmxvY2tfX2J1dHRvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3RzIC5jb250YWN0c19fZ3JpZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdHMgLmNvbnRhY3RzX19ncmlkX3RleHQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3RzIC5jb250YWN0c19fZ3JpZF9idXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3RzIC5jb250YWN0c19fYnV0dG9uLWJsb2NrIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcXHJcXG4gICAgLmNvbnRhY3RzIC5jb250YWN0c19fYWRkcmVzcy1ibG9jayB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXNzZXRzL2Nzcy9jb250YWN0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0FBRUE7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbURBQTJDO1lBQTNDLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTs7Ozs7Ozs7OztHQVVHOztBQUVIO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBOztPQUVHO0FBQ1A7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFVBQVU7UUFDVixjQUFjO1FBQ2QsYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFjdHMge1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIC5jb250YWN0c19fY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDc0cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHMgLmNvbnRhY3RzX19oZWFkaW5nIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzZweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdLeWl2VHlwZVNhbnMnO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDY4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA4MnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIC5jb250YWN0c19fYWRkcmVzcy1ibG9jayB7XFxyXFxuICAgIHBhZGRpbmc6IDYycHggMjlweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cyAuYWRkcmVzcy1ibG9ja19fdGV4dCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHMgLmFkZHJlc3MtYmxvY2tfX2NvcHkge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzFweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHMgLmNvbnRhY3RzX19idXR0b24tYmxvY2sge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuY29udGFjdHMgLmJ1dHRvbi1ibG9ja19fYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMjRweCA1NXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZENDAxO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIycHggI0ZGRTMwQTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTE0cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdEJvbGQnO1xcclxcbiAgICBmb250LXNpemU6IDIzcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xcclxcbiAgICBjb2xvcjogIzBFMEUwRTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLmNvbnRhY3RzIC5jb250YWN0c19fY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cyAuY29udGFjdHNfX2hlYWRpbmcge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cyAuY29udGFjdHNfX2FkZHJlc3MtYmxvY2sge1xcclxcbiAgICAgICAgcGFkZGluZzogMzJweCAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0cyAuYWRkcmVzcy1ibG9ja19fdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFjdHMgLmFkZHJlc3MtYmxvY2tfX2NvcHl7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qIC5jb250YWN0cyAuYnV0dG9uLWJsb2NrX19idXR0b257XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH0gKi9cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgIC5jb250YWN0cyAuY29udGFjdHNfX2NvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdHMgLmNvbnRhY3RzX19oZWFkaW5nIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGFjdHMgLmNvbnRhY3RzX19hZGRyZXNzLWJsb2NrIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICB3aWR0aDogNTAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3RzIC5hZGRyZXNzLWJsb2NrX190ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0cyAuYWRkcmVzcy1ibG9ja19fY29weSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0cyAuYnV0dG9uLWJsb2NrX19idXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0cyAuY29udGFjdHNfX2dyaWQge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRhY3RzIC5jb250YWN0c19fZ3JpZF90ZXh0IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0cyAuY29udGFjdHNfX2dyaWRfYnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250YWN0cyAuY29udGFjdHNfX2J1dHRvbi1ibG9jayB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXFxyXFxuICAgIC5jb250YWN0cyAuY29udGFjdHNfX2FkZHJlc3MtYmxvY2sge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5kb25hdGlvbnMge1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX2NvcHkge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0NnB4O1xcclxcbiAgICBmb250LWZhbWlseTogS3lpdlR5cGVTYW5zO1xcclxcbiAgICBmb250LXNpemU6IDY4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA4MXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDc0cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX21lbnUsIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fc3VibWVudXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fbWVudS1pdGVtLCAuZG9uYXRpb25zIC5kb25hdGlvbnNfX3N1Ym1lbnUtaXRlbXtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fbWVudS1pdGVtIGJ1dHRvbntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOTJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBwYWRkaW5nOiAxOHB4IDI2cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Qm9sZCc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX19tZW51LWl0ZW1fYWN0aXZlIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fc3VibWVudS1pdGVtIGJ1dHRvbntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOTJweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBwYWRkaW5nOiAxOHB4IDI2cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Qm9sZCc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyMi4yMzY0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX3N1Ym1lbnUtaXRlbV9hY3RpdmUgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRDQwMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9uc19fbWVudSA6Zmlyc3QtY2hpbGQsIC5kb25hdGlvbnNfX3N1Ym1lbnUgOmZpcnN0LWNoaWxke1xcclxcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX2Rlc2Mge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzNnB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjE1cyBlYXNlLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMTVzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX21vYmlsZXBheSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fbW9iaWxlcGF5LWRlc2Mge1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX2J1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA5NnB4O1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDEwNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZENDAxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMTRweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Qm9sZCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGNvbG9yOiAjMEUwRTBFO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fYmFua3MtZGVzYyB7XFxyXFxuICAgIG1hcmdpbi10b3A6MjhweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gICAgY29sb3I6IzAwMDAwMDtcXHJcXG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fYmFua3MtZ3VpZGUge1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMjhweCA0N3B4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fY3J5cHRvIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX19jcnlwdG8tZGVzYyB7XFxyXFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyOHB4IDQ3cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI3cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgIGNvbG9yOiAjMEUwRTBFO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX190aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19tZW51LWl0ZW0gYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fc3VibWVudS1pdGVtIGJ1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX2Rlc2Mge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21vYmlsZXBheS1kZXNjIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5idXR0b24uZG9uYXRpb25zX19idXR0b24ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDg1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21lbnUtaXRlbSwgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19zdWJtZW51LWl0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uc19fbWVudSA6Zmlyc3QtY2hpbGQsIC5kb25hdGlvbnNfX3N1Ym1lbnUgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19iYW5rcy1kZXNjIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19iYW5rcy1kZXNjIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fYmFua3MtZ3VpZGUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX2NyeXB0by1kZXNjIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19jb3B5IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21lbnUtaXRlbSBidXR0b24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19kZXNjIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19tb2JpbGVwYXktZGVzYyB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuYnV0dG9uLmRvbmF0aW9uc19fYnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogOXB4IDYwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21vYmlsZXBheSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuYnV0dG9uLmRvbmF0aW9uc19fYnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19zdWJtZW51LWl0ZW0gYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDhweCAxOHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19iYW5rcy1kZXNjIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fYmFua3MtZGVzYyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fYmFua3MtZ3VpZGUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX2NvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21lbnUsIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fc3VibWVudSB7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19tZW51LWl0ZW0sIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fc3VibWVudS1pdGVtIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hc3NldHMvY3NzL2RvbmF0aW9ucy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQTs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbURBQTJDO1lBQTNDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFF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Q3JCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRvbmF0aW9ucyB7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fY29weSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX190aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQ2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLeWl2VHlwZVNhbnM7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDgxcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX19jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogNzRweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fbWVudSwgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19zdWJtZW51e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX19tZW51LWl0ZW0sIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fc3VibWVudS1pdGVte1xcclxcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX19tZW51LWl0ZW0gYnV0dG9ue1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA5MnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIHBhZGRpbmc6IDE4cHggMjZweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRCb2xkJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX21lbnUtaXRlbV9hY3RpdmUgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX3N1Ym1lbnUtaXRlbSBidXR0b257XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDkycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgcGFkZGluZzogMThweCAyNnB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdEJvbGQnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjIuMjM2NHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX19zdWJtZW51LWl0ZW1fYWN0aXZlIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkQ0MDE7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnNfX21lbnUgOmZpcnN0LWNoaWxkLCAuZG9uYXRpb25zX19zdWJtZW51IDpmaXJzdC1jaGlsZHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX19kZXNjIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzZweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuMTVzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX21vYmlsZXBheSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fbW9iaWxlcGF5LWRlc2Mge1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGODtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDk2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHggMTA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkQ0MDE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDExNHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRCb2xkJztcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjlweDtcXHJcXG4gICAgY29sb3I6ICMwRTBFMEU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX19iYW5rcy1kZXNjIHtcXHJcXG4gICAgbWFyZ2luLXRvcDoyOHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRSZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcclxcbiAgICBjb2xvcjojMDAwMDAwO1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvbmF0aW9ucyAuZG9uYXRpb25zX19iYW5rcy1ndWlkZSB7XFxyXFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyOHB4IDQ3cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI3cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZG9uYXRpb25zIC5kb25hdGlvbnNfX2NyeXB0byB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5kb25hdGlvbnMgLmRvbmF0aW9uc19fY3J5cHRvLWRlc2Mge1xcclxcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMjhweCA0N3B4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcclxcbiAgICBjb2xvcjogIzBFMEUwRTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX190aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19tZW51LWl0ZW0gYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fc3VibWVudS1pdGVtIGJ1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX2Rlc2Mge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21vYmlsZXBheS1kZXNjIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5idXR0b24uZG9uYXRpb25zX19idXR0b24ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4IDg1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21lbnUtaXRlbSwgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19zdWJtZW51LWl0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9uc19fbWVudSA6Zmlyc3QtY2hpbGQsIC5kb25hdGlvbnNfX3N1Ym1lbnUgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19iYW5rcy1kZXNjIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19iYW5rcy1kZXNjIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fYmFua3MtZ3VpZGUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX2NyeXB0by1kZXNjIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19jb3B5IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxOHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21lbnUtaXRlbSBidXR0b24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19kZXNjIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19tb2JpbGVwYXktZGVzYyB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuYnV0dG9uLmRvbmF0aW9uc19fYnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogOXB4IDYwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21vYmlsZXBheSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuYnV0dG9uLmRvbmF0aW9uc19fYnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjI1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19zdWJtZW51LWl0ZW0gYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDhweCAxOHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19iYW5rcy1kZXNjIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fYmFua3MtZGVzYyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fYmFua3MtZ3VpZGUge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX2NvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZG9uYXRpb25zIC5kb25hdGlvbnNfX21lbnUsIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fc3VibWVudSB7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRvbmF0aW9ucyAuZG9uYXRpb25zX19tZW51LWl0ZW0sIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fc3VibWVudS1pdGVtIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9mb250cy9LeWl2VHlwZVNhbnMtSGVhdnkud29mZjJcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vZm9udHMvS3lpdlR5cGVTYW5zLUhlYXZ5LndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vZm9udHMvTW9udHNlcnJhdC1yZWd1bGFyLndvZmYyXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uL2ZvbnRzL01vbnRzZXJyYXQtcmVndWxhci53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gZnJvbSBcIi4uL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC53b2ZmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogS3lpdlR5cGVTYW5zO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuIH1cXHJcXG5cXHJcXG4gQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0UmVndWxhcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiB9XFxyXFxuXFxyXFxuIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdEJvbGQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG4gfVxcclxcblxcclxcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyAgXFxyXFxuICAgLmZvb3RlciAuZm9vdGVyX19uYXZpZ2F0aW9uLWZvb3RlciB7XFxyXFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcbiB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Fzc2V0cy9jc3MvZm9udHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLG9IQUFxSDtDQUN4SDs7Q0FFQTtJQUNHLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxvSEFBcUg7Q0FDeEg7O0NBRUE7SUFDRywyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsb0hBQThHO0NBQ2pIOztDQUVBO0dBQ0U7TUFDRyxlQUFlO0VBQ25CO0NBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLeWl2VHlwZVNhbnM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL0t5aXZUeXBlU2Fucy1IZWF2eS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9LeWl2VHlwZVNhbnMtSGVhdnkud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiB9XFxyXFxuXFxyXFxuIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdFJlZ3VsYXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL01vbnRzZXJyYXQtcmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuLi9mb250cy9Nb250c2VycmF0LXJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbiB9XFxyXFxuXFxyXFxuIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdEJvbGQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG4gICAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL01vbnRzZXJyYXQtQm9sZC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuIH1cXHJcXG5cXHJcXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgIFxcclxcbiAgIC5mb290ZXIgLmZvb3Rlcl9fbmF2aWdhdGlvbi1mb290ZXIge1xcclxcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG4gfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzAxNUJCQjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuZm9vdGVyX19jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogNjdweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmZvb3Rlcl9fbmF2aWdhdGlvbi1mb290ZXIge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAubmF2aWdhdGlvbi1mb290ZXJfX2l0ZW0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDQ0cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuNDc4cyBlYXNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40NzhzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLm5hdmlnYXRpb24tZm9vdGVyX19pdGVtOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAubmF2aWdhdGlvbi1mb290ZXJfX2xpbmsge1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRSZWd1bGFyJztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuZm9vdGVyX19zb2NpYWwtZm9vdGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTJweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLnNvY2lhbC1mb290ZXJfX2l0ZW0ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTVweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuc29jaWFsLWZvb3Rlcl9faXRlbTpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLnNvY2lhbC1mb290ZXJfX2l0ZW0gZGl2IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuc29jaWFsLWZvb3Rlcl9faWNvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuZm9vdGVyX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUycHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0UmVndWxhcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX2NvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZzogNTBweCAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciAubmF2aWdhdGlvbi1mb290ZXJfX2l0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIgLnVrLWxpbmstcmVzZXQubmF2aWdhdGlvbi1mb290ZXJfX2xpbmt7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciAuZm9vdGVyX19zb2NpYWwtZm9vdGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciAuc29jaWFsLWZvb3Rlcl9faXRlbSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7IFxcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX25hdmlnYXRpb24tZm9vdGVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mb290ZXIgLmZvb3Rlcl9fY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX3NvY2lhbC1mb290ZXIge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvb3RlciAubmF2aWdhdGlvbi1mb290ZXJfX2l0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyIC51ay1saW5rLXJlc2V0Lm5hdmlnYXRpb24tZm9vdGVyX19saW5rIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mb290ZXIgLnNvY2lhbC1mb290ZXJfX2l0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvb3RlciAuc29jaWFsLWZvb3Rlcl9faXRlbSBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Fzc2V0cy9jc3MvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osc0NBQThCO0lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMTVCQkI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLmZvb3Rlcl9fY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDY3cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIC5mb290ZXJfX25hdmlnYXRpb24tZm9vdGVyIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLm5hdmlnYXRpb24tZm9vdGVyX19pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0NHB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40NzhzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLm5hdmlnYXRpb24tZm9vdGVyX19pdGVtOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAubmF2aWdhdGlvbi1mb290ZXJfX2xpbmsge1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRSZWd1bGFyJztcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuZm9vdGVyX19zb2NpYWwtZm9vdGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTJweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLnNvY2lhbC1mb290ZXJfX2l0ZW0ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNTVweDtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuc29jaWFsLWZvb3Rlcl9faXRlbTpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgLnNvY2lhbC1mb290ZXJfX2l0ZW0gZGl2IHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuc29jaWFsLWZvb3Rlcl9faWNvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciAuZm9vdGVyX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUycHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0UmVndWxhcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX2NvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZzogNTBweCAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciAubmF2aWdhdGlvbi1mb290ZXJfX2l0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb290ZXIgLnVrLWxpbmstcmVzZXQubmF2aWdhdGlvbi1mb290ZXJfX2xpbmt7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciAuZm9vdGVyX19zb2NpYWwtZm9vdGVyIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3RlciAuc29jaWFsLWZvb3Rlcl9faXRlbSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7IFxcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX25hdmlnYXRpb24tZm9vdGVyIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mb290ZXIgLmZvb3Rlcl9fY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX3NvY2lhbC1mb290ZXIge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyIC5mb290ZXJfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvb3RlciAubmF2aWdhdGlvbi1mb290ZXJfX2l0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVyIC51ay1saW5rLXJlc2V0Lm5hdmlnYXRpb24tZm9vdGVyX19saW5rIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mb290ZXIgLnNvY2lhbC1mb290ZXJfX2l0ZW0ge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZvb3RlciAuc29jaWFsLWZvb3Rlcl9faXRlbSBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAzMDZweDtcXHJcXG4gICAgaGVpZ2h0OiA4MXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRDQwMTtcXHJcXG4gICAgYm9yZGVyOiAwcHggdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjo6YWZ0ZXJ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOjBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDI0cHggMHB4IHJnYigyNTUgMjI3IDApO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCAwcHggcmdiKDI1NSAyMjcgMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0OyAgICAgICAgIFxcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXI6OmFmdGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiBhIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Qm9sZCc7XFxyXFxuICAgIGNvbG9yOiAjMEUwRTBFO1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLmJ1dHRvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMjU2cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDcxcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbiBhIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hc3NldHMvY3NzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLG1EQUEyQztZQUEzQywyQ0FBMkM7SUFDM0Msb0JBQW9CO0lBQ3BCLFVBQVU7SUFDViw0Q0FBb0M7SUFBcEMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMzA2cHg7XFxyXFxuICAgIGhlaWdodDogODFweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkQ0MDE7XFxyXFxuICAgIGJvcmRlcjogMHB4IHRyYW5zcGFyZW50O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246OmFmdGVye1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDowcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCAwcHggcmdiKDI1NSAyMjcgMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7ICAgICAgICAgXFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIGEge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRCb2xkJztcXHJcXG4gICAgY29sb3I6ICMwRTBFMEU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAuYnV0dG9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNTZweDtcXHJcXG4gICAgICAgIGhlaWdodDogNzFweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9uIGEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5taXNzaW9uIC5taXNzaW9uX19jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDc0cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA3MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2lvbiAubWlzc2lvbl9fdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA3NHB4O1xcclxcbiAgICBmb250LWZhbWlseTogS3lpdlR5cGVTYW5zO1xcclxcbiAgICBmb250LXNpemU6IDY4cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA4MXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2lvbi1jYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Npb24tY2FyZCAubWlzc2lvbi1jYXJkX19pbWFnZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOjQ1cHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogODhweDtcXHJcXG4gICAgaGVpZ2h0OiA4OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2lvbi1jYXJkIC5taXNzaW9uLWNhcmRfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEt5aXZUeXBlU2FucztcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjJweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2lvbi1jYXJkIC5taXNzaW9uLWNhcmRfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMCA1MHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXRSZWd1bGFyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzc2lvbl9fc2xpZGVyIHtcXHJcXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Npb25fX3NsaWRlciAudWstc2xpZGVuYXYtcG9zaXRpb24sIC5taXNzaW9uX19zbGlkZXIgLnVrLXNsaWRlbmF2IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5taXNzaW9uIC5taXNzaW9uX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1pc3Npb24gLm1pc3Npb25fX3RpdGxlIHsgXFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1pc3Npb24tY2FyZCAubWlzc2lvbi1jYXJkX19pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogNjhweDtcXHJcXG4gICAgICAgIGhlaWdodDogNjhweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWlzc2lvbi1jYXJkIC5taXNzaW9uLWNhcmRfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1pc3Npb24tY2FyZCAubWlzc2lvbi1jYXJkX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5taXNzaW9uLWdyaWQgPiAubWlzc2lvbi1ncmlkX19pdGVtIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5taXNzaW9uLWdyaWRfX2l0ZW0ge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLm1pc3Npb24gLm1pc3Npb25fX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogaW5pdGlhbDtcXHJcXG4gICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXHJcXG4gICAgfVxcclxcbiAgICAubWlzc2lvbi1jYXJkIC5taXNzaW9uLWNhcmRfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5taXNzaW9uLWNhcmQgLm1pc3Npb24tY2FyZF9fZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gICAgfVxcclxcbiAgICAubWlzc2lvbiAubWlzc2lvbl9fY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5taXNzaW9uX19zbGlkZXIgLnVrLXNsaWRlbmF2LXBvc2l0aW9uLCAubWlzc2lvbl9fc2xpZGVyIC51ay1zbGlkZW5hdiB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLm1pc3Npb24gLm1pc3Npb25fX3RpdGxlIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubWlzc2lvbi1ncmlkX19pdGVtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hc3NldHMvY3NzL21pc3Npb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1EQUEyQztZQUEzQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFZO0lBQVosWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakI7SUFDSjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBb0I7UUFBcEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksMkJBQW1CO2dCQUFuQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1pc3Npb24gLm1pc3Npb25fX2NvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNzRweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDcycHg7XFxyXFxufVxcclxcblxcclxcbi5taXNzaW9uIC5taXNzaW9uX190aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDc0cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLeWl2VHlwZVNhbnM7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDgxcHg7XFxyXFxufVxcclxcblxcclxcbi5taXNzaW9uLWNhcmQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5taXNzaW9uLWNhcmQgLm1pc3Npb24tY2FyZF9faW1hZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDo0NXB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgd2lkdGg6IDg4cHg7XFxyXFxuICAgIGhlaWdodDogODhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Npb24tY2FyZCAubWlzc2lvbi1jYXJkX190aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLeWl2VHlwZVNhbnM7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIycHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Npb24tY2FyZCAubWlzc2lvbi1jYXJkX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0UmVndWxhcjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Npb25fX3NsaWRlciB7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Npb25fX3NsaWRlciAudWstc2xpZGVuYXYtcG9zaXRpb24sIC5taXNzaW9uX19zbGlkZXIgLnVrLXNsaWRlbmF2IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5taXNzaW9uIC5taXNzaW9uX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1pc3Npb24gLm1pc3Npb25fX3RpdGxlIHsgXFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1pc3Npb24tY2FyZCAubWlzc2lvbi1jYXJkX19pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogNjhweDtcXHJcXG4gICAgICAgIGhlaWdodDogNjhweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWlzc2lvbi1jYXJkIC5taXNzaW9uLWNhcmRfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1pc3Npb24tY2FyZCAubWlzc2lvbi1jYXJkX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5taXNzaW9uLWdyaWQgPiAubWlzc2lvbi1ncmlkX19pdGVtIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5taXNzaW9uLWdyaWRfX2l0ZW0ge1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLm1pc3Npb24gLm1pc3Npb25fX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xcclxcbiAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcclxcbiAgICB9XFxyXFxuICAgIC5taXNzaW9uLWNhcmQgLm1pc3Npb24tY2FyZF9fdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1pc3Npb24tY2FyZCAubWlzc2lvbi1jYXJkX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5taXNzaW9uIC5taXNzaW9uX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1pc3Npb25fX3NsaWRlciAudWstc2xpZGVuYXYtcG9zaXRpb24sIC5taXNzaW9uX19zbGlkZXIgLnVrLXNsaWRlbmF2IHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLm1pc3Npb24gLm1pc3Npb25fX3RpdGxlIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubWlzc2lvbi1ncmlkX19pdGVtIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2YmFyIHtcXHJcXG4gICAgbWFyZ2luOiA1MXB4IDQwcHg7XFxyXFxuIH1cXHJcXG4gXFxyXFxuLm5hdmJhciAubmF2YmFyX19sb2dvIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDIycHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRSZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA3cHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC40NzhzIGVhc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjQ3OHMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW06aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjc3NXMgZWFzZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNzc1cyBlYXNlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLm5hdmJhcl9fbWVudS1pdGVtX2FjdGl2ZSB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAubmF2YmFyX19sb2dvIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAubmF2YmFyX19yaWdodCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLm5hdmJhcl9fcmlnaHQgYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21vYmlsZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21vYmlsZS13cmFwIHtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21vYmlsZS1tZW51IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbW9iaWxlLW1lbnUgbGkge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tb2JpbGUtbGFuZy1zd2l0aGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7IFxcclxcbiAgICAubmF2YmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIC5uYXZiYXJfX2xvZ28ge1xcclxcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW0ge1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW0ge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyX19kZXNrdG9wIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhcl9fbW9iaWxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgLm5hdmJhcl9fbG9nbyB7XFxyXFxuICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBcXHJcXG4gICAgLnVrLW5hdmJhci1yaWdodC5uYXZiYXJfX21vYmlsZSAudWstbmF2YmFyLXRvZ2dsZSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5uYXZiYXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hc3NldHMvY3NzL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQ0FBOEI7SUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDZCQUFxQjtnQkFBckIscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2YmFyIHtcXHJcXG4gICAgbWFyZ2luOiA1MXB4IDQwcHg7XFxyXFxuIH1cXHJcXG4gXFxyXFxuLm5hdmJhciAubmF2YmFyX19sb2dvIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW0ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDIycHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRSZWd1bGFyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA3cHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDc4cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIC5uYXZiYXJfX21lbnUtaXRlbTpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjc3NXMgZWFzZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIC5uYXZiYXJfX21lbnUtaXRlbV9hY3RpdmUge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLm5hdmJhcl9fbG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTA1cHg7XFxyXFxuICAgIGhlaWdodDogMTA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLm5hdmJhcl9fcmlnaHQge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIC5uYXZiYXJfX3JpZ2h0IGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tb2JpbGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tb2JpbGUtd3JhcCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyX19tb2JpbGUtbWVudSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJfX21vYmlsZS1tZW51IGxpIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhcl9fbW9iaWxlLWxhbmctc3dpdGhlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgeyBcXHJcXG4gICAgLm5hdmJhciB7XFxyXFxuICAgICAgICBtYXJnaW46IDQwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhciAubmF2YmFyX19sb2dvIHtcXHJcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXIgLm5hdmJhcl9fbWVudS1pdGVtIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgIC5uYXZiYXIgLm5hdmJhcl9fbWVudS1pdGVtIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLm5hdmJhcl9fZGVza3RvcCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5uYXZiYXJfX21vYmlsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgICAubmF2YmFyIC5uYXZiYXJfX2xvZ28ge1xcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXFxyXFxuICAgIC51ay1uYXZiYXItcmlnaHQubmF2YmFyX19tb2JpbGUgLnVrLW5hdmJhci10b2dnbGUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5uYXZiYXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXJ0aWNsZS1wYWdlIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5uYXZiYXJfX2NlbnRlciwgLmFydGljbGUtcGFnZSAubmF2YmFyX19yaWdodCwgLmFydGljbGUtcGFnZSAubmF2YmFyX19tZW51LWl0ZW0ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXBhZ2UgLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW1fYWN0aXZlIHsgXFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZV9fY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi10b3A6MzdweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fd3JhcHBlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtcGFnZSAuYXJ0aWNsZS1wYWdlLWl0ZW1fX3dyYXBwZXIsIC5hcnRpY2xlLXBhZ2UtaXRlbV9fYmcgPiBkaXYge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fYmcgPiBkaXYge1xcclxcbiAgICBoZWlnaHQ6IDcwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fYmcgPiBkaXYgPiBpbWcge1xcclxcbiAgICAtd2Via2l0LW9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtcGFnZSAuYXJ0aWNsZS1wYWdlLWl0ZW1fX2ZpbHRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbShyZ2JhKDAsIDAsIDAsIDApKSwgdG8oIzAwMDAwMCkpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCkgMCUsICMwMDAwMDAgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMCUsICMwMDAwMDAgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZS1pdGVtX19jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gICAgcGFkZGluZzogNThweCA1M3B4O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTA2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0t5aXZUeXBlU2Fucyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDgycHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fZGVzYyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjsgXFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUxcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSBwIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBjb2xvcjogIzBFMEUwRTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZS1pdGVtX190aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fZGVzYyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1MXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLmFydGljbGUtcGFnZSAuYXJ0aWNsZS1wYWdlLWl0ZW1fX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGUtcGFnZS1hcnRpY2xlIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZS1wYWdlIC5uYXZiYXJfX21vYmlsZSAudWstbmF2YmFyLXRvZ2dsZSB7IFxcclxcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZS1pdGVtX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgLmFydGljbGUtcGFnZSAuYXJ0aWNsZS1wYWdlLWl0ZW1fX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZS1pdGVtX19kZXNjIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZS1pdGVtX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Fzc2V0cy9jc3MvcGFnZXMvYXJ0aWNsZS1wYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixnR0FBc0U7SUFBdEUsMkVBQXNFO0lBQXRFLHNFQUFzRTtBQUMxRTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXJ0aWNsZS1wYWdlIC5kb25hdGlvbnMgLmRvbmF0aW9uc19fY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5uYXZiYXJfX2NlbnRlciwgLmFydGljbGUtcGFnZSAubmF2YmFyX19yaWdodCwgLmFydGljbGUtcGFnZSAubmF2YmFyX19tZW51LWl0ZW0ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXBhZ2UgLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW1fYWN0aXZlIHsgXFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZV9fY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi10b3A6MzdweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fd3JhcHBlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFydGljbGUtcGFnZSAuYXJ0aWNsZS1wYWdlLWl0ZW1fX3dyYXBwZXIsIC5hcnRpY2xlLXBhZ2UtaXRlbV9fYmcgPiBkaXYge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fYmcgPiBkaXYge1xcclxcbiAgICBoZWlnaHQ6IDcwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fYmcgPiBkaXYgPiBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fZmlsdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDApIDAlLCAjMDAwMDAwIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gICAgcGFkZGluZzogNThweCA1M3B4O1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTA2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fdGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0t5aXZUeXBlU2Fucyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDgycHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fZGVzYyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjsgXFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUxcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSBwIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBjb2xvcjogIzBFMEUwRTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZS1pdGVtX190aXRsZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDU1cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fZGVzYyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZS1wYWdlIC5hcnRpY2xlLXBhZ2UtaXRlbV9fY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA1MXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLmFydGljbGUtcGFnZSAuYXJ0aWNsZS1wYWdlLWl0ZW1fX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFydGljbGUtcGFnZS1hcnRpY2xlIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYXJ0aWNsZS1wYWdlIC5uYXZiYXJfX21vYmlsZSAudWstbmF2YmFyLXRvZ2dsZSB7IFxcclxcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZS1pdGVtX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgLmFydGljbGUtcGFnZSAuYXJ0aWNsZS1wYWdlLWl0ZW1fX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZS1pdGVtX19kZXNjIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UgLmFydGljbGUtcGFnZS1pdGVtX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDI1cHggMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5hcnRpY2xlLXBhZ2UtYXJ0aWNsZSBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ob21lLXBhZ2UgLm5hdmJhcl9fY2VudGVyLCAuaG9tZS1wYWdlIC5uYXZiYXJfX3JpZ2h0LCAuaG9tZS1wYWdlIC5uYXZiYXJfX21lbnUtaXRlbSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtcGFnZSAgLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW1fYWN0aXZlIHsgXFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLm5hdmJhcl9fbWVudS1pdGVtX2FjdGl2ZSB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7IFxcclxcbiAgICAuaG9tZS1wYWdlIC5uYXZiYXJfX21vYmlsZSB7IFxcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXNzZXRzL2Nzcy9wYWdlcy9ob21lLXBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhvbWUtcGFnZSAubmF2YmFyX19jZW50ZXIsIC5ob21lLXBhZ2UgLm5hdmJhcl9fcmlnaHQsIC5ob21lLXBhZ2UgLm5hdmJhcl9fbWVudS1pdGVtIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1wYWdlICAubmF2YmFyIC5uYXZiYXJfX21lbnUtaXRlbV9hY3RpdmUgeyBcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW1fYWN0aXZlIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsgXFxyXFxuICAgIC5ob21lLXBhZ2UgLm5hdmJhcl9fbW9iaWxlIHsgXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGVhbS1wYWdlIC5uYXZiYXJfX2NlbnRlciwgLmFydGljbGUtcGFnZSAubmF2YmFyX19yaWdodCwgLmFydGljbGUtcGFnZSAubmF2YmFyX19tZW51LWl0ZW0ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW1fYWN0aXZlIHsgXFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW1fX2NvbnRlbnQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA3OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbS1wYWdlIC50ZWFtIC50ZWFtLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0taGVhZGVyX19oZWFkaW5nIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogS3lpdlR5cGVTYW5zO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDc4cHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjNzI3MjcyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0taGVhZGVyX19oZWFkaW5nX2FjdGl2ZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59IFxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tc3RydWN0dXJlIC50ZWFtLXN0cnVjdHVyZV9fc2NoZW1lIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tc3RydWN0dXJlIC50ZWFtLXN0cnVjdHVyZV9fZGVzYyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDgycHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW0tcGFnZSAudGVhbSAudGVhbS1tZW1iZXJfX3dyYXBwZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAyNThweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW0tcGFnZSAudGVhbSAgLnRlYW0tbWVtYmVyX19pbWFnZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gIC50ZWFtLW1lbWJlcl9faW1hZ2UgPiBkaXYgPiBpbWcge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyX190aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xcclxcbiAgICBmb250LWZhbWlseTogS3lpdlR5cGVTYW5zO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRSZWd1bGFyJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7IFxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLWhlYWRlcl9faGVhZGluZyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLW1lbWJlciB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgfVxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLW1lbWJlcl9faW1hZ2Uge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLW1lbWJlcl9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLnRlYW0tcGFnZSAudGVhbSAudGVhbS1oZWFkZXJfX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLW1lbWJlciB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tc3RydWN0dXJlIC50ZWFtLXN0cnVjdHVyZV9fZGVzYyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAudGVhbS1wYWdlIC5uYXZiYXJfX21vYmlsZSAudWstbmF2YmFyLXRvZ2dsZSB7IFxcclxcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgLnRlYW0tcGFnZSAudGVhbSAudGVhbS1oZWFkZXJfX2hlYWRpbmcge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tc3RydWN0dXJlIC50ZWFtLXN0cnVjdHVyZV9fZGVzYyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Fzc2V0cy9jc3MvcGFnZXMvdGVhbS1wYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGVhbS1wYWdlIC5uYXZiYXJfX2NlbnRlciwgLmFydGljbGUtcGFnZSAubmF2YmFyX19yaWdodCwgLmFydGljbGUtcGFnZSAubmF2YmFyX19tZW51LWl0ZW0ge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLm5hdmJhciAubmF2YmFyX19tZW51LWl0ZW1fYWN0aXZlIHsgXFxyXFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW1fX2NvbnRlbnQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA3OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVhbS1wYWdlIC50ZWFtIC50ZWFtLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0taGVhZGVyX19oZWFkaW5nIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogS3lpdlR5cGVTYW5zO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDc4cHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjNzI3MjcyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0taGVhZGVyX19oZWFkaW5nX2FjdGl2ZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59IFxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tc3RydWN0dXJlIC50ZWFtLXN0cnVjdHVyZV9fc2NoZW1lIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tc3RydWN0dXJlIC50ZWFtLXN0cnVjdHVyZV9fZGVzYyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDgycHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW0tcGFnZSAudGVhbSAudGVhbS1tZW1iZXJfX3dyYXBwZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAyNThweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlYW0tcGFnZSAudGVhbSAgLnRlYW0tbWVtYmVyX19pbWFnZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gIC50ZWFtLW1lbWJlcl9faW1hZ2UgPiBkaXYgPiBpbWcge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyX190aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xcclxcbiAgICBmb250LWZhbWlseTogS3lpdlR5cGVTYW5zO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXRSZWd1bGFyJztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7IFxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLWhlYWRlcl9faGVhZGluZyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLW1lbWJlciB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgfVxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLW1lbWJlcl9faW1hZ2Uge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLW1lbWJlcl9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLnRlYW0tcGFnZSAudGVhbSAudGVhbS1oZWFkZXJfX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGVhbS1wYWdlIC50ZWFtIC50ZWFtLW1lbWJlciB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tc3RydWN0dXJlIC50ZWFtLXN0cnVjdHVyZV9fZGVzYyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAudGVhbS1wYWdlIC5uYXZiYXJfX21vYmlsZSAudWstbmF2YmFyLXRvZ2dsZSB7IFxcclxcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgXFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gICAgLnRlYW0tcGFnZSAudGVhbSAudGVhbS1oZWFkZXJfX2hlYWRpbmcge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tbWVtYmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC50ZWFtLXBhZ2UgLnRlYW0gLnRlYW0tc3RydWN0dXJlIC50ZWFtLXN0cnVjdHVyZV9fZGVzYyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wYXJ0bmVycyB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5wYXJ0bmVycyAucGFydG5lcnNfX2NvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDg3cHg7XFxyXFxufVxcclxcblxcclxcbi5wYXJ0bmVycyAucGFydG5lcnNfX3RpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDZweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEt5aXZUeXBlU2FucztcXHJcXG4gICAgZm9udC1zaXplOiA2OHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogODFweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLnBhcnRuZXJzIC5wYXJ0bmVyc19fY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wYXJ0bmVycyAucGFydG5lcnNfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogNjJweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLnBhcnRuZXJzIC5wYXJ0bmVyc19fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXJ0bmVycyAucGFydG5lcnNfX2NvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAucGFydG5lcnMgLnBhcnRuZXJzX19ncmlkIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXJ0bmVyc19fZ3JpZC1pdGVtIHtcXHJcXG4gICAgICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5wYXJ0bmVycyAucGFydG5lcnNfX3RpdGxle1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5wYXJ0bmVyc19fZ3JpZC1pdGVte1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Fzc2V0cy9jc3MvcGFydG5lcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucGFydG5lcnMge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFydG5lcnMgLnBhcnRuZXJzX19jb250ZW50IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDY0cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA4N3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFydG5lcnMgLnBhcnRuZXJzX190aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQ2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBLeWl2VHlwZVNhbnM7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDgxcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5wYXJ0bmVycyAucGFydG5lcnNfX2NvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGFydG5lcnMgLnBhcnRuZXJzX190aXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYycHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgIC5wYXJ0bmVycyAucGFydG5lcnNfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucGFydG5lcnMgLnBhcnRuZXJzX19jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLnBhcnRuZXJzIC5wYXJ0bmVyc19fZ3JpZCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAucGFydG5lcnNfX2dyaWQtaXRlbSB7XFxyXFxuICAgICAgICB3aWR0aDogNzUlO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAucGFydG5lcnMgLnBhcnRuZXJzX190aXRsZXtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgICAucGFydG5lcnNfX2dyaWQtaXRlbXtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7XFxyXFxuICAgIG1hcmdpbjowcHg7XFxyXFxuICAgIHBhZGRpbmc6MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXNzZXRzL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7XFxyXFxuICAgIG1hcmdpbjowcHg7XFxyXFxuICAgIHBhZGRpbmc6MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9yZXNldC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vZm9udHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL25hdmJhci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vd2VsY29tZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vYWJvdXQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL21pc3Npb24uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF83X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL2FydGljbGVzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9kb25hdGlvbnMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF85X19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsyXSEuL3BhcnRuZXJzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vd2luLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vY29udGFjdHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMl9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9mb290ZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xM19fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9wYWdlcy9ob21lLXBhZ2UuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9wYWdlcy9hcnRpY2xlLXBhZ2UuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNV9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9wYWdlcy90ZWFtLXBhZ2UuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfN19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzExX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE0X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjdGl0bGUge1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTM2MzY7XFxufVxcblxcbiNiYW5uZXIge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGhlaWdodDogODAwcHg7XFxufVxcblxcbiNlZGl0b3Ige1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi51ay1uYXZiYXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgZm9udC1mYW1pbHk6IFN0YWF0bGljaGVzO1xcbn1cXG5cXG5pbWc6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XFxufVxcblxcbi5zY3JvbGwtdG9wIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMzBweDtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxufVxcblxcbi5zY3JvbGwtdG9wICA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICAuc2Nyb2xsLXRvcCB7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICByaWdodDogMzBweDtcXG4gICAgICAgIGJvdHRvbTogMzBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBa0JBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUVBQTZEO0lBQTdELDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osU0FBUztRQUNULFVBQVU7UUFDVixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUNBQWlDO1FBQ2pDLHlCQUF5QjtRQUN6QixpQkFBaUI7SUFDckI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnLi9yZXNldC5jc3MnKTtcXG5AaW1wb3J0IHVybCguL2dsb2JhbHMuY3NzKTtcXG5AaW1wb3J0IHVybCgnLi9mb250cy5jc3MnKTtcXG5AaW1wb3J0IHVybCguL25hdmJhci5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vd2VsY29tZS5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vYWJvdXQuY3NzKTtcXG5AaW1wb3J0IHVybCguL21pc3Npb24uY3NzKTtcXG5AaW1wb3J0IHVybCguL2FydGljbGVzLmNzcyk7XFxuQGltcG9ydCB1cmwoJy4vZG9uYXRpb25zLmNzcycpO1xcbkBpbXBvcnQgdXJsKC4vcGFydG5lcnMuY3NzKTtcXG5AaW1wb3J0IHVybCguL3dpbi5jc3MpO1xcbkBpbXBvcnQgdXJsKC4vY29udGFjdHMuY3NzKTtcXG5AaW1wb3J0IHVybCguL2Zvb3Rlci5jc3MpO1xcbkBpbXBvcnQgdXJsKHBhZ2VzL2hvbWUtcGFnZS5jc3MpO1xcbkBpbXBvcnQgdXJsKHBhZ2VzL2FydGljbGUtcGFnZS5jc3MpO1xcbkBpbXBvcnQgdXJsKHBhZ2VzL3RlYW0tcGFnZS5jc3MpO1xcblxcblxcbiN0aXRsZSB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4xMzYzNjtcXG59XFxuXFxuI2Jhbm5lciB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG59XFxuXFxuI2VkaXRvciB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43NTtcXG59XFxuXFxuLnVrLW5hdmJhci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgICBmb250LWZhbWlseTogU3RhYXRsaWNoZXM7XFxufVxcblxcbmltZzpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XFxufVxcblxcbi5zY3JvbGwtdG9wIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMzBweDtcXG4gICAgYm90dG9tOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuXFxuLnNjcm9sbC10b3AgID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5zY3JvbGwtdG9wIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHJpZ2h0OiAzMHB4O1xcbiAgICAgICAgYm90dG9tOiAzMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4ud2VsY29tZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lIC5iYWNrZ3JvdW5kIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lIC5iYWNrZ3JvdW5kLCAud2VsY29tZSAuYmFja2dyb3VuZCA+IGRpdiB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSAuYmFja2dyb3VuZCA+IGRpdiA+IGltZyB7XFxyXFxuICAgIC13ZWJraXQtb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcXHJcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSAud2VsY29tZV9faGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0t5aXZUeXBlU2Fucyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzhweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lIC53ZWxjb21lX19ibG9jayB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1dmg7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lIC53ZWxjb21lX19oZWFkaW5nVHlwZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSAud2VsY29tZV9fZGVzcmlwdGlvbiB7XFxyXFxuICAgIG1heC13aWR0aDogNTA4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM2cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lIC53ZWxjb21lX19kZXNyaXB0aW9uIGIge1xcclxcbiAgICBjb2xvcjogI0ZGRDQwMTtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUgLndlbGNvbWVfX2J1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDc1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLndlbGNvbWUge1xcclxcbiAgICAgICAgbWluLWhlaWdodDogdW5zZXQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2Jsb2NrIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VsY29tZSAud2VsY29tZV9faGVhZGluZyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2hlYWRpbmdUeXBlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VsY29tZSAud2VsY29tZV9fZGVzcmlwdGlvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ1dHRvbiBhIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2Jsb2NrIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC53ZWxjb21lIC53ZWxjb21lX19oZWFkaW5nVHlwZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2Rlc3JpcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5idXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5idXR0b24gYSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2J1dHRvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAud2VsY29tZSAuYmFja2dyb3VuZCwgLndlbGNvbWUgLmJhY2tncm91bmQgPiBkaXYge1xcclxcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNyk7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2Fzc2V0cy9jc3Mvd2VsY29tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1Asb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLndlbGNvbWUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSAuYmFja2dyb3VuZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSAuYmFja2dyb3VuZCwgLndlbGNvbWUgLmJhY2tncm91bmQgPiBkaXYge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUgLmJhY2tncm91bmQgPiBkaXYgPiBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSAud2VsY29tZV9faGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0t5aXZUeXBlU2Fucyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzhweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lIC53ZWxjb21lX19ibG9jayB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1dmg7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lIC53ZWxjb21lX19oZWFkaW5nVHlwZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdFJlZ3VsYXInO1xcclxcbiAgICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICAgIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSAud2VsY29tZV9fZGVzcmlwdGlvbiB7XFxyXFxuICAgIG1heC13aWR0aDogNTA4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM2cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0UmVndWxhcic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lIC53ZWxjb21lX19kZXNyaXB0aW9uIGIge1xcclxcbiAgICBjb2xvcjogI0ZGRDQwMTtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUgLndlbGNvbWVfX2J1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDc1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLndlbGNvbWUge1xcclxcbiAgICAgICAgbWluLWhlaWdodDogdW5zZXQ7XFxyXFxuICAgIH1cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2Jsb2NrIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDV2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VsY29tZSAud2VsY29tZV9faGVhZGluZyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2hlYWRpbmdUeXBlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud2VsY29tZSAud2VsY29tZV9fZGVzcmlwdGlvbiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ1dHRvbiBhIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2Jsb2NrIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC53ZWxjb21lIC53ZWxjb21lX19oZWFkaW5nVHlwZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2Rlc3JpcHRpb24ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5idXR0b24ge1xcclxcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5idXR0b24gYSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLndlbGNvbWUgLndlbGNvbWVfX2J1dHRvbiB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcXHJcXG4gICAgfVxcclxcbiAgICAud2VsY29tZSAuYmFja2dyb3VuZCwgLndlbGNvbWUgLmJhY2tncm91bmQgPiBkaXYge1xcclxcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNyk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbi53aW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi53aW4gLndpbl9faGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0t5aXZUeXBlU2Fucyc7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTM1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNjJweDtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi53aW4gLndpbl9fYmxvY2sge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAud2luIC53aW5fX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4NnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDkwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7IFxcclxcbiAgICAud2luIC53aW5fX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLndpbiAud2luX19oZWFkaW5nIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgICAud2luIC53aW5fX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hc3NldHMvY3NzL3dpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLndpbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbiAud2luX19oZWFkaW5nIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnS3lpdlR5cGVTYW5zJztcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMzVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE2MnB4O1xcclxcbiAgICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbiAud2luX19ibG9jayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAud2luIC53aW5fX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4NnB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDkwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7IFxcclxcbiAgICAud2luIC53aW5fX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLndpbiAud2luX19oZWFkaW5nIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgICAud2luIC53aW5fX2hlYWRpbmcge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXs5MTpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXtpZighcil7cj17fX1lPWUmJmUuX19lc01vZHVsZT9lLmRlZmF1bHQ6ZTtpZih0eXBlb2YgZSE9PVwic3RyaW5nXCIpe3JldHVybiBlfWlmKC9eWydcIl0uKlsnXCJdJC8udGVzdChlKSl7ZT1lLnNsaWNlKDEsLTEpfWlmKHIuaGFzaCl7ZSs9ci5oYXNofWlmKC9bXCInKCkgXFx0XFxuXS8udGVzdChlKXx8ci5uZWVkUXVvdGVzKXtyZXR1cm4nXCInLmNvbmNhdChlLnJlcGxhY2UoL1wiL2csJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLFwiXFxcXG5cIiksJ1wiJyl9cmV0dXJuIGV9fX07dmFyIHI9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyh0KXtpZihyW3RdKXtyZXR1cm4gclt0XS5leHBvcnRzfXZhciBfPXJbdF09e2V4cG9ydHM6e319O3ZhciBuPXRydWU7dHJ5e2VbdF0oXyxfLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7bj1mYWxzZX1maW5hbGx5e2lmKG4pZGVsZXRlIHJbdF19cmV0dXJuIF8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MSl9KCk7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9LeWl2VHlwZVNhbnMtSGVhdnkuMGQ2MmY5OTkzODMzZjkzMmJhMTg2MTBmMjU0OTY0NjYud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvS3lpdlR5cGVTYW5zLUhlYXZ5LmE2MDY0OGNlZTM4M2ViMmQ2NTM5NTkwY2ZiZDdiNjQzLndvZmYyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9Nb250c2VycmF0LUJvbGQuMTgwYmEzM2Q4ZGU3ZGNmZTgwYTAwNzdiZTg3MDg2MzAud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvTW9udHNlcnJhdC1yZWd1bGFyLmUwMWQwNDhjYWY3ZTI5MWRiYzdhMWU5NmQyMzY0NjE2LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL01vbnRzZXJyYXQtcmVndWxhci4wNmJiODAxNjM5N2ZhYzg4M2UxMzA4MjY5MTg0NjEzNi53b2ZmMlwiOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkJylcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJ2YXIgaGFzTWFwID0gdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiBNYXAucHJvdG90eXBlO1xudmFyIG1hcFNpemVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBoYXNNYXAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE1hcC5wcm90b3R5cGUsICdzaXplJykgOiBudWxsO1xudmFyIG1hcFNpemUgPSBoYXNNYXAgJiYgbWFwU2l6ZURlc2NyaXB0b3IgJiYgdHlwZW9mIG1hcFNpemVEZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFNpemVEZXNjcmlwdG9yLmdldCA6IG51bGw7XG52YXIgbWFwRm9yRWFjaCA9IGhhc01hcCAmJiBNYXAucHJvdG90eXBlLmZvckVhY2g7XG52YXIgaGFzU2V0ID0gdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyAmJiBTZXQucHJvdG90eXBlO1xudmFyIHNldFNpemVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBoYXNTZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFNldC5wcm90b3R5cGUsICdzaXplJykgOiBudWxsO1xudmFyIHNldFNpemUgPSBoYXNTZXQgJiYgc2V0U2l6ZURlc2NyaXB0b3IgJiYgdHlwZW9mIHNldFNpemVEZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJyA/IHNldFNpemVEZXNjcmlwdG9yLmdldCA6IG51bGw7XG52YXIgc2V0Rm9yRWFjaCA9IGhhc1NldCAmJiBTZXQucHJvdG90eXBlLmZvckVhY2g7XG52YXIgaGFzV2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIFdlYWtNYXAucHJvdG90eXBlO1xudmFyIHdlYWtNYXBIYXMgPSBoYXNXZWFrTWFwID8gV2Vha01hcC5wcm90b3R5cGUuaGFzIDogbnVsbDtcbnZhciBoYXNXZWFrU2V0ID0gdHlwZW9mIFdlYWtTZXQgPT09ICdmdW5jdGlvbicgJiYgV2Vha1NldC5wcm90b3R5cGU7XG52YXIgd2Vha1NldEhhcyA9IGhhc1dlYWtTZXQgPyBXZWFrU2V0LnByb3RvdHlwZS5oYXMgOiBudWxsO1xudmFyIGhhc1dlYWtSZWYgPSB0eXBlb2YgV2Vha1JlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBXZWFrUmVmLnByb3RvdHlwZTtcbnZhciB3ZWFrUmVmRGVyZWYgPSBoYXNXZWFrUmVmID8gV2Vha1JlZi5wcm90b3R5cGUuZGVyZWYgOiBudWxsO1xudmFyIGJvb2xlYW5WYWx1ZU9mID0gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZjtcbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciBtYXRjaCA9IFN0cmluZy5wcm90b3R5cGUubWF0Y2g7XG52YXIgYmlnSW50VmFsdWVPZiA9IHR5cGVvZiBCaWdJbnQgPT09ICdmdW5jdGlvbicgPyBCaWdJbnQucHJvdG90eXBlLnZhbHVlT2YgOiBudWxsO1xudmFyIGdPUFMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIHN5bVRvU3RyaW5nID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnc3ltYm9sJyA/IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgOiBudWxsO1xudmFyIGhhc1NoYW1tZWRTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSAnb2JqZWN0JztcbnZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG52YXIgZ1BPID0gKHR5cGVvZiBSZWZsZWN0ID09PSAnZnVuY3Rpb24nID8gUmVmbGVjdC5nZXRQcm90b3R5cGVPZiA6IE9iamVjdC5nZXRQcm90b3R5cGVPZikgfHwgKFxuICAgIFtdLl9fcHJvdG9fXyA9PT0gQXJyYXkucHJvdG90eXBlIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cbiAgICAgICAgPyBmdW5jdGlvbiAoTykge1xuICAgICAgICAgICAgcmV0dXJuIE8uX19wcm90b19fOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG4gICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4pO1xuXG52YXIgaW5zcGVjdEN1c3RvbSA9IHJlcXVpcmUoJy4vdXRpbC5pbnNwZWN0JykuY3VzdG9tO1xudmFyIGluc3BlY3RTeW1ib2wgPSBpbnNwZWN0Q3VzdG9tICYmIGlzU3ltYm9sKGluc3BlY3RDdXN0b20pID8gaW5zcGVjdEN1c3RvbSA6IG51bGw7XG52YXIgdG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgIT09ICd1bmRlZmluZWQnID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogbnVsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnNwZWN0XyhvYmosIG9wdGlvbnMsIGRlcHRoLCBzZWVuKSB7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKGhhcyhvcHRzLCAncXVvdGVTdHlsZScpICYmIChvcHRzLnF1b3RlU3R5bGUgIT09ICdzaW5nbGUnICYmIG9wdHMucXVvdGVTdHlsZSAhPT0gJ2RvdWJsZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBcInF1b3RlU3R5bGVcIiBtdXN0IGJlIFwic2luZ2xlXCIgb3IgXCJkb3VibGVcIicpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAgIGhhcyhvcHRzLCAnbWF4U3RyaW5nTGVuZ3RoJykgJiYgKHR5cGVvZiBvcHRzLm1heFN0cmluZ0xlbmd0aCA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gb3B0cy5tYXhTdHJpbmdMZW5ndGggPCAwICYmIG9wdHMubWF4U3RyaW5nTGVuZ3RoICE9PSBJbmZpbml0eVxuICAgICAgICAgICAgOiBvcHRzLm1heFN0cmluZ0xlbmd0aCAhPT0gbnVsbFxuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBcIm1heFN0cmluZ0xlbmd0aFwiLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIsIEluZmluaXR5LCBvciBgbnVsbGAnKTtcbiAgICB9XG4gICAgdmFyIGN1c3RvbUluc3BlY3QgPSBoYXMob3B0cywgJ2N1c3RvbUluc3BlY3QnKSA/IG9wdHMuY3VzdG9tSW5zcGVjdCA6IHRydWU7XG4gICAgaWYgKHR5cGVvZiBjdXN0b21JbnNwZWN0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIFwiY3VzdG9tSW5zcGVjdFwiLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBgdHJ1ZWAgb3IgYGZhbHNlYCcpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgaGFzKG9wdHMsICdpbmRlbnQnKVxuICAgICAgICAmJiBvcHRzLmluZGVudCAhPT0gbnVsbFxuICAgICAgICAmJiBvcHRzLmluZGVudCAhPT0gJ1xcdCdcbiAgICAgICAgJiYgIShwYXJzZUludChvcHRzLmluZGVudCwgMTApID09PSBvcHRzLmluZGVudCAmJiBvcHRzLmluZGVudCA+IDApXG4gICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgXCJpbmRlbnRcIiBtdXN0IGJlIFwiXFxcXHRcIiwgYW4gaW50ZWdlciA+IDAsIG9yIGBudWxsYCcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgfVxuICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gb2JqID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGluc3BlY3RTdHJpbmcob2JqLCBvcHRzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChvYmogPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBJbmZpbml0eSAvIG9iaiA+IDAgPyAnMCcgOiAnLTAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcob2JqKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdiaWdpbnQnKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcob2JqKSArICduJztcbiAgICB9XG5cbiAgICB2YXIgbWF4RGVwdGggPSB0eXBlb2Ygb3B0cy5kZXB0aCA9PT0gJ3VuZGVmaW5lZCcgPyA1IDogb3B0cy5kZXB0aDtcbiAgICBpZiAodHlwZW9mIGRlcHRoID09PSAndW5kZWZpbmVkJykgeyBkZXB0aCA9IDA7IH1cbiAgICBpZiAoZGVwdGggPj0gbWF4RGVwdGggJiYgbWF4RGVwdGggPiAwICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KG9iaikgPyAnW0FycmF5XScgOiAnW09iamVjdF0nO1xuICAgIH1cblxuICAgIHZhciBpbmRlbnQgPSBnZXRJbmRlbnQob3B0cywgZGVwdGgpO1xuXG4gICAgaWYgKHR5cGVvZiBzZWVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWVuID0gW107XG4gICAgfSBlbHNlIGlmIChpbmRleE9mKHNlZW4sIG9iaikgPj0gMCkge1xuICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3BlY3QodmFsdWUsIGZyb20sIG5vSW5kZW50KSB7XG4gICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICBzZWVuID0gc2Vlbi5zbGljZSgpO1xuICAgICAgICAgICAgc2Vlbi5wdXNoKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub0luZGVudCkge1xuICAgICAgICAgICAgdmFyIG5ld09wdHMgPSB7XG4gICAgICAgICAgICAgICAgZGVwdGg6IG9wdHMuZGVwdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaGFzKG9wdHMsICdxdW90ZVN0eWxlJykpIHtcbiAgICAgICAgICAgICAgICBuZXdPcHRzLnF1b3RlU3R5bGUgPSBvcHRzLnF1b3RlU3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5zcGVjdF8odmFsdWUsIG5ld09wdHMsIGRlcHRoICsgMSwgc2Vlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3BlY3RfKHZhbHVlLCBvcHRzLCBkZXB0aCArIDEsIHNlZW4pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZU9mKG9iaik7XG4gICAgICAgIHZhciBrZXlzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICByZXR1cm4gJ1tGdW5jdGlvbicgKyAobmFtZSA/ICc6ICcgKyBuYW1lIDogJyAoYW5vbnltb3VzKScpICsgJ10nICsgKGtleXMubGVuZ3RoID4gMCA/ICcgeyAnICsga2V5cy5qb2luKCcsICcpICsgJyB9JyA6ICcnKTtcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKG9iaikpIHtcbiAgICAgICAgdmFyIHN5bVN0cmluZyA9IGhhc1NoYW1tZWRTeW1ib2xzID8gU3RyaW5nKG9iaikucmVwbGFjZSgvXihTeW1ib2xcXCguKlxcKSlfW14pXSokLywgJyQxJykgOiBzeW1Ub1N0cmluZy5jYWxsKG9iaik7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhaGFzU2hhbW1lZFN5bWJvbHMgPyBtYXJrQm94ZWQoc3ltU3RyaW5nKSA6IHN5bVN0cmluZztcbiAgICB9XG4gICAgaWYgKGlzRWxlbWVudChvYmopKSB7XG4gICAgICAgIHZhciBzID0gJzwnICsgU3RyaW5nKG9iai5ub2RlTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIGF0dHJzID0gb2JqLmF0dHJpYnV0ZXMgfHwgW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHMgKz0gJyAnICsgYXR0cnNbaV0ubmFtZSArICc9JyArIHdyYXBRdW90ZXMocXVvdGUoYXR0cnNbaV0udmFsdWUpLCAnZG91YmxlJywgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgcyArPSAnPic7XG4gICAgICAgIGlmIChvYmouY2hpbGROb2RlcyAmJiBvYmouY2hpbGROb2Rlcy5sZW5ndGgpIHsgcyArPSAnLi4uJzsgfVxuICAgICAgICBzICs9ICc8LycgKyBTdHJpbmcob2JqLm5vZGVOYW1lKS50b0xvd2VyQ2FzZSgpICsgJz4nO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBpZiAob2JqLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gJ1tdJzsgfVxuICAgICAgICB2YXIgeHMgPSBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCk7XG4gICAgICAgIGlmIChpbmRlbnQgJiYgIXNpbmdsZUxpbmVWYWx1ZXMoeHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1snICsgaW5kZW50ZWRKb2luKHhzLCBpbmRlbnQpICsgJ10nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnWyAnICsgeHMuam9pbignLCAnKSArICcgXSc7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKG9iaikpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAwKSB7IHJldHVybiAnWycgKyBTdHJpbmcob2JqKSArICddJzsgfVxuICAgICAgICByZXR1cm4gJ3sgWycgKyBTdHJpbmcob2JqKSArICddICcgKyBwYXJ0cy5qb2luKCcsICcpICsgJyB9JztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIGN1c3RvbUluc3BlY3QpIHtcbiAgICAgICAgaWYgKGluc3BlY3RTeW1ib2wgJiYgdHlwZW9mIG9ialtpbnNwZWN0U3ltYm9sXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG9ialtpbnNwZWN0U3ltYm9sXSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmouaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG9iai5pbnNwZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzTWFwKG9iaikpIHtcbiAgICAgICAgdmFyIG1hcFBhcnRzID0gW107XG4gICAgICAgIG1hcEZvckVhY2guY2FsbChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBtYXBQYXJ0cy5wdXNoKGluc3BlY3Qoa2V5LCBvYmosIHRydWUpICsgJyA9PiAnICsgaW5zcGVjdCh2YWx1ZSwgb2JqKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbk9mKCdNYXAnLCBtYXBTaXplLmNhbGwob2JqKSwgbWFwUGFydHMsIGluZGVudCk7XG4gICAgfVxuICAgIGlmIChpc1NldChvYmopKSB7XG4gICAgICAgIHZhciBzZXRQYXJ0cyA9IFtdO1xuICAgICAgICBzZXRGb3JFYWNoLmNhbGwob2JqLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHNldFBhcnRzLnB1c2goaW5zcGVjdCh2YWx1ZSwgb2JqKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbk9mKCdTZXQnLCBzZXRTaXplLmNhbGwob2JqKSwgc2V0UGFydHMsIGluZGVudCk7XG4gICAgfVxuICAgIGlmIChpc1dlYWtNYXAob2JqKSkge1xuICAgICAgICByZXR1cm4gd2Vha0NvbGxlY3Rpb25PZignV2Vha01hcCcpO1xuICAgIH1cbiAgICBpZiAoaXNXZWFrU2V0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHdlYWtDb2xsZWN0aW9uT2YoJ1dlYWtTZXQnKTtcbiAgICB9XG4gICAgaWYgKGlzV2Vha1JlZihvYmopKSB7XG4gICAgICAgIHJldHVybiB3ZWFrQ29sbGVjdGlvbk9mKCdXZWFrUmVmJyk7XG4gICAgfVxuICAgIGlmIChpc051bWJlcihvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoaW5zcGVjdChOdW1iZXIob2JqKSkpO1xuICAgIH1cbiAgICBpZiAoaXNCaWdJbnQob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGluc3BlY3QoYmlnSW50VmFsdWVPZi5jYWxsKG9iaikpKTtcbiAgICB9XG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoYm9vbGVhblZhbHVlT2YuY2FsbChvYmopKTtcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChpbnNwZWN0KFN0cmluZyhvYmopKSk7XG4gICAgfVxuICAgIGlmICghaXNEYXRlKG9iaikgJiYgIWlzUmVnRXhwKG9iaikpIHtcbiAgICAgICAgdmFyIHlzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICB2YXIgaXNQbGFpbk9iamVjdCA9IGdQTyA/IGdQTyhvYmopID09PSBPYmplY3QucHJvdG90eXBlIDogb2JqIGluc3RhbmNlb2YgT2JqZWN0IHx8IG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xuICAgICAgICB2YXIgcHJvdG9UYWcgPSBvYmogaW5zdGFuY2VvZiBPYmplY3QgPyAnJyA6ICdudWxsIHByb3RvdHlwZSc7XG4gICAgICAgIHZhciBzdHJpbmdUYWcgPSAhaXNQbGFpbk9iamVjdCAmJiB0b1N0cmluZ1RhZyAmJiBPYmplY3Qob2JqKSA9PT0gb2JqICYmIHRvU3RyaW5nVGFnIGluIG9iaiA/IHRvU3RyKG9iaikuc2xpY2UoOCwgLTEpIDogcHJvdG9UYWcgPyAnT2JqZWN0JyA6ICcnO1xuICAgICAgICB2YXIgY29uc3RydWN0b3JUYWcgPSBpc1BsYWluT2JqZWN0IHx8IHR5cGVvZiBvYmouY29uc3RydWN0b3IgIT09ICdmdW5jdGlvbicgPyAnJyA6IG9iai5jb25zdHJ1Y3Rvci5uYW1lID8gb2JqLmNvbnN0cnVjdG9yLm5hbWUgKyAnICcgOiAnJztcbiAgICAgICAgdmFyIHRhZyA9IGNvbnN0cnVjdG9yVGFnICsgKHN0cmluZ1RhZyB8fCBwcm90b1RhZyA/ICdbJyArIFtdLmNvbmNhdChzdHJpbmdUYWcgfHwgW10sIHByb3RvVGFnIHx8IFtdKS5qb2luKCc6ICcpICsgJ10gJyA6ICcnKTtcbiAgICAgICAgaWYgKHlzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gdGFnICsgJ3t9JzsgfVxuICAgICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGFnICsgJ3snICsgaW5kZW50ZWRKb2luKHlzLCBpbmRlbnQpICsgJ30nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWcgKyAneyAnICsgeXMuam9pbignLCAnKSArICcgfSc7XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcob2JqKTtcbn07XG5cbmZ1bmN0aW9uIHdyYXBRdW90ZXMocywgZGVmYXVsdFN0eWxlLCBvcHRzKSB7XG4gICAgdmFyIHF1b3RlQ2hhciA9IChvcHRzLnF1b3RlU3R5bGUgfHwgZGVmYXVsdFN0eWxlKSA9PT0gJ2RvdWJsZScgPyAnXCInIDogXCInXCI7XG4gICAgcmV0dXJuIHF1b3RlQ2hhciArIHMgKyBxdW90ZUNoYXI7XG59XG5cbmZ1bmN0aW9uIHF1b3RlKHMpIHtcbiAgICByZXR1cm4gU3RyaW5nKHMpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn1cblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5mdW5jdGlvbiBpc0RhdGUob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBEYXRlXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5mdW5jdGlvbiBpc1JlZ0V4cChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNFcnJvcihvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEVycm9yXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBOdW1iZXJdJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzQm9vbGVhbihvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cblxuLy8gU3ltYm9sIGFuZCBCaWdJbnQgZG8gaGF2ZSBTeW1ib2wudG9TdHJpbmdUYWcgYnkgc3BlYywgc28gdGhhdCBjYW4ndCBiZSB1c2VkIHRvIGVsaW1pbmF0ZSBmYWxzZSBwb3NpdGl2ZXNcbmZ1bmN0aW9uIGlzU3ltYm9sKG9iaikge1xuICAgIGlmIChoYXNTaGFtbWVkU3ltYm9scykge1xuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiBpbnN0YW5jZW9mIFN5bWJvbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCAhc3ltVG9TdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBzeW1Ub1N0cmluZy5jYWxsKG9iaik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0JpZ0ludChvYmopIHtcbiAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCAhYmlnSW50VmFsdWVPZikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJpZ0ludFZhbHVlT2YuY2FsbChvYmopO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgfHwgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5IGluIHRoaXM7IH07XG5mdW5jdGlvbiBoYXMob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufVxuXG5mdW5jdGlvbiB0b1N0cihvYmopIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmopO1xufVxuXG5mdW5jdGlvbiBuYW1lT2YoZikge1xuICAgIGlmIChmLm5hbWUpIHsgcmV0dXJuIGYubmFtZTsgfVxuICAgIHZhciBtID0gbWF0Y2guY2FsbChmdW5jdGlvblRvU3RyaW5nLmNhbGwoZiksIC9eZnVuY3Rpb25cXHMqKFtcXHckXSspLyk7XG4gICAgaWYgKG0pIHsgcmV0dXJuIG1bMV07IH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZih4cywgeCkge1xuICAgIGlmICh4cy5pbmRleE9mKSB7IHJldHVybiB4cy5pbmRleE9mKHgpOyB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKHhzW2ldID09PSB4KSB7IHJldHVybiBpOyB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gaXNNYXAoeCkge1xuICAgIGlmICghbWFwU2l6ZSB8fCAheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBtYXBTaXplLmNhbGwoeCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRTaXplLmNhbGwoeCk7XG4gICAgICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgTWFwOyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNXZWFrTWFwKHgpIHtcbiAgICBpZiAoIXdlYWtNYXBIYXMgfHwgIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgd2Vha01hcEhhcy5jYWxsKHgsIHdlYWtNYXBIYXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2Vha1NldEhhcy5jYWxsKHgsIHdlYWtTZXRIYXMpO1xuICAgICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFdlYWtNYXA7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1dlYWtSZWYoeCkge1xuICAgIGlmICghd2Vha1JlZkRlcmVmIHx8ICF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHdlYWtSZWZEZXJlZi5jYWxsKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNTZXQoeCkge1xuICAgIGlmICghc2V0U2l6ZSB8fCAheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBzZXRTaXplLmNhbGwoeCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtYXBTaXplLmNhbGwoeCk7XG4gICAgICAgIH0gY2F0Y2ggKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgU2V0OyAvLyBjb3JlLWpzIHdvcmthcm91bmQsIHByZS12Mi41LjBcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNXZWFrU2V0KHgpIHtcbiAgICBpZiAoIXdlYWtTZXRIYXMgfHwgIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgd2Vha1NldEhhcy5jYWxsKHgsIHdlYWtTZXRIYXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2Vha01hcEhhcy5jYWxsKHgsIHdlYWtNYXBIYXMpO1xuICAgICAgICB9IGNhdGNoIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geCBpbnN0YW5jZW9mIFdlYWtTZXQ7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQoeCkge1xuICAgIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgeCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHgubm9kZU5hbWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB4LmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaW5zcGVjdFN0cmluZyhzdHIsIG9wdHMpIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA+IG9wdHMubWF4U3RyaW5nTGVuZ3RoKSB7XG4gICAgICAgIHZhciByZW1haW5pbmcgPSBzdHIubGVuZ3RoIC0gb3B0cy5tYXhTdHJpbmdMZW5ndGg7XG4gICAgICAgIHZhciB0cmFpbGVyID0gJy4uLiAnICsgcmVtYWluaW5nICsgJyBtb3JlIGNoYXJhY3RlcicgKyAocmVtYWluaW5nID4gMSA/ICdzJyA6ICcnKTtcbiAgICAgICAgcmV0dXJuIGluc3BlY3RTdHJpbmcoc3RyLnNsaWNlKDAsIG9wdHMubWF4U3RyaW5nTGVuZ3RoKSwgb3B0cykgKyB0cmFpbGVyO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udHJvbC1yZWdleFxuICAgIHZhciBzID0gc3RyLnJlcGxhY2UoLyhbJ1xcXFxdKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvW1xceDAwLVxceDFmXS9nLCBsb3dieXRlKTtcbiAgICByZXR1cm4gd3JhcFF1b3RlcyhzLCAnc2luZ2xlJywgb3B0cyk7XG59XG5cbmZ1bmN0aW9uIGxvd2J5dGUoYykge1xuICAgIHZhciBuID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIHZhciB4ID0ge1xuICAgICAgICA4OiAnYicsXG4gICAgICAgIDk6ICd0JyxcbiAgICAgICAgMTA6ICduJyxcbiAgICAgICAgMTI6ICdmJyxcbiAgICAgICAgMTM6ICdyJ1xuICAgIH1bbl07XG4gICAgaWYgKHgpIHsgcmV0dXJuICdcXFxcJyArIHg7IH1cbiAgICByZXR1cm4gJ1xcXFx4JyArIChuIDwgMHgxMCA/ICcwJyA6ICcnKSArIG4udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG1hcmtCb3hlZChzdHIpIHtcbiAgICByZXR1cm4gJ09iamVjdCgnICsgc3RyICsgJyknO1xufVxuXG5mdW5jdGlvbiB3ZWFrQ29sbGVjdGlvbk9mKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSArICcgeyA/IH0nO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0aW9uT2YodHlwZSwgc2l6ZSwgZW50cmllcywgaW5kZW50KSB7XG4gICAgdmFyIGpvaW5lZEVudHJpZXMgPSBpbmRlbnQgPyBpbmRlbnRlZEpvaW4oZW50cmllcywgaW5kZW50KSA6IGVudHJpZXMuam9pbignLCAnKTtcbiAgICByZXR1cm4gdHlwZSArICcgKCcgKyBzaXplICsgJykgeycgKyBqb2luZWRFbnRyaWVzICsgJ30nO1xufVxuXG5mdW5jdGlvbiBzaW5nbGVMaW5lVmFsdWVzKHhzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaW5kZXhPZih4c1tpXSwgJ1xcbicpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZW50KG9wdHMsIGRlcHRoKSB7XG4gICAgdmFyIGJhc2VJbmRlbnQ7XG4gICAgaWYgKG9wdHMuaW5kZW50ID09PSAnXFx0Jykge1xuICAgICAgICBiYXNlSW5kZW50ID0gJ1xcdCc7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5pbmRlbnQgPT09ICdudW1iZXInICYmIG9wdHMuaW5kZW50ID4gMCkge1xuICAgICAgICBiYXNlSW5kZW50ID0gQXJyYXkob3B0cy5pbmRlbnQgKyAxKS5qb2luKCcgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6IGJhc2VJbmRlbnQsXG4gICAgICAgIHByZXY6IEFycmF5KGRlcHRoICsgMSkuam9pbihiYXNlSW5kZW50KVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGluZGVudGVkSm9pbih4cywgaW5kZW50KSB7XG4gICAgaWYgKHhzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gJyc7IH1cbiAgICB2YXIgbGluZUpvaW5lciA9ICdcXG4nICsgaW5kZW50LnByZXYgKyBpbmRlbnQuYmFzZTtcbiAgICByZXR1cm4gbGluZUpvaW5lciArIHhzLmpvaW4oJywnICsgbGluZUpvaW5lcikgKyAnXFxuJyArIGluZGVudC5wcmV2O1xufVxuXG5mdW5jdGlvbiBhcnJPYmpLZXlzKG9iaiwgaW5zcGVjdCkge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkob2JqKTtcbiAgICB2YXIgeHMgPSBbXTtcbiAgICBpZiAoaXNBcnIpIHtcbiAgICAgICAgeHMubGVuZ3RoID0gb2JqLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHhzW2ldID0gaGFzKG9iaiwgaSkgPyBpbnNwZWN0KG9ialtpXSwgb2JqKSA6ICcnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBzeW1zID0gdHlwZW9mIGdPUFMgPT09ICdmdW5jdGlvbicgPyBnT1BTKG9iaikgOiBbXTtcbiAgICB2YXIgc3ltTWFwO1xuICAgIGlmIChoYXNTaGFtbWVkU3ltYm9scykge1xuICAgICAgICBzeW1NYXAgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBzeW1zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBzeW1NYXBbJyQnICsgc3ltc1trXV0gPSBzeW1zW2tdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICAgIGlmICghaGFzKG9iaiwga2V5KSkgeyBjb250aW51ZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby1jb250aW51ZVxuICAgICAgICBpZiAoaXNBcnIgJiYgU3RyaW5nKE51bWJlcihrZXkpKSA9PT0ga2V5ICYmIGtleSA8IG9iai5sZW5ndGgpIHsgY29udGludWU7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tY29udGludWVcbiAgICAgICAgaWYgKGhhc1NoYW1tZWRTeW1ib2xzICYmIHN5bU1hcFsnJCcgKyBrZXldIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHRvIHByZXZlbnQgc2hhbW1lZCBTeW1ib2xzLCB3aGljaCBhcmUgc3RvcmVkIGFzIHN0cmluZ3MsIGZyb20gYmVpbmcgaW5jbHVkZWQgaW4gdGhlIHN0cmluZyBrZXkgc2VjdGlvblxuICAgICAgICAgICAgY29udGludWU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLWNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoKC9bXlxcdyRdLykudGVzdChrZXkpKSB7XG4gICAgICAgICAgICB4cy5wdXNoKGluc3BlY3Qoa2V5LCBvYmopICsgJzogJyArIGluc3BlY3Qob2JqW2tleV0sIG9iaikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeHMucHVzaChrZXkgKyAnOiAnICsgaW5zcGVjdChvYmpba2V5XSwgb2JqKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnT1BTID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3ltcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGlzRW51bWVyYWJsZS5jYWxsKG9iaiwgc3ltc1tqXSkpIHtcbiAgICAgICAgICAgICAgICB4cy5wdXNoKCdbJyArIGluc3BlY3Qoc3ltc1tqXSkgKyAnXTogJyArIGluc3BlY3Qob2JqW3N5bXNbal1dLCBvYmopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geHM7XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBwZXJjZW50VHdlbnRpZXMgPSAvJTIwL2c7XG5cbnZhciBGb3JtYXQgPSB7XG4gICAgUkZDMTczODogJ1JGQzE3MzgnLFxuICAgIFJGQzM5ODY6ICdSRkMzOTg2J1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ2RlZmF1bHQnOiBGb3JtYXQuUkZDMzk4NixcbiAgICBmb3JtYXR0ZXJzOiB7XG4gICAgICAgIFJGQzE3Mzg6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2UuY2FsbCh2YWx1ZSwgcGVyY2VudFR3ZW50aWVzLCAnKycpO1xuICAgICAgICB9LFxuICAgICAgICBSRkMzOTg2OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBSRkMxNzM4OiBGb3JtYXQuUkZDMTczOCxcbiAgICBSRkMzOTg2OiBGb3JtYXQuUkZDMzk4NlxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG52YXIgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXRzOiBmb3JtYXRzLFxuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBzdHJpbmdpZnk6IHN0cmluZ2lmeVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgYWxsb3dQcm90b3R5cGVzOiBmYWxzZSxcbiAgICBhbGxvd1NwYXJzZTogZmFsc2UsXG4gICAgYXJyYXlMaW1pdDogMjAsXG4gICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICBjaGFyc2V0U2VudGluZWw6IGZhbHNlLFxuICAgIGNvbW1hOiBmYWxzZSxcbiAgICBkZWNvZGVyOiB1dGlscy5kZWNvZGUsXG4gICAgZGVsaW1pdGVyOiAnJicsXG4gICAgZGVwdGg6IDUsXG4gICAgaWdub3JlUXVlcnlQcmVmaXg6IGZhbHNlLFxuICAgIGludGVycHJldE51bWVyaWNFbnRpdGllczogZmFsc2UsXG4gICAgcGFyYW1ldGVyTGltaXQ6IDEwMDAsXG4gICAgcGFyc2VBcnJheXM6IHRydWUsXG4gICAgcGxhaW5PYmplY3RzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJiMoXFxkKyk7L2csIGZ1bmN0aW9uICgkMCwgbnVtYmVyU3RyKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KG51bWJlclN0ciwgMTApKTtcbiAgICB9KTtcbn07XG5cbnZhciBwYXJzZUFycmF5VmFsdWUgPSBmdW5jdGlvbiAodmFsLCBvcHRpb25zKSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmNvbW1hICYmIHZhbC5pbmRleE9mKCcsJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdmFsLnNwbGl0KCcsJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbn07XG5cbi8vIFRoaXMgaXMgd2hhdCBicm93c2VycyB3aWxsIHN1Ym1pdCB3aGVuIHRoZSDinJMgY2hhcmFjdGVyIG9jY3VycyBpbiBhblxuLy8gYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIGJvZHkgYW5kIHRoZSBlbmNvZGluZyBvZiB0aGUgcGFnZSBjb250YWluaW5nXG4vLyB0aGUgZm9ybSBpcyBpc28tODg1OS0xLCBvciB3aGVuIHRoZSBzdWJtaXR0ZWQgZm9ybSBoYXMgYW4gYWNjZXB0LWNoYXJzZXRcbi8vIGF0dHJpYnV0ZSBvZiBpc28tODg1OS0xLiBQcmVzdW1hYmx5IGFsc28gd2l0aCBvdGhlciBjaGFyc2V0cyB0aGF0IGRvIG5vdCBjb250YWluXG4vLyB0aGUg4pyTIGNoYXJhY3Rlciwgc3VjaCBhcyB1cy1hc2NpaS5cbnZhciBpc29TZW50aW5lbCA9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJzsgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCcmIzEwMDAzOycpXG5cbi8vIFRoZXNlIGFyZSB0aGUgcGVyY2VudC1lbmNvZGVkIHV0Zi04IG9jdGV0cyByZXByZXNlbnRpbmcgYSBjaGVja21hcmssIGluZGljYXRpbmcgdGhhdCB0aGUgcmVxdWVzdCBhY3R1YWxseSBpcyB1dGYtOCBlbmNvZGVkLlxudmFyIGNoYXJzZXRTZW50aW5lbCA9ICd1dGY4PSVFMiU5QyU5Myc7IC8vIGVuY29kZVVSSUNvbXBvbmVudCgn4pyTJylcblxudmFyIHBhcnNlVmFsdWVzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ1ZhbHVlcyhzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIGNsZWFuU3RyID0gb3B0aW9ucy5pZ25vcmVRdWVyeVByZWZpeCA/IHN0ci5yZXBsYWNlKC9eXFw/LywgJycpIDogc3RyO1xuICAgIHZhciBsaW1pdCA9IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgPT09IEluZmluaXR5ID8gdW5kZWZpbmVkIDogb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdDtcbiAgICB2YXIgcGFydHMgPSBjbGVhblN0ci5zcGxpdChvcHRpb25zLmRlbGltaXRlciwgbGltaXQpO1xuICAgIHZhciBza2lwSW5kZXggPSAtMTsgLy8gS2VlcCB0cmFjayBvZiB3aGVyZSB0aGUgdXRmOCBzZW50aW5lbCB3YXMgZm91bmRcbiAgICB2YXIgaTtcblxuICAgIHZhciBjaGFyc2V0ID0gb3B0aW9ucy5jaGFyc2V0O1xuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0c1tpXS5pbmRleE9mKCd1dGY4PScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzW2ldID09PSBjaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldCA9ICd1dGYtOCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0c1tpXSA9PT0gaXNvU2VudGluZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnNldCA9ICdpc28tODg1OS0xJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2tpcEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBpID0gcGFydHMubGVuZ3RoOyAvLyBUaGUgZXNsaW50IHNldHRpbmdzIGRvIG5vdCBhbGxvdyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoaSA9PT0gc2tpcEluZGV4KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuXG4gICAgICAgIHZhciBicmFja2V0RXF1YWxzUG9zID0gcGFydC5pbmRleE9mKCddPScpO1xuICAgICAgICB2YXIgcG9zID0gYnJhY2tldEVxdWFsc1BvcyA9PT0gLTEgPyBwYXJ0LmluZGV4T2YoJz0nKSA6IGJyYWNrZXRFcXVhbHNQb3MgKyAxO1xuXG4gICAgICAgIHZhciBrZXksIHZhbDtcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0LCAna2V5Jyk7XG4gICAgICAgICAgICB2YWwgPSBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA/IG51bGwgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGtleSA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKDAsIHBvcyksIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQsICdrZXknKTtcbiAgICAgICAgICAgIHZhbCA9IHV0aWxzLm1heWJlTWFwKFxuICAgICAgICAgICAgICAgIHBhcnNlQXJyYXlWYWx1ZShwYXJ0LnNsaWNlKHBvcyArIDEpLCBvcHRpb25zKSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZW5jb2RlZFZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kZWNvZGVyKGVuY29kZWRWYWwsIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQsICd2YWx1ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsICYmIG9wdGlvbnMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzICYmIGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAgICAgdmFsID0gaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzKHZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydC5pbmRleE9mKCdbXT0nKSA+IC0xKSB7XG4gICAgICAgICAgICB2YWwgPSBpc0FycmF5KHZhbCkgPyBbdmFsXSA6IHZhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdXRpbHMuY29tYmluZShvYmpba2V5XSwgdmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBwYXJzZU9iamVjdCA9IGZ1bmN0aW9uIChjaGFpbiwgdmFsLCBvcHRpb25zLCB2YWx1ZXNQYXJzZWQpIHtcbiAgICB2YXIgbGVhZiA9IHZhbHVlc1BhcnNlZCA/IHZhbCA6IHBhcnNlQXJyYXlWYWx1ZSh2YWwsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaSA9IGNoYWluLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIHZhciByb290ID0gY2hhaW5baV07XG5cbiAgICAgICAgaWYgKHJvb3QgPT09ICdbXScgJiYgb3B0aW9ucy5wYXJzZUFycmF5cykge1xuICAgICAgICAgICAgb2JqID0gW10uY29uY2F0KGxlYWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdC5jaGFyQXQoMCkgPT09ICdbJyAmJiByb290LmNoYXJBdChyb290Lmxlbmd0aCAtIDEpID09PSAnXScgPyByb290LnNsaWNlKDEsIC0xKSA6IHJvb3Q7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wYXJzZUFycmF5cyAmJiBjbGVhblJvb3QgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb2JqID0geyAwOiBsZWFmIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICFpc05hTihpbmRleClcbiAgICAgICAgICAgICAgICAmJiByb290ICE9PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBTdHJpbmcoaW5kZXgpID09PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBpbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgJiYgKG9wdGlvbnMucGFyc2VBcnJheXMgJiYgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICAgICAgb2JqW2luZGV4XSA9IGxlYWY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsZWFuUm9vdCAhPT0gJ19fcHJvdG9fXycpIHtcbiAgICAgICAgICAgICAgICBvYmpbY2xlYW5Sb290XSA9IGxlYWY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZWFmID0gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiBsZWFmO1xufTtcblxudmFyIHBhcnNlS2V5cyA9IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmdLZXlzKGdpdmVuS2V5LCB2YWwsIG9wdGlvbnMsIHZhbHVlc1BhcnNlZCkge1xuICAgIGlmICghZ2l2ZW5LZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBkb3Qgbm90YXRpb24gdG8gYnJhY2tldCBub3RhdGlvblxuICAgIHZhciBrZXkgPSBvcHRpb25zLmFsbG93RG90cyA/IGdpdmVuS2V5LnJlcGxhY2UoL1xcLihbXi5bXSspL2csICdbJDFdJykgOiBnaXZlbktleTtcblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBicmFja2V0cyA9IC8oXFxbW15bXFxdXSpdKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXltcXF1dKl0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBvcHRpb25zLmRlcHRoID4gMCAmJiBicmFja2V0cy5leGVjKGtleSk7XG4gICAgdmFyIHBhcmVudCA9IHNlZ21lbnQgPyBrZXkuc2xpY2UoMCwgc2VnbWVudC5pbmRleCkgOiBrZXk7XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCB1c2luZyBwbGFpbiBvYmplY3RzLCBvcHRpb25hbGx5IHByZWZpeCBrZXlzIHRoYXQgd291bGQgb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHBhcmVudCkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzLnB1c2gocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYXBwZW5kaW5nIHRvIHRoZSBhcnJheSB1bnRpbCB3ZSBoaXQgZGVwdGhcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAob3B0aW9ucy5kZXB0aCA+IDAgJiYgKHNlZ21lbnQgPSBjaGlsZC5leGVjKGtleSkpICE9PSBudWxsICYmIGkgPCBvcHRpb25zLmRlcHRoKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzZWdtZW50WzFdLnNsaWNlKDEsIC0xKSkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMsIHZhbHVlc1BhcnNlZCk7XG59O1xuXG52YXIgbm9ybWFsaXplUGFyc2VPcHRpb25zID0gZnVuY3Rpb24gbm9ybWFsaXplUGFyc2VPcHRpb25zKG9wdHMpIHtcbiAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmRlY29kZXIgIT09IG51bGwgJiYgb3B0cy5kZWNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdHMuZGVjb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdEZWNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5jaGFyc2V0ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRzLmNoYXJzZXQgIT09ICd1dGYtOCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNoYXJzZXQgb3B0aW9uIG11c3QgYmUgZWl0aGVyIHV0Zi04LCBpc28tODg1OS0xLCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgdmFyIGNoYXJzZXQgPSB0eXBlb2Ygb3B0cy5jaGFyc2V0ID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmNoYXJzZXQgOiBvcHRzLmNoYXJzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhbGxvd0RvdHM6IHR5cGVvZiBvcHRzLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5hbGxvd0RvdHMgOiAhIW9wdHMuYWxsb3dEb3RzLFxuICAgICAgICBhbGxvd1Byb3RvdHlwZXM6IHR5cGVvZiBvcHRzLmFsbG93UHJvdG90eXBlcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hbGxvd1Byb3RvdHlwZXMgOiBkZWZhdWx0cy5hbGxvd1Byb3RvdHlwZXMsXG4gICAgICAgIGFsbG93U3BhcnNlOiB0eXBlb2Ygb3B0cy5hbGxvd1NwYXJzZSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hbGxvd1NwYXJzZSA6IGRlZmF1bHRzLmFsbG93U3BhcnNlLFxuICAgICAgICBhcnJheUxpbWl0OiB0eXBlb2Ygb3B0cy5hcnJheUxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMuYXJyYXlMaW1pdCA6IGRlZmF1bHRzLmFycmF5TGltaXQsXG4gICAgICAgIGNoYXJzZXQ6IGNoYXJzZXQsXG4gICAgICAgIGNoYXJzZXRTZW50aW5lbDogdHlwZW9mIG9wdHMuY2hhcnNldFNlbnRpbmVsID09PSAnYm9vbGVhbicgPyBvcHRzLmNoYXJzZXRTZW50aW5lbCA6IGRlZmF1bHRzLmNoYXJzZXRTZW50aW5lbCxcbiAgICAgICAgY29tbWE6IHR5cGVvZiBvcHRzLmNvbW1hID09PSAnYm9vbGVhbicgPyBvcHRzLmNvbW1hIDogZGVmYXVsdHMuY29tbWEsXG4gICAgICAgIGRlY29kZXI6IHR5cGVvZiBvcHRzLmRlY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRzLmRlY29kZXIgOiBkZWZhdWx0cy5kZWNvZGVyLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3N0cmluZycgfHwgdXRpbHMuaXNSZWdFeHAob3B0cy5kZWxpbWl0ZXIpID8gb3B0cy5kZWxpbWl0ZXIgOiBkZWZhdWx0cy5kZWxpbWl0ZXIsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1pbXBsaWNpdC1jb2VyY2lvbiwgbm8tZXh0cmEtcGFyZW5zXG4gICAgICAgIGRlcHRoOiAodHlwZW9mIG9wdHMuZGVwdGggPT09ICdudW1iZXInIHx8IG9wdHMuZGVwdGggPT09IGZhbHNlKSA/ICtvcHRzLmRlcHRoIDogZGVmYXVsdHMuZGVwdGgsXG4gICAgICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiBvcHRzLmlnbm9yZVF1ZXJ5UHJlZml4ID09PSB0cnVlLFxuICAgICAgICBpbnRlcnByZXROdW1lcmljRW50aXRpZXM6IHR5cGVvZiBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgOiBkZWZhdWx0cy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMsXG4gICAgICAgIHBhcmFtZXRlckxpbWl0OiB0eXBlb2Ygb3B0cy5wYXJhbWV0ZXJMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRzLnBhcmFtZXRlckxpbWl0IDogZGVmYXVsdHMucGFyYW1ldGVyTGltaXQsXG4gICAgICAgIHBhcnNlQXJyYXlzOiBvcHRzLnBhcnNlQXJyYXlzICE9PSBmYWxzZSxcbiAgICAgICAgcGxhaW5PYmplY3RzOiB0eXBlb2Ygb3B0cy5wbGFpbk9iamVjdHMgPT09ICdib29sZWFuJyA/IG9wdHMucGxhaW5PYmplY3RzIDogZGVmYXVsdHMucGxhaW5PYmplY3RzLFxuICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IHR5cGVvZiBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmdcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cyk7XG5cbiAgICBpZiAoc3RyID09PSAnJyB8fCBzdHIgPT09IG51bGwgfHwgdHlwZW9mIHN0ciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuICAgIH1cblxuICAgIHZhciB0ZW1wT2JqID0gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgPyBwYXJzZVZhbHVlcyhzdHIsIG9wdGlvbnMpIDogc3RyO1xuICAgIHZhciBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUga2V5cyBhbmQgc2V0dXAgdGhlIG5ldyBvYmplY3RcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGVtcE9iaik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgbmV3T2JqID0gcGFyc2VLZXlzKGtleSwgdGVtcE9ialtrZXldLCBvcHRpb25zLCB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyk7XG4gICAgICAgIG9iaiA9IHV0aWxzLm1lcmdlKG9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5hbGxvd1NwYXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHJldHVybiB1dGlscy5jb21wYWN0KG9iaik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0U2lkZUNoYW5uZWwgPSByZXF1aXJlKCdzaWRlLWNoYW5uZWwnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGFycmF5UHJlZml4R2VuZXJhdG9ycyA9IHtcbiAgICBicmFja2V0czogZnVuY3Rpb24gYnJhY2tldHMocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgIH0sXG4gICAgY29tbWE6ICdjb21tYScsXG4gICAgaW5kaWNlczogZnVuY3Rpb24gaW5kaWNlcyhwcmVmaXgsIGtleSkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgIH0sXG4gICAgcmVwZWF0OiBmdW5jdGlvbiByZXBlYXQocHJlZml4KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfVxufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIHNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdDtcbnZhciBwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2g7XG52YXIgcHVzaFRvQXJyYXkgPSBmdW5jdGlvbiAoYXJyLCB2YWx1ZU9yQXJyYXkpIHtcbiAgICBwdXNoLmFwcGx5KGFyciwgaXNBcnJheSh2YWx1ZU9yQXJyYXkpID8gdmFsdWVPckFycmF5IDogW3ZhbHVlT3JBcnJheV0pO1xufTtcblxudmFyIHRvSVNPID0gRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmc7XG5cbnZhciBkZWZhdWx0Rm9ybWF0ID0gZm9ybWF0c1snZGVmYXVsdCddO1xudmFyIGRlZmF1bHRzID0ge1xuICAgIGFkZFF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBlbmNvZGU6IHRydWUsXG4gICAgZW5jb2RlcjogdXRpbHMuZW5jb2RlLFxuICAgIGVuY29kZVZhbHVlc09ubHk6IGZhbHNlLFxuICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdCxcbiAgICBmb3JtYXR0ZXI6IGZvcm1hdHMuZm9ybWF0dGVyc1tkZWZhdWx0Rm9ybWF0XSxcbiAgICAvLyBkZXByZWNhdGVkXG4gICAgaW5kaWNlczogZmFsc2UsXG4gICAgc2VyaWFsaXplRGF0ZTogZnVuY3Rpb24gc2VyaWFsaXplRGF0ZShkYXRlKSB7XG4gICAgICAgIHJldHVybiB0b0lTTy5jYWxsKGRhdGUpO1xuICAgIH0sXG4gICAgc2tpcE51bGxzOiBmYWxzZSxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmc6IGZhbHNlXG59O1xuXG52YXIgaXNOb25OdWxsaXNoUHJpbWl0aXZlID0gZnVuY3Rpb24gaXNOb25OdWxsaXNoUHJpbWl0aXZlKHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnc3ltYm9sJ1xuICAgICAgICB8fCB0eXBlb2YgdiA9PT0gJ2JpZ2ludCc7XG59O1xuXG52YXIgc2VudGluZWwgPSB7fTtcblxudmFyIHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShcbiAgICBvYmplY3QsXG4gICAgcHJlZml4LFxuICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgY29tbWFSb3VuZFRyaXAsXG4gICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgIHNraXBOdWxscyxcbiAgICBlbmNvZGVyLFxuICAgIGZpbHRlcixcbiAgICBzb3J0LFxuICAgIGFsbG93RG90cyxcbiAgICBzZXJpYWxpemVEYXRlLFxuICAgIGZvcm1hdCxcbiAgICBmb3JtYXR0ZXIsXG4gICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICBjaGFyc2V0LFxuICAgIHNpZGVDaGFubmVsXG4pIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuXG4gICAgdmFyIHRtcFNjID0gc2lkZUNoYW5uZWw7XG4gICAgdmFyIHN0ZXAgPSAwO1xuICAgIHZhciBmaW5kRmxhZyA9IGZhbHNlO1xuICAgIHdoaWxlICgodG1wU2MgPSB0bXBTYy5nZXQoc2VudGluZWwpKSAhPT0gdm9pZCB1bmRlZmluZWQgJiYgIWZpbmRGbGFnKSB7XG4gICAgICAgIC8vIFdoZXJlIG9iamVjdCBsYXN0IGFwcGVhcmVkIGluIHRoZSByZWYgdHJlZVxuICAgICAgICB2YXIgcG9zID0gdG1wU2MuZ2V0KG9iamVjdCk7XG4gICAgICAgIHN0ZXAgKz0gMTtcbiAgICAgICAgaWYgKHR5cGVvZiBwb3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAocG9zID09PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0N5Y2xpYyBvYmplY3QgdmFsdWUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmluZEZsYWcgPSB0cnVlOyAvLyBCcmVhayB3aGlsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdG1wU2MuZ2V0KHNlbnRpbmVsKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHN0ZXAgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JqID0gZmlsdGVyKHByZWZpeCwgb2JqKTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgb2JqID0gc2VyaWFsaXplRGF0ZShvYmopO1xuICAgIH0gZWxzZSBpZiAoZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqID0gdXRpbHMubWF5YmVNYXAob2JqLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHN0cmljdE51bGxIYW5kbGluZykge1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZXIgJiYgIWVuY29kZVZhbHVlc09ubHkgPyBlbmNvZGVyKHByZWZpeCwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCwgJ2tleScsIGZvcm1hdCkgOiBwcmVmaXg7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSAnJztcbiAgICB9XG5cbiAgICBpZiAoaXNOb25OdWxsaXNoUHJpbWl0aXZlKG9iaikgfHwgdXRpbHMuaXNCdWZmZXIob2JqKSkge1xuICAgICAgICBpZiAoZW5jb2Rlcikge1xuICAgICAgICAgICAgdmFyIGtleVZhbHVlID0gZW5jb2RlVmFsdWVzT25seSA/IHByZWZpeCA6IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAna2V5JywgZm9ybWF0KTtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGVuY29kZVZhbHVlc09ubHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdC5jYWxsKFN0cmluZyhvYmopLCAnLCcpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXNKb2luZWQgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlc0FycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc0pvaW5lZCArPSAoaSA9PT0gMCA/ICcnIDogJywnKSArIGZvcm1hdHRlcihlbmNvZGVyKHZhbHVlc0FycmF5W2ldLCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAndmFsdWUnLCBmb3JtYXQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIoa2V5VmFsdWUpICsgKGNvbW1hUm91bmRUcmlwICYmIGlzQXJyYXkob2JqKSAmJiB2YWx1ZXNBcnJheS5sZW5ndGggPT09IDEgPyAnW10nIDogJycpICsgJz0nICsgdmFsdWVzSm9pbmVkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbZm9ybWF0dGVyKGtleVZhbHVlKSArICc9JyArIGZvcm1hdHRlcihlbmNvZGVyKG9iaiwgZGVmYXVsdHMuZW5jb2RlciwgY2hhcnNldCwgJ3ZhbHVlJywgZm9ybWF0KSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZm9ybWF0dGVyKHByZWZpeCkgKyAnPScgKyBmb3JtYXR0ZXIoU3RyaW5nKG9iaikpXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICB2YXIgb2JqS2V5cztcbiAgICBpZiAoZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgLy8gd2UgbmVlZCB0byBqb2luIGVsZW1lbnRzIGluXG4gICAgICAgIG9iaktleXMgPSBbeyB2YWx1ZTogb2JqLmxlbmd0aCA+IDAgPyBvYmouam9pbignLCcpIHx8IG51bGwgOiB2b2lkIHVuZGVmaW5lZCB9XTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoZmlsdGVyKSkge1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgb2JqS2V5cyA9IHNvcnQgPyBrZXlzLnNvcnQoc29ydCkgOiBrZXlzO1xuICAgIH1cblxuICAgIHZhciBhZGp1c3RlZFByZWZpeCA9IGNvbW1hUm91bmRUcmlwICYmIGlzQXJyYXkob2JqKSAmJiBvYmoubGVuZ3RoID09PSAxID8gcHJlZml4ICsgJ1tdJyA6IHByZWZpeDtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgb2JqS2V5cy5sZW5ndGg7ICsraikge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tqXTtcbiAgICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIGtleSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGtleS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyBrZXkudmFsdWUgOiBvYmpba2V5XTtcblxuICAgICAgICBpZiAoc2tpcE51bGxzICYmIHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBpc0FycmF5KG9iailcbiAgICAgICAgICAgID8gdHlwZW9mIGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdmdW5jdGlvbicgPyBnZW5lcmF0ZUFycmF5UHJlZml4KGFkanVzdGVkUHJlZml4LCBrZXkpIDogYWRqdXN0ZWRQcmVmaXhcbiAgICAgICAgICAgIDogYWRqdXN0ZWRQcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKTtcblxuICAgICAgICBzaWRlQ2hhbm5lbC5zZXQob2JqZWN0LCBzdGVwKTtcbiAgICAgICAgdmFyIHZhbHVlU2lkZUNoYW5uZWwgPSBnZXRTaWRlQ2hhbm5lbCgpO1xuICAgICAgICB2YWx1ZVNpZGVDaGFubmVsLnNldChzZW50aW5lbCwgc2lkZUNoYW5uZWwpO1xuICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAga2V5UHJlZml4LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIGNvbW1hUm91bmRUcmlwLFxuICAgICAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICBzZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgIGNoYXJzZXQsXG4gICAgICAgICAgICB2YWx1ZVNpZGVDaGFubmVsXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG52YXIgbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN0cmluZ2lmeU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZW5jb2RlciAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygb3B0cy5lbmNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0VuY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgZGVmYXVsdHMuY2hhcnNldDtcbiAgICBpZiAodHlwZW9mIG9wdHMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdHMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjaGFyc2V0IG9wdGlvbiBtdXN0IGJlIGVpdGhlciB1dGYtOCwgaXNvLTg4NTktMSwgb3IgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdCA9IGZvcm1hdHNbJ2RlZmF1bHQnXTtcbiAgICBpZiAodHlwZW9mIG9wdHMuZm9ybWF0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoIWhhcy5jYWxsKGZvcm1hdHMuZm9ybWF0dGVycywgb3B0cy5mb3JtYXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0ID0gb3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcblxuICAgIHZhciBmaWx0ZXIgPSBkZWZhdWx0cy5maWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmZpbHRlciA9PT0gJ2Z1bmN0aW9uJyB8fCBpc0FycmF5KG9wdHMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRzLmZpbHRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRRdWVyeVByZWZpeDogdHlwZW9mIG9wdHMuYWRkUXVlcnlQcmVmaXggPT09ICdib29sZWFuJyA/IG9wdHMuYWRkUXVlcnlQcmVmaXggOiBkZWZhdWx0cy5hZGRRdWVyeVByZWZpeCxcbiAgICAgICAgYWxsb3dEb3RzOiB0eXBlb2Ygb3B0cy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRzLmFsbG93RG90cyxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBkZWxpbWl0ZXI6IHR5cGVvZiBvcHRzLmRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5kZWxpbWl0ZXIgOiBvcHRzLmRlbGltaXRlcixcbiAgICAgICAgZW5jb2RlOiB0eXBlb2Ygb3B0cy5lbmNvZGUgPT09ICdib29sZWFuJyA/IG9wdHMuZW5jb2RlIDogZGVmYXVsdHMuZW5jb2RlLFxuICAgICAgICBlbmNvZGVyOiB0eXBlb2Ygb3B0cy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0cy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcixcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHlwZW9mIG9wdHMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdHRlcixcbiAgICAgICAgc2VyaWFsaXplRGF0ZTogdHlwZW9mIG9wdHMuc2VyaWFsaXplRGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc2VyaWFsaXplRGF0ZSA6IGRlZmF1bHRzLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgIHNraXBOdWxsczogdHlwZW9mIG9wdHMuc2tpcE51bGxzID09PSAnYm9vbGVhbicgPyBvcHRzLnNraXBOdWxscyA6IGRlZmF1bHRzLnNraXBOdWxscyxcbiAgICAgICAgc29ydDogdHlwZW9mIG9wdHMuc29ydCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuc29ydCA6IG51bGwsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdHMpIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIHZhciBvcHRpb25zID0gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKTtcblxuICAgIHZhciBvYmpLZXlzO1xuICAgIHZhciBmaWx0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmogPSBmaWx0ZXIoJycsIG9iaik7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRzICYmIG9wdHMuYXJyYXlGb3JtYXQgaW4gYXJyYXlQcmVmaXhHZW5lcmF0b3JzKSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gb3B0cy5hcnJheUZvcm1hdDtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgJ2luZGljZXMnIGluIG9wdHMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmluZGljZXMgPyAnaW5kaWNlcycgOiAncmVwZWF0JztcbiAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheUZvcm1hdCA9ICdpbmRpY2VzJztcbiAgICB9XG5cbiAgICB2YXIgZ2VuZXJhdGVBcnJheVByZWZpeCA9IGFycmF5UHJlZml4R2VuZXJhdG9yc1thcnJheUZvcm1hdF07XG4gICAgaWYgKG9wdHMgJiYgJ2NvbW1hUm91bmRUcmlwJyBpbiBvcHRzICYmIHR5cGVvZiBvcHRzLmNvbW1hUm91bmRUcmlwICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYGNvbW1hUm91bmRUcmlwYCBtdXN0IGJlIGEgYm9vbGVhbiwgb3IgYWJzZW50Jyk7XG4gICAgfVxuICAgIHZhciBjb21tYVJvdW5kVHJpcCA9IGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdjb21tYScgJiYgb3B0cyAmJiBvcHRzLmNvbW1hUm91bmRUcmlwO1xuXG4gICAgaWYgKCFvYmpLZXlzKSB7XG4gICAgICAgIG9iaktleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnNvcnQpIHtcbiAgICAgICAgb2JqS2V5cy5zb3J0KG9wdGlvbnMuc29ydCk7XG4gICAgfVxuXG4gICAgdmFyIHNpZGVDaGFubmVsID0gZ2V0U2lkZUNoYW5uZWwoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iaktleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IG9iaktleXNbaV07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcE51bGxzICYmIG9ialtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoVG9BcnJheShrZXlzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGdlbmVyYXRlQXJyYXlQcmVmaXgsXG4gICAgICAgICAgICBjb21tYVJvdW5kVHJpcCxcbiAgICAgICAgICAgIG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nLFxuICAgICAgICAgICAgb3B0aW9ucy5za2lwTnVsbHMsXG4gICAgICAgICAgICBvcHRpb25zLmVuY29kZSA/IG9wdGlvbnMuZW5jb2RlciA6IG51bGwsXG4gICAgICAgICAgICBvcHRpb25zLmZpbHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuc29ydCxcbiAgICAgICAgICAgIG9wdGlvbnMuYWxsb3dEb3RzLFxuICAgICAgICAgICAgb3B0aW9ucy5zZXJpYWxpemVEYXRlLFxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQsXG4gICAgICAgICAgICBvcHRpb25zLmZvcm1hdHRlcixcbiAgICAgICAgICAgIG9wdGlvbnMuZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgIG9wdGlvbnMuY2hhcnNldCxcbiAgICAgICAgICAgIHNpZGVDaGFubmVsXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHZhciBqb2luZWQgPSBrZXlzLmpvaW4ob3B0aW9ucy5kZWxpbWl0ZXIpO1xuICAgIHZhciBwcmVmaXggPSBvcHRpb25zLmFkZFF1ZXJ5UHJlZml4ID09PSB0cnVlID8gJz8nIDogJyc7XG5cbiAgICBpZiAob3B0aW9ucy5jaGFyc2V0U2VudGluZWwpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JyksIHRoZSBcIm51bWVyaWMgZW50aXR5XCIgcmVwcmVzZW50YXRpb24gb2YgYSBjaGVja21hcmtcbiAgICAgICAgICAgIHByZWZpeCArPSAndXRmOD0lMjYlMjMxMDAwMyUzQiYnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSVFMiU5QyU5MyYnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGpvaW5lZC5sZW5ndGggPiAwID8gcHJlZml4ICsgam9pbmVkIDogJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm9ybWF0cyA9IHJlcXVpcmUoJy4vZm9ybWF0cycpO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxudmFyIGhleFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGFycmF5LnB1c2goJyUnICsgKChpIDwgMTYgPyAnMCcgOiAnJykgKyBpLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufSgpKTtcblxudmFyIGNvbXBhY3RRdWV1ZSA9IGZ1bmN0aW9uIGNvbXBhY3RRdWV1ZShxdWV1ZSkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWUucG9wKCk7XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmoubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtqXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0ub2JqW2l0ZW0ucHJvcF0gPSBjb21wYWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIGFycmF5VG9PYmplY3Qoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAvKiBlc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246IDAgKi9cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKChvcHRpb25zICYmIChvcHRpb25zLnBsYWluT2JqZWN0cyB8fCBvcHRpb25zLmFsbG93UHJvdG90eXBlcykpIHx8ICFoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzb3VyY2UpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3NvdXJjZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFt0YXJnZXQsIHNvdXJjZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0IHx8IHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VUYXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiAhaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIG1lcmdlVGFyZ2V0ID0gYXJyYXlUb09iamVjdCh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHRhcmdldCkgJiYgaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGFyZ2V0LCBpKSkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRJdGVtID0gdGFyZ2V0W2ldO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJdGVtICYmIHR5cGVvZiB0YXJnZXRJdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbaV0gPSBtZXJnZSh0YXJnZXRJdGVtLCBpdGVtLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKGFjYywga2V5KSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBtZXJnZShhY2Nba2V5XSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIG1lcmdlVGFyZ2V0KTtcbn07XG5cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiBhc3NpZ25TaW5nbGVTb3VyY2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdGFyZ2V0KTtcbn07XG5cbnZhciBkZWNvZGUgPSBmdW5jdGlvbiAoc3RyLCBkZWNvZGVyLCBjaGFyc2V0KSB7XG4gICAgdmFyIHN0cldpdGhvdXRQbHVzID0gc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgLy8gdW5lc2NhcGUgbmV2ZXIgdGhyb3dzLCBubyB0cnkuLi5jYXRjaCBuZWVkZWQ6XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cy5yZXBsYWNlKC8lWzAtOWEtZl17Mn0vZ2ksIHVuZXNjYXBlKTtcbiAgICB9XG4gICAgLy8gdXRmLThcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cldpdGhvdXRQbHVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cztcbiAgICB9XG59O1xuXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKHN0ciwgZGVmYXVsdEVuY29kZXIsIGNoYXJzZXQsIGtpbmQsIGZvcm1hdCkge1xuICAgIC8vIFRoaXMgY29kZSB3YXMgb3JpZ2luYWxseSB3cml0dGVuIGJ5IEJyaWFuIFdoaXRlIChtc2NkZXgpIGZvciB0aGUgaW8uanMgY29yZSBxdWVyeXN0cmluZyBsaWJyYXJ5LlxuICAgIC8vIEl0IGhhcyBiZWVuIGFkYXB0ZWQgaGVyZSBmb3Igc3RyaWN0ZXIgYWRoZXJlbmNlIHRvIFJGQyAzOTg2XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICB2YXIgc3RyaW5nID0gc3RyO1xuICAgIGlmICh0eXBlb2Ygc3RyID09PSAnc3ltYm9sJykge1xuICAgICAgICBzdHJpbmcgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3RyKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN0cmluZyA9IFN0cmluZyhzdHIpO1xuICAgIH1cblxuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZShzdHJpbmcpLnJlcGxhY2UoLyV1WzAtOWEtZl17NH0vZ2ksIGZ1bmN0aW9uICgkMCkge1xuICAgICAgICAgICAgcmV0dXJuICclMjYlMjMnICsgcGFyc2VJbnQoJDAuc2xpY2UoMiksIDE2KSArICclM0InO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjID09PSAweDJEIC8vIC1cbiAgICAgICAgICAgIHx8IGMgPT09IDB4MkUgLy8gLlxuICAgICAgICAgICAgfHwgYyA9PT0gMHg1RiAvLyBfXG4gICAgICAgICAgICB8fCBjID09PSAweDdFIC8vIH5cbiAgICAgICAgICAgIHx8IChjID49IDB4MzAgJiYgYyA8PSAweDM5KSAvLyAwLTlcbiAgICAgICAgICAgIHx8IChjID49IDB4NDEgJiYgYyA8PSAweDVBKSAvLyBhLXpcbiAgICAgICAgICAgIHx8IChjID49IDB4NjEgJiYgYyA8PSAweDdBKSAvLyBBLVpcbiAgICAgICAgICAgIHx8IChmb3JtYXQgPT09IGZvcm1hdHMuUkZDMTczOCAmJiAoYyA9PT0gMHgyOCB8fCBjID09PSAweDI5KSkgLy8gKCApXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3V0ICs9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgaGV4VGFibGVbY107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEMwIHwgKGMgPj4gNildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweEQ4MDAgfHwgYyA+PSAweEUwMDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEUwIHwgKGMgPj4gMTIpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IDE7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyaW5nLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xuICAgICAgICAvKiBlc2xpbnQgb3BlcmF0b3ItbGluZWJyZWFrOiBbMiwgXCJiZWZvcmVcIl0gKi9cbiAgICAgICAgb3V0ICs9IGhleFRhYmxlWzB4RjAgfCAoYyA+PiAxOCldXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gMTIpICYgMHgzRildXG4gICAgICAgICAgICArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG52YXIgY29tcGFjdCA9IGZ1bmN0aW9uIGNvbXBhY3QodmFsdWUpIHtcbiAgICB2YXIgcXVldWUgPSBbeyBvYmo6IHsgbzogdmFsdWUgfSwgcHJvcDogJ28nIH1dO1xuICAgIHZhciByZWZzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWVbaV07XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiB2YWwgIT09IG51bGwgJiYgcmVmcy5pbmRleE9mKHZhbCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaCh7IG9iajogb2JqLCBwcm9wOiBrZXkgfSk7XG4gICAgICAgICAgICAgICAgcmVmcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wYWN0UXVldWUocXVldWUpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIGlzUmVnRXhwID0gZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5cbnZhciBpc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyKG9iaikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEob2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKSk7XG59O1xuXG52YXIgY29tYmluZSA9IGZ1bmN0aW9uIGNvbWJpbmUoYSwgYikge1xuICAgIHJldHVybiBbXS5jb25jYXQoYSwgYik7XG59O1xuXG52YXIgbWF5YmVNYXAgPSBmdW5jdGlvbiBtYXliZU1hcCh2YWwsIGZuKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YXIgbWFwcGVkID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBtYXBwZWQucHVzaChmbih2YWxbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwcGVkO1xuICAgIH1cbiAgICByZXR1cm4gZm4odmFsKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFycmF5VG9PYmplY3Q6IGFycmF5VG9PYmplY3QsXG4gICAgYXNzaWduOiBhc3NpZ24sXG4gICAgY29tYmluZTogY29tYmluZSxcbiAgICBjb21wYWN0OiBjb21wYWN0LFxuICAgIGRlY29kZTogZGVjb2RlLFxuICAgIGVuY29kZTogZW5jb2RlLFxuICAgIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgICBpc1JlZ0V4cDogaXNSZWdFeHAsXG4gICAgbWF5YmVNYXA6IG1heWJlTWFwLFxuICAgIG1lcmdlOiBtZXJnZVxufTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4wXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xudmFyIGluc3BlY3QgPSByZXF1aXJlKCdvYmplY3QtaW5zcGVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IEdldEludHJpbnNpYygnJVR5cGVFcnJvciUnKTtcbnZhciAkV2Vha01hcCA9IEdldEludHJpbnNpYygnJVdlYWtNYXAlJywgdHJ1ZSk7XG52YXIgJE1hcCA9IEdldEludHJpbnNpYygnJU1hcCUnLCB0cnVlKTtcblxudmFyICR3ZWFrTWFwR2V0ID0gY2FsbEJvdW5kKCdXZWFrTWFwLnByb3RvdHlwZS5nZXQnLCB0cnVlKTtcbnZhciAkd2Vha01hcFNldCA9IGNhbGxCb3VuZCgnV2Vha01hcC5wcm90b3R5cGUuc2V0JywgdHJ1ZSk7XG52YXIgJHdlYWtNYXBIYXMgPSBjYWxsQm91bmQoJ1dlYWtNYXAucHJvdG90eXBlLmhhcycsIHRydWUpO1xudmFyICRtYXBHZXQgPSBjYWxsQm91bmQoJ01hcC5wcm90b3R5cGUuZ2V0JywgdHJ1ZSk7XG52YXIgJG1hcFNldCA9IGNhbGxCb3VuZCgnTWFwLnByb3RvdHlwZS5zZXQnLCB0cnVlKTtcbnZhciAkbWFwSGFzID0gY2FsbEJvdW5kKCdNYXAucHJvdG90eXBlLmhhcycsIHRydWUpO1xuXG4vKlxuICogVGhpcyBmdW5jdGlvbiB0cmF2ZXJzZXMgdGhlIGxpc3QgcmV0dXJuaW5nIHRoZSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlXG4gKiBnaXZlbiBrZXkuXG4gKlxuICogVGhhdCBub2RlIGlzIGFsc28gbW92ZWQgdG8gdGhlIGhlYWQgb2YgdGhlIGxpc3QsIHNvIHRoYXQgaWYgaXQncyBhY2Nlc3NlZFxuICogYWdhaW4gd2UgZG9uJ3QgbmVlZCB0byB0cmF2ZXJzZSB0aGUgd2hvbGUgbGlzdC4gQnkgZG9pbmcgc28sIGFsbCB0aGUgcmVjZW50bHlcbiAqIHVzZWQgbm9kZXMgY2FuIGJlIGFjY2Vzc2VkIHJlbGF0aXZlbHkgcXVpY2tseS5cbiAqL1xudmFyIGxpc3RHZXROb2RlID0gZnVuY3Rpb24gKGxpc3QsIGtleSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5cdGZvciAodmFyIHByZXYgPSBsaXN0LCBjdXJyOyAoY3VyciA9IHByZXYubmV4dCkgIT09IG51bGw7IHByZXYgPSBjdXJyKSB7XG5cdFx0aWYgKGN1cnIua2V5ID09PSBrZXkpIHtcblx0XHRcdHByZXYubmV4dCA9IGN1cnIubmV4dDtcblx0XHRcdGN1cnIubmV4dCA9IGxpc3QubmV4dDtcblx0XHRcdGxpc3QubmV4dCA9IGN1cnI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblx0XHRcdHJldHVybiBjdXJyO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGxpc3RHZXQgPSBmdW5jdGlvbiAob2JqZWN0cywga2V5KSB7XG5cdHZhciBub2RlID0gbGlzdEdldE5vZGUob2JqZWN0cywga2V5KTtcblx0cmV0dXJuIG5vZGUgJiYgbm9kZS52YWx1ZTtcbn07XG52YXIgbGlzdFNldCA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXksIHZhbHVlKSB7XG5cdHZhciBub2RlID0gbGlzdEdldE5vZGUob2JqZWN0cywga2V5KTtcblx0aWYgKG5vZGUpIHtcblx0XHRub2RlLnZhbHVlID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUHJlcGVuZCB0aGUgbmV3IG5vZGUgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuXHRcdG9iamVjdHMubmV4dCA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHRcdFx0a2V5OiBrZXksXG5cdFx0XHRuZXh0OiBvYmplY3RzLm5leHQsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9XG59O1xudmFyIGxpc3RIYXMgPSBmdW5jdGlvbiAob2JqZWN0cywga2V5KSB7XG5cdHJldHVybiAhIWxpc3RHZXROb2RlKG9iamVjdHMsIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFNpZGVDaGFubmVsKCkge1xuXHR2YXIgJHdtO1xuXHR2YXIgJG07XG5cdHZhciAkbztcblx0dmFyIGNoYW5uZWwgPSB7XG5cdFx0YXNzZXJ0OiBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRpZiAoIWNoYW5uZWwuaGFzKGtleSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ1NpZGUgY2hhbm5lbCBkb2VzIG5vdCBjb250YWluICcgKyBpbnNwZWN0KGtleSkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Z2V0OiBmdW5jdGlvbiAoa2V5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cblx0XHRcdGlmICgkV2Vha01hcCAmJiBrZXkgJiYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdGlmICgkd20pIHtcblx0XHRcdFx0XHRyZXR1cm4gJHdlYWtNYXBHZXQoJHdtLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCRNYXApIHtcblx0XHRcdFx0aWYgKCRtKSB7XG5cdFx0XHRcdFx0cmV0dXJuICRtYXBHZXQoJG0sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICgkbykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmVseS1pZlxuXHRcdFx0XHRcdHJldHVybiBsaXN0R2V0KCRvLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRoYXM6IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdGlmICgkV2Vha01hcCAmJiBrZXkgJiYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdGlmICgkd20pIHtcblx0XHRcdFx0XHRyZXR1cm4gJHdlYWtNYXBIYXMoJHdtLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCRNYXApIHtcblx0XHRcdFx0aWYgKCRtKSB7XG5cdFx0XHRcdFx0cmV0dXJuICRtYXBIYXMoJG0sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICgkbykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWxvbmVseS1pZlxuXHRcdFx0XHRcdHJldHVybiBsaXN0SGFzKCRvLCBrZXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRpZiAoJFdlYWtNYXAgJiYga2V5ICYmICh0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyB8fCB0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHRpZiAoISR3bSkge1xuXHRcdFx0XHRcdCR3bSA9IG5ldyAkV2Vha01hcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCR3ZWFrTWFwU2V0KCR3bSwga2V5LCB2YWx1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKCRNYXApIHtcblx0XHRcdFx0aWYgKCEkbSkge1xuXHRcdFx0XHRcdCRtID0gbmV3ICRNYXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkbWFwU2V0KCRtLCBrZXksIHZhbHVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghJG8pIHtcblx0XHRcdFx0XHQvKlxuXHRcdFx0XHRcdCAqIEluaXRpYWxpemUgdGhlIGxpbmtlZCBsaXN0IGFzIGFuIGVtcHR5IG5vZGUsIHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZVxuXHRcdFx0XHRcdCAqIHRvIHNwZWNpYWwtY2FzZSBoYW5kbGluZyBvZiB0aGUgZmlyc3Qgbm9kZTogd2UgY2FuIGFsd2F5cyByZWZlciB0b1xuXHRcdFx0XHRcdCAqIGl0IGFzIChwcmV2aW91cyBub2RlKS5uZXh0LCBpbnN0ZWFkIG9mIHNvbWV0aGluZyBsaWtlIChsaXN0KS5oZWFkXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0JG8gPSB7IGtleToge30sIG5leHQ6IG51bGwgfTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0U2V0KCRvLCBrZXksIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBjaGFubmVsO1xufTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=
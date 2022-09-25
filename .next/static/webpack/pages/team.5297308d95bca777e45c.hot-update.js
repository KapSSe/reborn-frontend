self["webpackHotUpdate_N_E"]("pages/team",{

/***/ "./components/team.js":
/*!****************************!*\
  !*** ./components/team.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\team.js",
    _this = undefined;

var Team = function Team(_ref) {
  var sectionTeam = _ref.sectionTeam,
      team = _ref.team;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "team",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "team__content uk-container uk-container-large",
      children: "foo bar baz"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, _this);
};

_c = Team;
/* harmony default export */ __webpack_exports__["default"] = (Team);

var _c;

$RefreshReg$(_c, "Team");

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

/***/ "./pages/team/index.js":
/*!*****************************!*\
  !*** ./pages/team/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/nav */ "./components/nav.js");
/* harmony import */ var _components_team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/team */ "./components/team.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\team\\index.js",
    _this = undefined;

/* eslint-disable prettier/prettier */





var TeamPage = function TeamPage(_ref) {
  var categories = _ref.categories,
      homepage = _ref.homepage,
      sectionFooter = _ref.sectionFooter,
      sectionTeam = _ref.sectionTeam,
      team = _ref.team,
      socials = _ref.socials,
      langSwithes = _ref.langSwithes,
      lang = _ref.lang;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    page: "team-page",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_2__.default, {
      homepage: homepage,
      categories: categories,
      langSwithes: langSwithes,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__.default, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = TeamPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (TeamPage);

var _c;

$RefreshReg$(_c, "TeamPage");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWFtLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy90ZWFtL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRlYW0iLCJzZWN0aW9uVGVhbSIsInRlYW0iLCJUZWFtUGFnZSIsImNhdGVnb3JpZXMiLCJob21lcGFnZSIsInNlY3Rpb25Gb290ZXIiLCJzb2NpYWxzIiwibGFuZ1N3aXRoZXMiLCJsYW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUEyQjtBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDdEMsc0JBQ0U7QUFBUyxhQUFTLEVBQUMsTUFBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O0tBQU1GLEk7QUFVTiwrREFBZUEsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0RjtBQUFBLE1BQXpGQyxVQUF5RixRQUF6RkEsVUFBeUY7QUFBQSxNQUE3RUMsUUFBNkUsUUFBN0VBLFFBQTZFO0FBQUEsTUFBbkVDLGFBQW1FLFFBQW5FQSxhQUFtRTtBQUFBLE1BQXBETCxXQUFvRCxRQUFwREEsV0FBb0Q7QUFBQSxNQUF2Q0MsSUFBdUMsUUFBdkNBLElBQXVDO0FBQUEsTUFBakNLLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFM0csc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxRQUFJLEVBQUMsV0FBYjtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQUssY0FBUSxFQUFFSixRQUFmO0FBQXlCLGdCQUFVLEVBQUVELFVBQXJDO0FBQWlELGlCQUFXLEVBQUVJLFdBQTlEO0FBQTJFLFVBQUksRUFBRUM7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsdURBQUQ7QUFBUSxtQkFBYSxFQUFFSCxhQUF2QjtBQUFzQyxhQUFPLEVBQUVDLE9BQS9DO0FBQXdELGdCQUFVLEVBQUVILFVBQXBFO0FBQWdGLFVBQUksRUFBRUs7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FSRDs7S0FBTU4sUTs7QUEwQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVhbS41Mjk3MzA4ZDk1YmNhNzc3ZTQ1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVGVhbSA9ICh7IHNlY3Rpb25UZWFtLCB0ZWFtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZWFtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW1fX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICBmb28gYmFyIGJhelxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZcIlxuaW1wb3J0IFRlYW0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVhbVwiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvb3RlclwiXG5cbmNvbnN0IFRlYW1QYWdlID0gKHsgY2F0ZWdvcmllcywgaG9tZXBhZ2UsIHNlY3Rpb25Gb290ZXIsIHNlY3Rpb25UZWFtLCB0ZWFtLCBzb2NpYWxzLCBsYW5nU3dpdGhlcywgbGFuZyB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2U9XCJ0ZWFtLXBhZ2VcIj5cbiAgICAgIDxOYXYgaG9tZXBhZ2U9e2hvbWVwYWdlfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBsYW5nU3dpdGhlcz17bGFuZ1N3aXRoZXN9IGxhbmc9e2xhbmd9IC8+XG4gICAgICA8Rm9vdGVyIHNlY3Rpb25Gb290ZXI9e3NlY3Rpb25Gb290ZXJ9IHNvY2lhbHM9e3NvY2lhbHN9IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGxhbmc9e2xhbmd9Lz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGxhbmcgPSBcInVrXCJcblxuICBjb25zdCBob21lcGFnZVJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2hvbWVwYWdlXCIsIHtcbiAgICBsb2NhbGU6IGxhbmcsXG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIHNlbzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIGxvZ286eyBwb3B1bGF0ZTogXCIqXCIgfVxuICAgIH0sXG4gIH0pXG4gIGNvbnN0IGNhdGVnb3JpZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSlcbiAgY29uc3QgdGVhbXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi90ZWFtc1wiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IHNlY3Rpb25UZWFtUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvc2VjdGlvbi10ZWFtXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSlcbiAgY29uc3QgZm9vdGVyUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvc2VjdGlvbi1mb290ZXJcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBzb2NpYWxzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvc29jaWFsc1wiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IGxhbmdTd2l0Y2hlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2xhbmctc3dpdGNoZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjYXRlZ29yaWVzOiBjYXRlZ29yaWVzUmVzLmRhdGEsXG4gICAgICBob21lcGFnZTogaG9tZXBhZ2VSZXMuZGF0YSxcbiAgICAgIHRlYW06IHRlYW1zUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uVGVhbTogc2VjdGlvblRlYW1SZXMuZGF0YSxcbiAgICAgIHNlY3Rpb25Gb290ZXI6IGZvb3RlclJlcy5kYXRhLFxuICAgICAgc29jaWFscyA6c29jaWFsc1Jlcy5kYXRhLFxuICAgICAgbGFuZ1N3aXRoZXM6IGxhbmdTd2l0Y2hlc1Jlcy5kYXRhLFxuICAgICAgbGFuZzogbGFuZ1xuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZWFtUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=
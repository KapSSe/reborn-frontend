self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\footer.js",
    _this = undefined;




var Footer = function Footer(_ref) {
  var sectionFooter = _ref.sectionFooter,
      socials = _ref.socials,
      categories = _ref.categories,
      lang = _ref.lang;
  console.log("lang", lang);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "footer",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "footer__navigation-footer",
        children: categories.map(function (category) {
          if (category.attributes.isHomePage) {
            if (lang === "uk") {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "navigation-footer__item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/#".concat(category.attributes.slug),
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "uk-link-reset navigation-footer__link",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 21
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 19
              }, _this);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "navigation-footer__item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/".concat(lang, "/#").concat(category.attributes.slug),
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "uk-link-reset navigation-footer__link",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 21
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 19
              }, _this);
            }
          } else {
            if (lang === "uk") {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "navigation-footer__item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/".concat(category.attributes.slug),
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "uk-link-reset navigation-footer__link",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 21
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, _this);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "navigation-footer__item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/".concat(lang, "/").concat(category.attributes.slug),
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "uk-link-reset navigation-footer__link",
                    children: category.attributes.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 21
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 19
              }, _this);
            }
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "footer__social-footer",
        children: socials.map(function (social) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "social-footer__item",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: social.attributes.link,
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "social-footer__icon",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
                    image: social.attributes.icon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, _this)
          }, social.id, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "footer__description",
        children: sectionFooter.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwic2VjdGlvbkZvb3RlciIsInNvY2lhbHMiLCJjYXRlZ29yaWVzIiwibGFuZyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJpc0hvbWVQYWdlIiwic2x1ZyIsIm5hbWUiLCJpZCIsInNvY2lhbCIsImxpbmsiLCJpY29uIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBa0Q7QUFBQSxNQUEvQ0MsYUFBK0MsUUFBL0NBLGFBQStDO0FBQUEsTUFBaENDLE9BQWdDLFFBQWhDQSxPQUFnQztBQUFBLE1BQXZCQyxVQUF1QixRQUF2QkEsVUFBdUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDL0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCO0FBQ0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUMsUUFBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxpREFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQywyQkFBZDtBQUFBLGtCQUNHRCxVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQWM7QUFDNUIsY0FBSUEsUUFBUSxDQUFDQyxVQUFULENBQW9CQyxVQUF4QixFQUFvQztBQUNsQyxnQkFBSU4sSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsa0NBQ0U7QUFBSSx5QkFBUyxFQUFDLHlCQUFkO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxjQUFPSSxRQUFRLENBQUNDLFVBQVQsQ0FBb0JFLElBQTNCLENBQVY7QUFBNkMsMEJBQVEsTUFBckQ7QUFBQSx5Q0FDRTtBQUFHLDZCQUFTLEVBQUMsdUNBQWI7QUFBQSw4QkFDR0gsUUFBUSxDQUFD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QURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStFRCxDQWpGRDs7S0FBTWpCLE07QUFtRk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2E5YWQ1YTI4MGExYzI0ZjQ0ODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IEZvb3RlciA9ICh7IHNlY3Rpb25Gb290ZXIsIHNvY2lhbHMsIGNhdGVnb3JpZXMsIGxhbmcgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcImxhbmdcIiwgbGFuZylcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyX19jb250ZW50IHVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlcl9fbmF2aWdhdGlvbi1mb290ZXJcIj5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkuYXR0cmlidXRlcy5pc0hvbWVQYWdlKSB7XG4gICAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tZm9vdGVyX19pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2aWdhdGlvbi1mb290ZXJfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tZm9vdGVyX19pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9LyMke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmlnYXRpb24tZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tZm9vdGVyX19pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZpZ2F0aW9uLWZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ30vJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZpZ2F0aW9uLWZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXJfX3NvY2lhbC1mb290ZXJcIj5cbiAgICAgICAgICB7c29jaWFscy5tYXAoKHNvY2lhbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNvY2lhbC1mb290ZXJfX2l0ZW1cIiBrZXk9e3NvY2lhbC5pZH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17c29jaWFsLmF0dHJpYnV0ZXMubGlua30gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtZm9vdGVyX19pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17c29jaWFsLmF0dHJpYnV0ZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb290ZXJfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge3NlY3Rpb25Gb290ZXIuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
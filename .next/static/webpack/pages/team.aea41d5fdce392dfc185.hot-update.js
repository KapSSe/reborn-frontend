self["webpackHotUpdate_N_E"]("pages/team",{

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
                    lineNumber: 15,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 21
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
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
                    lineNumber: 28,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 21
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
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
                    lineNumber: 40,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 21
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
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
                    lineNumber: 53,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, _this)
              }, category.id, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, _this);
            }
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
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
                    lineNumber: 70,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, _this)
          }, social.id, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "footer__description",
        children: sectionFooter.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwic2VjdGlvbkZvb3RlciIsInNvY2lhbHMiLCJjYXRlZ29yaWVzIiwibGFuZyIsIm1hcCIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImlzSG9tZVBhZ2UiLCJzbHVnIiwibmFtZSIsImlkIiwic29jaWFsIiwibGluayIsImljb24iLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrRDtBQUFBLE1BQS9DQyxhQUErQyxRQUEvQ0EsYUFBK0M7QUFBQSxNQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQUEsTUFBdkJDLFVBQXVCLFFBQXZCQSxVQUF1QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMvRCxzQkFDRTtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGlEQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLDJCQUFkO0FBQUEsa0JBQ0dELFVBQVUsQ0FBQ0UsR0FBWCxDQUFlLFVBQUNDLFFBQUQsRUFBYztBQUM1QixjQUFJQSxRQUFRLENBQUNDLFVBQVQsQ0FBb0JDLFVBQXhCLEVBQW9DO0FBQ2xDLGdCQUFJSixJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixrQ0FDRTtBQUFJLHlCQUFTLEVBQUMseUJBQWQ7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLGNBQU9FLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkUsSUFBM0IsQ0FBVjtBQUE2QywwQkFBUSxNQUFyRDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyx1Q0FBYjtBQUFBLDhCQUNHSCxRQUFRLENBQUNDLFVBQVQsQ0FBb0JHO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQTZDSixRQUFRLENBQUNLLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFTRCxhQVZELE1BVU87QUFDTCxrQ0FDRTtBQUFJLHlCQUFTLEVBQUMseUJBQWQ7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUNFLHNCQUFJLGFBQU1QLElBQU4sZUFBZUUsUUFBUSxDQUFDQyxVQUFULENBQW9CRSxJQUFuQyxDQUROO0FBRUUsMEJBQVEsTUFGVjtBQUFBLHlDQUlFO0FBQUcsNkJBQVMsRUFBQyx1Q0FBYjtBQUFBLDhCQUNHSCxRQUFRLENBQUNDLFVBQVQsQ0FBb0JHO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQTZDSixRQUFRLENBQUNLLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFZRDtBQUNGLFdBekJELE1BeUJPO0FBQ0wsZ0JBQUlQLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLGtDQUNFO0FBQUkseUJBQVMsRUFBQyx5QkFBZDtBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksYUFBTUUsUUFBUSxDQUFDQyxVQUFULENBQW9CRSxJQUExQixDQUFWO0FBQTRDLDBCQUFRLE1BQXBEO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDLHVDQUFiO0FBQUEsOEJBQ0dILFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkc7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBNkNKLFFBQVEsQ0FBQ0ssRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVNELGFBVkQsTUFVTztBQUNMLGtDQUNFO0FBQUkseUJBQVMsRUFBQyx5QkFBZDtBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQ0Usc0JBQUksYUFBTVAsSUFBTixjQUFjRSxRQUFRLENBQUNDLFVBQVQsQ0FBb0JFLElBQWxDLENBRE47QUFFRSwwQkFBUSxNQUZWO0FBQUEseUNBSUU7QUFBRyw2QkFBUyxFQUFDLHVDQUFiO0FBQUEsOEJBQ0dILFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkc7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBNkNKLFFBQVEsQ0FBQ0ssRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVlEO0FBQ0Y7QUFDRixTQXBEQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXdERTtBQUFJLGlCQUFTLEVBQUMsdUJBQWQ7QUFBQSxrQkFDR1QsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ08sTUFBRCxFQUFZO0FBQ3ZCLDhCQUNFO0FBQUkscUJBQVMsRUFBQyxxQkFBZDtBQUFBLG1DQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBRUEsTUFBTSxDQUFDTCxVQUFQLENBQWtCTSxJQUE5QjtBQUFvQyxzQkFBUSxNQUE1QztBQUFBLHFDQUNFO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLHFCQUFmO0FBQUEseUNBQ0UsOERBQUMsMkNBQUQ7QUFBVyx5QkFBSyxFQUFFRCxNQUFNLENBQUNMLFVBQVAsQ0FBa0JPO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUF5Q0YsTUFBTSxDQUFDRCxFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBV0QsU0FaQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4REYsZUF1RUU7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBLGtCQUNHVixhQUFhLENBQUNNLFVBQWQsQ0FBeUJRO0FBRDVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0VELENBaEZEOztLQUFNZixNO0FBa0ZOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW0uYWVhNDFkNWZkY2UzOTJkZmMxODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IEZvb3RlciA9ICh7IHNlY3Rpb25Gb290ZXIsIHNvY2lhbHMsIGNhdGVnb3JpZXMsIGxhbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyX19uYXZpZ2F0aW9uLWZvb3RlclwiPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeS5hdHRyaWJ1dGVzLmlzSG9tZVBhZ2UpIHtcbiAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZpZ2F0aW9uLWZvb3Rlcl9fbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ30vIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXQgbmF2aWdhdGlvbi1mb290ZXJfX2xpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmlnYXRpb24tZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLWZvb3Rlcl9faXRlbVwiIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmlnYXRpb24tZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsLWZvb3RlclwiPlxuICAgICAgICAgIHtzb2NpYWxzLm1hcCgoc29jaWFsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29jaWFsLWZvb3Rlcl9faXRlbVwiIGtleT17c29jaWFsLmlkfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzb2NpYWwuYXR0cmlidXRlcy5saW5rfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1mb290ZXJfX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtzb2NpYWwuYXR0cmlidXRlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvb3Rlcl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7c2VjdGlvbkZvb3Rlci5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iXSwic291cmNlUm9vdCI6IiJ9
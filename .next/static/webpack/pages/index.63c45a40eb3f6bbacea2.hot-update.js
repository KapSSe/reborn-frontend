self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\nav.js",
    _this = undefined,
    _s = $RefreshSig$();






var Nav = function Nav(_ref) {
  _s();

  var homepage = _ref.homepage,
      categories = _ref.categories,
      langSwithes = _ref.langSwithes,
      lang = _ref.lang;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var renderLogoLink = function renderLogoLink() {
    if (lang === "uk") {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "navbar__logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: homepage.attributes.logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this);
    } else {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/".concat(lang),
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "navbar__logo",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_3__.default, {
            image: homepage.attributes.logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "navbar",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "uk-navbar-container uk-margin-auto uk-container-large uk-navbar",
      "data-uk-navbar": true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "uk-navbar-left navbar__left",
        children: [renderLogoLink(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "uk-navbar-nav",
          children: categories.map(function (category) {
            if (category.attributes.isHomePage) {
              if (lang === "uk") {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/#".concat(category.attributes.slug),
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 21
                }, _this);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/".concat(lang, "/#").concat(category.attributes.slug),
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 21
                }, _this);
              }
            } else {
              if (lang === "uk") {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/".concat(category.attributes.slug),
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 21
                }, _this);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/".concat(lang, "/").concat(category.attributes.slug),
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, _this);
              }
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "uk-navbar-right navbar__right",
        children: langSwithes.map(function (currentLang, i) {
          if (currentLang.attributes.lang === lang) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "navbar__menu-item navbar__menu-item_active",
                children: currentLang.attributes.langLabel
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, _this);
          } else {
            if (currentLang.attributes.lang === "uk") {
              console.log("here");
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/",
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "navbar__menu-item",
                    children: currentLang.attributes.langLabel
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 19
              }, _this);
            } else {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/".concat(currentLang.attributes.lang),
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "navbar__menu-item",
                    children: currentLang.attributes.langLabel
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 19
              }, _this);
            }
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Nav, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiaG9tZXBhZ2UiLCJjYXRlZ29yaWVzIiwibGFuZ1N3aXRoZXMiLCJsYW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVyTG9nb0xpbmsiLCJhdHRyaWJ1dGVzIiwibG9nbyIsIm1hcCIsImNhdGVnb3J5IiwiaXNIb21lUGFnZSIsInNsdWciLCJuYW1lIiwiaWQiLCJjdXJyZW50TGFuZyIsImkiLCJsYW5nTGFiZWwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWlEO0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQXBDQyxVQUFvQyxRQUFwQ0EsVUFBb0M7QUFBQSxNQUF4QkMsV0FBd0IsUUFBeEJBLFdBQXdCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzNELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQUlILElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLDBCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBZSxnQkFBUSxNQUF2QjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxjQUFiO0FBQUEsaUNBQ0UsOERBQUMsMkNBQUQ7QUFBVyxpQkFBSyxFQUFFSCxRQUFRLENBQUNPLFVBQVQsQ0FBb0JDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsS0FSRCxNQVFPO0FBQ0wsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLGFBQU1MLElB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QTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVNEO0FBQ0Y7QUFDRixTQWpDQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUdELENBOUhEOztHQUFNakIsRztVQUNXTSxrRDs7O0tBRFhOLEc7QUFnSU4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjNjNDVhNDBlYjNmNmJiYWNlYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmNvbnN0IE5hdiA9ICh7IGhvbWVwYWdlLCBjYXRlZ29yaWVzLCBsYW5nU3dpdGhlcywgbGFuZyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgcmVuZGVyTG9nb0xpbmsgPSAoKSA9PiB7XG4gICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2hvbWVwYWdlLmF0dHJpYnV0ZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke2xhbmd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19sb2dvXCI+XG4gICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtob21lcGFnZS5hdHRyaWJ1dGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgPG5hdlxuICAgICAgICBjbGFzc05hbWU9XCJ1ay1uYXZiYXItY29udGFpbmVyIHVrLW1hcmdpbi1hdXRvIHVrLWNvbnRhaW5lci1sYXJnZSB1ay1uYXZiYXJcIlxuICAgICAgICBkYXRhLXVrLW5hdmJhclxuICAgICAgPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLWxlZnQgbmF2YmFyX19sZWZ0XCI+XG4gICAgICAgICAge3JlbmRlckxvZ29MaW5rKCl9XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LmF0dHJpYnV0ZXMuaXNIb21lUGFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyMke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9LyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1yaWdodCBuYXZiYXJfX3JpZ2h0XCI+XG4gICAgICAgICAge2xhbmdTd2l0aGVzLm1hcCgoY3VycmVudExhbmcsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmcgPT09IGxhbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtIG5hdmJhcl9fbWVudS1pdGVtX2FjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmdMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJzb3VyY2VSb290IjoiIn0=
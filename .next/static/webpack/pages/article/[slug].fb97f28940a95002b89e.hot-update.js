self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

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

  var createLangUrl = function createLangUrl(newLang) {
    var _router$query;

    var path = router.pathname;
    var slug = router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.slug;

    if (lang === "uk") {
      if (slug) {
        return "/".concat(newLang, "/").concat(path.replace("[slug]", slug));
      }
    }
  };

  var url = createLangUrl("en");
  console.log(url);
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
                      lineNumber: 58,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
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
                      lineNumber: 71,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
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
                      lineNumber: 83,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
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
                      lineNumber: 96,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 21
                }, _this);
              }
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
                lineNumber: 112,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
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
                    lineNumber: 123,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
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
                    lineNumber: 133,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 19
              }, _this);
            }
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiaG9tZXBhZ2UiLCJjYXRlZ29yaWVzIiwibGFuZ1N3aXRoZXMiLCJsYW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVyTG9nb0xpbmsiLCJhdHRyaWJ1dGVzIiwibG9nbyIsImNyZWF0ZUxhbmdVcmwiLCJuZXdMYW5nIiwicGF0aCIsInBhdGhuYW1lIiwic2x1ZyIsInF1ZXJ5IiwicmVwbGFjZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJjYXRlZ29yeSIsImlzSG9tZVBhZ2UiLCJuYW1lIiwiaWQiLCJjdXJyZW50TGFuZyIsImkiLCJsYW5nTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBcENDLFVBQW9DLFFBQXBDQSxVQUFvQztBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDM0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBSUgsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFlLGdCQUFRLE1BQXZCO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBQSxpQ0FDRSw4REFBQywyQ0FBRDtBQUFXLGlCQUFLLEVBQUVILFFBQVEsQ0FBQ08sVUFBVCxDQUFvQkM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFB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QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsR0FBWDtBQUFlLDBCQUFRLE1BQXZCO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDLG1CQUFiO0FBQUEsOEJBQ0dNLFdBQVcsQ0FBQ2pCLFVBQVosQ0FBdUJtQjtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTRCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFTRCxhQVhELE1BV087QUFDTCxrQ0FDRTtBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksYUFBTUQsV0FBVyxDQUFDakIsVUFBWixDQUF1QkosSUFBN0IsQ0FBVjtBQUErQywwQkFBUSxNQUF2RDtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyxtQkFBYjtBQUFBLDhCQUNHcUIsV0FBVyxDQUFDakIsVUFBWixDQUF1Qm1CO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNELENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQVNEO0FBQ0Y7QUFDRixTQWpDQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUdELENBNUlEOztHQUFNMUIsRztVQUNXTSxrRDs7O0tBRFhOLEc7QUE4SU4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWNsZS9bc2x1Z10uZmI5N2YyODk0MGE5NTAwMmI4OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmNvbnN0IE5hdiA9ICh7IGhvbWVwYWdlLCBjYXRlZ29yaWVzLCBsYW5nU3dpdGhlcywgbGFuZyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgcmVuZGVyTG9nb0xpbmsgPSAoKSA9PiB7XG4gICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2hvbWVwYWdlLmF0dHJpYnV0ZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke2xhbmd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19sb2dvXCI+XG4gICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtob21lcGFnZS5hdHRyaWJ1dGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3JlYXRlTGFuZ1VybCA9IChuZXdMYW5nKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRobmFtZVxuICAgIGNvbnN0IHNsdWcgPSByb3V0ZXI/LnF1ZXJ5Py5zbHVnXG4gICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgaWYgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGAvJHtuZXdMYW5nfS8ke3BhdGgucmVwbGFjZShcIltzbHVnXVwiLCBzbHVnKX1gXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXJsID0gY3JlYXRlTGFuZ1VybChcImVuXCIpXG5cbiAgY29uc29sZS5sb2codXJsKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciB1ay1tYXJnaW4tYXV0byB1ay1jb250YWluZXItbGFyZ2UgdWstbmF2YmFyXCJcbiAgICAgICAgZGF0YS11ay1uYXZiYXJcbiAgICAgID5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0IG5hdmJhcl9fbGVmdFwiPlxuICAgICAgICAgIHtyZW5kZXJMb2dvTGluaygpfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5hdHRyaWJ1dGVzLmlzSG9tZVBhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ30vIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItcmlnaHQgbmF2YmFyX19yaWdodFwiPlxuICAgICAgICAgIHtsYW5nU3dpdGhlcy5tYXAoKGN1cnJlbnRMYW5nLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nID09PSBsYW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbSBuYXZiYXJfX21lbnUtaXRlbV9hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZ0xhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZ0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9
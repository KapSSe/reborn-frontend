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
        return "/".concat(newLang).concat(path.replace("[slug]", slug));
      } else {
        return "/".concat(newLang).concat(path);
      }
    } else {
      if (slug) {
        return "/".concat(path.replace("[slug]", slug).split("/").splice(2).join("/"));
      } else {
        console.log("else no slug", "/".concat(path.split("/").splice(2).join("/")));
        return "/".concat(path.split("/").splice(2).join("/"));
      }
    }
  };

  var url = createLangUrl("en");
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
                      lineNumber: 65,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
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
                      lineNumber: 78,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
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
                      lineNumber: 90,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
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
                      lineNumber: 103,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
                }, _this);
              }
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
                lineNumber: 119,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, _this);
          } else {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: createLangUrl(currentLang.attributes.lang),
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "navbar__menu-item",
                  children: currentLang.attributes.langLabel
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, _this);
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiaG9tZXBhZ2UiLCJjYXRlZ29yaWVzIiwibGFuZ1N3aXRoZXMiLCJsYW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVyTG9nb0xpbmsiLCJhdHRyaWJ1dGVzIiwibG9nbyIsImNyZWF0ZUxhbmdVcmwiLCJuZXdMYW5nIiwicGF0aCIsInBhdGhuYW1lIiwic2x1ZyIsInF1ZXJ5IiwicmVwbGFjZSIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJtYXAiLCJjYXRlZ29yeSIsImlzSG9tZVBhZ2UiLCJuYW1lIiwiaWQiLCJjdXJyZW50TGFuZyIsImkiLCJsYW5nTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBcENDLFVBQW9DLFFBQXBDQSxVQUFvQztBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDM0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBSUgsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFlLGdCQUFRLE1BQXZCO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBQSxpQ0FDRSw4REFBQywyQ0FBRDtBQUFXLGlCQUFLLEVBQUVILFFBQVEsQ0FBQ08sVUFBVCxDQUFvQkM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBOERFO0FBQUksaUJBQVMsRUFBQywrQkFBZDtBQUFBLGtCQUNHeEIsV0FBVyxDQUFDb0IsR0FBWixDQUFnQixVQUFDSyxXQUFELEVBQWNDLENBQWQsRUFBb0I7QUFDbkMsY0FBSUQsV0FBVyxDQUFDcEIsVUFBWixDQUF1QkosSUFBdkIsS0FBZ0NBLElBQXBDLEVBQTBDO0FBQ3hDLGdDQUNFO0FBQUEscUNBQ0U7QUFBTSx5QkFBUyxFQUFDLDRDQUFoQjtBQUFBLDBCQUNHd0IsV0FBVyxDQUFDcEIsVUFBWixDQUF1QnNCO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUFTRCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFPRCxXQVJELE1BUU87QUFDTCxnQ0FDRTtBQUFBLHFDQUNFLDhEQUFDLGtEQUFEO0FBQ0Usb0JBQUksRUFBRW5CLGFBQWEsQ0FBQ2tCLFdBQVcsQ0FBQ3BCLFVBQVosQ0FBdUJKLElBQXhCLENBRHJCO0FBRUUsd0JBQVEsTUFGVjtBQUFBLHVDQUlFO0FBQUcsMkJBQVMsRUFBQyxtQkFBYjtBQUFBLDRCQUNHd0IsV0FBVyxDQUFDcEIsVUFBWixDQUF1QnNCO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBU0QsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBWUQ7QUFDRixTQXZCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkZELENBeklEOztHQUFNN0IsRztVQUNXTSxrRDs7O0tBRFhOLEc7QUEySU4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWNsZS9bc2x1Z10uZGUyZDBjNWI5Y2ZkNWM3NDQ2NWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmNvbnN0IE5hdiA9ICh7IGhvbWVwYWdlLCBjYXRlZ29yaWVzLCBsYW5nU3dpdGhlcywgbGFuZyB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgcmVuZGVyTG9nb0xpbmsgPSAoKSA9PiB7XG4gICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2hvbWVwYWdlLmF0dHJpYnV0ZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke2xhbmd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19sb2dvXCI+XG4gICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtob21lcGFnZS5hdHRyaWJ1dGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3JlYXRlTGFuZ1VybCA9IChuZXdMYW5nKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRobmFtZVxuICAgIGNvbnN0IHNsdWcgPSByb3V0ZXI/LnF1ZXJ5Py5zbHVnXG4gICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgaWYgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGAvJHtuZXdMYW5nfSR7cGF0aC5yZXBsYWNlKFwiW3NsdWddXCIsIHNsdWcpfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7bmV3TGFuZ30ke3BhdGh9YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc2x1Zykge1xuICAgICAgICByZXR1cm4gYC8ke3BhdGgucmVwbGFjZShcIltzbHVnXVwiLCBzbHVnKS5zcGxpdChcIi9cIikuc3BsaWNlKDIpLmpvaW4oXCIvXCIpfWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWxzZSBubyBzbHVnXCIsIGAvJHtwYXRoLnNwbGl0KFwiL1wiKS5zcGxpY2UoMikuam9pbihcIi9cIil9YClcbiAgICAgICAgcmV0dXJuIGAvJHtwYXRoLnNwbGl0KFwiL1wiKS5zcGxpY2UoMikuam9pbihcIi9cIil9YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVybCA9IGNyZWF0ZUxhbmdVcmwoXCJlblwiKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciB1ay1tYXJnaW4tYXV0byB1ay1jb250YWluZXItbGFyZ2UgdWstbmF2YmFyXCJcbiAgICAgICAgZGF0YS11ay1uYXZiYXJcbiAgICAgID5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0IG5hdmJhcl9fbGVmdFwiPlxuICAgICAgICAgIHtyZW5kZXJMb2dvTGluaygpfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5hdHRyaWJ1dGVzLmlzSG9tZVBhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ30vIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItcmlnaHQgbmF2YmFyX19yaWdodFwiPlxuICAgICAgICAgIHtsYW5nU3dpdGhlcy5tYXAoKGN1cnJlbnRMYW5nLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nID09PSBsYW5nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbSBuYXZiYXJfX21lbnUtaXRlbV9hY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZ0xhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtjcmVhdGVMYW5nVXJsKGN1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZyl9XG4gICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZ0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9
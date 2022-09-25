self["webpackHotUpdate_N_E"]("pages/en/article/[slug]",{

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
        console.log('else');
        return 'else';
      }
    } else {
      if (slug) {
        return "/".concat(path.replace("[slug]", slug).split("/").splice(2).join("/"));
      } else {
        console.log('else');
        return 'else';
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
                      lineNumber: 68,
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
                      lineNumber: 81,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
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
                      lineNumber: 93,
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
                      lineNumber: 106,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 21
                }, _this);
              }
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
                lineNumber: 122,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 17
            }, _this);
          } else {
            if (currentLang.attributes.lang === "uk") {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/",
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "navbar__menu-item",
                    children: currentLang.attributes.langLabel
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
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
                    lineNumber: 142,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, _this);
            }
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiaG9tZXBhZ2UiLCJjYXRlZ29yaWVzIiwibGFuZ1N3aXRoZXMiLCJsYW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVyTG9nb0xpbmsiLCJhdHRyaWJ1dGVzIiwibG9nbyIsImNyZWF0ZUxhbmdVcmwiLCJuZXdMYW5nIiwicGF0aCIsInBhdGhuYW1lIiwic2x1ZyIsInF1ZXJ5IiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsInNwbGljZSIsImpvaW4iLCJ1cmwiLCJtYXAiLCJjYXRlZ29yeSIsImlzSG9tZVBhZ2UiLCJuYW1lIiwiaWQiLCJjdXJyZW50TGFuZyIsImkiLCJsYW5nTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsUUFBOEMsUUFBOUNBLFFBQThDO0FBQUEsTUFBcENDLFVBQW9DLFFBQXBDQSxVQUFvQztBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDM0QsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBSUgsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFlLGdCQUFRLE1BQXZCO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBQSxpQ0FDRSw4REFBQywyQ0FBRDtBQUFXLGlCQUFLLEVBQUVILFFBQVEsQ0FBQ08sVUFBVCxDQUFvQkM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFB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QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNHRCxDQXJKRDs7R0FBTTdCLEc7VUFDV00sa0Q7OztLQURYTixHO0FBdUpOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VuL2FydGljbGUvW3NsdWddLjhlNWY2MmUzNTlmNTEzY2Y3MzI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5jb25zdCBOYXYgPSAoeyBob21lcGFnZSwgY2F0ZWdvcmllcywgbGFuZ1N3aXRoZXMsIGxhbmcgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHJlbmRlckxvZ29MaW5rID0gKCkgPT4ge1xuICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19sb2dvXCI+XG4gICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtob21lcGFnZS5hdHRyaWJ1dGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtsYW5nfWB9IHBhc3NIcmVmPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nb1wiPlxuICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17aG9tZXBhZ2UuYXR0cmlidXRlcy5sb2dvfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZUxhbmdVcmwgPSAobmV3TGFuZykgPT4ge1xuICAgIGNvbnN0IHBhdGggPSByb3V0ZXIucGF0aG5hbWVcbiAgICBjb25zdCBzbHVnID0gcm91dGVyPy5xdWVyeT8uc2x1Z1xuICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgIGlmIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBgLyR7bmV3TGFuZ30ke3BhdGgucmVwbGFjZShcIltzbHVnXVwiLCBzbHVnKX1gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZWxzZScpXG4gICAgICAgIHJldHVybiAnZWxzZSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIGAvJHtwYXRoLnJlcGxhY2UoXCJbc2x1Z11cIiwgc2x1Zykuc3BsaXQoXCIvXCIpLnNwbGljZSgyKS5qb2luKFwiL1wiKX1gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnZWxzZScpXG4gICAgICAgIHJldHVybiAnZWxzZSdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCB1cmwgPSBjcmVhdGVMYW5nVXJsKFwiZW5cIilcblxuICBjb25zb2xlLmxvZyh1cmwpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgPG5hdlxuICAgICAgICBjbGFzc05hbWU9XCJ1ay1uYXZiYXItY29udGFpbmVyIHVrLW1hcmdpbi1hdXRvIHVrLWNvbnRhaW5lci1sYXJnZSB1ay1uYXZiYXJcIlxuICAgICAgICBkYXRhLXVrLW5hdmJhclxuICAgICAgPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLWxlZnQgbmF2YmFyX19sZWZ0XCI+XG4gICAgICAgICAge3JlbmRlckxvZ29MaW5rKCl9XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LmF0dHJpYnV0ZXMuaXNIb21lUGFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyMke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9LyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1yaWdodCBuYXZiYXJfX3JpZ2h0XCI+XG4gICAgICAgICAge2xhbmdTd2l0aGVzLm1hcCgoY3VycmVudExhbmcsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmcgPT09IGxhbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtIG5hdmJhcl9fbWVudS1pdGVtX2FjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nTGFiZWx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmdMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJzb3VyY2VSb290IjoiIn0=
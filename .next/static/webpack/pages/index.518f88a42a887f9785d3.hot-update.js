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
          className: "uk-link-reset navbar__logo",
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
          className: "uk-link-reset navbar__logo",
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
        return "/".concat(path.split("/").splice(2).join("/"));
      }
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
                      className: "uk-link-reset navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 21
                }, _this);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/".concat(lang, "/#").concat(category.attributes.slug),
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "uk-link-reset navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 75,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
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
                      className: "uk-link-reset navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 21
                }, _this);
              } else {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/".concat(lang, "/").concat(category.attributes.slug),
                    passHref: true,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "uk-link-reset navbar__menu-item",
                      children: category.attributes.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, _this);
              }
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "uk-navbar-right navbar__right",
        children: langSwithes.map(function (currentLang, i) {
          if (currentLang.attributes.lang === lang) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "navbar__menu-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "navbar__menu-item navbar__menu-item_active",
                children: currentLang.attributes.langLabel
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, _this);
          } else {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "navbar__menu-item",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: createLangUrl(currentLang.attributes.lang),
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  className: "uk-link-reset",
                  children: currentLang.attributes.langLabel
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 17
            }, _this);
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiaG9tZXBhZ2UiLCJjYXRlZ29yaWVzIiwibGFuZ1N3aXRoZXMiLCJsYW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVyTG9nb0xpbmsiLCJhdHRyaWJ1dGVzIiwibG9nbyIsImNyZWF0ZUxhbmdVcmwiLCJuZXdMYW5nIiwicGF0aCIsInBhdGhuYW1lIiwic2x1ZyIsInF1ZXJ5IiwicmVwbGFjZSIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsIm1hcCIsImNhdGVnb3J5IiwiaXNIb21lUGFnZSIsIm5hbWUiLCJpZCIsImN1cnJlbnRMYW5nIiwiaSIsImxhbmdMYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFpRDtBQUFBOztBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFwQ0MsVUFBb0MsUUFBcENBLFVBQW9DO0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMzRCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixRQUFJSCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQiwwQkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQWUsZ0JBQVEsTUFBdkI7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsNEJBQWI7QUFBQSxpQ0FDRSw4REFBQywyQ0FBRDtBQUFXLGlCQUFLLEVBQUVILFFBQVEsQ0FBQ08sVUFBVCxDQUFvQkM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7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dUJBQVMsRUFBQyxtQkFBZDtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBQyw0Q0FBaEI7QUFBQSwwQkFDR3FCLFdBQVcsQ0FBQ2pCLFVBQVosQ0FBdUJtQjtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsZUFBdUNELENBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFPRCxXQVJELE1BUU87QUFDTCxnQ0FDRTtBQUFJLHVCQUFTLEVBQUMsbUJBQWQ7QUFBQSxxQ0FDRSw4REFBQyxrREFBRDtBQUNFLG9CQUFJLEVBQUVoQixhQUFhLENBQUNlLFdBQVcsQ0FBQ2pCLFVBQVosQ0FBdUJKLElBQXhCLENBRHJCO0FBRUUsd0JBQVEsTUFGVjtBQUFBLHVDQUlFO0FBQUcsMkJBQVMsRUFBQyxlQUFiO0FBQUEsNEJBQ0dxQixXQUFXLENBQUNqQixVQUFaLENBQXVCbUI7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUF1Q0QsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVlEO0FBQ0YsU0F2QkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZGRCxDQXRJRDs7R0FBTTFCLEc7VUFDV00sa0Q7OztLQURYTixHO0FBd0lOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxOGY4OGE0MmE4ODdmOTc4NWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5jb25zdCBOYXYgPSAoeyBob21lcGFnZSwgY2F0ZWdvcmllcywgbGFuZ1N3aXRoZXMsIGxhbmcgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHJlbmRlckxvZ29MaW5rID0gKCkgPT4ge1xuICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2hvbWVwYWdlLmF0dHJpYnV0ZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke2xhbmd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2hvbWVwYWdlLmF0dHJpYnV0ZXMubG9nb30gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjcmVhdGVMYW5nVXJsID0gKG5ld0xhbmcpID0+IHtcbiAgICBjb25zdCBwYXRoID0gcm91dGVyLnBhdGhuYW1lXG4gICAgY29uc3Qgc2x1ZyA9IHJvdXRlcj8ucXVlcnk/LnNsdWdcbiAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICBpZiAoc2x1Zykge1xuICAgICAgICByZXR1cm4gYC8ke25ld0xhbmd9JHtwYXRoLnJlcGxhY2UoXCJbc2x1Z11cIiwgc2x1Zyl9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtuZXdMYW5nfSR7cGF0aH1gXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzbHVnKSB7XG4gICAgICAgIHJldHVybiBgLyR7cGF0aC5yZXBsYWNlKFwiW3NsdWddXCIsIHNsdWcpLnNwbGl0KFwiL1wiKS5zcGxpY2UoMikuam9pbihcIi9cIil9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtwYXRoLnNwbGl0KFwiL1wiKS5zcGxpY2UoMikuam9pbihcIi9cIil9YFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPVwidWstbmF2YmFyLWNvbnRhaW5lciB1ay1tYXJnaW4tYXV0byB1ay1jb250YWluZXItbGFyZ2UgdWstbmF2YmFyXCJcbiAgICAgICAgZGF0YS11ay1uYXZiYXJcbiAgICAgID5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1sZWZ0IG5hdmJhcl9fbGVmdFwiPlxuICAgICAgICAgIHtyZW5kZXJMb2dvTGluaygpfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5hdHRyaWJ1dGVzLmlzSG9tZVBhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8jJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldCBuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfS8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLW5hdmJhci1yaWdodCBuYXZiYXJfX3JpZ2h0XCI+XG4gICAgICAgICAge2xhbmdTd2l0aGVzLm1hcCgoY3VycmVudExhbmcsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmcgPT09IGxhbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW0gbmF2YmFyX19tZW51LWl0ZW1fYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmdMYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtjcmVhdGVMYW5nVXJsKGN1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZyl9XG4gICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nTGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJzb3VyY2VSb290IjoiIn0=
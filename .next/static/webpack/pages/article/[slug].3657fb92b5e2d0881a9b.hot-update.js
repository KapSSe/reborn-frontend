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

  var createLangUrl = function createLangUrl(locale) {
    var _router$query;

    var path = router.pathname;
    var slug = router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.slug;

    if (locale === "uk") {
      console.log('here', router);
    }
  };

  createLangUrl();
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
                      lineNumber: 54,
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
                      lineNumber: 67,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
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
                      lineNumber: 79,
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
                      lineNumber: 92,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 23
                  }, _this)
                }, category.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 21
                }, _this);
              }
            }
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
                lineNumber: 108,
                columnNumber: 19
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
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
                    lineNumber: 129,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 21
                }, _this)
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 19
              }, _this);
            }
          }
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiaG9tZXBhZ2UiLCJjYXRlZ29yaWVzIiwibGFuZ1N3aXRoZXMiLCJsYW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwicmVuZGVyTG9nb0xpbmsiLCJhdHRyaWJ1dGVzIiwibG9nbyIsImNyZWF0ZUxhbmdVcmwiLCJsb2NhbGUiLCJwYXRoIiwicGF0aG5hbWUiLCJzbHVnIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiY2F0ZWdvcnkiLCJpc0hvbWVQYWdlIiwibmFtZSIsImlkIiwiY3VycmVudExhbmciLCJpIiwibGFuZ0xhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWlEO0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQXBDQyxVQUFvQyxRQUFwQ0EsVUFBb0M7QUFBQSxNQUF4QkMsV0FBd0IsUUFBeEJBLFdBQXdCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzNELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFFBQUlILElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLDBCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBZSxnQkFBUSxNQUF2QjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyxjQUFiO0FBQUEsaUNBQ0UsOERBQUMsMkNBQUQ7QUFBVyxpQkFBSyxFQUFFSCxRQUFRLENBQUNPLFVBQVQsQ0FBb0JDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0Qs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O0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTRCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFTRCxhQVhELE1BV087QUFDTCxrQ0FDRTtBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksYUFBTUQsV0FBVyxDQUFDZixVQUFaLENBQXVCSixJQUE3QixDQUFWO0FBQStDLDBCQUFRLE1BQXZEO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDLG1CQUFiO0FBQUEsOEJBQ0dtQixXQUFXLENBQUNmLFVBQVosQ0FBdUJpQjtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGlCQUFTRCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFTRDtBQUNGO0FBQ0YsU0FqQ0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVHRCxDQXhJRDs7R0FBTXhCLEc7VUFDV00sa0Q7OztLQURYTixHO0FBMElOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FydGljbGUvW3NsdWddLjM2NTdmYjkyYjVlMmQwODgxYTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5jb25zdCBOYXYgPSAoeyBob21lcGFnZSwgY2F0ZWdvcmllcywgbGFuZ1N3aXRoZXMsIGxhbmcgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHJlbmRlckxvZ29MaW5rID0gKCkgPT4ge1xuICAgIGlmIChsYW5nID09PSBcInVrXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19sb2dvXCI+XG4gICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtob21lcGFnZS5hdHRyaWJ1dGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtsYW5nfWB9IHBhc3NIcmVmPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nb1wiPlxuICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17aG9tZXBhZ2UuYXR0cmlidXRlcy5sb2dvfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZUxhbmdVcmwgPSAobG9jYWxlKSA9PiB7XG4gICAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRobmFtZVxuICAgIGNvbnN0IHNsdWcgPSByb3V0ZXI/LnF1ZXJ5Py5zbHVnXG4gICAgaWYgKGxvY2FsZSA9PT0gXCJ1a1wiKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGVyZScsIHJvdXRlcilcbiAgICB9XG4gIH1cblxuICBjcmVhdGVMYW5nVXJsKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICA8bmF2XG4gICAgICAgIGNsYXNzTmFtZT1cInVrLW5hdmJhci1jb250YWluZXIgdWstbWFyZ2luLWF1dG8gdWstY29udGFpbmVyLWxhcmdlIHVrLW5hdmJhclwiXG4gICAgICAgIGRhdGEtdWstbmF2YmFyXG4gICAgICA+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1ay1uYXZiYXItbGVmdCBuYXZiYXJfX2xlZnRcIj5cbiAgICAgICAgICB7cmVuZGVyTG9nb0xpbmsoKX1cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuYXR0cmlidXRlcy5pc0hvbWVQYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9LyMke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ30vJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWstbmF2YmFyLXJpZ2h0IG5hdmJhcl9fcmlnaHRcIj5cbiAgICAgICAgICB7bGFuZ1N3aXRoZXMubWFwKChjdXJyZW50TGFuZywgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZyA9PT0gbGFuZykge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW0gbmF2YmFyX19tZW51LWl0ZW1fYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmdMYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoY3VycmVudExhbmcuYXR0cmlidXRlcy5sYW5nID09PSBcInVrXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50TGFuZy5hdHRyaWJ1dGVzLmxhbmdMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke2N1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZ31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRMYW5nLmF0dHJpYnV0ZXMubGFuZ0xhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl0sInNvdXJjZVJvb3QiOiIifQ==
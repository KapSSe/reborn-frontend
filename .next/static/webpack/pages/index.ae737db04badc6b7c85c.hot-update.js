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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "footer",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "footer__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "footer__navigation-footer",
        children: categories.map(function (category) {
          if (category.attributes.isHomePage) {
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
                  lineNumber: 14,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 19
              }, _this)
            }, category.id, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 17
            }, _this);
          } else {
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
                  lineNumber: 24,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 19
              }, _this)
            }, category.id, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, _this);
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
                    lineNumber: 40,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, _this)
          }, social.id, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "footer__description",
        children: sectionFooter.attributes.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
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
{
  categories.map(function (category) {
    if (category.attributes.isHomePage) {
      if (lang === "uk") {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "navigation-footer__item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/#".concat(category.attributes.slug),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "navbar__menu-item",
              children: category.attributes.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, _this)
        }, category.id, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }, _this);
      } else {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "navigation-footer__item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/".concat(lang, "/#").concat(category.attributes.slug),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "navbar__menu-item",
              children: category.attributes.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }, _this)
        }, category.id, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
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
              className: "navbar__menu-item",
              children: category.attributes.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }, _this)
        }, category.id, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, _this);
      } else {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "navigation-footer__item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/".concat(lang, "/").concat(category.attributes.slug),
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "navbar__menu-item",
              children: category.attributes.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, _this)
        }, category.id, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }, _this);
      }
    }
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwic2VjdGlvbkZvb3RlciIsInNvY2lhbHMiLCJjYXRlZ29yaWVzIiwibGFuZyIsIm1hcCIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImlzSG9tZVBhZ2UiLCJzbHVnIiwibmFtZSIsImlkIiwic29jaWFsIiwibGluayIsImljb24iLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrRDtBQUFBLE1BQS9DQyxhQUErQyxRQUEvQ0EsYUFBK0M7QUFBQSxNQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQUEsTUFBdkJDLFVBQXVCLFFBQXZCQSxVQUF1QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMvRCxzQkFDRTtBQUFTLGFBQVMsRUFBQyxRQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGlEQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLDJCQUFkO0FBQUEsa0JBQ0dELFVBQVUsQ0FBQ0UsR0FBWCxDQUFlLFVBQUNDLFFBQUQsRUFBYztBQUM1QixjQUFJQSxRQUFRLENBQUNDLFVBQVQsQ0FBb0JDLFVBQXhCLEVBQW9DO0FBQ2xDLGdDQUNFO0FBQUksdUJBQVMsRUFBQyx5QkFBZDtBQUFBLHFDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksY0FBT0YsUUFBUSxDQUFDQyxVQUFULENBQW9CRSxJQUEzQixDQUFWO0FBQTZDLHdCQUFRLE1BQXJEO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFDLHVDQUFiO0FBQUEsNEJBQ0dILFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkc7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixlQUE2Q0osUUFBUSxDQUFDSyxFQUF0RDtB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RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBWUQ7QUFDRixLQXpCRCxNQXlCTztBQUNMLFVBQUlQLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCLDRCQUNFO0FBQUksbUJBQVMsRUFBQyx5QkFBZDtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksYUFBTUUsUUFBUSxDQUFDQyxVQUFULENBQW9CRSxJQUExQixDQUFWO0FBQTRDLG9CQUFRLE1BQXBEO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLG1CQUFiO0FBQUEsd0JBQ0dILFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkc7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUE2Q0osUUFBUSxDQUFDSyxFQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWRCxNQVVPO0FBQ0wsNEJBQ0U7QUFBSSxtQkFBUyxFQUFDLHlCQUFkO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFDRSxnQkFBSSxhQUFNUCxJQUFOLGNBQWNFLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkUsSUFBbEMsQ0FETjtBQUVFLG9CQUFRLE1BRlY7QUFBQSxtQ0FJRTtBQUFHLHVCQUFTLEVBQUMsbUJBQWI7QUFBQSx3QkFDR0gsUUFBUSxDQUFDQyxVQUFULENBQW9CRztBQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQTZDSixRQUFRLENBQUNLLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFZRDtBQUNGO0FBQ0YsR0FwREE7QUFvREUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWU3MzdkYjA0YmFkYzZiN2M4NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5cbmNvbnN0IEZvb3RlciA9ICh7IHNlY3Rpb25Gb290ZXIsIHNvY2lhbHMsIGNhdGVnb3JpZXMsIGxhbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyX19uYXZpZ2F0aW9uLWZvb3RlclwiPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeS5hdHRyaWJ1dGVzLmlzSG9tZVBhZ2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvIyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmlnYXRpb24tZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tZm9vdGVyX19pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0IG5hdmlnYXRpb24tZm9vdGVyX19saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvb3Rlcl9fc29jaWFsLWZvb3RlclwiPlxuICAgICAgICAgIHtzb2NpYWxzLm1hcCgoc29jaWFsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic29jaWFsLWZvb3Rlcl9faXRlbVwiIGtleT17c29jaWFsLmlkfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzb2NpYWwuYXR0cmlidXRlcy5saW5rfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1mb290ZXJfX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXtzb2NpYWwuYXR0cmlidXRlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvb3Rlcl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7c2VjdGlvbkZvb3Rlci5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuXG57Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiB7XG4gIGlmIChjYXRlZ29yeS5hdHRyaWJ1dGVzLmlzSG9tZVBhZ2UpIHtcbiAgICBpZiAobGFuZyA9PT0gXCJ1a1wiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPXtgLyMke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9LyMke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfVxuICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXJfX21lbnUtaXRlbVwiPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGxhbmcgPT09IFwidWtcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tZm9vdGVyX19pdGVtXCIga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke2NhdGVnb3J5LmF0dHJpYnV0ZXMuc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1mb290ZXJfX2l0ZW1cIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9LyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9XG4gICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhcl9fbWVudS1pdGVtXCI+XG4gICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH1cbiAgfVxufSl9Il0sInNvdXJjZVJvb3QiOiIifQ==
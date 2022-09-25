self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./pages/article/[slug].js":
/*!*********************************!*\
  !*** ./pages/article/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/image */ "./components/image.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/media */ "./lib/media.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/seo */ "./components/seo.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/nav */ "./components/nav.js");
/* harmony import */ var _components_donations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/donations */ "./components/donations.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\article\\[slug].js",
    _this = undefined;

/* eslint-disable prettier/prettier */
 // import Moment from "react-moment"









var Article = function Article(_ref) {
  var article = _ref.article,
      categories = _ref.categories,
      homepage = _ref.homepage,
      sectionDonation = _ref.sectionDonation,
      sectionContacts = _ref.sectionContacts,
      sectionFooter = _ref.sectionFooter,
      socials = _ref.socials,
      langSwithes = _ref.langSwithes,
      lang = _ref.lang;
  var imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_3__.getStrapiMedia)(article.attributes.image);
  var seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    page: "article-page",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_5__.default, {
      seo: seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_6__.default, {
      homepage: homepage,
      categories: categories,
      langSwithes: langSwithes,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "article-page__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "article-page-item__wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-item__filter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-item__bg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_2__.default, {
            image: article.attributes.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-item__content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "article-page-item__title",
            children: article.attributes.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "article-page-item__desc",
            children: article.attributes.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "uk-grid uk-grid-collapse",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-article uk-width-3-4",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_1___default()), {
            source: article.attributes.content,
            escapeHtml: false
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_donations__WEBPACK_IMPORTED_MODULE_7__.default, {
      sectionContacts: sectionContacts,
      sectionDonation: sectionDonation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_8__.default, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_c = Article;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Article);

var _c;

$RefreshReg$(_c, "Article");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImFydGljbGUiLCJjYXRlZ29yaWVzIiwiaG9tZXBhZ2UiLCJzZWN0aW9uRG9uYXRpb24iLCJzZWN0aW9uQ29udGFjdHMiLCJzZWN0aW9uRm9vdGVyIiwic29jaWFscyIsImxhbmdTd2l0aGVzIiwibGFuZyIsImltYWdlVXJsIiwiZ2V0U3RyYXBpTWVkaWEiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJzZW8iLCJtZXRhVGl0bGUiLCJ0aXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBb0g7QUFBQSxNQUFqSEMsT0FBaUgsUUFBakhBLE9BQWlIO0FBQUEsTUFBeEdDLFVBQXdHLFFBQXhHQSxVQUF3RztBQUFBLE1BQTVGQyxRQUE0RixRQUE1RkEsUUFBNEY7QUFBQSxNQUFsRkMsZUFBa0YsUUFBbEZBLGVBQWtGO0FBQUEsTUFBakVDLGVBQWlFLFFBQWpFQSxlQUFpRTtBQUFBLE1BQWhEQyxhQUFnRCxRQUFoREEsYUFBZ0Q7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNsSSxNQUFNQyxRQUFRLEdBQUdDLDBEQUFjLENBQUNWLE9BQU8sQ0FBQ1csVUFBUixDQUFtQkMsS0FBcEIsQ0FBL0I7QUFFQSxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsYUFBUyxFQUFFZCxPQUFPLENBQUNXLFVBQVIsQ0FBbUJJLEtBRHBCO0FBRVZDLG1CQUFlLEVBQUVoQixPQUFPLENBQUNXLFVBQVIsQ0FBbUJNLFdBRjFCO0FBR1ZDLGNBQVUsRUFBRWxCLE9BQU8sQ0FBQ1csVUFBUixDQUFtQkMsS0FIckI7QUFJVlosV0FBTyxFQUFFO0FBSkMsR0FBWjtBQU9BLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsUUFBSSxFQUFDLGNBQWI7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRWE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxvREFBRDtBQUFLLGNBQVEsRUFBRVgsUUFBZjtBQUF5QixnQkFBVSxFQUFFRCxVQUFyQztBQUFpRCxpQkFBVyxFQUFFTSxXQUE5RDtBQUEyRSxVQUFJLEVBQUVDO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdJO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLGlDQUNFLDhEQUFDLHNEQUFEO0FBQVcsaUJBQUssRUFBRVIsT0FBTyxDQUFDVyxVQUFSLENBQW1CQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQywwQkFBZDtBQUFBLHNCQUNHWixPQUFPLENBQUNXLFVBQVIsQ0FBbUJJO0FBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFNLHFCQUFTLEVBQUMseUJBQWhCO0FBQUEsc0JBQ0dmLE9BQU8sQ0FBQ1csVUFBUixDQUFtQk07QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFlRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsbUNBQWY7QUFBQSxpQ0FDRSw4REFBQyx1REFBRDtBQUNFLGtCQUFNLEVBQUVqQixPQUFPLENBQUNXLFVBQVIsQ0FBbUJRLE9BRDdCO0FBRUUsc0JBQVUsRUFBRTtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBMkJFLDhEQUFDLDBEQUFEO0FBQVcscUJBQWUsRUFBRWYsZUFBNUI7QUFBNkMscUJBQWUsRUFBRUQ7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRixlQTRCRSw4REFBQyx1REFBRDtBQUFRLG1CQUFhLEVBQUVFLGFBQXZCO0FBQXNDLGFBQU8sRUFBRUMsT0FBL0M7QUFBd0QsZ0JBQVUsRUFBRUw7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQTFDRDs7S0FBTUYsTzs7QUFpR04sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWNsZS9bc2x1Z10uMzdhODUwODI5MDJhOTk0ZjY3ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5cbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXG4vLyBpbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vbGliL2FwaVwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ltYWdlXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uLy4uL2xpYi9tZWRpYVwiXG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2XCJcbmltcG9ydCBEb25hdGlvbnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZG9uYXRpb25zXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9vdGVyXCJcblxuY29uc3QgQXJ0aWNsZSA9ICh7IGFydGljbGUsIGNhdGVnb3JpZXMsIGhvbWVwYWdlLCBzZWN0aW9uRG9uYXRpb24sIHNlY3Rpb25Db250YWN0cywgc2VjdGlvbkZvb3Rlciwgc29jaWFscywgbGFuZ1N3aXRoZXMsIGxhbmcgfSkgPT4ge1xuICBjb25zdCBpbWFnZVVybCA9IGdldFN0cmFwaU1lZGlhKGFydGljbGUuYXR0cmlidXRlcy5pbWFnZSlcblxuICBjb25zdCBzZW8gPSB7XG4gICAgbWV0YVRpdGxlOiBhcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGUsXG4gICAgbWV0YURlc2NyaXB0aW9uOiBhcnRpY2xlLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb24sXG4gICAgc2hhcmVJbWFnZTogYXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlLFxuICAgIGFydGljbGU6IHRydWUsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgcGFnZT1cImFydGljbGUtcGFnZVwiPlxuICAgICAgPFNlbyBzZW89e3Nlb30gLz5cbiAgICAgIDxOYXYgaG9tZXBhZ2U9e2hvbWVwYWdlfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBsYW5nU3dpdGhlcz17bGFuZ1N3aXRoZXN9IGxhbmc9e2xhbmd9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlX19jb250ZW50IHVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcGFnZS1pdGVtX193cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcGFnZS1pdGVtX19maWx0ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlLWl0ZW1fX2JnXCI+XG4gICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e2FydGljbGUuYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtaXRlbV9fY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlLWl0ZW1fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlLWl0ZW1fX2Rlc2NcIj5cbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWdyaWQgdWstZ3JpZC1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtYXJ0aWNsZSB1ay13aWR0aC0zLTRcIj5cbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgICBzb3VyY2U9e2FydGljbGUuYXR0cmlidXRlcy5jb250ZW50fVxuICAgICAgICAgICAgICAgIGVzY2FwZUh0bWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPERvbmF0aW9ucyBzZWN0aW9uQ29udGFjdHM9e3NlY3Rpb25Db250YWN0c30gc2VjdGlvbkRvbmF0aW9uPXtzZWN0aW9uRG9uYXRpb259Lz5cbiAgICAgIDxGb290ZXIgc2VjdGlvbkZvb3Rlcj17c2VjdGlvbkZvb3Rlcn0gc29jaWFscz17c29jaWFsc30gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30vPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgbGFuZyA9IFwidWtcIlxuICBjb25zdCBhcnRpY2xlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHsgbG9jYWxlOiBsYW5nLCBmaWVsZHM6IFtcInNsdWdcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBhcnRpY2xlc1Jlcy5kYXRhLm1hcCgoYXJ0aWNsZSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBhcnRpY2xlLmF0dHJpYnV0ZXMuc2x1ZyxcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBsYW5nID0gXCJ1a1wiXG4gIGNvbnN0IGFydGljbGVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwge1xuICAgIGxvY2FsZTogbGFuZyxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICAgIHBvcHVsYXRlOiBcIipcIixcbiAgfSlcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBob21lcGFnZVJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2hvbWVwYWdlXCIsIHtcbiAgICBsb2NhbGU6IGxhbmcsXG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIHNlbzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIGxvZ286eyBwb3B1bGF0ZTogXCIqXCIgfVxuICAgIH0sXG4gIH0pXG4gIGNvbnN0IGRvbmF0aW9uc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NlY3Rpb24tZG9uYXRpb25cIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBjb250YWN0c1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NlY3Rpb24tY29udGFjdFwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IGZvb3RlclJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NlY3Rpb24tZm9vdGVyXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSlcbiAgY29uc3Qgc29jaWFsc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NvY2lhbHNcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBsYW5nU3dpdGNoZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9sYW5nLXN3aXRjaGVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZTogYXJ0aWNsZXNSZXMuZGF0YVswXSxcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMuZGF0YSxcbiAgICAgIGhvbWVwYWdlOiBob21lcGFnZVJlcy5kYXRhLFxuICAgICAgc2VjdGlvbkRvbmF0aW9uOiBkb25hdGlvbnNSZXMuZGF0YSxcbiAgICAgIHNlY3Rpb25Db250YWN0czogY29udGFjdHNSZXMuZGF0YSxcbiAgICAgIHNlY3Rpb25Gb290ZXI6IGZvb3RlclJlcy5kYXRhLFxuICAgICAgc29jaWFscyA6c29jaWFsc1Jlcy5kYXRhLFxuICAgICAgbGFuZ1N3aXRoZXM6IGxhbmdTd2l0Y2hlc1Jlcy5kYXRhLFxuICAgICAgbGFuZzogbGFuZ1xuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlIl0sInNvdXJjZVJvb3QiOiIifQ==
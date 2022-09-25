self["webpackHotUpdate_N_E"]("pages/en/article/[slug]",{

/***/ "./pages/en/article/[slug].js":
/*!************************************!*\
  !*** ./pages/en/article/[slug].js ***!
  \************************************/
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
/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/image */ "./components/image.js");
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/media */ "./lib/media.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/seo */ "./components/seo.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/nav */ "./components/nav.js");
/* harmony import */ var _components_donations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/donations */ "./components/donations.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/footer */ "./components/footer.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\en\\article\\[slug].js",
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
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav__WEBPACK_IMPORTED_MODULE_6__.default, {
      homepage: homepage,
      categories: categories,
      langSwithes: langSwithes,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "article-page__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "article-page-item__wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-item__filter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-item__bg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_2__.default, {
            image: article.attributes.image
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "article-page-item__content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: "article-page-item__title",
            children: article.attributes.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "article-page-item__desc",
            children: article.attributes.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
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
            lineNumber: 47,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_donations__WEBPACK_IMPORTED_MODULE_7__.default, {
      sectionContacts: sectionContacts,
      sectionDonation: sectionDonation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_8__.default, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW4vYXJ0aWNsZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImFydGljbGUiLCJjYXRlZ29yaWVzIiwiaG9tZXBhZ2UiLCJzZWN0aW9uRG9uYXRpb24iLCJzZWN0aW9uQ29udGFjdHMiLCJzZWN0aW9uRm9vdGVyIiwic29jaWFscyIsImxhbmdTd2l0aGVzIiwibGFuZyIsImltYWdlVXJsIiwiZ2V0U3RyYXBpTWVkaWEiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJzZW8iLCJtZXRhVGl0bGUiLCJ0aXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBb0g7QUFBQSxNQUFqSEMsT0FBaUgsUUFBakhBLE9BQWlIO0FBQUEsTUFBeEdDLFVBQXdHLFFBQXhHQSxVQUF3RztBQUFBLE1BQTVGQyxRQUE0RixRQUE1RkEsUUFBNEY7QUFBQSxNQUFsRkMsZUFBa0YsUUFBbEZBLGVBQWtGO0FBQUEsTUFBakVDLGVBQWlFLFFBQWpFQSxlQUFpRTtBQUFBLE1BQWhEQyxhQUFnRCxRQUFoREEsYUFBZ0Q7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNsSSxNQUFNQyxRQUFRLEdBQUdDLDBEQUFjLENBQUNWLE9BQU8sQ0FBQ1csVUFBUixDQUFtQkMsS0FBcEIsQ0FBL0I7QUFFQSxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsYUFBUyxFQUFFZCxPQUFPLENBQUNXLFVBQVIsQ0FBbUJJLEtBRHBCO0FBRVZDLG1CQUFlLEVBQUVoQixPQUFPLENBQUNXLFVBQVIsQ0FBbUJNLFdBRjFCO0FBR1ZDLGNBQVUsRUFBRWxCLE9BQU8sQ0FBQ1csVUFBUixDQUFtQkMsS0FIckI7QUFJVlosV0FBTyxFQUFFO0FBSkMsR0FBWjtBQU9BLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsUUFBSSxFQUFDLGNBQWI7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRWE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxvREFBRDtBQUFLLGNBQVEsRUFBRVgsUUFBZjtBQUF5QixnQkFBVSxFQUFFRCxVQUFyQztBQUFpRCxpQkFBVyxFQUFFTSxXQUE5RDtBQUEyRSxVQUFJLEVBQUVDO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdJO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLGlDQUNFLDhEQUFDLHNEQUFEO0FBQVcsaUJBQUssRUFBRVIsT0FBTyxDQUFDVyxVQUFSLENBQW1CQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQywwQkFBZDtBQUFBLHNCQUNHWixPQUFPLENBQUNXLFVBQVIsQ0FBbUJJO0FBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFNLHFCQUFTLEVBQUMseUJBQWhCO0FBQUEsc0JBQ0dmLE9BQU8sQ0FBQ1csVUFBUixDQUFtQk07QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFlRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsbUNBQWY7QUFBQSxpQ0FDRSw4REFBQyx1REFBRDtBQUNFLGtCQUFNLEVBQUVqQixPQUFPLENBQUNXLFVBQVIsQ0FBbUJRLE9BRDdCO0FBRUUsc0JBQVUsRUFBRTtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBMkJFLDhEQUFDLDBEQUFEO0FBQVcscUJBQWUsRUFBRWYsZUFBNUI7QUFBNkMscUJBQWUsRUFBRUQ7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRixlQTRCRSw4REFBQyx1REFBRDtBQUFRLG1CQUFhLEVBQUVFLGFBQXZCO0FBQXNDLGFBQU8sRUFBRUMsT0FBL0M7QUFBd0QsZ0JBQVUsRUFBRUw7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQTFDRDs7S0FBTUYsTzs7QUFnR04sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW4vYXJ0aWNsZS9bc2x1Z10uMDY5NjMyMmJlZDI5NDMxNTk0YjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5cbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiXG4vLyBpbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2FwaVwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2ltYWdlXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9tZWRpYVwiXG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvbmF2XCJcbmltcG9ydCBEb25hdGlvbnMgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZG9uYXRpb25zXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZm9vdGVyXCJcblxuXG5jb25zdCBBcnRpY2xlID0gKHsgYXJ0aWNsZSwgY2F0ZWdvcmllcywgaG9tZXBhZ2UsIHNlY3Rpb25Eb25hdGlvbiwgc2VjdGlvbkNvbnRhY3RzLCBzZWN0aW9uRm9vdGVyLCBzb2NpYWxzLCBsYW5nU3dpdGhlcywgbGFuZyB9KSA9PiB7XG4gIGNvbnN0IGltYWdlVXJsID0gZ2V0U3RyYXBpTWVkaWEoYXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlKVxuXG4gIGNvbnN0IHNlbyA9IHtcbiAgICBtZXRhVGl0bGU6IGFydGljbGUuYXR0cmlidXRlcy50aXRsZSxcbiAgICBtZXRhRGVzY3JpcHRpb246IGFydGljbGUuYXR0cmlidXRlcy5kZXNjcmlwdGlvbixcbiAgICBzaGFyZUltYWdlOiBhcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2UsXG4gICAgYXJ0aWNsZTogdHJ1ZSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBwYWdlPVwiYXJ0aWNsZS1wYWdlXCI+XG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgPE5hdiBob21lcGFnZT17aG9tZXBhZ2V9IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGxhbmdTd2l0aGVzPXtsYW5nU3dpdGhlc30gbGFuZz17bGFuZ30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2VfX2NvbnRlbnQgdWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlLWl0ZW1fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlLWl0ZW1fX2ZpbHRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtaXRlbV9fYmdcIj5cbiAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcGFnZS1pdGVtX19jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtaXRlbV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtaXRlbV9fZGVzY1wiPlxuICAgICAgICAgICAgICAgIHthcnRpY2xlLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZ3JpZCB1ay1ncmlkLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcGFnZS1hcnRpY2xlIHVrLXdpZHRoLTMtNFwiPlxuICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgIHNvdXJjZT17YXJ0aWNsZS5hdHRyaWJ1dGVzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8RG9uYXRpb25zIHNlY3Rpb25Db250YWN0cz17c2VjdGlvbkNvbnRhY3RzfSBzZWN0aW9uRG9uYXRpb249e3NlY3Rpb25Eb25hdGlvbn0vPlxuICAgICAgPEZvb3RlciBzZWN0aW9uRm9vdGVyPXtzZWN0aW9uRm9vdGVyfSBzb2NpYWxzPXtzb2NpYWxzfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfS8+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBhcnRpY2xlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHsgbG9jYWxlOiBsYW5nLCBmaWVsZHM6IFtcInNsdWdcIl0gfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBhcnRpY2xlc1Jlcy5kYXRhLm1hcCgoYXJ0aWNsZSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBhcnRpY2xlLmF0dHJpYnV0ZXMuc2x1ZyxcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBsYW5nID0gXCJlblwiXG4gIGNvbnN0IGFydGljbGVzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwge1xuICAgIGxvY2FsZTogbGFuZyxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICAgIHBvcHVsYXRlOiBcIipcIixcbiAgfSlcbiAgY29uc3QgY2F0ZWdvcmllc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBob21lcGFnZVJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2hvbWVwYWdlXCIsIHtcbiAgICBsb2NhbGU6IGxhbmcsXG4gICAgcG9wdWxhdGU6IHtcbiAgICAgIHNlbzogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgIGxvZ286eyBwb3B1bGF0ZTogXCIqXCIgfVxuICAgIH0sXG4gIH0pXG4gIGNvbnN0IGRvbmF0aW9uc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NlY3Rpb24tZG9uYXRpb25cIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBjb250YWN0c1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NlY3Rpb24tY29udGFjdFwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IGZvb3RlclJlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NlY3Rpb24tZm9vdGVyXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSlcbiAgY29uc3Qgc29jaWFsc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL3NvY2lhbHNcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBsYW5nU3dpdGNoZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9sYW5nLXN3aXRjaGVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXJ0aWNsZTogYXJ0aWNsZXNSZXMuZGF0YVswXSxcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMuZGF0YSxcbiAgICAgIGhvbWVwYWdlOiBob21lcGFnZVJlcy5kYXRhLFxuICAgICAgc2VjdGlvbkRvbmF0aW9uOiBkb25hdGlvbnNSZXMuZGF0YSxcbiAgICAgIHNlY3Rpb25Db250YWN0czogY29udGFjdHNSZXMuZGF0YSxcbiAgICAgIHNlY3Rpb25Gb290ZXI6IGZvb3RlclJlcy5kYXRhLFxuICAgICAgc29jaWFscyA6c29jaWFsc1Jlcy5kYXRhLFxuICAgICAgbGFuZ1N3aXRoZXM6IGxhbmdTd2l0Y2hlc1Jlcy5kYXRhLFxuICAgICAgbGFuZzogbGFuZ1xuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlIl0sInNvdXJjZVJvb3QiOiIifQ==
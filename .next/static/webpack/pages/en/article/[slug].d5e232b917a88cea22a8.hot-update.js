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
      categories: categories,
      lang: lang
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW4vYXJ0aWNsZS9bc2x1Z10uanMiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImFydGljbGUiLCJjYXRlZ29yaWVzIiwiaG9tZXBhZ2UiLCJzZWN0aW9uRG9uYXRpb24iLCJzZWN0aW9uQ29udGFjdHMiLCJzZWN0aW9uRm9vdGVyIiwic29jaWFscyIsImxhbmdTd2l0aGVzIiwibGFuZyIsImltYWdlVXJsIiwiZ2V0U3RyYXBpTWVkaWEiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJzZW8iLCJtZXRhVGl0bGUiLCJ0aXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2hhcmVJbWFnZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBb0g7QUFBQSxNQUFqSEMsT0FBaUgsUUFBakhBLE9BQWlIO0FBQUEsTUFBeEdDLFVBQXdHLFFBQXhHQSxVQUF3RztBQUFBLE1BQTVGQyxRQUE0RixRQUE1RkEsUUFBNEY7QUFBQSxNQUFsRkMsZUFBa0YsUUFBbEZBLGVBQWtGO0FBQUEsTUFBakVDLGVBQWlFLFFBQWpFQSxlQUFpRTtBQUFBLE1BQWhEQyxhQUFnRCxRQUFoREEsYUFBZ0Q7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLFdBQXdCLFFBQXhCQSxXQUF3QjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNsSSxNQUFNQyxRQUFRLEdBQUdDLDBEQUFjLENBQUNWLE9BQU8sQ0FBQ1csVUFBUixDQUFtQkMsS0FBcEIsQ0FBL0I7QUFFQSxNQUFNQyxHQUFHLEdBQUc7QUFDVkMsYUFBUyxFQUFFZCxPQUFPLENBQUNXLFVBQVIsQ0FBbUJJLEtBRHBCO0FBRVZDLG1CQUFlLEVBQUVoQixPQUFPLENBQUNXLFVBQVIsQ0FBbUJNLFdBRjFCO0FBR1ZDLGNBQVUsRUFBRWxCLE9BQU8sQ0FBQ1csVUFBUixDQUFtQkMsS0FIckI7QUFJVlosV0FBTyxFQUFFO0FBSkMsR0FBWjtBQU9BLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsUUFBSSxFQUFDLGNBQWI7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRWE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyxvREFBRDtBQUFLLGNBQVEsRUFBRVgsUUFBZjtBQUF5QixnQkFBVSxFQUFFRCxVQUFyQztBQUFpRCxpQkFBVyxFQUFFTSxXQUE5RDtBQUEyRSxVQUFJLEVBQUVDO0FBQWpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdJO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLGlDQUNFLDhEQUFDLHNEQUFEO0FBQVcsaUJBQUssRUFBRVIsT0FBTyxDQUFDVyxVQUFSLENBQW1CQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFO0FBQUssbUJBQVMsRUFBQyw0QkFBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQywwQkFBZDtBQUFBLHNCQUNHWixPQUFPLENBQUNXLFVBQVIsQ0FBbUJJO0FBRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFNLHFCQUFTLEVBQUMseUJBQWhCO0FBQUEsc0JBQ0dmLE9BQU8sQ0FBQ1csVUFBUixDQUFtQk07QUFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFlRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsbUNBQWY7QUFBQSxpQ0FDRSw4REFBQyx1REFBRDtBQUNFLGtCQUFNLEVBQUVqQixPQUFPLENBQUNXLFVBQVIsQ0FBbUJRLE9BRDdCO0FBRUUsc0JBQVUsRUFBRTtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhKLGVBMkJFLDhEQUFDLDBEQUFEO0FBQVcscUJBQWUsRUFBRWYsZUFBNUI7QUFBNkMscUJBQWUsRUFBRUQ7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCRixlQTRCRSw4REFBQyx1REFBRDtBQUFRLG1CQUFhLEVBQUVFLGFBQXZCO0FBQXNDLGFBQU8sRUFBRUMsT0FBL0M7QUFBd0QsZ0JBQVUsRUFBRUwsVUFBcEU7QUFBZ0YsVUFBSSxFQUFFTztBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBMUNEOztLQUFNVCxPOztBQStGTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbi9hcnRpY2xlL1tzbHVnXS5kNWUyMzJiOTE3YTg4Y2VhMjJhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJldHRpZXIvcHJldHRpZXIgKi9cblxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCJcbi8vIGltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi8uLi9saWIvYXBpXCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaW1hZ2VcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vLi4vLi4vbGliL21lZGlhXCJcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9uYXZcIlxuaW1wb3J0IERvbmF0aW9ucyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kb25hdGlvbnNcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9mb290ZXJcIlxuXG5cbmNvbnN0IEFydGljbGUgPSAoeyBhcnRpY2xlLCBjYXRlZ29yaWVzLCBob21lcGFnZSwgc2VjdGlvbkRvbmF0aW9uLCBzZWN0aW9uQ29udGFjdHMsIHNlY3Rpb25Gb290ZXIsIHNvY2lhbHMsIGxhbmdTd2l0aGVzLCBsYW5nIH0pID0+IHtcbiAgY29uc3QgaW1hZ2VVcmwgPSBnZXRTdHJhcGlNZWRpYShhcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2UpXG5cbiAgY29uc3Qgc2VvID0ge1xuICAgIG1ldGFUaXRsZTogYXJ0aWNsZS5hdHRyaWJ1dGVzLnRpdGxlLFxuICAgIG1ldGFEZXNjcmlwdGlvbjogYXJ0aWNsZS5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uLFxuICAgIHNoYXJlSW1hZ2U6IGFydGljbGUuYXR0cmlidXRlcy5pbWFnZSxcbiAgICBhcnRpY2xlOiB0cnVlLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2U9XCJhcnRpY2xlLXBhZ2VcIj5cbiAgICAgIDxTZW8gc2VvPXtzZW99IC8+XG4gICAgICA8TmF2IGhvbWVwYWdlPXtob21lcGFnZX0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gbGFuZ1N3aXRoZXM9e2xhbmdTd2l0aGVzfSBsYW5nPXtsYW5nfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcGFnZV9fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtaXRlbV9fd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXBhZ2UtaXRlbV9fZmlsdGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcGFnZS1pdGVtX19iZ1wiPlxuICAgICAgICAgICAgICA8TmV4dEltYWdlIGltYWdlPXthcnRpY2xlLmF0dHJpYnV0ZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlLWl0ZW1fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImFydGljbGUtcGFnZS1pdGVtX190aXRsZVwiPlxuICAgICAgICAgICAgICAgIHthcnRpY2xlLmF0dHJpYnV0ZXMudGl0bGV9XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFydGljbGUtcGFnZS1pdGVtX19kZXNjXCI+XG4gICAgICAgICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1ncmlkIHVrLWdyaWQtY29sbGFwc2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wYWdlLWFydGljbGUgdWstd2lkdGgtMy00XCI+XG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICAgICAgc291cmNlPXthcnRpY2xlLmF0dHJpYnV0ZXMuY29udGVudH1cbiAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxEb25hdGlvbnMgc2VjdGlvbkNvbnRhY3RzPXtzZWN0aW9uQ29udGFjdHN9IHNlY3Rpb25Eb25hdGlvbj17c2VjdGlvbkRvbmF0aW9ufS8+XG4gICAgICA8Rm9vdGVyIHNlY3Rpb25Gb290ZXI9e3NlY3Rpb25Gb290ZXJ9IHNvY2lhbHM9e3NvY2lhbHN9IGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9IGxhbmc9e2xhbmd9Lz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGxhbmcgPSBcImVuXCJcbiAgY29uc3QgYXJ0aWNsZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9hcnRpY2xlc1wiLCB7IGxvY2FsZTogbGFuZywgZmllbGRzOiBbXCJzbHVnXCJdIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogYXJ0aWNsZXNSZXMuZGF0YS5tYXAoKGFydGljbGUpID0+ICh7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogYXJ0aWNsZS5hdHRyaWJ1dGVzLnNsdWcsXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgbGFuZyA9IFwiZW5cIlxuICBjb25zdCBhcnRpY2xlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2FydGljbGVzXCIsIHtcbiAgICBsb2NhbGU6IGxhbmcsXG4gICAgZmlsdGVyczoge1xuICAgICAgc2x1ZzogcGFyYW1zLnNsdWcsXG4gICAgfSxcbiAgICBwb3B1bGF0ZTogXCIqXCIsXG4gIH0pXG4gIGNvbnN0IGNhdGVnb3JpZXNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSlcbiAgY29uc3QgaG9tZXBhZ2VSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9ob21lcGFnZVwiLCB7XG4gICAgbG9jYWxlOiBsYW5nLFxuICAgIHBvcHVsYXRlOiB7XG4gICAgICBzZW86IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICBsb2dvOnsgcG9wdWxhdGU6IFwiKlwiIH1cbiAgICB9LFxuICB9KVxuICBjb25zdCBkb25hdGlvbnNSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9zZWN0aW9uLWRvbmF0aW9uXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSlcbiAgY29uc3QgZm9vdGVyUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvc2VjdGlvbi1mb290ZXJcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiBcIipcIiB9KVxuICBjb25zdCBzb2NpYWxzUmVzID0gYXdhaXQgZmV0Y2hBUEkoXCIvc29jaWFsc1wiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pXG4gIGNvbnN0IGxhbmdTd2l0Y2hlc1JlcyA9IGF3YWl0IGZldGNoQVBJKFwiL2xhbmctc3dpdGNoZXNcIiwgeyBwb3B1bGF0ZTogXCIqXCIgfSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhcnRpY2xlOiBhcnRpY2xlc1Jlcy5kYXRhWzBdLFxuICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1Jlcy5kYXRhLFxuICAgICAgaG9tZXBhZ2U6IGhvbWVwYWdlUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uRG9uYXRpb246IGRvbmF0aW9uc1Jlcy5kYXRhLFxuICAgICAgc2VjdGlvbkZvb3RlcjogZm9vdGVyUmVzLmRhdGEsXG4gICAgICBzb2NpYWxzIDpzb2NpYWxzUmVzLmRhdGEsXG4gICAgICBsYW5nU3dpdGhlczogbGFuZ1N3aXRjaGVzUmVzLmRhdGEsXG4gICAgICBsYW5nOiBsYW5nXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGUiXSwic291cmNlUm9vdCI6IiJ9
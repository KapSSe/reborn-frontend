self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/scrollTop.js":
/*!*********************************!*\
  !*** ./components/scrollTop.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\scrollTop.js",
    _this = undefined;



var ScrollTop = function ScrollTop(_ref) {
  var projects = _ref.projects;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: "scroll-top",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
      image: projects.attributes.iconNext
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = ScrollTop;
/* harmony default export */ __webpack_exports__["default"] = (ScrollTop);

var _c;

$RefreshReg$(_c, "ScrollTop");

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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./components/seo.js");
/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/welcome */ "./components/welcome.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about */ "./components/about.js");
/* harmony import */ var _components_mission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/mission */ "./components/mission.js");
/* harmony import */ var _components_partners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/partners */ "./components/partners.js");
/* harmony import */ var _components_donations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/donations */ "./components/donations.js");
/* harmony import */ var _components_win__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/win */ "./components/win.js");
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/contacts */ "./components/contacts.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/articles */ "./components/articles.js");
/* harmony import */ var _components_scrollTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/scrollTop */ "./components/scrollTop.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\index.js",
    _this = undefined;

/* eslint-disable prettier/prettier */














var Home = function Home(_ref) {
  var langSwithes = _ref.langSwithes,
      about = _ref.about,
      categories = _ref.categories,
      homepage = _ref.homepage,
      welcome = _ref.welcome,
      sectionMission = _ref.sectionMission,
      missions = _ref.missions,
      missionSlides = _ref.missionSlides,
      sectionPartner = _ref.sectionPartner,
      partners = _ref.partners,
      sectionWin = _ref.sectionWin,
      sectionContacts = _ref.sectionContacts,
      sectionFooter = _ref.sectionFooter,
      socials = _ref.socials,
      sectionDonation = _ref.sectionDonation,
      articles = _ref.articles,
      projects = _ref.projects,
      lang = _ref.lang;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    page: "home-page",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_3__.default, {
      seo: homepage.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_welcome__WEBPACK_IMPORTED_MODULE_4__.default, {
      welcome: welcome,
      homepage: homepage,
      categories: categories,
      sectionDonation: sectionDonation,
      langSwithes: langSwithes,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about__WEBPACK_IMPORTED_MODULE_5__.default, {
      about: about
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mission__WEBPACK_IMPORTED_MODULE_6__.default, {
      sectionMission: sectionMission,
      missions: missions,
      missionSlides: missionSlides,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_12__.default, {
      articles: articles,
      categories: categories,
      projects: projects,
      missions: missions,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_partners__WEBPACK_IMPORTED_MODULE_7__.default, {
      sectionPartner: sectionPartner,
      partners: partners
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_donations__WEBPACK_IMPORTED_MODULE_8__.default, {
      sectionContacts: sectionContacts,
      sectionDonation: sectionDonation,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_win__WEBPACK_IMPORTED_MODULE_9__.default, {
      sectionWin: sectionWin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contacts__WEBPACK_IMPORTED_MODULE_10__.default, {
      sectionContacts: sectionContacts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_11__.default, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_scrollTop__WEBPACK_IMPORTED_MODULE_13__.default, {
      projects: projects
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY3JvbGxUb3AuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNjcm9sbFRvcCIsInByb2plY3RzIiwiYXR0cmlidXRlcyIsImljb25OZXh0IiwiSG9tZSIsImxhbmdTd2l0aGVzIiwiYWJvdXQiLCJjYXRlZ29yaWVzIiwiaG9tZXBhZ2UiLCJ3ZWxjb21lIiwic2VjdGlvbk1pc3Npb24iLCJtaXNzaW9ucyIsIm1pc3Npb25TbGlkZXMiLCJzZWN0aW9uUGFydG5lciIsInBhcnRuZXJzIiwic2VjdGlvbldpbiIsInNlY3Rpb25Db250YWN0cyIsInNlY3Rpb25Gb290ZXIiLCJzb2NpYWxzIiwic2VjdGlvbkRvbmF0aW9uIiwiYXJ0aWNsZXMiLCJsYW5nIiwic2VvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbEMsc0JBQ0U7QUFBUSxhQUFTLEVBQUMsWUFBbEI7QUFBQSwyQkFDRSw4REFBQywyQ0FBRDtBQUFXLFdBQUssRUFBRUEsUUFBUSxDQUFDQyxVQUFULENBQW9CQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUgsUztBQVFOLCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQXFCTjtBQUFBLE1BbkJDQyxX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LjU4ZDljODc1MDZkMjdjMWY2MjA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcblxuY29uc3QgU2Nyb2xsVG9wID0gKHsgcHJvamVjdHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2Nyb2xsLXRvcFwiPlxuICAgICAgPE5leHRJbWFnZSBpbWFnZT17cHJvamVjdHMuYXR0cmlidXRlcy5pY29uTmV4dH0gLz5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUb3BcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCJcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VvXCJcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuLi9jb21wb25lbnRzL3dlbGNvbWVcIlxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2Fib3V0XCJcbmltcG9ydCBNaXNzaW9uIGZyb20gXCIuLi9jb21wb25lbnRzL21pc3Npb25cIlxuaW1wb3J0IFBhcnRuZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcnRuZXJzXCJcbmltcG9ydCBEb25hdGlvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG9uYXRpb25zXCJcbmltcG9ydCBXaW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvd2luXCJcbmltcG9ydCBDb250YWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0c1wiXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiXG5pbXBvcnQgQXJ0aWNsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXJ0aWNsZXNcIlxuaW1wb3J0IFNjcm9sbFRvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9zY3JvbGxUb3BcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5cbmNvbnN0IEhvbWUgPSAoXG4gICAgICB7ICBcbiAgICAgICAgbGFuZ1N3aXRoZXMsXG4gICAgICAgIGFib3V0LFxuICAgICAgICBjYXRlZ29yaWVzLFxuICAgICAgICBob21lcGFnZSxcbiAgICAgICAgd2VsY29tZSxcbiAgICAgICAgc2VjdGlvbk1pc3Npb24sXG4gICAgICAgIG1pc3Npb25zLFxuICAgICAgICBtaXNzaW9uU2xpZGVzLFxuICAgICAgICBzZWN0aW9uUGFydG5lcixcbiAgICAgICAgcGFydG5lcnMsXG4gICAgICAgIHNlY3Rpb25XaW4sXG4gICAgICAgIHNlY3Rpb25Db250YWN0cyxcbiAgICAgICAgc2VjdGlvbkZvb3RlcixcbiAgICAgICAgc29jaWFscyxcbiAgICAgICAgc2VjdGlvbkRvbmF0aW9uLFxuICAgICAgICBhcnRpY2xlcyxcbiAgICAgICAgcHJvamVjdHMsXG4gICAgICAgIGxhbmdcbiAgICAgIH1cbiAgKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2U9XCJob21lLXBhZ2VcIj5cbiAgICAgIDxTZW8gc2VvPXtob21lcGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cbiAgICAgIDxXZWxjb21lIHdlbGNvbWU9e3dlbGNvbWV9IGhvbWVwYWdlPXtob21lcGFnZX0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gc2VjdGlvbkRvbmF0aW9uPXtzZWN0aW9uRG9uYXRpb259IGxhbmdTd2l0aGVzPXtsYW5nU3dpdGhlc30gbGFuZz17bGFuZ30vPlxuICAgICAgPEFib3V0IGFib3V0PXthYm91dH0vPlxuICAgICAgPE1pc3Npb24gc2VjdGlvbk1pc3Npb249e3NlY3Rpb25NaXNzaW9ufSBtaXNzaW9ucz17bWlzc2lvbnN9IG1pc3Npb25TbGlkZXM9e21pc3Npb25TbGlkZXN9IGxhbmc9e2xhbmd9IC8+XG4gICAgICA8QXJ0aWNsZXMgYXJ0aWNsZXM9e2FydGljbGVzfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBwcm9qZWN0cz17cHJvamVjdHN9IG1pc3Npb25zPXttaXNzaW9uc30gbGFuZz17bGFuZ30vPlxuICAgICAgPFBhcnRuZXJzIHNlY3Rpb25QYXJ0bmVyPXtzZWN0aW9uUGFydG5lcn0gcGFydG5lcnM9e3BhcnRuZXJzfS8+XG4gICAgICA8RG9uYXRpb25zIHNlY3Rpb25Db250YWN0cz17c2VjdGlvbkNvbnRhY3RzfSBzZWN0aW9uRG9uYXRpb249e3NlY3Rpb25Eb25hdGlvbn0gbGFuZz17bGFuZ30vPlxuICAgICAgPFdpbiBzZWN0aW9uV2luPXtzZWN0aW9uV2lufS8+XG4gICAgICA8Q29udGFjdHMgc2VjdGlvbkNvbnRhY3RzPXtzZWN0aW9uQ29udGFjdHN9Lz5cbiAgICAgIDxGb290ZXIgc2VjdGlvbkZvb3Rlcj17c2VjdGlvbkZvb3Rlcn0gc29jaWFscz17c29jaWFsc30gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gbGFuZz17bGFuZ30vPlxuICAgICAgPFNjcm9sbFRvcCBwcm9qZWN0cz17cHJvamVjdHN9Lz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGxhbmcgPSBcInVrXCJcbiAgLy8gUnVuIEFQSSBjYWxscyBpbiBwYXJhbGxlbFxuICBjb25zdCBbXG4gICAgICBhcnRpY2xlc1JlcyxcbiAgICAgIHNlY3Rpb25Qcm9qZWN0UmVzLFxuICAgICAgc2VjdGlvbkRvbmF0aW9uUmVzLFxuICAgICAgc2VjdGlvblNvY2lhbHNSZXMsXG4gICAgICBzZWN0aW9uRm9vdGVyUmVzLFxuICAgICAgc2VjdGlvbkNvbnRhY3RzUmVzLFxuICAgICAgc2VjdGlvbldpblJlcyxcbiAgICAgIHNlY3Rpb25QYXJ0bmVyUmVzLFxuICAgICAgcGFydG5lcnNSZXMsXG4gICAgICBzZWN0aW9uTWlzc2lvblJlcyxcbiAgICAgIG1pc3Npb25zUmVzLFxuICAgICAgbWlzc2lvblNsaWRlc1JlcyxcbiAgICAgIGNhdGVnb3JpZXNSZXMsXG4gICAgICB3ZWxjb21lUmVzLFxuICAgICAgYWJvdXRSZXMsXG4gICAgICBsYW5nU3dpdGNoZXNSZXMsXG4gICAgICBob21lcGFnZVJlcyxcbiAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwgeyAgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLXByb2plY3RcIiwgeyBsb2NhbGU6IGxhbmcsICBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLWRvbmF0aW9uXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zb2NpYWxzXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLWZvb3RlclwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvc2VjdGlvbi1jb250YWN0XCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLXdpblwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvc2VjdGlvbi1wYXJ0bmVyXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9wYXJ0bmVyc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL3NlY3Rpb24tbWlzc2lvblwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvbWlzc2lvbnNcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiB7XG4gICAgICAgIHRpdGxlOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICAgaW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICB9IH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvbWlzc2lvbnMtc2xpZGVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvc2VjdGlvbi13ZWxjb21lXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLWFib3V0XCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9sYW5nLXN3aXRjaGVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvaG9tZXBhZ2VcIiwge1xuICAgICAgICBsb2NhbGU6IGxhbmcsXG4gICAgICAgIHBvcHVsYXRlOiB7XG4gICAgICAgICAgc2VvOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICAgIGxvZ286IHsgcG9wdWxhdGU6IFwiKlwifVxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhcnRpY2xlczogYXJ0aWNsZXNSZXMuZGF0YSxcbiAgICAgIHByb2plY3RzOiBzZWN0aW9uUHJvamVjdFJlcy5kYXRhLFxuICAgICAgc2VjdGlvbkRvbmF0aW9uOiBzZWN0aW9uRG9uYXRpb25SZXMuZGF0YSxcbiAgICAgIHNvY2lhbHM6IHNlY3Rpb25Tb2NpYWxzUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uRm9vdGVyOiBzZWN0aW9uRm9vdGVyUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uQ29udGFjdHM6IHNlY3Rpb25Db250YWN0c1Jlcy5kYXRhLFxuICAgICAgc2VjdGlvbldpbjogc2VjdGlvbldpblJlcy5kYXRhLFxuICAgICAgc2VjdGlvblBhcnRuZXI6IHNlY3Rpb25QYXJ0bmVyUmVzLmRhdGEsXG4gICAgICBwYXJ0bmVyczogcGFydG5lcnNSZXMuZGF0YSxcbiAgICAgIHNlY3Rpb25NaXNzaW9uOiBzZWN0aW9uTWlzc2lvblJlcy5kYXRhLFxuICAgICAgbWlzc2lvbnM6IG1pc3Npb25zUmVzLmRhdGEsXG4gICAgICBtaXNzaW9uU2xpZGVzOiBtaXNzaW9uU2xpZGVzUmVzLmRhdGEsXG4gICAgICBhYm91dDogYWJvdXRSZXMuZGF0YSxcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMuZGF0YSxcbiAgICAgIGxhbmdTd2l0aGVzOiBsYW5nU3dpdGNoZXNSZXMuZGF0YSxcbiAgICAgIGhvbWVwYWdlOiBob21lcGFnZVJlcy5kYXRhLFxuICAgICAgd2VsY29tZTogd2VsY29tZVJlcy5kYXRhLFxuICAgICAgbGFuZzogbGFuZ1xuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9
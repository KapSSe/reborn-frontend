self["webpackHotUpdate_N_E"]("pages/team",{

/***/ "./components/team.js":
/*!****************************!*\
  !*** ./components/team.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\team.js",
    _this = undefined,
    _s = $RefreshSig$();




var Team = function Team(_ref) {
  _s();

  var sectionTeam = _ref.sectionTeam,
      team = _ref.team;
  var selectedTeam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "team",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "team__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "team-header__heading team-header__heading_active",
          children: sectionTeam.attributes.titleTeam
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "team-header__heading",
          children: sectionTeam.attributes.titleStructure
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-members uk-grid uk-child-width-1-2",
        children: team.map(function (teamMember, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "team-member",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "team-member__image",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                image: teamMember.attributes.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "team-member__title",
              children: teamMember.attributes.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "team-member__description",
              children: teamMember.attributes.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_s(Team, "jPnY/Ufe0sSAseYFEqkQtornaww=");

_c = Team;
/* harmony default export */ __webpack_exports__["default"] = (Team);

var _c;

$RefreshReg$(_c, "Team");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWFtLmpzIl0sIm5hbWVzIjpbIlRlYW0iLCJzZWN0aW9uVGVhbSIsInRlYW0iLCJzZWxlY3RlZFRlYW0iLCJ1c2VTdGF0ZSIsImF0dHJpYnV0ZXMiLCJ0aXRsZVRlYW0iLCJ0aXRsZVN0cnVjdHVyZSIsIm1hcCIsInRlYW1NZW1iZXIiLCJpIiwiaW1hZ2UiLCJuYW1lIiwiZGVzYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsV0FBd0IsUUFBeEJBLFdBQXdCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3RDLE1BQU1DLFlBQVksR0FBR0MsK0NBQVEsQ0FBQyxJQUFELENBQTdCO0FBQ0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUMsTUFBbkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywrQ0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLGtEQUFkO0FBQUEsb0JBQ0dILFdBQVcsQ0FBQ0ksVUFBWixDQUF1QkM7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUksbUJBQVMsRUFBQyxzQkFBZDtBQUFBLG9CQUNHTCxXQUFXLENBQUNJLFVBQVosQ0FBdUJFO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFTRTtBQUFLLGlCQUFTLEVBQUMseUNBQWY7QUFBQSxrQkFDR0wsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsVUFBRCxFQUFhQyxDQUFiLEVBQW1CO0FBQzNCLDhCQUNFO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLG9CQUFmO0FBQUEscUNBQ0UsOERBQUMsMkNBQUQ7QUFBVyxxQkFBSyxFQUFFRCxVQUFVLENBQUNKLFVBQVgsQ0FBc0JNO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBSSx1QkFBUyxFQUFDLG9CQUFkO0FBQUEsd0JBQ0dGLFVBQVUsQ0FBQ0osVUFBWCxDQUFzQk87QUFEekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQU9FO0FBQUcsdUJBQVMsRUFBQywwQkFBYjtBQUFBLHdCQUNHSCxVQUFVLENBQUNKLFVBQVgsQ0FBc0JRO0FBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQSxhQUFrQ0gsQ0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWFELFNBZEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBakNEOztHQUFNVixJOztLQUFBQSxJO0FBbUNOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW0uMTFlYzNjMmQ0MDgwMTY3ZDc2NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4vaW1hZ2VcIlxuXG5jb25zdCBUZWFtID0gKHsgc2VjdGlvblRlYW0sIHRlYW0gfSkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFRlYW0gPSB1c2VTdGF0ZSh0cnVlKVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlYW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbV9fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJfX2hlYWRpbmcgdGVhbS1oZWFkZXJfX2hlYWRpbmdfYWN0aXZlXCI+XG4gICAgICAgICAgICB7c2VjdGlvblRlYW0uYXR0cmlidXRlcy50aXRsZVRlYW19XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJfX2hlYWRpbmdcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uVGVhbS5hdHRyaWJ1dGVzLnRpdGxlU3RydWN0dXJlfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVycyB1ay1ncmlkIHVrLWNoaWxkLXdpZHRoLTEtMlwiPlxuICAgICAgICAgIHt0ZWFtLm1hcCgodGVhbU1lbWJlciwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlclwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlcl9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3RlYW1NZW1iZXIuYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXJfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7dGVhbU1lbWJlci5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlcl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHt0ZWFtTWVtYmVyLmF0dHJpYnV0ZXMuZGVzY31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZWFtXG4iXSwic291cmNlUm9vdCI6IiJ9
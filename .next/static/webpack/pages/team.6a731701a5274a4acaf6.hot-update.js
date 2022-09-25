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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\team.js",
    _this = undefined,
    _s = $RefreshSig$();



var Team = function Team(_ref) {
  _s();

  var sectionTeam = _ref.sectionTeam,
      team = _ref.team;
  var selectedTeam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(true);
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
          lineNumber: 9,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "team-header__heading",
          children: sectionTeam.attributes.titleStructure
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-members uk-grid uk-child-width-1-2",
        children: team.map(function (teamMember, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "uk-width-1-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mission-card",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "mission-card__image",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NextImage, {
                  image: missionItem.attributes.image
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                className: "mission-card__title",
                children: missionItem.attributes.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "mission-card__description",
                children: missionItem.attributes.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }, _this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
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

_s(Team, "E5BDxKQnTLndHW6sNUtHOM0WZw8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWFtLmpzIl0sIm5hbWVzIjpbIlRlYW0iLCJzZWN0aW9uVGVhbSIsInRlYW0iLCJzZWxlY3RlZFRlYW0iLCJ1c2VSZWYiLCJhdHRyaWJ1dGVzIiwidGl0bGVUZWFtIiwidGl0bGVTdHJ1Y3R1cmUiLCJtYXAiLCJ0ZWFtTWVtYmVyIiwiaSIsIm1pc3Npb25JdGVtIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDdEMsTUFBTUMsWUFBWSxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBM0I7QUFDQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxNQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLCtDQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsa0RBQWQ7QUFBQSxvQkFDR0gsV0FBVyxDQUFDSSxVQUFaLENBQXVCQztBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSSxtQkFBUyxFQUFDLHNCQUFkO0FBQUEsb0JBQ0dMLFdBQVcsQ0FBQ0ksVUFBWixDQUF1QkU7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBLGtCQUNHTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDQyxVQUFELEVBQWFDLENBQWIsRUFBbUI7QUFDM0IsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxxQkFBZjtBQUFBLHVDQUNFLDhEQUFDLFNBQUQ7QUFBVyx1QkFBSyxFQUFFQyxXQUFXLENBQUNOLFVBQVosQ0FBdUJPO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBSSx5QkFBUyxFQUFDLHFCQUFkO0FBQUEsMEJBQ0dELFdBQVcsQ0FBQ04sVUFBWixDQUF1QlE7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQU9FO0FBQUcseUJBQVMsRUFBQywyQkFBYjtBQUFBLDBCQUNHRixXQUFXLENBQUNOLFVBQVosQ0FBdUJTO0FBRDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBbUNKLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFlRCxTQWhCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQ0QsQ0FuQ0Q7O0dBQU1WLEk7O0tBQUFBLEk7QUFxQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVhbS42YTczMTcwMWE1Mjc0YTRhY2FmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IFRlYW0gPSAoeyBzZWN0aW9uVGVhbSwgdGVhbSB9KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkVGVhbSA9IHVzZVJlZih0cnVlKVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlYW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbV9fY29udGVudCB1ay1jb250YWluZXIgdWstY29udGFpbmVyLWxhcmdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJfX2hlYWRpbmcgdGVhbS1oZWFkZXJfX2hlYWRpbmdfYWN0aXZlXCI+XG4gICAgICAgICAgICB7c2VjdGlvblRlYW0uYXR0cmlidXRlcy50aXRsZVRlYW19XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGVhbS1oZWFkZXJfX2hlYWRpbmdcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uVGVhbS5hdHRyaWJ1dGVzLnRpdGxlU3RydWN0dXJlfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVycyB1ay1ncmlkIHVrLWNoaWxkLXdpZHRoLTEtMlwiPlxuICAgICAgICAgIHt0ZWFtLm1hcCgodGVhbU1lbWJlciwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC0xLTNcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlzc2lvbi1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pc3Npb24tY2FyZF9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17bWlzc2lvbkl0ZW0uYXR0cmlidXRlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1pc3Npb24tY2FyZF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge21pc3Npb25JdGVtLmF0dHJpYnV0ZXMudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWlzc2lvbi1jYXJkX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICB7bWlzc2lvbkl0ZW0uYXR0cmlidXRlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1cbiJdLCJzb3VyY2VSb290IjoiIn0=